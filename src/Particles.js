import { useEffect, useRef } from "react";

// Config copied from the referenced CodePen and adapted to JS object
const PARTICLES_CONFIG = {
  particles: {
    number: { value: 38, density: { enable: true, value_area: 946.9790382244144 } },
    color: { value: "#f2f2f2" },
    shape: {
      type: "edge",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 20, height: 20 },
    },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground({
  id = "particles-js",
  className = "",
  backgroundColor = "#b61924",
  backgroundImage = "",
  backgroundPosition = "50% 50%",
  backgroundSize = "cover",
  backgroundRepeat = "no-repeat",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let canceled = false;
    const el = containerRef.current; // ← 스냅샷

    (async () => {
      await import("particles.js");
      const { particlesJS } = window;
      if (!particlesJS || canceled) return;
      particlesJS(id, PARTICLES_CONFIG);
    })();

    return () => {
      canceled = true;
      // Graceful teardown to prevent multiple canvases piling up
      const anyWin = window;
      if (anyWin.pJSDom && anyWin.pJSDom.length) {
        anyWin.pJSDom.forEach((p) => {
          try {
            p?.pJS?.fn?.vendors?.destroypJS?.();
          } catch (_) {}
        });
        // Remove leftover canvas elements inside our container (defensive)
        if (el) {
          el.querySelectorAll("canvas").forEach(c => c.remove()); // ← el 사용
        }
      }
    };
  }, [id]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "500px",
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize,
        backgroundRepeat,
        backgroundPosition,
      }}
    />
  );
}
