document.addEventListener('DOMContentLoaded', function() {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
  });
  
  // Mobile Dropdown Toggle
  const dropdownBtns = document.querySelectorAll('.nav-dropdown-btn');
  
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const dropdown = this.parentElement;
      dropdown.classList.toggle('active');
    });
  });
  
  // Header Scroll Effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});














































  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;
  
    // Fungsi untuk menampilkan slide
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    // Fungsi untuk slide berikutnya
    function nextSlide() {
      let newIndex = (currentIndex + 1) % slides.length;
      showSlide(newIndex);
    }
  
    // Fungsi untuk slide sebelumnya
    function prevSlide() {
      let newIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    }
  
    // Auto slide
    function startAutoSlide() {
      intervalId = setInterval(nextSlide, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(intervalId);
    }
  
    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        stopAutoSlide();
        startAutoSlide();
      });
    });
  
    // Start auto slide
    startAutoSlide();
  
    // Pause auto slide ketika hover
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  });























































  

document.querySelector('.read-more-btn1').addEventListener('click', function() {
  const contentWrapper = this.closest('.about-content2').querySelector('.text-content');
  const isExpanded = contentWrapper.classList.toggle('expanded');
  
  // Update ARIA attribute
  this.setAttribute('aria-expanded', isExpanded);
  
  // Animasi smooth scroll (opsional)
  if (isExpanded) {
    contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
  } else {
    contentWrapper.style.maxHeight = 'none';
  }
});



































document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioOverlay = document.createElement('div');
    portfolioOverlay.className = 'portfolio-overlay';
    document.body.appendChild(portfolioOverlay);
    
    // Buat tombol close
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    document.body.appendChild(closeBtn);
    closeBtn.style.display = 'none';
    
    // Variabel untuk menyimpan scroll position
    let scrollPosition = 0;
    
    // Fungsi untuk menutup portfolio
    function closePortfolio() {
        document.querySelector('.portfolio-item.active')?.classList.remove('active');
        portfolioOverlay.style.display = 'none';
        closeBtn.style.display = 'none';
        document.body.style.overflow = 'auto'; // Mengembalikan scroll body
        document.documentElement.style.position = 'static';
    }
    
    // Klik item portfolio
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Tutup yang sedang aktif
            document.querySelector('.portfolio-item.active')?.classList.remove('active');
            
            // Buka yang diklik
            this.classList.add('active');
            portfolioOverlay.style.display = 'block';
            closeBtn.style.display = 'block';
            
            // Simpan posisi scroll saat ini
            scrollPosition = window.pageYOffset;
            
            // Nonaktifkan scroll pada body
            //document.body.style.overflow = 'hidden';
            //document.body.style.position = 'fixed';
            //document.body.style.top = `-${scrollPosition}px`;
            //document.body.style.width = '100%';
            
            // Aktifkan scroll pada konten portfolio
            const details = this.querySelector('.portfolio-details');
            if (details) {
                details.style.overflowY = 'auto';
                details.style.maxHeight = 'calc(100vh - 420px)'; // Sesuaikan dengan kebutuhan
            }
        });
    });
    
    // Klik overlay atau tombol close
    portfolioOverlay.addEventListener('click', closePortfolio);
    closeBtn.addEventListener('click', closePortfolio);
    
    // Handle resize window untuk mobile
    window.addEventListener('resize', function() {
        const activeItem = document.querySelector('.portfolio-item.active');
        if (activeItem) {
            const details = activeItem.querySelector('.portfolio-details');
            if (details) {
                // Sesuaikan tinggi maksimal berdasarkan viewport
                details.style.maxHeight = 'calc(100vh - 420px)';
            }
        }
    });
});























































































document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Function to activate tab
  function activateTab(tabId) {
    // Remove active class from all buttons and contents
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Show corresponding content
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add('active');
  }
  
  // Set initial active tab (from HTML or default to first)
  const initialTab = document.querySelector('.tab-btn.active')?.dataset.tab || 'blog';
  activateTab(initialTab);
  
  // Add click event listeners
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      activateTab(tabId);
    });
  });
});






































































