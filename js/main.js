document.addEventListener("DOMContentLoaded", () => {
  /* ================= TOP CONTACT ================= */
  const socialBox = document.getElementById("socialLinks");
  SITE_DATA.social.forEach((s) => {
    socialBox.innerHTML += `
      <a href="${s.url}" class="social-link-item" aria-label="${s.label}">
        <i class="${s.icon} social-icon"></i>
      </a>`;
  });

  const contactBox = document.getElementById("contactInfo");
  SITE_DATA.contacts.forEach((c) => {
    contactBox.innerHTML += `
      <a href="${c.url}" class="contact-info-item">
        <i class="${c.icon} contact-icon"></i>
        <span>${c.text}</span>
      </a>`;
  });

  /* ================= LOGO ================= */
document.getElementById("logo").innerHTML = `
  <a href="${SITE_DATA.brand.url}" class="logo-link">
    <div class="logo-container">
      <img src="${SITE_DATA.brand.logo}" 
           alt="${SITE_DATA.brand.name} ${SITE_DATA.brand.highlight}" 
           class="logo-image">
      <div class="logo-text">
        ${SITE_DATA.brand.name}
        <span>${SITE_DATA.brand.highlight}</span>
      </div>
    </div>
  </a>
`;

  

  /* ================= MENU ================= */
  const navMenu = document.getElementById("navMenu");
  navMenu.innerHTML = `<ul class="nav-menu-list">${buildMenu(
    SITE_DATA.menu
  )}</ul>`;

  function buildMenu(items) {
    return items
      .map((item) => {
        if (item.dropdown) {
          return `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            <i class="${item.icon} nav-icon"></i> ${item.label} ▾
          </a>
          <ul class="dropdown-menu">
            ${buildDropdown(item.dropdown)}
          </ul>
        </li>`;
        }

        return `
      <li class="nav-item">
        <a class="nav-link ${item.active ? "active" : ""}" href="${item.url}">
          <i class="${item.icon} nav-icon"></i> ${item.label}
        </a>
      </li>`;
      })
      .join("");
  }

  function buildDropdown(items) {
    return items
      .map((d) => {
        if (d.children) {
          return `
        <li class="dropdown-submenu dropdown">
          <a class="dropdown-item dropdown-toggle">${d.label} ▸</a>
          <ul class="dropdown-menu">
            ${d.children
              .map(
                (c) =>
                  `<li><a class="dropdown-item" href="${c.url}">${c.label}</a></li>`
              )
              .join("")}
          </ul>
        </li>`;
        }
        return `<li><a class="dropdown-item" href="${d.url}">${d.label}</a></li>`;
      })
      .join("");
  }

  /* ================= CALL CENTER MOBILE ================= */
  const contactDrop = document.getElementById("dropdownContact");
  SITE_DATA.callCenter.forEach((c) => {
    contactDrop.innerHTML += `
      <li>
        <a class="dropdown-items-contact" href="${c.url}">
          <i class="${c.icon}"></i> ${c.text}
        </a>
      </li>`;
  });
});

/* ================= MOBILE INTERACTION ================= */
const menuToggle = document.getElementById("menuToggle");
const navMenuContainer = document.querySelector(".nav-menu-container");
const contactToggle = document.getElementById("menuToggleContact");
const contactDropdown = document.getElementById("dropdownContact");

/* === HAMBURGER MENU === */
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  navMenuContainer.classList.toggle("is-open");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");

  contactDropdown.classList.remove("is-open");
});

/* === CONTACT MOBILE === */
contactToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  contactDropdown.classList.toggle("is-open");
  navMenuContainer.classList.remove("is-open");
});

/* === DROPDOWN MOBILE === */
document.addEventListener("click", (e) => {
  document
    .querySelectorAll(".dropdown > .dropdown-toggle")
    .forEach((toggle) => {
      toggle.addEventListener("click", function (ev) {
        if (window.innerWidth <= 992) {
          ev.preventDefault();
          this.closest(".dropdown").classList.toggle("is-open");
        }
      });
    });
});

