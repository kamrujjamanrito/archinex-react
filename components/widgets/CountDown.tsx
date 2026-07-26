"use client";
import { useEffect, useMemo, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

export default function CountdownClock() {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 100);
    return date;
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const [clock, setClock] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const second =
        ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 360;

      const minute =
        ((now.getMinutes() +
          (now.getSeconds() + now.getMilliseconds() / 1000) / 60) /
          60) *
        360;

      const hour =
        (((now.getHours() % 12) +
          (now.getMinutes() +
            (now.getSeconds() + now.getMilliseconds() / 1000) / 60) /
            60) /
          12) *
        360;

      setClock({
        hour,
        minute,
        second,
      });
    };

    updateClock();

    const interval = window.setInterval(updateClock, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-wrapper">
      <div className="clock">
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${clock.hour}deg)`,
          }}
        />

        <div
          className="hand minute-hand"
          style={{
            transform: `rotate(${clock.minute}deg)`,
          }}
        />

        <div
          className="hand second-hand"
          style={{
            transform: `rotate(${clock.second}deg)`,
          }}
        />

        <div className="center-dot" />
        <div className="center-dot-orange" />

        <div className="hour-markers">
          {Array.from({ length: 12 }).map((_, index) => {
            const rotation = index * 30;

            return (
              <div
                key={index}
                className="hour-marker"
                style={{
                  transform: `rotate(${rotation}deg) translateY(-216.25px)`,
                }}
              >
                <span
                  style={{
                    transform: `rotate(-${rotation}deg)`,
                  }}
                >
                  {index === 0 ? 12 : index}
                </span>
              </div>
            );
          })}
        </div>

        <div className="minute-markers" />
      </div>

      <div className="time-countdown">
        <div className="counter-column">
          <span className="count day">{days}</span>
          Days
        </div>

        <div className="counter-column">
          <span className="count hour">{String(hours).padStart(2, "0")}</span>
          Hours
        </div>

        <div className="counter-column">
          <span className="count minute">
            {String(minutes).padStart(2, "0")}
          </span>
          Minutes
        </div>

        <div className="counter-column">
          <span className="count second">
            {String(seconds).padStart(2, "0")}
          </span>
          Seconds
        </div>
      </div>
    </div>
  );
}