document.addEventListener('DOMContentLoaded', function() {
  // Testimonial data
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta esse ratione minus perferendis commodi dolor voluptas blanditiis nemo officiis temporibus, cum eius itaque perspiciatis?",
      name: "Budi Santoso",
      company: "Direktur PT. Maju Bersama",
      photo: "assets/foto/foto-jasa3.jpg",
      rating: 5
    },
    {
      text: "Kami sangat puas dengan hasil kerja Wenika. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      name: "Dewi Lestari",
      company: "CEO CV. Teknologi Inovasi",
      photo: "assets/foto/foto-jasa2.jpg",
      rating: 4.5
    },
    {
      text: "Kami sangat puas dengan hasil kerja Wenika. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      name: "Dewi Lestari",
      company: "CEO CV. Teknologi Inovasi",
      photo: "assets/foto/foto-jasa3.jpg",
      rating: 5
    },
    {
     text: "Kami sangat puas dengan hasil kerja Wenika. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      name: "Dewi Lestari",
      company: "CEO CV. Teknologi Inovasi",
      photo: "assets/foto/foto-jasa3.jpg",
      rating: 5
    }
  ];

  // DOM elements
  const container = document.querySelector('.testimonial-center-container');
  const dotsContainer = document.querySelector('.testimonial-dots');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;

  // Initialize testimonials
  function initTestimonials() {
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
      const card = document.createElement('div');
      card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="testimonial-content">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">${testimonial.text}</p>
          <div class="rating">
            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(testimonial.rating))}
            ${testimonial.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
          </div>
        </div>
        <div class="client-info">
          <img src="${testimonial.photo}" alt="${testimonial.name}" class="client-photo">
          <h4 class="client-name">${testimonial.name}</h4>
          <p class="client-company">${testimonial.company}</p>
        </div>
      `;
      container.appendChild(card);
    });

    // Create dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
      
      dot.addEventListener('click', () => {
        showTestimonial(index);
      });
    });
  }

  // Show specific testimonial
  function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Hide all cards and remove active dots
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected card and dot
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentIndex = index;
  }

  // Navigation functions
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Event listeners
  prevBtn.addEventListener('click', prevTestimonial);
  nextBtn.addEventListener('click', nextTestimonial);

  // Auto-rotate
  let autoRotate = setInterval(nextTestimonial, 5000);

  // Pause auto-rotate on hover
  container.addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
  });

  container.addEventListener('mouseleave', () => {
    autoRotate = setInterval(nextTestimonial, 5000);
  });

  // Initialize
  initTestimonials();
});




















































document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact form');
  const waktuInput = document.getElementById('waktu');
  const submitButton = document.querySelector('.contact form .btn');

  // Fungsi untuk mengisi waktu secara otomatis
  function isiWaktu() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Contoh format, bisa disesuaikan
    waktuInput.value = formattedTime;
  }

  // Panggil fungsi isiWaktu saat halaman dimuat
  isiWaktu();

  // Event listener untuk submit form
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Validasi sederhana (Anda bisa menambahkan validasi yang lebih kompleks)
    const namaInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const pesanInput = document.getElementById('pesan');

    if (!namaInput.value.trim()) {
      alert('Nama harus diisi.');
      namaInput.focus();
      return;
    }

    if (!phoneInput.value.trim()) {
      alert('Nomor HP harus diisi.');
      phoneInput.focus();
      return;
    }

    if (!pesanInput.value.trim()) {
      alert('Pesan harus diisi.');
      pesanInput.focus();
      return;
    }

    // Nonaktifkan tombol kirim dan ubah teksnya
    submitButton.disabled = true;
    submitButton.textContent = 'Mengirim...';

    // Kirim data formulir menggunakan Fetch API
    const formData = new FormData(contactForm);
    const action = contactForm.getAttribute('action'); // Ambil URL action dari form

    fetch(action, { // Ganti 'action' dengan URL server Anda jika berbeda
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        return response.text(); // Atau response.json() jika server mengembalikan JSON
      }
      throw new Error('Terjadi kesalahan saat mengirim pesan.');
    })
    .then(data => {
      alert('Pesan terkirim!'); // Tampilkan pesan sukses
      contactForm.reset(); // Reset formulir
      isiWaktu(); // Perbarui waktu
    })
    .catch(error => {
      alert('Gagal mengirim pesan: ' + error.message); // Tampilkan pesan error
    })
    .finally(() => {
      // Aktifkan kembali tombol kirim dan kembalikan teksnya
      submitButton.disabled = false;
      submitButton.textContent = 'Kirim Pesan';
    });
  });
});


