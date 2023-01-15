import { useEffect, useState } from "react";

const useCountdown = (endDate) => {
  const countdownDate = new Date(endDate).getTime();
  const [countdown, setCountdown] = useState(
    countdownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnValues(countdown);
};

const getReturnValues=(countdown)=>{
  // calculate time left
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export { useCountdown };
