const SITE_DATA = {
  brand: {
    name: "NOTARIS",
    highlight: "WENIKA",
    logo: "logo-notaris-wenika.png",
    url: "index.html",
  },

  social: [
    { icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-instagram", url: "#", label: "Instagram" },
    { icon: "fab fa-tiktok", url: "#", label: "TikTok" },
  ],

  contacts: [
    {
      icon: "fab fa-whatsapp",
      text: "081932122224",
      url: "https://wa.me/6281932122224",
    },
    {
      icon: "fas fa-envelope",
      text: "wenikapriastuti@gmail.com",
      url: "mailto:wenikapriastuti@gmail.com",
    },
    /*{
      icon: "fas fa-user",
      text: "Admin",
      url: "admin.html",
    },*/
  ],

  menu: [
    {
      label: "Home",
      icon: "fas fa-home",
      url: "index.html",
      active: true,
    },
    {
      label: "Promo",
      icon: "fa-solid fa-check",
      url: "promo.html",
    },
    {
      label: "Tentang Kami",
      icon: "fa-solid fa-user",
      url: "about.html",
    },
    {
      label: "Layanan Kami",
      icon: "fas fa-clone",
      dropdown: [
        {
          label: "Penerbitan Legalitas Usaha",
          children: [
            { label: "CV", url: "pendirian-cv.html" },
            { label: "PT", url: "pendirian-pt.html" },
            { label: "Yayasan", url: "pendirian-yayasan.html" },
            { label: "Koperasi", url: "pendirian-koperasi.html" },
            { label: "PMA", url: "pendirian-pma.html" },
            { label: "Firma", url: "pendirian-firma.html" },
          ],
        },
        { label: "Konsultasi Legalitas", url: "konsultasi-legalitas.html" },
        /*{ label: "Private Office", url: "private-office.html" },*/
        /*{ label: "Virtual Office", url: "virtual-office.html" },*/
      ],
    },
    {
      label: "Karir",
      icon: "fa-solid fa-users",
      url: "carrer.html",
    },
    {
      label: "Testimoni",
      icon: "fa-solid fa-check",
      url: "testimoni.html",
    },
    {
      label: "Artikel",
      icon: "fa-solid fa-paperclip",
      url: "article.html",
    },
    {
      label: "Contact",
      icon: "fas fa-phone",
      dropdown: [
        {
          label: "081932122224",
          icon: "fab fa-whatsapp",
          url: "https://wa.me/6281932122224",
        },
        {
          label: "085214056596",
          icon: "fab fa-whatsapp",
          url: "https://wa.me/085214056596",
        },
        {
          label: "081291341979",
          icon: "fab fa-whatsapp",
          url: "https://wa.me/081291341979",
        },
      ],
    },
  ],

  callCenter: [
    {
      icon: "fab fa-whatsapp",
      text: "081932122224",
      url: "https://wa.me/6281932122224",
    },
    {
      icon: "fab fa-whatsapp",
      text: "081932122224",
      url: "https://wa.me/6281932122224",
    },
    {
      icon: "fab fa-whatsapp",
      text: "081932122224",
      url: "https://wa.me/6281932122224",
    },
  ],
};

/*======HERO SECTION===========*/
/*======HERO SECTION===========*/
/*======HERO SECTION===========*/

const HERO_DATA = {
  title: "Kantor Notaris",
  subtitle: "Wenika Priastuti Agustini, SH., M.Kn",
  description: "Solusi kebutuhan bisnis dan legalitas anda",

  cta: {
    label: "Hubungi Kami",
    icon: "fas fa-phone",
    url: "https://wa.me/6281932122224",
  },

  profiles: [
    {
      name: "Wenika Priastuti, SH., M.Kn",
      role: "CEO",
      image: "assets/foto1.png",
    },
  ],
};

/*========TAB KECIL LAYANAN KAMI=========*/
/*========TAB KECIL LAYANAN KAMI=========*/
/*========TAB KECIL LAYANAN KAMI=========*/

const serviceData = {
  section: {
    class: "view-tab-service-section",
    overlayClass: "view-tab-service-overlay",
    contentClass: "view-tab-service-content",
    title: "Layanan Kami",
    description: [
      {
        type: "text",
        value:
          "Temukan berbagai layanan perizinan dan legalitas. Kami menyediakan layanan pendirian PT, CV, dan yayasan, pengurusan izin usaha, serta konsultasi hukum. Dengan tim profesional dan berpengalaman, kami memastikan proses yang cepat, efisien, dan sesuai regulasi. "
      },
      {
        type: "link",
        label: "Klik di sini",
        url: "#"
      },
      {
        type: "text",
        value:
          " untuk mengetahui lebih lanjut tentang layanan kami dan bagaimana kami bisa membantu bisnis Anda."
      }
    ]
  }
};


/*======PROMO SECTION===========*/
/*======PROMO SECTION===========*/
/*======PROMO SECTION===========*/

const promoData = {
  title: "Promo Terbatas",
  description: "Ayo Tunggu Apa Lagi, Kami Akan Membantu Anda.",
  ctaText: "Klaim Sekarang",
  ctaLink: "https://wa.me/6281932122224",

  slides: [
    { id: 1, image: "assets/brosur_001.png", link: "pendirian-pt.html" },
    { id: 2, image: "assets/brosur_002.png", link: "pendirian-firma.html" },
    { id: 3, image: "assets/brosur_003.png", link: "pedirian.koperasi.html" },
    { id: 4, image: "assets/brosur_004.png", link: "pendirian-cv.html" },
    { id: 5, image: "assets/brosur_005.png", link: "pendirian-yayasan.html" },
    { id: 6, image: "assets/brosur_006.png", link: "pendirian-pma.html" },
  ],
};

/*======LAYANAN SECTION===========*/
/*======LAYANAN SECTION===========*/
/*======LAYANAN SECTION===========*/

const LAYANAN_DATA = {
  title: "One For All Solution",
  items: [
    {
      title: "Penerbitan Legalitas",
      description:
        "Terbitksan izin usaha anda mulai dari PT,CV, Firma, Koperasi, Yayasan, PMA.",
      image: "assets/brosur_006.png",
      url: "promo.html",
      buttonLabel: "Dirikan Perusahaan",
      icon: "fa fa-building",
    },
    {
      title: "Pendirian PT",
      description:
        "Pendirian PT. Lengkap untuk bisnis Anda. Kami menyediakan layanan pembuatan izin untuk usaha PT anda secara lengkap.",
      image: "assets/brosur_001.png",
      url: "https://wa.me/6281932122224",
      buttonLabel: "Hubungi Sekarang",
      icon: "fa fa-phone",
    },
    {
      title: "Pendirian Firma",
      description:
        "Pendirian Firma Lengkap. Kami menyediakan layanan pembuatan izin untuk Firma anda secara lengkap.",
      image: "assets/brosur_002.png",
      url: "https://wa.me/6281932122224",
      buttonLabel: "Hubungi Sekarang",
      icon: "fa fa-phone",
    },
    {
      title: "Pendirian Koperasi",
      description:
        "Pendirian Koperasi Lengkap untuk bisnis Anda. Kami menyediakan layanan pembuatan izin untuk Koperasi anda secara lengkap.",
      image: "assets/brosur_003.png",
      url: "https://wa.me/6281932122224",
      buttonLabel: "Hubungi Sekarang",
      icon: "fa fa-phone",
    },
    {
      title: "Pendirian CV",
      description:
        "Pendirian CV. Lengkap untuk bisnis Anda. Kami menyediakan layanan pembuatan izin untuk usaha CV anda secara lengkap.",
      image: "assets/brosur_004.png",
      url: "https://wa.me/6281932122224",
      buttonLabel: "Hubungi Sekarang",
      icon: "fa fa-phone",
    },
    {
      title: "Pendirian Yayasan",
      description:
        "Pendirian Yayasan Lengkap untuk Anda. Kami menyediakan layanan pembuatan izin Yayasan anda secara lengkap.",
      image: "assets/brosur_001.png",
      url: "https://wa.me/6281932122224",
      buttonLabel: "Hubungi Sekarang",
      icon: "fa fa-phone",
    },
  ],
};

/*======VIRTUAL OFFICE SECTION===========*/
/*======VIRTUAL OFFICE SECTION===========*/
/*======VIRTUAL OFFICE SECTION===========*/

const VIRTUAL_OFFICE_DATA = {
  title: "Pilihan Virtual Office Kami",
  items: [
    {
      image: "assets/brosur_001.png",
      price: "Rp 300rb/bln",
      heading: "Virtual Office Jakarta Selatan",
      location: "Kuningan, Jakarta Selatan",
      description:
        "Alamat bisnis bergengsi dengan fasilitas surat menyurat lengkap.",
    },
    {
      image: "assets/brosur_002.png",
      price: "Rp 250rb/bln",
      heading: "Virtual Office Bandung",
      location: "Asia Afrika, Bandung",
      description:
        "Lokasi strategis di pusat kota untuk menunjang kredibilitas usaha.",
    },
    {
      image: "assets/brosur_003.png",
      price: "Rp 275rb/bln",
      heading: "Virtual Office Surabaya",
      location: "Gubeng, Surabaya",
      description: "Akses mudah dan layanan resepsionis profesional.",
    },
    {
      image: "assets/brosur_004.png",
      price: "Rp 350rb/bln",
      heading: "Virtual Office Bali",
      location: "Kuta, Bali",
      description: "Cocok untuk startup dan bisnis kreatif di area pariwisata.",
    },
  ],
};

/*======KEUNGGULAN SECTION===========*/
/*======KEUNGGULAN SECTION===========*/
/*======KEUNGGULAN SECTION===========*/

const KEUNGGULAN_DATA = {
  title: "Keunggulan Kami, Kekuatan Bisnis Anda",
  image: "assets/women-office.png",
  activeIndex: 0,
  items: [
    {
      title: "Profesional",
      description:
        "Memiliki tim yang ahli untuk pendirian usaha dan konsultasi legalitas usaha.",
    },
    {
      title: "Terlengkap",
      description:
        "Memiliki layanan terlengkap untuk bisnis Anda dengan proses cepat dan efisien.",
    },
    {
      title: "Tercepat",
      description:
        "Proses cepat dengan dukungan tim profesional dan sistem terintegrasi.",
    },
    {
      title: "Terluas",
      description: "Jaringan kantor tersebar di berbagai kota besar Indonesia.",
    },
    {
      title: "Terpercaya",
      description:
        "Dipercaya lebih dari 10.000+ perusahaan dengan reputasi positif.",
    },
  ],
};

/*======ISO SECTION===========*/
/*======ISO SECTION===========*/
/*======ISO SECTION===========*/

const ISO_DATA = {
  title: "Legalitas",
  description:
    "Kami telah memenuhi standar dalam pengelolaan layanan dan operasional pengurusan Izin , sebagai bentuk komitmen terhadap kualitas dan profesionalisme.",
  certificates: [
    {
      image: "assets/brosur_001.png",
      alt: "ISO Certificate 1",
    },
    {
      image: "assets/brosur_002.png",
      alt: "ISO Certificate 2",
    },
    {
      image: "assets/brosur_003.png",
      alt: "ISO Certificate 3",
    },
  ],
};

/*======CLIENT LOGO SECTION===========*/
/*======CLIENT LOGO SECTION===========*/
/*======CLIENT LOGO SECTION===========*/

const CLIENT_LOGO_DATA = {
  title: 'Telah Dipercaya Lebih dari <span id="clientCount"></span> Klien',
  logos: [
    { image: "assets/brosur_001.png", alt: "Client 1" },
    { image: "assets/brosur_002.png", alt: "Client 2" },
    { image: "assets/brosur_003.png", alt: "Client 3" },
    { image: "assets/brosur_004.png", alt: "Client 4" },
    { image: "assets/brosur_005.png", alt: "Client 5" },
    { image: "assets/brosur_002.png", alt: "Client 2" },
    { image: "assets/brosur_003.png", alt: "Client 3" },
    { image: "assets/brosur_004.png", alt: "Client 4" },
    { image: "assets/brosur_005.png", alt: "Client 5" },
    { image: "assets/brosur_002.png", alt: "Client 2" },
    { image: "assets/brosur_003.png", alt: "Client 3" },
    { image: "assets/brosur_004.png", alt: "Client 4" },
    { image: "assets/brosur_005.png", alt: "Client 5" },
    { image: "assets/brosur_002.png", alt: "Client 2" },
    { image: "assets/brosur_003.png", alt: "Client 3" },
    { image: "assets/brosur_004.png", alt: "Client 4" },
    { image: "assets/brosur_005.png", alt: "Client 5" },
    { image: "assets/brosur_002.png", alt: "Client 2" },
    { image: "assets/brosur_003.png", alt: "Client 3" },
    { image: "assets/brosur_004.png", alt: "Client 4" },
    { image: "assets/brosur_005.png", alt: "Client 5" },
    { image: "assets/brosur_006.png", alt: "Client 6" },
    // tinggal tambah sampai 40 tanpa sentuh HTML
  ],
};

/*======TESTIMONI SECTION===========*/
/*======TESTIMONI SECTION===========*/
/*======TESTIMONI SECTION===========*/

const TESTIMONIAL_DATA = {
  title: "Apa Kata Klien Kami",
  subtitle: "Kepercayaan klien adalah prioritas utama kami",

  testimonials: [
    {
      clientPhoto: "assets/brosur_001.png",
      clientName: "Andi Pratama",
      clientRole: "Direktur • PT Maju Bersama",
      companyLogo: "assets/brosur_002.png",
      text: "Pelayanan sangat profesional dan cepat. Tim sangat responsif dan membantu dari awal hingga selesai.",
      date: "12 Juni 2025",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fas fa-globe", url: "#" },
      ],
    },
    {
      clientPhoto: "assets/brosur_003.png",
      clientName: "Siti Rahma",
      clientRole: "HR Manager • CV Sukses Mandiri",
      companyLogo: "assets/brosur_004.png",
      text: "Sangat direkomendasikan. Proses legalitas cepat dan jelas, tanpa ribet.",
      date: "28 Mei 2025",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
      ],
    },
    {
      clientPhoto: "assets/brosur_006.png",
      clientName: "Budi Santoso",
      clientRole: "Owner • PT Nusantara Jaya",
      companyLogo: "assets/brosur_001.png",
      text: "Pendampingan sangat detail dan transparan. Sangat membantu bisnis kami berkembang.",
      date: "3 Mei 2025",
      socials: [{ icon: "fab fa-instagram", url: "#" }],
    },
  ],
};

