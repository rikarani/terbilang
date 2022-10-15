// * Import function darkSwitch
import { darkSwitch } from "./theme.config.js";

export function checkTheme() {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "Light");
  }
}

export function keepTheme() {
  const toggle = document.getElementById("dark-mode");

  toggle.checked = true;
  darkSwitch();
}
