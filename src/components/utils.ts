import { MouseEvent } from "react";

export function createRipple(
  event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.x - radius}px`;
  circle.style.top = `${event.clientY - rect.y - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}
