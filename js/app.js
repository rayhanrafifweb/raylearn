/**
 * RAY LEARN — Core Application Script
 * Vanilla JavaScript for modern interactions, DOM rendering, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  initNavbar();
  initScrollAnimations();
  initHomepageComponents();
  initGlobalSearchModal();
});

/* ==========================================================================
   1. NAVBAR & NAVIGATION
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('nav-scrolled', 'py-3');
        navbar.classList.remove('py-5');
      } else {
        navbar.classList.remove('nav-scrolled', 'py-3');
        navbar.classList.add('py-5');
      }
    }, { passive: true });
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

/* ==========================================================================
   2. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up-element').forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   3. HOMEPAGE COMPONENTS
   ========================================================================== */
function initHomepageComponents() {
  renderFeaturedMaterials();
  renderMaterialByClassTab(10);
  renderRecentMaterials();
  setupClassTabListeners();
}

/**
 * Render Asymmetric Featured Section (1 Big Card + 2 Editorial Cards)
 */
function renderFeaturedMaterials() {
  const container = document.getElementById('featured-materials-container');
  if (!container || typeof materials === 'undefined') return;

  const featuredList = materials.filter(m => m.featured).slice(0, 3);
  if (featuredList.length === 0) return;

  const [lead, ...others] = featuredList;

  let html = `
    <!-- Large Lead Featured Card -->
    <div class="lg:col-span-7 bg-[#FFFDF8] border-2 border-[#161616] p-8 md:p-10 rounded-2xl relative flex flex-col justify-between editorial-card shadow-[8px_8px_0px_#304D36]">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="pill-badge bg-[#304D36] text-[#FFFDF8]">
            <span class="star-icon"></span>
            FEATURED UTAMA
          </span>
          <span class="pill-badge bg-[#C86E39] text-[#FFFDF8]">KELAS ${lead.classLevel}</span>
          <span class="pill-badge bg-[#FFB51B] text-[#080808]">${lead.subject} · ${lead.category}</span>
        </div>
        
        <h3 class="font-serif-title text-3xl md:text-4xl lg:text-5xl text-[#161616] mb-4 leading-tight">
          <a href="materi.html?id=${lead.id}" class="hover:text-[#C86E39] transition-colors">
            ${lead.title}
          </a>
        </h3>

        <p class="text-[#2c332d] text-base md:text-lg mb-6 leading-relaxed">
          ${lead.description}
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
          ${lead.tags.map(tag => `<span class="px-3 py-1 bg-[#F4EBDD] border border-[#161616] rounded-full text-xs font-semibold text-[#161616]">#${tag}</span>`).join('')}
        </div>
      </div>

      <div class="pt-6 border-t-2 border-[#EFE2CF] flex items-center justify-between">
        <div class="text-xs md:text-sm text-[#4a554c]">
          <span>${lead.date}</span> &bull; <span>${lead.readTime}</span>
        </div>
        <a href="materi.html?id=${lead.id}" class="inline-flex items-center gap-2 font-bold text-sm md:text-base text-[#304D36] group hover:text-[#C86E39]">
          <span>Baca Selengkapnya</span>
          <span class="card-arrow text-xl font-bold">&rarr;</span>
        </a>
      </div>
    </div>

    <!-- Side Featured Cards Stack -->
    <div class="lg:col-span-5 flex flex-col gap-6">
  `;

  others.forEach((item, index) => {
    const isDark = index === 0;
    const cardBg = isDark ? 'bg-[#304D36] text-[#FFFDF8]' : 'bg-[#EFE2CF] text-[#161616]';
    const tagBg = isDark ? 'bg-[#243C2B] text-[#FFB51B] border-white/20' : 'bg-[#FFFDF8] text-[#161616] border-[#161616]';
    const linkColor = isDark ? 'text-[#FFB51B]' : 'text-[#304D36]';
    const textColor = isDark ? 'text-[#e2ece4]' : 'text-[#333e35]';

    html += `
      <div class="${cardBg} border-2 border-[#161616] p-6 md:p-8 rounded-2xl flex flex-col justify-between editorial-card shadow-[6px_6px_0px_#080808] flex-1">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="pill-badge ${isDark ? 'bg-[#FFB51B] text-[#080808]' : 'bg-[#C86E39] text-[#FFFDF8]'}">
              KELAS ${item.classLevel}
            </span>
            <span class="text-xs font-bold uppercase tracking-wider ${isDark ? 'text-[#F4EBDD]' : 'text-[#4a554c]'}">
              ${item.subject} &bull; ${item.category}
            </span>
          </div>

          <h4 class="font-serif-title text-2xl md:text-3xl mb-3 leading-snug">
            <a href="materi.html?id=${item.id}" class="hover:underline">
              ${item.title}
            </a>
          </h4>

          <p class="${textColor} text-sm mb-4 leading-relaxed line-clamp-2">
            ${item.description}
          </p>
        </div>

        <div class="pt-4 border-t ${isDark ? 'border-white/20' : 'border-[#161616]/20'} flex items-center justify-between text-xs md:text-sm">
          <span>${item.readTime}</span>
          <a href="materi.html?id=${item.id}" class="inline-flex items-center gap-1.5 font-bold ${linkColor} group hover:underline">
            <span>Pelajari</span>
            <span class="card-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

/**
 * Setup Tab Listeners for Material by Class Section
 */
function setupClassTabListeners() {
  const tabs = document.querySelectorAll('.class-tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetClass = parseInt(btn.dataset.classLevel, 10);
      tabs.forEach(t => {
        t.classList.remove('bg-[#304D36]', 'text-[#FFFDF8]', 'shadow-[4px_4px_0px_#C86E39]');
        t.classList.add('bg-[#FFFDF8]', 'text-[#161616]');
      });
      btn.classList.add('bg-[#304D36]', 'text-[#FFFDF8]', 'shadow-[4px_4px_0px_#C86E39]');
      btn.classList.remove('bg-[#FFFDF8]', 'text-[#161616]');

      renderMaterialByClassTab(targetClass);
    });
  });
}