/*======CTA MINI SECTION===========*/
/*======CTA MINI SECTION===========*/
/*======CTA MINI SECTION===========*/

const CTA_MINI_DATA = {
  title: "Bangun Masa Depan Bisnis Anda",
  subtitle: "Kami siap membantu",

  contacts: [
    {
      icon: "fab fa-whatsapp",
      label: "0859 4579 4545",
      url: "https://wa.me/6285945794545",
    },
    {
      icon: "fab fa-whatsapp",
      label: "0812 8094 7373",
      url: "https://wa.me/6281280947373",
    },
    {
      icon: "fab fa-whatsapp",
      label: "0819 3128 9872",
      url: "https://wa.me/6281931289872",
    },
  ],
};

/*======FOOTER SECTION===========*/
/*======FOOTER SECTION===========*/
/*======FOOTER SECTION===========*/

const FOOTER_DATA = {
  info: {
    title: "NOTARIS WENIKA",
    description:
      "Layanan notaris profesional dengan standar tertinggi untuk kebutuhan hukum dan bisnis Anda.",
    socials: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-tiktok", url: "#" },
    ],
  },

  quickLinks: [
    { label: "Home", url: "index.html" },
    { label: "Promo", url: "promo.html" },
    { label: "Tentang Kami", url: "about.html" },
    { label: "Pendirian CV", url: "penririan-cv.html" },
    { label: "Pendirian PT", url: "penririan-pt.html" },
    { label: "Pendirian Yayasan", url: "penririan-yayasan.html" },
    { label: "Penerbitan Legalitas", url: "penerbitan-legalitas.html" },
    { label: "Konsultasi Pajak", url: "konsultasi-legalitas.html" },
    /*{ label: "Private Office", url: "private-office.html" },*/
    /*{ label: "Virtual Office", url: "virtual-office.html" },*/
    { label: "Karir", url: "carrer.html" },
    { label: "Testimoni", url: "testimoni.html" },
    { label: "Artikel", url: "article.html" },
  ],

  contact: [
    {
      icon: "fas fa-map-marker-alt",
      text: "Jl. Percetakan Negara - Jakarta Pusat",
    },
    {
      icon: "fab fa-whatsapp",
      text: "081932122224",
      url: "https://wa.me/6281932122224",
    },
    {
      icon: "fab fa-whatsapp",
      text: "085214056596",
      url: "https://wa.me/6285214056596",
    },
    {
      icon: "fas fa-envelope",
      text: "wenikapriastuti@gmail.com",
      url: "mailto:wenikapriastuti@gmail.com",
    },
  ],

  copyright: "Notaris Wenika Priastuti. All Rights Reserved.",
};

