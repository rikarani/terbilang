// * Import Function
import { checkTheme, keepTheme } from "../../src/js/theme/theme.checker.js";
import { darkSwitch, lightSwitch } from "../../src/js/theme/theme.config.js";
import { nilaiTriliun, getTriliun } from "../../src/js/utils/getTriliun.js";
import { nilaiMiliar, getMiliar } from "../../src/js/utils/getMiliar.js";
import { nilaiJuta, getJuta } from "../../src/js/utils/getJuta.js";
import { nilaiRibu, getRibu } from "../../src/js/utils/getRibu.js";

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

const inputTerbilang = document.getElementById("erpe");

inputTerbilang.addEventListener("input", function () {
  // span buat tampilkan hasil terbilang
  const spanTerbilang = document.getElementById("terbilang");

  // Array buat nyimpan hasil convert
  const hasil = [];

  // * get nilai Triliun
  let triliun = Math.floor(getTriliun(inputTerbilang.value));
  let sisaAngka = inputTerbilang.value % nilaiTriliun;

  // * kalo ada, tambahin ke array
  if (triliun > 0) {
    hasil.push(triliun, "Triliun");
  }

  // * get nilai Miliar
  let miliar = Math.floor(getMiliar(sisaAngka));
  sisaAngka %= nilaiMiliar; // sisaAngka = sisaAngka % nilaiMiliar

  // * kalo ada, tambahin ke array
  if (miliar > 0) {
    hasil.push(miliar, "Miliar");
  }

  // * get nilai Juta
  let juta = Math.floor(getJuta(sisaAngka));
  sisaAngka %= nilaiJuta; // sisaAngka = sisaAngka % nilaiJuta

  // * kalo ada, tambahin ke array
  if (juta > 0) {
    hasil.push(juta, "Juta");
  }

  // * get nilai Ribu
  let ribu = Math.floor(getRibu(sisaAngka));
  sisaAngka %= nilaiRibu; // sisaAngka = sisaAngka % nilaiRibu

  // * kalo ada, tambahin ke array
  if (ribu > 0) {
    hasil.push(ribu, "Ribu");
  }

  // * get nilai Satu
  let satu = Math.floor(sisaAngka / 1);
  sisaAngka %= 1; // sisaAngka = sisaAngka % 1

  // * kalo ada, tambahin ke array
  if (satu > 0) {
    hasil.push(satu, "Rupiah");
  }

  console.log(hasil);
  console.log(sisaAngka);
});
