import React, {useEffect, useState} from 'react';
import { FaWindows } from 'react-icons/fa';
import Layout from '../components/Layout.js';

function Test(props) {


  const [mousePos, setMousePos] = useState({});
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const track = document.getElementById("vid-track");

  useEffect(() => {

    const handleOnDown = e => setMouseDown(e.clientX);
  
    const handleOnUp = () => {
      setMouseDown(0);
      setPrevPercentage(percentage);
    }

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      if (mouseDown === "0") return;
  
      const mouseDelta = parseFloat(mouseDown) - event.clientY,
        maxDelta = window.innerHeight / 2;
  
      const currentPercentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(prevPercentage) + currentPercentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
      setPercentage(nextPercentage);
  
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
    window.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
      window.removeEventListener(
        'mousedown',
        handleOnDown
      );
      window.removeEventListener(
        'mouseup',
        handleOnUp
      );
    };
  }, [mousePos,mouseDown,mouseUp,percentage,prevPercentage]);

  return (
    <Layout>
      <main className='relative w-screen h-screen overflow-hidden bg-black'>

        <div id='vid-track' style={{ transform: `translate(-50%, ${percentage}%)` }}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 flex-col space-y-10'>
          <div style={{objectPosition: `${100 + percentage}% center`}} className='vid w-[700px] h-[420px] bg-red-400'></div>
          <div style={{objectPosition: `${100 + percentage}% center`}}  className='vid w-[700px] h-[420px] bg-red-400'></div>
          <div style={{objectPosition: `${100 + percentage}% center`}}  className='vid w-[700px] h-[420px] bg-red-400'></div>
          <div style={{objectPosition: `${100 + percentage}% center`}}  className='vid w-[700px] h-[420px] bg-red-400'></div>
        </div>
      </main>
    </Layout>
  );
}

export default Test;