/*const PROMO_SECTION_DATA = {
  title: "Promo Spesial",
  description: "Solusi Bisnis Terpercaya Anda",

  teamProfiles: [
    {
      name: "Wenika Priastuti, SH., M.Kn",
      role: "CEO",
      image: "assets/foto1.png"
    }
  ]
};*/

/*const PROMO_CARDS_DATA = [
  {
    title: "PT",
    image: "assets/brosur_001.png",
    url: "https://example.com"
  },
  {
    title: "CV",
    image: "assets/brosur_002.png",
    url: "https://example.com"
  },
  {
    title: "Koperasi",
    image: "assets/brosur_003.png",
    url: "https://example.com"
  },
  {
    title: "Yayasan",
    image: "assets/brosur_004.png",
    url: "https://example.com"
  },
  {
    title: "Firma",
    image: "assets/brosur_005.png",
    url: "https://example.com"
  },
  {
    title: "PMA",
    image: "assets/brosur_006.png",
    url: "https://example.com"
  }
];*/


/*=================*/
/*=================*/
/*=================*/

const promoDataView = {
  header: {
    title: "Promo",
    subtitle: "Kami menawarkan paket promo untuk memenuhhi izin usaha anda :"
  },
  cards: [
    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "PT LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama PT",
        "Akta Pendirian PT dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [
        "Rekening Perusahaan",
        "Gratis Desain Logo, Kop Surat, Kartu Nama & Stempel"
      ],
      price: "Rp. 4.000.000",
      link: "https://wa.me/6281932122224"
    },

    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "CV LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama CV",
        "Akta Pendirian CV dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [
        "Gratis Desain Logo, Kop Surat, Kartu Nama & Stempel",
        "Gratis Pengurusan PKP (Khusus JABODETABEK)"
      ],
      price: "Rp. 3.000.000",
      link: "https://wa.me/6281932122224"
    },

    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "FIRMA LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama Firma",
        "Akta Pendirian Firma dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [],
      price: "Rp. 3.000.000",
      link: "https://wa.me/6281932122224"
    },

    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "KOPERASI LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama Koperasi",
        "Akta Pendirian Koperasi dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [],
      price: "Rp. 3.000.000",
      link: "https://wa.me/6281932122224"
    },

    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "YAYASAN LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama Yayasan",
        "Akta Pendirian Yayasan dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [],
      price: "Rp. 3.500.000",
      link: "https://wa.me/6281932122224"
    },

    {
      icon: "🏢",
      smallTitle: "Paket Pendirian",
      title: "PMA LENGKAP",
      features: [
        "Pengecekan & Pemesanan Nama PMA",
        "Akta Pendirian PMA dari Notaris",
        "SK Pengesahan KEMENKUMHAM",
        "NPWP BADAN",
        "SKT KPP",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha)",
        "Rekening Giro"
      ],
      bonus: [],
      price: "Rp. 3.000.000",
      link: "https://wa.me/6281932122224"
    }
  ]
};




























