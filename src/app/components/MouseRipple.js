"use client";
import { useEffect, useRef } from "react";

export default function MouseRipple() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let ripples = [];
    let rafId;
    let lastX = -999;
    let lastY = -999;
    let cursorX = -999;
    let cursorY = -999;
    // Smooth cursor follower
    let followerX = -999;
    let followerY = -999;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    function onMouseMove(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;

      // Spawn a ripple ring only when mouse moves at least 18px
      const dx = cursorX - lastX;
      const dy = cursorY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18) {
        ripples.push({
          x: cursorX,
          y: cursorY,
          r: 1,
          maxR: 44,
          alpha: 0.55,
          lineWidth: 1.4,
        });
        lastX = cursorX;
        lastY = cursorY;
      }
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follower easing
      followerX += (cursorX - followerX) * 0.18;
      followerY += (cursorY - followerY) * 0.18;

      // Cursor dot
      if (cursorX > 0) {
        ctx.beginPath();
        ctx.arc(followerX, followerY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,31,10,0.55)";
        ctx.fill();

        // Outer ring around cursor
        ctx.beginPath();
        ctx.arc(followerX, followerY, 13, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(59,31,10,0.20)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Ripple rings
      ripples = ripples.filter((r) => r.alpha > 0.01);

      for (const r of ripples) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59,31,10,${r.alpha.toFixed(3)})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();

        // Expand and fade
        const progress = r.r / r.maxR;
        r.r += 0.7 + progress * 1.6;
        r.alpha *= 0.93;
        r.lineWidth = Math.max(0.3, r.lineWidth - 0.015);
      }

      rafId = requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
