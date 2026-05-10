"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/libs/firebase";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";


export function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const run = async () => {
      try {
        console.log("🔥 Firebase connecting...");

        // Timeout after 5 seconds
        const timeout = new Promise((_, reject) =>
          setTimeout(
            () =>
              reject(
                new Error(
                  "⏱️ Timeout! Firestore is blocked — disable your ad blocker!",
                ),
              ),
            5000,
          ),
        );

        const ref = doc(db, "stats", "visitors");

        await Promise.race([
          setDoc(ref, { count: increment(1) }, { merge: true }),
          timeout,
        ]);

        console.log("✅ Count incremented!");
        const snap = await getDoc(ref);
        console.log("📊 Count value:", snap.data());
        setCount(snap.data().count);
      } catch (err) {
        console.error("❌ Firebase error:", err.message);
      }
    };
    run();
  }, []);

  return count;
}
