
"use client"; // Add this directive for React Hooks
import React, { useState, useEffect } from 'react';

// Define an interface for the countdown's time object.
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const PortfolioComingSoonPage = () => {
  // Function to calculate the time remaining until the target date.
  const calculateTimeLeft = (): TimeLeft | null => {
    // Set a target date 2 days into the future.
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Return null if the countdown is over.
    return null;
  };

  // Initialize state with the calculated time left, explicitly typed.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    // Set a timer to update the countdown every second.
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer when the component is unmounted to prevent memory leaks.
    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
        Portfolio Coming Soon
      </h1>

      {timeLeft ? (
        <div className="flex gap-5 text-center">
          <div>
            <span className="countdown font-mono text-4xl sm:text-6xl">
              <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl sm:text-6xl">
              <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl sm:text-6xl">
              <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl sm:text-6xl">
              <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
            </span>
            sec
          </div>
        </div>
      ) : (
        <span className="text-4xl font-bold">Welcome!</span>
      )}
    </div>
  );
};

export default PortfolioComingSoonPage;