function renderPromoView(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(card => {
      const featureHTML = card.features
        .map(item => `<li>${item}</li>`)
        .join("");

      const bonusHTML = card.bonus.length
        ? `
          <div class="view-tab-nd-bonus-title">BONUS</div>
          <ul>
            ${card.bonus
              .map(
                b =>
                  `<li class="view-tab-nd-bonus-item">${b}</li>`
              )
              .join("")}
          </ul>
        `
        : "";

      return `
        <div class="view-tab-nd-card">
          <div class="view-tab-nd-icon-box">${card.icon}</div>
          <h4>${card.smallTitle}</h4>
          <h3>${card.title}</h3>

          <ul>${featureHTML}</ul>

          ${bonusHTML}

          <a href="${card.link}" class="view-tab-nd-price-btn">
            ${card.price}
          </a>
        </div>
      `;
    })
    .join("");

  root.innerHTML = `
    <div class="view-tab-nd-container">
      <div class="view-tab-nd-header-section">
        <h2>${data.header.title}</h2>
        <p>${data.header.subtitle}</p>
      </div>

      <div class="view-tab-nd-pricing-grid">
        ${cardsHTML}
      </div>
    </div>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderPromoView("view-tab-nd-root", promoDataView);
});

































function renderViewNdInfo(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const columnsHTML = data.columns
    .map(col => {
      const listHTML = col.items
        .map(item => `<li>${item}</li>`)
        .join("");

      return `
        <div class="${data.columnClass}">
          <h2>${col.title}</h2>
          <ul class="${data.listClass}">
            ${listHTML}
          </ul>
        </div>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.particlesClass}"></div>

      <div class="${data.containerClass}">
        ${columnsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewNdInfo("view-nd-info-root", viewNdInfoData);
});
































function renderWhyUs(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const itemsHTML = data.items
    .map(item => `
      <div class="why-us-item">
        <div class="icon-box">
          <i class="${item.iconClass}"></i>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `)
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.header.class}">
        <h2>${data.header.title}</h2>
        <div class="${data.header.underlineClass}"></div>
      </div>

      <div class="${data.gridClass}">
        ${itemsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderWhyUs("why-us-root", whyUsData);
});




































function renderParallaxSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(card => `
      <div class="feature-card">
        <div class="icon-wrapper">
          <i class="${card.iconClass}"></i>
        </div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `)
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        ${cardsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderParallaxSection("parallax-root", parallaxSectionData);
});




















function renderViewAboutNotaryOfficeSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const servicesHTML = data.textContent.services
    .map(
      item => `
        <li>
          <span class="service-num">${item.number}</span>
          <div><strong>${item.title}:</strong> ${item.description}</div>
        </li>
      `
    )
    .join("");

  root.innerHTML = `
    <section id="${data.sectionId}" class="${data.sectionClass}">
      <div class="${data.containerClass}">

        <div class="${data.header.headerClass}">
          <h2 class="${data.header.titleClass}">${data.header.titleText}</h2>
          <h2 class="${data.header.nameClass}">${data.header.nameText}</h2>
          <div class="${data.header.lineClass}"></div>
        </div>

        <div class="${data.contentWrapperClass}">

          <div class="${data.textContent.wrapperClass}">
            <p class="${data.textContent.introClass}">
              ${data.textContent.introText}
            </p>

            <h3 class="${data.textContent.subtitleClass}">
              ${data.textContent.subtitleText}
            </h3>

            <ul class="${data.textContent.serviceListClass}">
              ${servicesHTML}
            </ul>

            <p class="${data.textContent.closingClass}">
              ${data.textContent.closingText}
            </p>
          </div>

          <div class="${data.imageSide.wrapperClass}">
            <div class="${data.imageSide.cardClass}">
              <img src="${data.imageSide.imageSrc}" alt="${data.imageSide.imageAlt}">
              <div class="image-caption">
                <p>${data.imageSide.captionName}</p>
                <span>${data.imageSide.captionRole}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewAboutNotaryOfficeSection(
    "view-about-notary-root",
    viewAboutNotaryOfficeSectionData
  );
});


























function renderViewAboutTeam(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(card => {
      const paragraphs = card.info.descriptions
        .map(text => `<p>${text}</p>`)
        .join("");

      return `
        <div class="view-about-team-card">
          <div class="${card.image.wrapperClass}">
            <img src="${card.image.src}" alt="${card.image.alt}" loading="${card.image.loading}" />
          </div>
          <div class="view-about-team-info">
            <h3>${card.info.name}</h3>
            <span class="view-about-team-role">${card.info.role}</span>
            ${paragraphs}
          </div>
        </div>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}" id="${data.sectionId}">
      <div class="${data.header.wrapperClass}">
        <h1 class="${data.header.titleClass}">${data.header.title}</h1>
        <div class="${data.header.dividerClass}" role="separator"></div>
      </div>

      <div class="${data.containerClass}">
        ${cardsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewAboutTeam("view-about-team-root", viewAboutTeamData);
});



















