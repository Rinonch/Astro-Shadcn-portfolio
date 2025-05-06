export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Aplikasi Dengan Arduino UNO",
    summary: "Pengendali Lampu Menggunakan Arduino UNO Berbasis Bluetooth.",
    images: [
      "https://media-hosting.imagekit.io/557e918796144e16/Screenshot_2_waifu2x_photo_noise1_scale.png?Expires=1841123092&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fWQD7qRSH1mseMnlKSyI-zkCvyulakpcgZyOqBsNSJuPi50bmqnJfaIHqSLBuzVlFlpgdvMUeqRaZyVR~dbvGMr86fCANgwcwkdL-OYRzXSAJ7FNXxnGrbIhE2K0gey9Ncq6DTc4EAcDcGAklqeEATkPKcXR41JbqW81ov3ppu3y~fHo7ovmck1aKYVKjRV5DhWf1QfaGWgLfYMa-L7~lOMbshH9SQ10yCgWF9Z9JB2Dh9wIr9L9pVpQKV~46YLUb~fwZkDH-~yUs-wOPbiKwWm2Ls7oOz0fqoV~a21mxFutK9Ac-05UjGSXmwzNPIFHnxH5DBxEAdCPw0T3zz0yGw__",
      "https://media-hosting.imagekit.io/3bc930413cbb41a7/Screenshot_3_waifu2x_photo_noise1_scale.png?Expires=1841123131&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cO5qkvPz46gR1cWT-bAww2GNfaXmZh~g7EybxrVBD10SY6sEuqwp2w0C8cLBFCC3dg2thyAj8MseMi0jbXiAs3dGagDiKSq2Bf8zwIBkhaud2GrnZ2op2kUFgEk7HcTGjWr6wrY9rSZy6iOLHKHTiA7T1VAcxop6Rkt9sA5RIYxvvr-lz0bYR3YWr2LIIhX~llo3KNgF1v5ESK8kFMPhFzTzhSxyzZ7mM5G5EM7TYfxlGrw50Q7ZQd9IEwGRlXMBEax8cOHYAkU59ce58S~587OqRcDo6ltyOsh5Kgm1vGUO8XIjLC-IAZ3mzgrPoDJYeuFAf6k2W6el7~X3A0TrEQ__"
    ],
    tags: ["Arduino UNO", "Microprocessor", "Interface", "Internet of Things", "Bluetooth"],
    details: {
      challenge: "Mengontrol peralatan listrik secara jarak jauh merupakan tantangan utama dalam otomasi rumah sederhana, terutama jika pengguna tidak memiliki akses terhadap jaringan internet atau perangkat IoT mahal. Tantangan proyek ini adalah membuat sistem pengendali lampu yang hemat biaya, mudah dipasang, dan dapat dikontrol melalui smartphone tanpa memerlukan koneksi internet.",
      solution: "Solusi yang dibuat adalah sistem kendali lampu menggunakan Arduino Uno, modul Bluetooth HC-05, dan relay sebagai saklar elektronik. Melalui aplikasi 'Serial Bluetooth Terminal', pengguna dapat mengirimkan perintah sederhana ('1' untuk mematikan dan '0' untuk menyalakan lampu), yang diproses oleh Arduino untuk mengatur kondisi relay. Sistem ini memungkinkan kendali langsung tanpa internet, hanya dengan sambungan Bluetooth.",
      impact: [
        "Dengan sistem ini, pengguna dapat mengontrol lampu rumah hanya melalui koneksi Bluetooth dari smartphone. Ini meningkatkan kenyamanan dan efisiensi energi, serta memberikan solusi awal untuk konsep smart home sederhana dengan biaya rendah. Proyek ini juga dapat dijadikan dasar untuk pengembangan kontrol perangkat lain secara nirkabel.",
      ]
    }
  }
];
