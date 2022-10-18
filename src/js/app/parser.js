// * Import Function
import { nilaiTriliun, getTriliun } from "../utils/getTriliun.js";
import { nilaiMiliar, getMiliar } from "../utils/getMiliar.js";
import { nilaiJuta, getJuta } from "../utils/getJuta.js";
import { nilaiRibu, getRibu } from "../utils/getRibu.js";
import { convert } from "./convert.js";

export const parser = (angka) => {
  const hasil = [];

  // * get nilai Triliun
  let triliun = Math.floor(getTriliun(angka));
  let sisaAngka = angka % nilaiTriliun;

  // * kalo ada, tambahkan ke array
  if (triliun > 0) {
    hasil.push(convert(triliun), "Triliun");
  }

  // * get nilai Miliar
  let miliar = Math.floor(getMiliar(sisaAngka));
  sisaAngka %= nilaiMiliar; // sisaAngka = sisaAngka % nilaiMiliar

  // * kalo ada, tambahkan ke array
  if (miliar > 0) {
    hasil.push(convert(miliar), "Miliar");
  }

  // * get nilai Juta
  let juta = Math.floor(getJuta(sisaAngka));
  sisaAngka %= nilaiJuta; // sisaAngka = sisaAngka % nilaiJuta

  // * kalo ada, tambahkan ke array
  if (juta > 0) {
    hasil.push(convert(juta), "Juta");
  }

  // * get nilai Ribu
  let ribu = Math.floor(getRibu(sisaAngka));
  sisaAngka %= nilaiRibu; // sisaAngka = sisaAngka % nilaiRibu

  // * kalo ada, tambahin ke array
  if (ribu > 0) {
    // * kalo ribu == 1, tulis "Seribu"
    if (ribu == 1) {
      hasil.push("Seribu");
    } else {
      hasil.push(convert(ribu), "Ribu");
    }
  }

  // * get nilai Satu
  let satu = Math.floor(sisaAngka / 1);
  sisaAngka %= 1; // sisaAngka = sisaAngka % 1

  // * kalo ada, tambahin ke array
  if (satu > 0) {
    hasil.push(convert(satu));
  }

  return hasil.join(" ").concat(" Rupiah");
};
