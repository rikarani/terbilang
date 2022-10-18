export const convert = (angka) => {
  // * array buat nyimpan hasil
  const hasil = [];

  // * object buat nampung nominal
  const nominal = {
    1: "Satu",
    2: "Dua",
    3: "Tiga",
    4: "Empat",
    5: "Lima",
    6: "Enam",
    7: "Tujuh",
    8: "Delapan",
    9: "Sembilan",
  };

  // * get nilai Ratus
  let ratus = Math.floor(angka / 100);
  let sisaAngka = angka % 100;

  // * kalo ada, tambahin ke array
  if (ratus > 0) {
    // * kalo ratus == 1, tulis "Seratus"
    if (ratus == 1) {
      hasil.push("Seratus");
    } else {
      hasil.push(nominal[ratus], "Ratus");
    }
  }

  // * get nilai Puluh
  let puluh = Math.floor(sisaAngka / 10);
  sisaAngka %= 10; // sisaAngka = sisaAngka % 10

  // * get nilai Satu
  let satu = Math.floor(sisaAngka / 1);
  sisaAngka %= 1; // sisaAngka = sisaAngka % 1

  // * kalo ada, tambahin ke array
  if (puluh > 0) {
    if (puluh == 1 && satu == 0) {
      hasil.push("Sepuluh");
    } else if (puluh == 1 && satu == 1) {
      hasil.push("Sebelas");
      satu = 0;
    } else if (puluh == 1 && satu != 1) {
      hasil.push(nominal[satu], "Belas");
      satu = 0;
    } else {
      hasil.push(nominal[puluh], "Puluh");
    }
  }

  if (satu > 0) {
    hasil.push(nominal[satu]);
  }

  return hasil.join(" ");
};
