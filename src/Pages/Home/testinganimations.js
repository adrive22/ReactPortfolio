import React, { useState, useEffect } from 'react';
import { Image, Transition } from 'semantic-ui-react';

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];

const TransitionExampleTransitionExplorer = () => {
  const [animation, setAnimation] = useState('shake');
  const [duration, setDuration] = useState(2000);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      setVisible(prevVisible => !prevVisible);
    };

    const startAnimation = () => {
      toggleVisibility();
      timeoutId = setTimeout(startAnimation, duration);
    };

    startAnimation();

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [duration]); // Re-run effect if duration changes

  return React.createElement(
    Transition,
    { animation: animation, duration: duration, visible: visible },
    React.createElement(
      Image,
      { centered: true, size: 'small', src: 'https://react.semantic-ui.com/images/leaves/5.png' }
    )
  );
};


export default TransitionExampleTransitionExplorer;
