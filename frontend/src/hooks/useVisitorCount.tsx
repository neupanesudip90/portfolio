"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/libs/firebase";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const ref = doc(db, "stats", "visitors");

        // Check if already counted in this session
        const alreadyCounted = sessionStorage.getItem("visited");

        if (!alreadyCounted) {
          // First visit — increment count
          await setDoc(ref, { count: increment(1) }, { merge: true });
          sessionStorage.setItem("visited", "true");
          console.log("✅ New visit counted!");
        } else {
          console.log("👀 Already counted this session, just reading...");
        }

        // Always read and show the count
        const snap = await getDoc(ref);
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
