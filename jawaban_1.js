// Jawaban Soal 1 ada di bawah ini
class Hewan {
    constructor(nama, warna, beratGram, harga) {
        this.nama = nama;
        this.warna = warna;
        this.beratGram = beratGram;
        this.harga = harga;
        this.kondisiBagus = false;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let hewanKucing = new Hewan("Anjing", "Hitam", 25, 1000000);
hewanKucing.cekKondisiBagus(true);
console.log(hewanAnjing);
let hewanBebek = new Hewan("Kelinci", "Putih", 25)
hewanKelinci.cekKondisiBagus(true);
console.log(hewanKelinci);

console.log('ini hewan Anjing =>', hewanAnjing);
console.log('ini hewan Kelimci =>', hewanKelinci);