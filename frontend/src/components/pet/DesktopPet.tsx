"use client";
import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  CSSProperties,
} from "react";

// ── Constants ─────────────────────────────────────────────
const FRAME_SIZE = 128;
const SCALE = 0.65;
const PET_SIZE = Math.round(FRAME_SIZE * SCALE);
const CURSOR_OFFSET = 20;
const WALK_SPEED = 2.2;
const RUN_SPEED = 4.5;
const RUN_DIST = 220;
const STOP_DISTANCE = 10;
const SMOOTHING = 0.12;
const SLEEP_DELAY = 4000;
const IDLE_DEAD_ZONE = 5;
const FLIP_HYSTERESIS = 10;
const STATE_COOLDOWN_MS = 120;
const IDLE_ENTER_THRESHOLD = STOP_DISTANCE;
const IDLE_EXIT_THRESHOLD = STOP_DISTANCE + 15;

const STATES = {
  idle: { frames: 7, fps: 8, loop: true },
  walk: { frames: 7, fps: 10, loop: true },
  run: { frames: 8, fps: 14, loop: true },
  attack: { frames: 3, fps: 10, loop: false },
  hurt: { frames: 3, fps: 8, loop: false },
  dead: { frames: 4, fps: 6, loop: false },
  recharge: { frames: 7, fps: 8, loop: true },
  shot1: { frames: 4, fps: 10, loop: false },
  shot2: { frames: 4, fps: 10, loop: false },
  grenade: { frames: 9, fps: 12, loop: false },
} as const;

type PetState = keyof typeof STATES;
const CLICK_ACTIONS: PetState[] = ["attack", "shot1", "shot2", "grenade"];
const MOVEMENT_STATES = new Set<PetState>(["idle", "walk", "run", "recharge"]);

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

