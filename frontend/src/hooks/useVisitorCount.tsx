"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/libs/firebase";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        console.log("🔥 Firebase connecting...");
        const ref = doc(db, "stats", "visitors");
        await setDoc(ref, { count: increment(1) }, { merge: true });
        console.log("✅ Count incremented!");
        const snap = await getDoc(ref);
        console.log("📊 Count value:", snap.data());
        const data = snap.data();
        if (data) {
          setCount(data.count);
        }
      } catch (err: any) {
        console.error("❌ Firebase error:", err.message);
      }
    };
    run();
  }, []);

  return count;
}