const viewNdInfoData = {
  sectionClass: "view-nd-info-section",
  particlesClass: "view-nd-info-particles",
  containerClass: "view-nd-info-container",
  columnClass: "view-nd-info-column",
  listClass: "view-nd-info-steps-list",

  columns: [
    {
      title: "Persyaratan",
      items: [
        "Kartu Tanda Penduduk (KTP)",
        "Kartu Keluarga (KK)",
        "NPWP Pribadi",
        "Telah mempunyai nama CV",
        "Telah mempunyai lokasi kedudukan CV",
        "Tujuan kegiatan usaha harus jelas"
      ]
    },
    {
      title: "Alur Pemesanan",
      items: [
        "Menghubungi Call Center",
        "Estimasi penerbitan maksimal 2 hari kerja setelah penandatanganan Minuta."
      ]
    }
  ]
};



















const whyUsData = {
  sectionClass: "why-us-section",

  header: {
    class: "why-us-header",
    title: "Why Choose Us",
    underlineClass: "underline"
  },

  gridClass: "why-us-grid",

  items: [
    {
      iconClass: "fa-solid fa-gauge-high",
      title: "Proses Cepat",
      description:
        "Dengan tim berpengalaman, kami menawarkan layanan yang cepat, responsif, dan memberikan update secara berkala."
    },
    {
      iconClass: "fa-solid fa-tags",
      title: "Harga Kompetitif",
      description:
        "Kami berkomitmen untuk menawarkan harga yang kompetitif dibandingkan dengan pasar."
    },
    {
      iconClass: "fa-solid fa-handshake-angle",
      title: "Ramah dan Profesional",
      description:
        "Kami menyediakan layanan customer service yang ramah dan profesional, berusaha semaksimal mungkin mempermudah proses bagi seluruh pelanggan kami."
    },
    {
      iconClass: "fa-solid fa-arrows-to-circle",
      title: "Praktis",
      description:
        "Layanan kami mencakup seluruh Indonesia untuk pendirian usaha, dan seluruh proses dapat dilakukan secara online."
    },
    {
      iconClass: "fa-solid fa-users-gear",
      title: "Terpercaya",
      description:
        "Tim kami terdiri dari para profesional berpengalaman. Seluruh proses legalitas ditangani langsung oleh Tim kami tanpa pihak ketiga."
    },
    {
      iconClass: "fa fa-quote-right",
      title: "Garansi 100%",
      description:
        "Kami sangat memahami betapa pentingnya kepercayaan pelanggan. Oleh karena itu, kami menawarkan garansi 100% untuk setiap layanan."
    }
  ]
};




























