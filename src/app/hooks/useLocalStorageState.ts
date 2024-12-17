// "use client";
// import { useState, useEffect } from "react";

// export function useLocalStorageState(initialState, key) {
//   const [value, setValue] = useState(function () {
//     if (typeof window !== "undefined") {
//       try {
//         const storedValue = localStorage.getItem(key);
//         return storedValue ? JSON.parse(storedValue) : initialState;
//       } catch (err) {
//         console.error(`Error reading localStorage key “${key}”:`, err);
//         return initialState;
//       }
//     }
//     return initialState;
//   });

//   useEffect(
//     function () {
//       if (typeof window !== "undefined") {
//         localStorage.setItem(key, JSON.stringify(value));
//       }
//     },
//     [value, key]
//   );

//   return [value, setValue];
// }

"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? (JSON.parse(storedValue) as T) : initialState;
      } catch (err) {
        console.error(`Error reading localStorage key “${key}”:`, err);
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error(`Error writing to localStorage key “${key}”:`, err);
      }
    }
  }, [value, key]);

  return [value, setValue];
}