function renderViewAboutExplan(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        <div class="${data.contentClass}">
          <h1>${data.titlePrimary}</h1>
          <h2>${data.titleSecondary}</h2>
          <p>${data.description}</p>
          <a href="${data.button.href}" class="${data.button.class}">
            ${data.button.label}
          </a>
        </div>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewAboutExplan("view-about-explan-root", viewAboutExplanSectionData);
});

























function renderViewTargetVisionMission(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">

        <div class="${data.titleSection.wrapperClass}">
          <h3>${data.titleSection.title}</h3>
          <div class="${data.titleSection.dividerClass}"></div>
        </div>

        <div class="${data.visionMissionWrapperClass}">
          <div class="${data.vision.boxClass}">
            <h4>${data.vision.titleHTML}</h4>
            <p>${data.vision.description}</p>
          </div>

          <div class="${data.mission.boxClass}">
            <h4>${data.mission.titleHTML}</h4>
            <p>${data.mission.description}</p>
          </div>
        </div>

      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewTargetVisionMission(
    "view-target-vision-mission-root",
    viewTargetVisionMissionSectionData
  );
});


























function renderViewServiceFeaturedSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.services
    .map(
      service => `
        <div class="${service.cardClass}">
          <div class="view-serv-card-icon">
            <i class="${service.iconClass}"></i>
          </div>
          <div class="view-serv-card-content">
            <h4>${service.title}</h4>
            <p>${service.description}</p>
          </div>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">

        <div class="${data.titleSection.wrapperClass}">
          <h3>${data.titleSection.title}</h3>
          <div class="${data.titleSection.dividerClass}"></div>
        </div>

        <div class="${data.cardsWrapperClass}">
          ${cardsHTML}
        </div>

      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewServiceFeaturedSection(
    "view-service-featured-root",
    viewServiceFeaturedSectionData
  );
});





























function renderViewCareerJobVacancySection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(
      card => `
        <div class="view-career-card">
          <span>${card.status}</span>
          <h3>${card.position}</h3>
          <div class="view-qual-label">${card.qualificationLabel}</div>
          <div class="view-qual-item">
            ${card.qualificationText}
          </div>
          <a href="${card.applyLink}" class="${card.applyBtnClass}">
            ${card.applyText}
          </a>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        <${data.heading.tag}>${data.heading.text}</${data.heading.tag}>

        <div class="${data.gridClass}">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewCareerJobVacancySection(
    "view-career-root",
    viewCareerJobVacancySectionData
  );
});




























function renderViewTabCompanyFeatureReasonsSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const featuresHTML = data.features
    .map(
      feature => `
        <div class="${feature.itemClass}">
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        <${data.heading.tag}>${data.heading.text}</${data.heading.tag}>

        <div class="${data.gridClass}">
          ${featuresHTML}
        </div>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewTabCompanyFeatureReasonsSection(
    "view-tab-features-root",
    viewTabCompanyFeatureReasonsSectionData
  );
});


































function renderViewTabBusinessLicenseStepsSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const stepsHTML = data.content.steps
    .map(
      step => `
        <div class="${step.itemClass}">
          <img
            src="${step.icon.src}"
            alt="${step.icon.alt}"
            class="${step.icon.class}"
          />
          <div class="view-tab-step-text">
            <h3>${step.text.title}</h3>
            <p>${step.text.description}</p>
          </div>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.content.wrapperClass}">
        <${data.content.heading.tag}>
          ${data.content.heading.text}
        </${data.content.heading.tag}>

        <p class="${data.content.subDescription.class}">
          ${data.content.subDescription.text}
        </p>

        ${stepsHTML}
      </div>

      <div class="${data.imageSide.wrapperClass}">
        <img
          src="${data.imageSide.image.src}"
          alt="${data.imageSide.image.alt}"
        />
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewTabBusinessLicenseStepsSection(
    "view-tab-steps-root",
    viewTabBusinessLicenseStepsSectionData
  );
});




























function renderViewFaq(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const columnsHTML = data.columns
    .map(
      col => `
      <div class="view-faq-column">
        ${col.items
          .map(
            item => `
          <div class="view-faq-item">
            <button class="view-faq-question">
              ${item.question}
            </button>
            <div class="view-faq-answer">
              <p>${item.answer}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="view-faq-header">
        <h2>${data.header.title}</h2>
        <p>${data.header.description}</p>
      </div>

      <div class="view-faq-grid">
        ${columnsHTML}
      </div>
    </section>
  `;
}




function initFaqAccordion(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.addEventListener("click", e => {
    const btn = e.target.closest(".view-faq-question");
    if (!btn) return;

    const item = btn.parentElement;
    const answer = item.querySelector(".view-faq-answer");

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
}




document.addEventListener("DOMContentLoaded", () => {
  renderViewFaq("view-faq-root", viewFaqBusinessEntitySectionData);
  initFaqAccordion("view-faq-root");
});