const parallaxSectionData = {
  sectionClass: "parallax-section",
  containerClass: "container-cards",

  cards: [
    {
      iconClass: "fa-solid fa-check-double",
      title: "Mutu Sesuai Standar",
      description:
        "Pelaksanaan pekerjaan dengan perencanaan teliti, direview secara bertahap dari tim pelaksana hingga partner, untuk mengantisipasi kesalahan dan terus meningkatkan kualitas."
    },
    {
      iconClass: "fa-solid fa-thumbs-up",
      title: "Hasil Terbaik",
      description:
        "Kami memiliki misi untuk memberikan hasil pekerjaan yang terbaik kepada Klien. Untuk itu, Konsulpedia telah menerapkan standar kualitas yang tinggi akan Pekerjaan."
    },
    {
      iconClass: "fa-solid fa-dollar",
      title: "Biaya Terjangkau",
      description:
        "Walaupun kami memberikan kualitas terbaik kepada Klien. Kami tetap menawarkan solusi yang terjangkau untuk memenuhi kebutuhan bisnis Anda dan menawarkan biaya yang terjangkau."
    }
  ]
};
















const viewAboutNotaryOfficeSectionData = {
  sectionId: "viewAboutSection",
  sectionClass: "view-about-section",
  containerClass: "view-about-container",

  header: {
    headerClass: "view-about-header",
    titleClass: "view-about-title",
    titleText: "KANTOR NOTARIS",
    nameClass: "view-about-name",
    nameText: "WENIKA PRIASTUTI AGUSTINI, SH., M.Kn.",
    lineClass: "header-line"
  },

  contentWrapperClass: "view-about-content",

  textContent: {
    wrapperClass: "view-about-text",
    introClass: "intro-text",
    introText:
      "Kantor Notaris Wenika Priastuti Agustini, SH., M.Kn., merupakan sebuah institusi profesional yang berdiri sebagai pilar terpercaya di bidang hukum dan keabsahan dokumen. Dipimpin oleh seorang Notaris yang tidak hanya berkompeten di bidangnya, tetapi juga memiliki integritas serta dedikasi tinggi.",

    subtitleClass: "content-subtitle",
    subtitleText: "Ruang Lingkup Pelayanan:",

    serviceListClass: "service-list",

    services: [
      {
        number: "1",
        title: "Pendirian PT",
        description:
          "Asistensi lengkap mulai dari pengecekan nama hingga pengurusan NIB."
      },
      {
        number: "2",
        title: "Pendirian CV",
        description:
          "Solusi tepat bagi usaha dengan karakteristik mitra aktif dan pasif."
      },
      {
        number: "3",
        title: "Pembentukan Yayasan",
        description:
          "Mewujudkan visi sosial melalui pendirian perkumpulan berbadan hukum."
      },
      {
        number: "4",
        title: "Pendirian Firma (Fa)",
        description:
          "Melayani persekutuan untuk profesional dengan nama bersama."
      },
      {
        number: "5",
        title: "Pembentukan Koperasi",
        description:
          "Mendukung ekonomi kerakyatan sesuai prinsip koperasi."
      },
      {
        number: "6",
        title: "PMA & PMDN",
        description:
          "Mengakomodasi kebutuhan investasi asing maupun domestik secara legal."
      }
    ],

    closingClass: "closing-text",
    closingText:
      "Kantor ini bukan hanya pembuat akta, melainkan legal partner yang memberikan konsultasi hukum preventif demi keamanan transaksi Anda."
  },

  imageSide: {
    wrapperClass: "view-about-image-side",
    cardClass: "image-card",
    imageSrc: "assets/foto1.png",
    imageAlt: "Wenika Priastuti Agustini, SH., M.Kn.",
    captionName: "Wenika Priastuti Agustini, SH., M.Kn.",
    captionRole: "Notaris"
  }
};
































