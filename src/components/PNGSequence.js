import React, { useState, useEffect } from 'react';


const PNGSequence = ({ sequencePath, frameCount }) => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current frame
      setCurrentFrame((prevFrame) => (prevFrame % frameCount) + 1);
    }, 100); // Adjust the interval based on your frame rate

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [frameCount]);

  const framePath = `${sequencePath}/frame${currentFrame}.png`;

  return <img src={framePath} alt={`Frame ${currentFrame}`} />;
};

export default PNGSequence;
