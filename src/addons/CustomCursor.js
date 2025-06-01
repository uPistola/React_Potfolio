import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  // Posição real do mouse
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  // Posição interpolada do cursor
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  // Escala atual do cursor (1 = normal, 2 = hover)
  const cursorScale = useRef(1);
  const cursorRef = useRef(null);

  const BASE_SIZE = 26; // largura/altura fixa

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      const tag = el.tagName.toLowerCase();
      if (
        ["a", "button", "input", "textarea", "svg"].includes(tag) ||
        el.getAttribute("data-cursor-hover") === "true"
      ) {
        setHovered(true);
        hoveredRef.current = true;
      }
    };

    const handleMouseOut = () => {
      setHovered(false);
      hoveredRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      // 1) LERP da posição
      cursorX.current += (mouseX.current - cursorX.current) * 0.1;
      cursorY.current += (mouseY.current - cursorY.current) * 0.1;

      // 2) Define escala-alvo (1 normal, 2 hover)
      const targetScale = hoveredRef.current ? 2 : 1;
      cursorScale.current += (targetScale - cursorScale.current) * 0.1;

      if (cursorRef.current) {
        // 3) Posiciona o div de forma que seu centro fique em (cursorX, cursorY)
        cursorRef.current.style.left = `${cursorX.current - BASE_SIZE / 2}px`;
        cursorRef.current.style.top = `${cursorY.current - BASE_SIZE / 2}px`;

        // 4) Aplica somente o scale – o left/top NÃO será afetado pelo scale
        cursorRef.current.style.transform = `scale(${cursorScale.current})`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none rounded-full"
      style={{
        width: BASE_SIZE,
        height: BASE_SIZE,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "invert(1) hue-rotate(-180deg)",
        WebkitBackdropFilter: "invert(1) hue-rotate(-180deg)",
        mixBlendMode: "normal",
        pointerEvents: "none",
        transition: "background-color 0.3s ease",
        transformOrigin: "center center", // escala a partir do centro
        left: 0, // serão sobrescritos dinamicamente no JS
        top: 0,
      }}
    />
  );
}