const viewAboutTeamData = {
  sectionClass: "view-about-team",
  sectionId: "viewAboutTeam",

  header: {
    wrapperClass: "view-about-team-section",
    titleClass: "view-about-team-title",
    title: "The Team",
    dividerClass: "view-about-team-divider"
  },

  containerClass: "view-about-team-container",

  cards: [
    {
      image: {
        wrapperClass: "view-about-team-image-wrapper",
        src: "assets/foto1.png",
        alt: "Wenika Priastuti Agustini, SH., M.Kn.",
        loading: "lazy"
      },
      info: {
        name: "Wenika Priastuti Agustini, SH., M.Kn.",
        role: "Notaris",
        descriptions: [
          "Latar belakang pendidikan yang mendalam, yakni gelar Sarjana Hukum (SH.) dan Magister Kenotariatan (M.Kn.), yang dipadukan dengan pengalaman praktis yang matang, telah membekali beliau dengan keahlian menyeluruh dalam merancang dan menerbitkan berbagai akta otentik.",
          "Setiap dokumen yang dihasilkan bukan sekadar formalitas, melainkan perwujudan dari analisis hukum yang mendalam dan kepatuhan terhadap perundang-undangan."
        ]
      }
    },
    {
      image: {
        wrapperClass: "view-about-team-image-wrapper",
        src: "assets/foto1.png",
        alt: "Wenike Astuti Agustina, SH., M.Kn.",
        loading: "lazy"
      },
      info: {
        name: "Wenike Astuti Agustina, SH., M.Kn.",
        role: "Partner / Notaris",
        descriptions: [
          "Latar belakang pendidikan yang mendalam, yakni gelar Sarjana Hukum (SH.) dan Magister Kenotariatan (M.Kn.), yang dipadukan dengan pengalaman praktis yang matang, telah membekali beliau dengan keahlian menyeluruh dalam merancang dan menerbitkan berbagai akta otentik.",
          "Setiap dokumen yang dihasilkan bukan sekadar formalitas, melainkan perwujudan dari analisis hukum yang mendalam dan kepatuhan terhadap perundang-undangan."
        ]
      }
    }
  ]
};



























const viewAboutExplanSectionData = {
  sectionClass: "view-about-explan",

  containerClass: "view-about-explan-container",
  contentClass: "view-about-explan-content",

  titlePrimary: "Solusi Perizinan Perusahaan",
  titleSecondary: "Kami Yang Membantu Legalitas Usaha Anda",

  description:
    "Konsulpedia akan membantu Anda untuk mengidentifikasi jenis pajak yang tepat untuk bisnis Anda sesuai dengan aturan yang berlaku serta, pelaporan, dan membantu dalam teknis.",

  button: {
    href: "https://wa.me/6281932122224",
    class: "view-about-explan-btn-primary",
    label: "Konsultasi Sekarang"
  }
};























