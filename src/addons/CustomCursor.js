import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {

  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const cursorSize = useRef(26); // tamanho inicial
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (
        ["a", "button", "input", "textarea", "svg"].includes(tag) ||
        e.target.getAttribute("data-cursor-hover") === "true"
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
      // Suavização de posição
      cursorX.current += (mouseX.current - cursorX.current) * 0.1;
      cursorY.current += (mouseY.current - cursorY.current) * 0.1;

      // Suavização de tamanho
      const targetSize = hoveredRef.current ? 52 : 26;
      cursorSize.current += (targetSize - cursorSize.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.width = `${cursorSize.current}px`;
        cursorRef.current.style.height = `${cursorSize.current}px`;
        cursorRef.current.style.transform = `translate3d(${
          cursorX.current - cursorSize.current / 2
        }px, ${cursorY.current - cursorSize.current / 2}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate(); // start animation loop

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
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "invert(1) hue-rotate(-180deg)",
        WebkitBackdropFilter: "invert(1) hue-rotate(-180deg)",
        mixBlendMode: "normal",
        borderRadius: "9999px",
        opacity: 1,
        pointerEvents: "none",
        transition: "background-color 0.3s ease",
      }}
      
    />
  );
}