/* === CLICK OUTSIDE === */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navigation-section")) {
    navMenuContainer.classList.remove("is-open");
    contactDropdown.classList.remove("is-open");

    menuToggle.querySelector("i").classList.add("fa-bars");
    menuToggle.querySelector("i").classList.remove("fa-times");
  }
});

/* === RESET RESIZE === */
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navMenuContainer.classList.remove("is-open");
    contactDropdown.classList.remove("is-open");

    document
      .querySelectorAll(".dropdown")
      .forEach((d) => d.classList.remove("is-open"));

    menuToggle.querySelector("i").classList.add("fa-bars");
    menuToggle.querySelector("i").classList.remove("fa-times");
  }
});






/*======HERO SECTION===========*/
/*======HERO SECTION===========*/
/*======HERO SECTION===========*/

/* ================= HERO SECTION ================= */
function renderHero() {
  // HERO HEADER
  const heroHeader = document.getElementById("heroHeader");
  if (heroHeader) {
    heroHeader.innerHTML = `
      <h1 class="hero-title">${HERO_DATA.title}</h1>
      <h2 class="hero-title">${HERO_DATA.subtitle}</h2>
      <p class="hero-description">${HERO_DATA.description}</p>

      <div class="hero-cta">
        <a href="${HERO_DATA.cta.url}" class="btn-hero">
          <i class="${HERO_DATA.cta.icon}"></i>
          ${HERO_DATA.cta.label}
        </a>
      </div>
    `;
  }

  // HERO PROFILES
  const heroProfilesGroup = document.getElementById("heroProfilesGroup");
  if (heroProfilesGroup && Array.isArray(HERO_DATA.profiles)) {
    heroProfilesGroup.innerHTML = HERO_DATA.profiles
      .map(
        profile => `
        <div class="profile-card">
          <img 
            src="${profile.image}" 
            class="profile-image-group" 
            alt="${profile.name}"
          >
          <div class="profile-details-label">
            <p class="name-text">${profile.name}</p>
            <p class="title-text-small">${profile.role}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // HERO CTA MOBILE
  const hero2Cta = document.getElementById("hero2Cta");
  if (hero2Cta) {
    hero2Cta.innerHTML = `
      <a href="${HERO_DATA.cta.url}" class="btn-hero">
        <i class="${HERO_DATA.cta.icon}"></i>
        ${HERO_DATA.cta.label}
      </a>
    `;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
});




/*======view-tab-service-root===========*/
/*======view-tab-service-root===========*/
/*======view-tab-service-root===========*/

function renderService(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const descHTML = data.section.description
    .map(item => {
      if (item.type === "text") return item.value;
      if (item.type === "link")
        return `<a href="${item.url}">${item.label}</a>`;
      return "";
    })
    .join("");

  root.innerHTML = `
    <section class="${data.section.class}">
      <div class="${data.section.overlayClass}"></div>
      <div class="${data.section.contentClass}">
        <h2>${data.section.title}</h2>
        <p>${descHTML}</p>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderService("view-tab-service-root", serviceData);
});


/*======PROMO SECTION===========*/
/*======PROMO SECTION===========*/
/*======PROMO SECTION===========*/

function renderPromoSection(data) {
    const container = document.getElementById("promoContainer");
    if (!container) return;

    const slidesHTML = data.slides.map(slide => `
        <div class="slide">
            <a href="${slide.link}">
                <img src="${slide.image}" alt="Promo ${slide.id}" draggable="false">
            </a>
        </div>
    `).join("");


  container.innerHTML = `
    <div class="promo-teks-container">
      <h2 class="promo-text">${data.title}</h2>
      <p class="promo-text-deskription">${data.description}</p>
      <div class="btn-cta-promo">
        <a href="${data.ctaLink}" class="btn-promo">${data.ctaText}</a>
      </div>
    </div>

    <div class="promo-slider">
      <button class="nav-btn-promo prev" id="prevBtnPromo">&#10094;</button>
      <button class="nav-btn-promo next" id="nextBtnPromo">&#10095;</button>

      <div class="slider-track" id="promoTrack">
        ${slidesHTML}
      </div>

      <div class="btn-cta-promo2">
        <a href="${data.ctaLink}" class="btn-promo">${data.ctaText}</a>
      </div>
    </div>
  `;

    // Inisialisasi slider SETELAH render
    initPromoSlider();
}

// 3. LOGIKA SLIDER (OPTIMAL)
function initPromoSlider() {
    const slider = document.querySelector(".promo-slider");
    const track = document.getElementById("promoTrack");
    const slides = Array.from(track.children);
    const prevBtn = document.getElementById("prevBtnPromo");
    const nextBtn = document.getElementById("nextBtnPromo");

    if (slides.length === 0) return;

    let currentIndex = 1; // Mulai dari 1 karena ada clone di depan
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let autoSlideInterval;

    // A. CLONING UNTUK INFINITE LOOP
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = track.querySelectorAll('.slide');
    
    // B. FUNGSI POSISI
    function setPositionByIndex() {
        const width = slider.offsetWidth;
        currentTranslate = currentIndex * -width;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function setSliderPosition() {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function updateSlider() {
        track.style.transition = "transform 0.5s ease-in-out";
        setPositionByIndex();
    }

    // C. INFINITE CHECK
    track.addEventListener("transitionend", () => {
        if (allSlides[currentIndex].isEqualNode(firstClone)) {
            track.style.transition = "none";
            currentIndex = 1;
            setPositionByIndex();
        }
        if (allSlides[currentIndex].isEqualNode(lastClone)) {
            track.style.transition = "none";
            currentIndex = allSlides.length - 2;
            setPositionByIndex();
        }
    });

    // D. KONTROL
    function moveNext() {
        if (currentIndex >= allSlides.length - 1) return;
        currentIndex++;
        updateSlider();
    }

    function movePrev() {
        if (currentIndex <= 0) return;
        currentIndex--;
        updateSlider();
    }

    // E. EVENT LISTENERS
    nextBtn.addEventListener("click", () => { moveNext(); startAutoSlide(); });
    prevBtn.addEventListener("click", () => { movePrev(); startAutoSlide(); });

    // F. DRAG / SWIPE LOGIC
    slider.addEventListener("mousedown", dragStart);
    slider.addEventListener("touchstart", dragStart, { passive: true });
    slider.addEventListener("mouseup", dragEnd);
    slider.addEventListener("mouseleave", dragEnd);
    slider.addEventListener("touchend", dragEnd);
    slider.addEventListener("mousemove", dragAction);
    slider.addEventListener("touchmove", dragAction, { passive: false });

    function dragStart(e) {
        isDragging = true;
        startPos = getPositionX(e);
        track.style.transition = "none";
        clearInterval(autoSlideInterval);
        animationID = requestAnimationFrame(animation);
    }

    function dragAction(e) {
        if (!isDragging) return;
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100) moveNext();
        else if (movedBy > 100) movePrev();
        else updateSlider();
        
        startAutoSlide();
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    // G. AUTO PLAY & RESIZE
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(moveNext, 3000);
    }

    window.addEventListener("resize", setPositionByIndex);

    // Initial Start
    setPositionByIndex();
    startAutoSlide();
}

// JALANKAN SAAT DOM SIAP
document.addEventListener("DOMContentLoaded", () => {
    renderPromoSection(promoData);
});



/*======LAYANAN SECTION===========*/
/*======LAYANAN SECTION===========*/
/*======LAYANAN SECTION===========*/

document.addEventListener("DOMContentLoaded", () => {
    const layananTitle = document.getElementById("layananTitle");
    const track = document.getElementById("carouselTrackLayanan");

    if (!layananTitle || !track) return;

    // 1. SET TITLE
    layananTitle.textContent = LAYANAN_DATA.title;

    // 2. RENDER ITEM
    track.innerHTML = LAYANAN_DATA.items.map(item => `
        <div class="layanan-item">
            <div class="layanan-card">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.url}"class="btn-layanan"><i class="${item.icon}"></i> ${item.buttonLabel}
                </a>
                </div>
        </div>
    `).join("");

    // 3. INIT CAROUSEL
    initCarousel({
        track: track,
        prevBtn: document.getElementById("prevBtnLayanan"),
        nextBtn: document.getElementById("nextBtnLayanan"),
        itemClass: ".layanan-item",
        autoPlay: true,
        interval: 4000
    });
});

function initCarousel({ track, prevBtn, nextBtn, itemClass, autoPlay, interval }) {
    let items = Array.from(track.children);
    let visibleItems = 1;
    let index = items.length; // Mulai dari tengah (setelah clone awal)
    let isTransitioning = false;

    // Fungsi menghitung jumlah item yang tampil
    function updateVisibleItems() {
        if (window.innerWidth >= 1024) visibleItems = 3;
        else if (window.innerWidth >= 768) visibleItems = 2;
        else visibleItems = 1;
    }

    // Clone elemen untuk infinite effect
    function createClones() {
        items.forEach(i => track.appendChild(i.cloneNode(true)));
        items.slice().reverse().forEach(i => track.insertBefore(i.cloneNode(true), track.firstChild));
    }

    function updatePosition(smooth = true) {
        const item = track.querySelector(itemClass);
        if (!item) return;
        
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        const itemWidth = item.offsetWidth + gap;
        
        track.style.transition = smooth ? "0.5s ease-in-out" : "none";
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function next() {
        if (isTransitioning) return;
        isTransitioning = true;
        index++;
        updatePosition();
    }

    function prev() {
        if (isTransitioning) return;
        isTransitioning = true;
        index--;
        updatePosition();
    }

    // Handle Infinite Loop tanpa terlihat patah
    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        // Jika sampai di ujung kanan (clone terakhir)
        if (index >= items.length * 2) {
            index = items.length;
            updatePosition(false);
        }
        // Jika sampai di ujung kiri (clone pertama)
        if (index <= items.length - visibleItems) {
            index = items.length * 2 - visibleItems;
            updatePosition(false);
        }
    });

    // Event Listeners
    prevBtn?.addEventListener('click', () => { prev(); restartTimer(); });
    nextBtn?.addEventListener('click', () => { next(); restartTimer(); });

    // Auto Play
    let timer;
    function startTimer() {
        if (autoPlay) timer = setInterval(next, interval);
    }
    function restartTimer() {
        clearInterval(timer);
        startTimer();
    }

    // Initial Setup
    createClones();
    updateVisibleItems();
    updatePosition(false);
    startTimer();

    // Resize Handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateVisibleItems();
            updatePosition(false);
        }, 100);
    });
}






