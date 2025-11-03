import { useEffect } from "react";

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const trail: HTMLDivElement[] = [];
    const trailLength = 8;

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const trailElement = document.createElement("div");
      trailElement.className = "cursor-trail";
      trailElement.style.opacity = String((trailLength - i) / trailLength * 0.6);
      document.body.appendChild(trailElement);
      trail.push(trailElement);
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Update trail
      trail.forEach((element, index) => {
        const prevElement = index === 0 ? cursor : trail[index - 1];
        const prevX = parseFloat(prevElement.style.left || "0");
        const prevY = parseFloat(prevElement.style.top || "0");

        const currentX = parseFloat(element.style.left || "0");
        const currentY = parseFloat(element.style.top || "0");

        const newX = currentX + (prevX - currentX) * 0.3;
        const newY = currentY + (prevY - currentY) * 0.3;

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cursor.remove();
      trail.forEach((element) => element.remove());
    };
  }, []);
};
