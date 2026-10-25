import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let animationFrameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(loop);

    const handleMouseEnter = () => {
      cur.classList.add('big');
      ring.classList.add('big');
    };

    const handleMouseLeave = () => {
      cur.classList.remove('big');
      ring.classList.remove('big');
    };

    const attachListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, .ehansih-card, .service-item');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