/*======KEUNGGULAN SECTION===========*/
/*======KEUNGGULAN SECTION===========*/
/*======KEUNGGULAN SECTION===========*/

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("keunggulanTitle");
  const listEl = document.getElementById("keunggulanList");
  const imageEl = document.getElementById("keunggulanImage");

  if (!titleEl || !listEl || !imageEl) return;

  // === SET TITLE & IMAGE ===
  titleEl.textContent = KEUNGGULAN_DATA.title;
  imageEl.src = KEUNGGULAN_DATA.image;

  // === RENDER ITEMS ===
  listEl.innerHTML = KEUNGGULAN_DATA.items
    .map(
      (item, index) => `
      <div class="keunggulan-item ${
        index === KEUNGGULAN_DATA.activeIndex ? "active" : ""
      }" data-index="${index}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `
    )
    .join("");

  // === ACTIVE SWITCH (INTERAKTIF) ===
  listEl.addEventListener("click", (e) => {
    const item = e.target.closest(".keunggulan-item");
    if (!item) return;

    const index = item.dataset.index;

    document
      .querySelectorAll(".keunggulan-item")
      .forEach((el) => el.classList.remove("active"));

    item.classList.add("active");

    // Optional: update image per item (kalau mau)
    // imageEl.src = KEUNGGULAN_DATA.items[index].image;
  });
});










