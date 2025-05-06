export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Game Designer",
    company: "Gamelab Indonesia",
    dates: "07/2022 - 9/2022",
    description: [
      "Menjalani 3 bulan pengalaman kerja di Gamelab Indonesia di divisi Game Designer.",
      "Mengembangkan sebuah game berbasis web menggunakan Framework Phaser JS.",
      "Dalam kurun waktu tersebut, saya mampu mempelajari dan menguasai penggunaan modul Phaser JS secara efektif..",
      "Berkontribusi dalam proses desain, logika permainan, dan integrasi aset..",
      "Bekerja secara kolaboratif dengan tim mentor dan peserta lainnya dalam lingkungan kerja berbasis proyek."
    ]
  },
]