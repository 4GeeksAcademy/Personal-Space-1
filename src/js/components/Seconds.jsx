import React, { useState, useEffect } from "react";

const Seconds = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h3 className="p-2">You have been here {count} seconds since the last time you reload</h3>;
};

export default Seconds;