const viewTargetVisionMissionSectionData = {
  sectionClass: "view-target-content",
  containerClass: "view-target-container",

  titleSection: {
    wrapperClass: "view-target-section-title",
    title: "Visi & Misi Kami",
    dividerClass: "view-target-divider"
  },

  visionMissionWrapperClass: "view-target-vision-mission",

  vision: {
    boxClass: "view-target-vision-box",
    titleHTML: '<i class="fas fa-eye"></i> Visi Kami',
    description:
      "Menjadi mitra terpercaya dan solusi terdepan dalam mengoptimalkan kinerja bisnis klien melalui layanan konsultan yang inovatif dan berkualitas tinggi."
  },

  mission: {
    boxClass: "view-target-mission-box",
    titleHTML: '<i class="fas fa-bullseye"></i> Misi Kami',
    description:
      "Memberikan solusi konsultan profesional dan terpercaya untuk kepuasan klien dan pertumbuhan bisnis yang berkelanjutan."
  }
};
























const viewServiceFeaturedSectionData = {
  sectionClass: "view-serv-section",
  containerClass: "view-serv-container",

  titleSection: {
    wrapperClass: "view-serv-section-title",
    title: "Layanan Unggulan Kami",
    dividerClass: "view-serv-divider"
  },

  cardsWrapperClass: "view-serv-cards-container",

  services: [
    {
      cardClass: "view-serv-card",
      iconClass: "fas fa-file-contract",
      title: "Perizinan Perusahaan",
      description:
        "Kami membantu proses perizinan usaha lengkap mulai dari pendirian PT, CV, hingga perizinan sektor khusus sesuai dengan kebutuhan bisnis Anda."
    },
    {
      cardClass: "view-serv-card",
      iconClass: "fas fa-calculator",
      title: "Konsultasi Perusahaan",
      description:
        "Layanan konsultasi Perusahaan untuk memastikan kepatuhan perpajakan dan optimalisasi beban pajak perusahaan Anda."
    },
    {
      cardClass: "view-serv-card",
      iconClass: "fas fa-chart-line",
      title: "Analisis Bisnis",
      description:
        "Memberikan analisis mendalam terhadap model bisnis Anda untuk mengidentifikasi peluang optimasi dan strategi pengembangan."
    }
  ]
};































const viewCareerJobVacancySectionData = {
  sectionClass: "view-career-section",
  containerClass: "view-career-container",

  heading: {
    tag: "h2",
    text: "Mulai Karirmu di sini"
  },

  gridClass: "view-career-grid",

  cards: [
    {
      status: "Tersedia",
      position: "Accounting",
      qualificationLabel: "Kualifikasi:",
      qualificationText:
        "Bersedia ditempatkan di seluruh cabang kami",
      applyLink: "#",
      applyBtnClass: "view-btn-apply-carrer",
      applyText: "Lamar Sekarang"
    },
    {
      status: "Tersedia",
      position: "Marketing",
      qualificationLabel: "Kualifikasi:",
      qualificationText:
        "Bersedia ditempatkan di seluruh cabang kami",
      applyLink: "#",
      applyBtnClass: "view-btn-apply-carrer",
      applyText: "Lamar Sekarang"
    },
    {
      status: "Tersedia",
      position: "Digital Marketing",
      qualificationLabel: "Kualifikasi:",
      qualificationText:
        "Bersedia ditempatkan di seluruh cabang kami",
      applyLink: "#",
      applyBtnClass: "view-btn-apply-carrer",
      applyText: "Lamar Sekarang"
    },
    {
      status: "Tersedia",
      position: "Legal Officer",
      qualificationLabel: "Kualifikasi:",
      qualificationText:
        "Bersedia ditempatkan di seluruh cabang kami",
      applyLink: "#",
      applyBtnClass: "view-btn-apply-carrer",
      applyText: "Lamar Sekarang"
    },
    {
      status: "Tersedia",
      position: "Admin Support",
      qualificationLabel: "Kualifikasi:",
      qualificationText:
        "Bersedia ditempatkan di seluruh cabang kami",
      applyLink: "#",
      applyBtnClass: "view-btn-apply-carrer",
      applyText: "Lamar Sekarang"
    }
  ]
};



























