"use client";

import { useEffect, useState } from 'react';

const Timer = ({ eventDate } : {
    eventDate: Date
}) => { 

    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, [])

    const getTimeLeft = (date: Date) => {
      const now = new Date().getTime();
      const targetTime = new Date(date).getTime();
      const timeDifference = targetTime - now;

      if (timeDifference < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      const secondsInMilli = 1000;
      const minutesInMilli = secondsInMilli * 60;
      const hoursInMilli = minutesInMilli * 60;
      const daysInMilli = hoursInMilli * 24;

      const days = Math.floor(timeDifference / daysInMilli);
      const hours = Math.floor((timeDifference % daysInMilli) / hoursInMilli);
      const minutes = Math.floor((timeDifference % hoursInMilli) / minutesInMilli);
      const seconds = Math.floor((timeDifference % minutesInMilli) / secondsInMilli);

      return { days, hours, minutes, seconds }
    };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeLeft(eventDate));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [eventDate]);

    if(!isMounted){
      return null;
    }


    return (
        <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Count down</h1>
        <div className="timer text-4xl font-bold text-white">
            <span className="days mr-2">{timeLeft.days} day</span>
            <span className="hours mr-2">{timeLeft.hours} hours</span>
            <span className="minutes mr-2">{timeLeft.minutes} minutes</span>
            <span className="seconds">{timeLeft.seconds} seconds</span>
        </div>
    </div>
    )
}

export default Timer;