// ── Component ─────────────────────────────────────────────
export default function DesktopPet() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);

  // Physics Refs
  const pos = useRef({ x: 0, y: 0 });
  const renderPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  // Logic Refs
  const stateRef = useRef<PetState>("idle");
  const domStateRef = useRef<PetState>("idle");
  const flipRef = useRef(false);
  const lockedRef = useRef(false);
  const lastStateChangeTime = useRef(0);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickCount = useRef(0);
  const viewport = useRef({ width: 1920, height: 1080 });

  const [isDesktop, setIsDesktop] = useState(false);

  // ── Hook 1: detect desktop pointer ──────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Hook 2: events & initialization ─────────────────────
  useEffect(() => {
    if (!isDesktop) return;

    viewport.current = { width: window.innerWidth, height: window.innerHeight };
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    pos.current = { x: cx, y: cy };
    renderPos.current = { x: cx, y: cy };
    target.current = { x: cx, y: cy };

    const applyState = (next: PetState, timestamp: number) => {
      if (stateRef.current === next) return;
      stateRef.current = next;
      lastStateChangeTime.current = timestamp;
    };

    const resetSleep = () => {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
      sleepTimer.current = setTimeout(() => {
        if (!lockedRef.current) applyState("recharge", performance.now());
      }, SLEEP_DELAY);
    };

    const playAction = (action: PetState) => {
      if (lockedRef.current) return;
      lockedRef.current = true;
      applyState(action, performance.now());
      resetSleep();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (lockedRef.current) return;
      const dx = e.clientX - pos.current.x;
      const dy = e.clientY - pos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      target.current = {
        x: clamp(
          e.clientX - (dx / dist) * CURSOR_OFFSET,
          PET_SIZE / 2,
          viewport.current.width - PET_SIZE / 2,
        ),
        y: clamp(
          e.clientY - (dy / dist) * CURSOR_OFFSET,
          PET_SIZE / 2,
          viewport.current.height - PET_SIZE / 2,
        ),
      };
      if (dx < -FLIP_HYSTERESIS) flipRef.current = true;
      else if (dx > FLIP_HYSTERESIS) flipRef.current = false;
      resetSleep();
    };

    const onClick = () => {
      playAction(CLICK_ACTIONS[clickCount.current % CLICK_ACTIONS.length]);
      clickCount.current++;
    };

    const onDoubleClick = () => playAction("dead");

    const onResize = () => {
      viewport.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      pos.current.x = clamp(
        pos.current.x,
        PET_SIZE / 2,
        viewport.current.width - PET_SIZE / 2,
      );
      pos.current.y = clamp(
        pos.current.y,
        PET_SIZE / 2,
        viewport.current.height - PET_SIZE / 2,
      );
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("dblclick", onDoubleClick);
    window.addEventListener("resize", onResize);
    resetSleep();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("dblclick", onDoubleClick);
      window.removeEventListener("resize", onResize);
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
    };
  }, [isDesktop]);

  // ── Hook 3: RAF movement & render loop ──────────────────
  useEffect(() => {
    if (!isDesktop) return;

    let raf: number;
    const loop = (timestamp: number) => {
      if (!lockedRef.current) {
        const dx = target.current.x - pos.current.x;
        const dy = target.current.y - pos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > IDLE_DEAD_ZONE) {
          const speed = stateRef.current === "run" ? RUN_SPEED : WALK_SPEED;
          pos.current.x += (dx / dist) * speed;
          pos.current.y += (dy / dist) * speed;
        }

        pos.current.x = clamp(
          pos.current.x,
          PET_SIZE / 2,
          viewport.current.width - PET_SIZE / 2,
        );
        pos.current.y = clamp(
          pos.current.y,
          PET_SIZE / 2,
          viewport.current.height - PET_SIZE / 2,
        );

        let desired: PetState = stateRef.current;
        if (dist > RUN_DIST) desired = "run";
        else if (dist > IDLE_EXIT_THRESHOLD) desired = "walk";
        else if (dist < IDLE_ENTER_THRESHOLD) desired = "idle";

        if (
          desired !== stateRef.current &&
          timestamp - lastStateChangeTime.current > STATE_COOLDOWN_MS
        ) {
          stateRef.current = desired;
          lastStateChangeTime.current = timestamp;
        }
      }

      renderPos.current.x += (pos.current.x - renderPos.current.x) * SMOOTHING;
      renderPos.current.y += (pos.current.y - renderPos.current.y) * SMOOTHING;

      if (wrapperRef.current) {
        const x = Math.round(renderPos.current.x - PET_SIZE / 2);
        const y = Math.round(renderPos.current.y - PET_SIZE / 2);
        wrapperRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (spriteRef.current) {
        spriteRef.current.style.transform = flipRef.current
          ? "scaleX(-1)"
          : "scaleX(1)";
        if (stateRef.current !== domStateRef.current) {
          domStateRef.current = stateRef.current;
          spriteRef.current.className = `pet-${stateRef.current}`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isDesktop]);

  // ── Initial class sync (prevents React/DOM flash) ───────
  useLayoutEffect(() => {
    if (spriteRef.current) {
      spriteRef.current.className = "pet-idle";
      domStateRef.current = "idle";
    }
  }, []);

  // ── Action completion ────────────────────────────────────
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return; // Ignore bubbled events
    if (!MOVEMENT_STATES.has(stateRef.current)) {
      lockedRef.current = false;
      stateRef.current = "idle";
    }
  };

  // ── Styles ───────────────────────────────────────────────
  const wrapperStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: PET_SIZE,
    height: PET_SIZE,
    pointerEvents: "none",
    zIndex: 9999,
    willChange: "transform",
    contain: "layout style paint",
  };

  const spriteStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    imageRendering: "pixelated",
    backgroundRepeat: "no-repeat",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    // Removed will-change: background-position (causes GPU texture splitting)
  };

  // ── Render ───────────────────────────────────────────────
  if (!isDesktop) return null;

  return (
    <>
      <style>{`
        .pet-idle     { background-image: url(/sprites/Idle.png);     background-size: 700% 100%; animation: anim-idle     0.875s steps(6, end) infinite; }
        .pet-walk     { background-image: url(/sprites/Walk.png);     background-size: 700% 100%; animation: anim-walk     0.7s   steps(6, end) infinite; }
        .pet-run      { background-image: url(/sprites/Run.png);      background-size: 800% 100%; animation: anim-run      0.571s steps(7, end) infinite; }
        .pet-recharge { background-image: url(/sprites/Recharge.png); background-size: 700% 100%; animation: anim-recharge 0.875s steps(6, end) infinite; }
        .pet-attack   { background-image: url(/sprites/Attack.png);   background-size: 300% 100%; animation: anim-attack   0.3s   steps(2, end) forwards;  }
        .pet-hurt     { background-image: url(/sprites/Hurt.png);     background-size: 300% 100%; animation: anim-hurt     0.375s steps(2, end) forwards;  }
        .pet-dead     { background-image: url(/sprites/Dead.png);     background-size: 400% 100%; animation: anim-dead     0.667s steps(3, end) forwards;  }
        .pet-shot1    { background-image: url(/sprites/Shot_1.png);   background-size: 400% 100%; animation: anim-shot1    0.4s   steps(3, end) forwards;  }
        .pet-shot2    { background-image: url(/sprites/Shot_2.png);   background-size: 400% 100%; animation: anim-shot2    0.4s   steps(3, end) forwards;  }
        .pet-grenade  { background-image: url(/sprites/Grenade.png);  background-size: 900% 100%; animation: anim-grenade  0.75s  steps(8, end) forwards;  }
        
        @keyframes anim-idle     { to { background-position-x: 100%; } }
        @keyframes anim-walk     { to { background-position-x: 100%; } }
        @keyframes anim-run      { to { background-position-x: 100%; } }
        @keyframes anim-recharge { to { background-position-x: 100%; } }
        @keyframes anim-attack   { to { background-position-x: 100%; } }
        @keyframes anim-hurt     { to { background-position-x: 100%; } }
        @keyframes anim-dead     { to { background-position-x: 100%; } }
        @keyframes anim-shot1    { to { background-position-x: 100%; } }
        @keyframes anim-shot2    { to { background-position-x: 100%; } }
        @keyframes anim-grenade  { to { background-position-x: 100%; } }

        @media (hover: none), (pointer: coarse) {
          .desktop-pet-wrapper { display: none !important; }
        }
      `}</style>
      <div
        ref={wrapperRef}
        className="desktop-pet-wrapper"
        style={wrapperStyle}
      >
        <div
          ref={spriteRef}
          style={spriteStyle}
          onAnimationEnd={handleAnimationEnd}
        />
      </div>
    </>
  );
}
