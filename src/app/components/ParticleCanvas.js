"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const COUNT = 80;
    let particles = [];
    let rafId;
    let active = true;

    function rand(min, max) {
      return min + Math.random() * (max - min);
    }

    function makeParticle() {
      return {
        x: rand(0, canvas.width),
        y: rand(-window.innerHeight, 0),
        w: rand(0.8, 2),
        h: rand(6, 18),
        speed: rand(0.4, 1.2),
        opacity: rand(0.35, 0.65),
      };
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: COUNT }, makeParticle);
    }

    function tick() {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.h);
        ctx.strokeStyle = `rgba(34,100,56,${p.opacity})`;
        ctx.lineWidth = p.w;
        ctx.stroke();
        p.y += p.speed;
        if (p.y > canvas.height + p.h) {
          p.x = rand(0, canvas.width);
          p.y = -p.h;
          p.opacity = rand(0.35, 0.65);
        }
      }
      rafId = requestAnimationFrame(tick);
    }

    init();
    tick();

    window.addEventListener("resize", resize);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
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
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
