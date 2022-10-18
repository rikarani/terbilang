// * Import Function
import { checkTheme, keepTheme } from "../../src/js/theme/theme.checker.js";
import { darkSwitch, lightSwitch } from "../../src/js/theme/theme.config.js";
import { parser } from "../../src/js/app/parser.js";

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

const field = document.getElementById("erpe");

// * trigger event pas ada yang inputkan angka
field.addEventListener("input", function () {
  const spanTerbilang = document.getElementById("terbilang");

  // * kalo inputan nya kosong (misal abis di-delete, di-cut) atau 0
  if (field.value == "" || field.value == "0") {
    const tombolSalin = document.getElementById("copyText");

    // * kosongin hasil terbilang nya
    spanTerbilang.textContent = "";

    // * matiin tombol nya
    tombolSalin.disabled = true;
  }
  // * kalo inputan nya melebihi batas
  else if (field.value >= "9999999999999999") {
    const tombolSalin = document.getElementById("copyText");
    const warning = document.querySelector(".warning");

    // * kosongin hasil terbilang nya
    spanTerbilang.textContent = "";

    // * munculin pesan error
    warning.classList.remove("hidden");

    // * matiin tombol nya
    tombolSalin.disabled = true;
  }
  // * kalau normal yaa
  else {
    const tombolSalin = document.getElementById("copyText");
    const warning = document.querySelector(".warning");

    // * ubah tulisan terbilang sesuai angka yang di-inputkan
    spanTerbilang.textContent = parser(field.value);

    // * sembunyikan pesan error nya
    warning.classList.add("hidden");

    // * nyalain tombol nya
    tombolSalin.disabled = false;
  }
});

const tombolSalin = document.getElementById("copyText");

tombolSalin.addEventListener("click", function () {
  const tooltip = document.querySelector(".tooltip-text");
  const spanTerbilang = document.getElementById("terbilang");

  // * bikin objek stabilo (buat highlight tulisan nya nanti)
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNode(spanTerbilang);
  selection.removeAllRanges();
  selection.addRange(range);

  // * copy ke clipboard
  navigator.clipboard.writeText(spanTerbilang.textContent);

  // * munculin tooltip nya pas tombol di-klik
  tooltip.classList.toggle("opacity-0");

  // * sembunyiin tooltip nya setelah 0.8s
  setTimeout(() => {
    tooltip.classList.toggle("opacity-0");
  }, 800);
});