/*======ISO SECTION===========*/
/*======ISO SECTION===========*/
/*======ISO SECTION===========*/

document.addEventListener("DOMContentLoaded", () => {
  const trackEl = document.getElementById("isoTrack");
  const textEl = document.getElementById("isoText");

  if (!trackEl || !textEl) return;

  /* === RENDER SLIDER DARI JSON === */
  trackEl.innerHTML = ISO_DATA.certificates
    .map(
      cert => `
        <img src="${cert.image}" alt="${cert.alt}">
      `
    )
    .join("");

  /* === RENDER TEXT === */
  textEl.innerHTML = `
    <h2>${ISO_DATA.title}</h2>
    <p>${ISO_DATA.description}</p>
  `;

  /* === INIT SLIDER SETELAH RENDER === */
  initIsoSlider();
});


function initIsoSlider() {
  const track = document.getElementById("isoTrack");
  const slides = track.children;

  if (!slides.length) {
    console.error("ISO Slider gagal: tidak ada slide");
    return;
  }

  let isoIndex = 0;

  /* CLONE SLIDE PERTAMA */
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  function isoAutoSlide() {
    isoIndex++;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${isoIndex * 100}%)`;

    if (isoIndex === slides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        isoIndex = 0;
        track.style.transform = "translateX(0)";
        track.offsetHeight; // reflow
        track.style.transition = "transform 0.8s ease-in-out";
      }, 800);
    }
  }

  setInterval(isoAutoSlide, 3500);
}









/*======CLIENT LOGO SECTION===========*/
/*======CLIENT LOGO SECTION===========*/
/*======CLIENT LOGO SECTION===========*/
/*console.log("MAIN.JS AKTIF");*/
function renderClientLogo() {
  const titleEl = document.getElementById("clientLogoTitle");
  const trackEl = document.getElementById("logoTrack");

  if (!trackEl) return;

  /* ===== RENDER TITLE ===== */
  if (titleEl && CLIENT_LOGO_DATA?.title) {
    titleEl.innerHTML = `<h3>${CLIENT_LOGO_DATA.title}</h3>`;
  }

  /* ===== RENDER LOGO ===== */
  if (Array.isArray(CLIENT_LOGO_DATA?.logos)) {
    const logoHTML = CLIENT_LOGO_DATA.logos
      .map(logo => `<img src="${logo.image}" alt="${logo.alt || ''}">`)
      .join("");

    // Duplicate untuk infinite marquee
    trackEl.innerHTML = logoHTML + logoHTML;
  }

  // Panggil counter saja
  if (typeof initClientCounter === "function") {
    initClientCounter();
  }
}

/* ===== COUNTER ===== */
function initClientCounter() {
  const BASE_COUNT = 10000;
  const MAX_DAILY_INCREASE = 4;

  const countEl = document.getElementById("clientCount");
  if (!countEl) {
    console.error("clientCount tidak ditemukan");
    return;
  }

  let storedCount = parseInt(localStorage.getItem("clientCount")) || BASE_COUNT;
  let lastUpdate = localStorage.getItem("clientLastUpdate");
  const today = new Date().toDateString();

  if (lastUpdate !== today) {
    const increase = Math.floor(Math.random() * MAX_DAILY_INCREASE) + 1;
    storedCount += increase;

    localStorage.setItem("clientCount", storedCount);
    localStorage.setItem("clientLastUpdate", today);
  }

  animateCount(countEl, storedCount);
}

/* ===== ANIMASI ANGKA ===== */
function animateCount(el, target) {
  let start = 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    el.textContent = value.toLocaleString("id-ID");

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Pastikan dijalankan saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
  renderClientLogo();
});



/*======TESTIMONI SECTION===========*/
/*======TESTIMONI SECTION===========*/
/*======TESTIMONI SECTION===========*/

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("testimonialTitle");
  const subtitleEl = document.getElementById("testimonialSubtitle");
  const trackEl = document.getElementById("testimonialTrack");

  if (!trackEl) return;

  /* === TITLE === */
  titleEl.textContent = TESTIMONIAL_DATA.title;
  subtitleEl.textContent = TESTIMONIAL_DATA.subtitle;

  /* === RENDER TESTIMONIAL === */
  const testimonialHTML = TESTIMONIAL_DATA.testimonials
    .map(item => {
      const socialHTML = item.socials
        .map(
          s => `<a href="${s.url}"><i class="${s.icon}"></i></a>`
        )
        .join("");

      return `
        <div class="testimonial-card">
          <div class="testimonial-header">
            <img src="${item.clientPhoto}" class="client-photo" alt="${item.clientName}">
            <div class="client-info">
              <h4>${item.clientName}</h4>
              <span>${item.clientRole}</span>
            </div>
          </div>

          <p class="testimonial-text">“${item.text}”</p>

          <div class="testimonial-footer">
            <span class="testimonial-date">${item.date}</span>
            <div class="testimonial-social">
              ${socialHTML}
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  /* === DUPLIKASI UNTUK SLIDER HALUS === */
  trackEl.innerHTML = testimonialHTML + testimonialHTML;

  initTestimonialSlider();
});
function initTestimonialSlider() {
  const track = document.getElementById("testimonialTrack");
  let index = 0;

  function slide() {
    index++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * 380}px)`;

    if (index >= track.children.length / 2) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = "translateX(0)";
      }, 600);
    }
  }

  setInterval(slide, 4000);
}


/*======CTA MINI SECTION===========*/
/*======CTA MINI SECTION===========*/
/*======CTA MINI SECTION===========*/


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("ctaMiniContainer");
  if (!container) return;

  /* === CONTACT LIST === */
  const contactHTML = CTA_MINI_DATA.contacts
    .map(
      item => `
      <a href="${item.url}" class="cta-contact" target="_blank" rel="noopener">
        <i class="${item.icon}"></i> ${item.label}
      </a>
    `
    )
    .join("");

  /* === FINAL RENDER === */
  container.innerHTML = `
    <div class="cta-text">
      <h3>${CTA_MINI_DATA.title}</h3>
      <p>${CTA_MINI_DATA.subtitle}</p>
    </div>

    <div class="cta-contacts">
      ${contactHTML}
    </div>
  `;
});


/*===================FOOTER*===============*/
/*===================FOOTER*===============*/
/*===================FOOTER*===============*/

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("footerCopyright").textContent =
  FOOTER_DATA.copyright;

/* INFO */
document.getElementById("footerInfo").innerHTML = `
  <h5 class="footer-title">${FOOTER_DATA.info.title}</h5>
  <div class="footer-info">
    <p>${FOOTER_DATA.info.description}</p>
  </div>
  <div class="footer-social-container">
    ${FOOTER_DATA.info.socials
      .map(
        s => `<a href="${s.url}" class="social-button"><i class="${s.icon}"></i></a>`
      )
      .join("")}
  </div>
`;

/* QUICK LINKS */
document.getElementById("footerLinks").innerHTML = `
  <h5 class="footer-title">Quick Links</h5>
  <div class="footer-links-container">
    ${FOOTER_DATA.quickLinks
      .map(
        link =>
          `<a href="${link.url}" class="footer-link">${link.label}</a>`
      )
      .join("")}
  </div>
`;

/* CONTACT */
document.getElementById("footerContact").innerHTML = `
  <h5 class="footer-title">Hubungi Kami</h5>
  <div class="contact-list-container">
    ${FOOTER_DATA.contact
      .map(
        item => `
      <div class="contact-item">
        <i class="${item.icon} contact-icon"></i>
        ${
          item.url
            ? `<a href="${item.url}" class="contact-link">${item.text}</a>`
            : `<span>${item.text}</span>`
        }
      </div>
    `
      )
      .join("")}
  </div>
`;















/*===================PROMO*===============*/
/*===================PROMO*===============*/
/*===================PROMO*===============*/
