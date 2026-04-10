"use client";
import { useEffect, useRef } from "react";

export default function MouseRipple() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let segments = [];
    let prev = null;
    let rafId;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    function onMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      if (prev) {
        segments.push({ x1: prev.x, y1: prev.y, x2: x, y2: y, alpha: 0.75 });
      }
      prev = { x, y };
    }

    function onMouseLeave() {
      prev = null;
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of segments) s.alpha -= 0.018;
      segments = segments.filter((s) => s.alpha > 0);

      for (const s of segments) {
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
        ctx.strokeStyle = `rgba(59,31,10,${s.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap  = "round";
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize",     resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize",     resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width:  "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
