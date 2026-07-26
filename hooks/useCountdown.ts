"use client";
import { useCallback, useEffect, useState } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: Date): CountdownTime {
  const calculate = useCallback((): CountdownTime => {
    const distance = targetDate.getTime() - Date.now();

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [time, setTime] = useState<CountdownTime>(calculate);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [calculate]);

  return time;
}
