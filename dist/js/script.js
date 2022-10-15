// * Import Function
import { checkTheme, keepTheme } from "../../src/js/theme/theme.checker.js";
import { darkSwitch, lightSwitch } from "../../src/js/theme/theme.config.js";

// * Cek Tema dulu
checkTheme();

// * kalau dari awal tema nya udah Dark, pertahanin tetap Dark
if (localStorage.getItem("theme") === "Dark") {
  keepTheme();
}

// * Dark Mode
const toggle = document.getElementById("dark-mode");

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    darkSwitch();
  } else {
    lightSwitch();
  }
});