const viewTabCompanyFeatureReasonsSectionData = {
  sectionClass: "view-tab-features-section",
  containerClass: "view-tab-features-container",

  heading: {
    tag: "h2",
    text: "Ini Alasannya Anda Harus Memilih Kami"
  },

  gridClass: "view-tab-features-grid",

  features: [
    {
      itemClass: "view-tab-feature-item",
      title: "Cakupan Wilayah",
      description:
        "Jasa Penerbitan Legalitas PT, CV, Koperasi, Yayasan, Firma, PMA mencakup wilayah diseluruh Indonesia."
    },
    {
      itemClass: "view-tab-feature-item",
      title: "Dipercayai Ribuan Klien",
      description:
        "Memiliki rekanan notaris terbaik dan rekanan Bank ternama di Indonesia untuk pembukaan rekening giro perusahaan."
    },
    {
      itemClass: "view-tab-feature-item",
      title: "Membantu Program Pemerintah",
      description:
        "Kami membantu seluruh pengurusan legalitas Akta & SK Menteri, perpajakan, branding, pembuatan website perusahaan, dan paket legalitas lanjutan."
    },
    {
      itemClass: "view-tab-feature-item",
      title: "Proses yang Cepat",
      description:
        "Memiliki rekanan notaris terbaik dan rekanan Bank ternama di Indonesia untuk pembukaan rekening giro perusahaan."
    }
  ]
};




























const viewTabBusinessLicenseStepsSectionData = {
  sectionClass: "view-tab-steps-section",

  content: {
    wrapperClass: "view-tab-steps-content",

    heading: {
      tag: "h2",
      text: "3 Langkah Mudah Mengurus Perizinan Usaha"
    },

    subDescription: {
      class: "view-tab-sub-desc",
      text: `Kami memberikan kemudahan bagi Anda dalam perizinan dan pembuatan
      Perusahaan mendapatkan layanan yang dibutuhkan yaitu dengan langkah
      berikut:`
    },

    steps: [
      {
        itemClass: "view-tab-step-item",
        icon: {
          src: "https://cdn-icons-png.flaticon.com/512/3120/3120612.png",
          alt: "Icon",
          class: "view-tab-step-icon"
        },
        text: {
          title: "Konsultasi",
          description:
            "Anda hanya perlu menghubungi Customer Service kami dan menjelaskan layanan yang sedang anda butuhkan."
        }
      },
      {
        itemClass: "view-tab-step-item",
        icon: {
          src: "https://cdn-icons-png.flaticon.com/512/2620/2620815.png",
          alt: "Icon",
          class: "view-tab-step-icon"
        },
        text: {
          title: "Pengisian Data",
          description:
            "Anda akan didampingi dan dipandu oleh tim kami dalam proses pengisian data yang diperlukan."
        }
      },
      {
        itemClass: "view-tab-step-item",
        icon: {
          src: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
          alt: "Icon",
          class: "view-tab-step-icon"
        },
        text: {
          title: "Proses Pengerjaan",
          description:
            "Kami akan melakukan proses pengerjaan serta akan memberikan update progres pekerjaan sampai selesai."
        }
      }
    ]
  },

  imageSide: {
    wrapperClass: "view-tab-steps-image",
    image: {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
      alt: "tim notaris wenika"
    }
  }
};






























const viewFaqBusinessEntitySectionData = {
  sectionClass: "view-faq-section",

  header: {
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Beberapa pertanyaan yang sering ditanyakan oleh pengusaha terkait badan usaha"
  },

  columns: [
    {
      items: [
        {
          question:
            "Apakah dapat membantu membuat PT diseluruh Indonesia?",
          answer:
            "Ya, Kami dapat melayani pengurusan legalitas di seluruh wilayah Indonesia secara digital dan terintegrasi."
        },
        {
          question:
            "Dokumen apa saja yang dibutuhkan untuk membuat PT / CV?",
          answer:
            "Dokumen yang dibutuhkan termasuk NPWP dan KTP Direktur, Komisaris, dan Pemegang Saham."
        },
        {
          question: "Apakah bisa mendirikan PT hanya 1 orang?",
          answer:
            "Ya, Anda bisa mendirikan PT Perorangan yang khusus diperuntukkan bagi usaha mikro dan kecil dengan 1 orang pendiri."
        },
        {
          question: "Apakah bisa mendirikan PT hanya 1 orang?",
          answer:
            "Ya, Anda bisa mendirikan PT Perorangan yang khusus diperuntukkan bagi usaha mikro dan kecil dengan 1 orang pendiri."
        }
      ]
    },
    {
      items: [
        {
          question: "Apa Perbedaan PT dan CV?",
          answer:
            "Perbedaan utama terletak pada status badan hukum, pemisahan harta kekayaan, dan struktur kepengurusan."
        },
        {
          question: "Berapa lama proses pembuatan badan usaha?",
          answer:
            "Estimasi pengerjaan biasanya memakan waktu 2-5 hari kerja setelah dokumen lengkap ditandatangani."
        },
        {
          question: "Bagaimana dengan sistem pembayarannya?",
          answer:
            "Sistem pembayaran dilakukan secara bertahap atau sesuai kesepakatan dengan jaminan keamanan transaksi."
        },
        {
          question: "Bagaimana dengan sistem pembayarannya?",
          answer:
            "Sistem pembayaran dilakukan secara bertahap atau sesuai kesepakatan dengan jaminan keamanan transaksi."
        }
      ]
    }
  ]
};