/**
 * Render Materials Filtered by Class Tab
 */
function renderMaterialByClassTab(classLevel) {
  const container = document.getElementById('class-materials-grid');
  const countBadge = document.getElementById('class-materials-count');
  if (!container || typeof materials === 'undefined') return;

  const filtered = materials.filter(m => m.classLevel === classLevel);
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Materi Tersedia`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#4a554c]">
        <p class="text-xl font-serif-title mb-2">Belum ada materi untuk kelas ini.</p>
        <p class="text-sm">Silakan cek kembali beberapa saat lagi.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <article class="bg-[#FFFDF8] border-2 border-[#161616] rounded-xl p-6 flex flex-col justify-between editorial-card shadow-[4px_4px_0px_#161616]">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-black uppercase tracking-wider text-[#C86E39]">
              ${item.subject}
            </span>
            <span class="text-xs text-[#666] font-medium bg-[#EFE2CF] px-2 py-0.5 rounded">
              ${item.readTime}
            </span>
          </div>

          <h4 class="font-serif-title text-xl md:text-2xl text-[#161616] mb-3 leading-snug">
            <a href="materi.html?id=${item.id}" class="hover:text-[#C86E39] transition-colors">
              ${item.title}
            </a>
          </h4>

          <p class="text-[#3c443e] text-sm leading-relaxed mb-4 line-clamp-3">
            ${item.description}
          </p>
        </div>

        <div class="pt-4 border-t border-[#EFE2CF] flex items-center justify-between">
          <span class="text-xs text-[#6e7b70]">${item.category}</span>
          <a href="materi.html?id=${item.id}" class="inline-flex items-center gap-1 font-bold text-sm text-[#304D36] hover:text-[#C86E39] group">
            <span>Buka</span>
            <span class="card-arrow">&rarr;</span>
          </a>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

/**
 * Render Recently Added Horizontal Editorial List (6 items)
 */
function renderRecentMaterials() {
  const container = document.getElementById('recent-materials-list');
  if (!container || typeof materials === 'undefined') return;

  const recent = [...materials].reverse().slice(0, 6);

  let html = '';
  recent.forEach((item, index) => {
    html += `
      <div class="group py-5 border-b border-[#161616]/20 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 hover:bg-[#EFE2CF]/50 px-3 rounded-lg">
        <div class="flex items-start md:items-center gap-4">
          <div class="diamond-marker bg-[#C86E39] mt-2 md:mt-0"></div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <span class="text-xs font-bold uppercase tracking-widest text-[#304D36]">KELAS ${item.classLevel}</span>
              <span class="text-xs text-[#777]">&bull;</span>
              <span class="text-xs font-semibold text-[#666]">${item.subject} (${item.category})</span>
              <span class="text-xs text-[#777] hidden sm:inline">&bull;</span>
              <span class="text-xs text-[#888] hidden sm:inline">${item.date}</span>
            </div>
            <h4 class="font-serif-title text-xl md:text-2xl text-[#161616] group-hover:text-[#C86E39] transition-colors">
              <a href="materi.html?id=${item.id}">
                ${item.title}
              </a>
            </h4>
          </div>
        </div>

        <div class="flex items-center justify-between md:justify-end gap-6 pl-8 md:pl-0">
          <span class="text-xs text-[#6e7b70] whitespace-nowrap">${item.readTime}</span>
          <a href="materi.html?id=${item.id}" class="w-10 h-10 rounded-full border border-[#161616] flex items-center justify-center bg-[#FFFDF8] group-hover:bg-[#FFB51B] transition-colors">
            <span class="font-bold text-lg leading-none transform group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* ==========================================================================
   4. COPY CODE UTILITY
   ========================================================================== */
window.copyCode = function(button) {
  const wrapper = button.closest('.code-block-wrapper');
  if (!wrapper) return;
  const pre = wrapper.querySelector('pre');
  if (!pre) return;

  const codeText = pre.innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    const originalText = button.innerText;
    button.innerText = 'Tersalin!';
    button.classList.add('text-[#FFB51B]');
    setTimeout(() => {
      button.innerText = originalText;
      button.classList.remove('text-[#FFB51B]');
    }, 2000);
  }).catch(err => {
    console.error('Gagal menyalin:', err);
  });
};

/* ==========================================================================
   5. QUICK SEARCH MODAL & REDIRECT
   ========================================================================== */
function initGlobalSearchModal() {
  const searchTriggers = document.querySelectorAll('.open-search-trigger');
  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'search.html';
    });
  });
}
