/**
 * RAY LEARN — Material Reader & Subject Hub Script
 * Displays individual articles, TOC, next/prev navigation, and subject views.
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id');
  const articleSlug = params.get('slug');
  const subjectQuery = params.get('subject');

  if (subjectQuery) {
    renderSubjectArchive(subjectQuery);
  } else if (articleId || articleSlug) {
    renderSingleArticle(articleId, articleSlug);
  } else {
    // Default to the first featured article or id 1
    renderSingleArticle(1, null);
  }
});

/**
 * Render Single Material / Article
 */
function renderSingleArticle(id, slug) {
  const container = document.getElementById('article-content-container');
  const archiveContainer = document.getElementById('subject-archive-container');
  if (!container || typeof materials === 'undefined') return;

  if (archiveContainer) archiveContainer.classList.add('hidden');
  container.classList.remove('hidden');

  let currentItem = null;
  if (id) {
    currentItem = materials.find(m => m.id === parseInt(id, 10));
  } else if (slug) {
    currentItem = materials.find(m => m.slug === slug);
  }

  if (!currentItem) {
    container.innerHTML = `
      <div class="py-24 text-center">
        <span class="star-icon star-icon-lg text-[#C86E39] mb-4"></span>
        <h1 class="font-serif-title text-4xl text-[#161616] mb-3">Materi Tidak Ditemukan</h1>
        <p class="text-[#555] mb-8">Materi yang Anda cari mungkin telah dipindahkan atau belum diterbitkan.</p>
        <a href="index.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#304D36] text-[#FFFDF8] rounded-full font-bold hover:bg-[#243C2B]">
          &larr; Kembali ke Beranda
        </a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${currentItem.title} — RAY LEARN SMK`;

  // Find next & prev materials in same class or overall
  const currentIndex = materials.findIndex(m => m.id === currentItem.id);
  const prevItem = currentIndex > 0 ? materials[currentIndex - 1] : null;
  const nextItem = currentIndex < materials.length - 1 ? materials[currentIndex + 1] : null;

  // Related materials (same subject or class)
  const related = materials
    .filter(m => m.id !== currentItem.id && (m.subject === currentItem.subject || m.classLevel === currentItem.classLevel))
    .slice(0, 3);

  let html = `
    <!-- Article Header -->
    <header class="mb-12 pt-6">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#555] mb-6">
        <a href="index.html" class="hover:text-[#C86E39]">Beranda</a>
        <span>/</span>
        <a href="kelas-${currentItem.classLevel}.html" class="hover:text-[#C86E39]">Kelas ${currentItem.classLevel}</a>
        <span>/</span>
        <a href="materi.html?subject=${encodeURIComponent(currentItem.subject)}" class="hover:text-[#C86E39]">${currentItem.subject}</a>
        <span>/</span>
        <span class="text-[#161616] font-semibold truncate max-w-[200px] sm:max-w-none">${currentItem.category}</span>
      </nav>

      <!-- Badge Strip -->
      <div class="flex flex-wrap items-center gap-2.5 mb-5">
        <span class="pill-badge bg-[#304D36] text-[#FFFDF8]">
          <span class="star-icon"></span>
          KELAS ${currentItem.classLevel}
        </span>
        <span class="pill-badge bg-[#C86E39] text-[#FFFDF8]">${currentItem.subject}</span>
        <span class="pill-badge bg-[#FFB51B] text-[#080808]">${currentItem.category}</span>
      </div>

      <!-- Main Headline -->
      <h1 class="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#161616] leading-[1.15] mb-6 tracking-tight">
        ${currentItem.title}
      </h1>

      <p class="text-lg md:text-xl text-[#3a443c] leading-relaxed mb-6 font-normal">
        ${currentItem.description}
      </p>

      <!-- Meta Strip -->
      <div class="flex flex-wrap items-center justify-between gap-4 py-4 border-y-2 border-[#161616]/15 text-xs md:text-sm text-[#4a554c]">
        <div class="flex items-center gap-4">
          <span class="font-bold text-[#161616]">Ray Learn Archive</span>
          <span>&bull;</span>
          <span>${currentItem.date}</span>
          <span>&bull;</span>
          <span>${currentItem.readTime}</span>
        </div>
        <div class="flex items-center gap-2">
          ${currentItem.tags.map(t => `<span class="bg-[#EFE2CF] px-2.5 py-1 rounded-md text-xs font-semibold text-[#161616]">#${t}</span>`).join('')}
        </div>
      </div>
    </header>

    <!-- Layout: Main Article + Sidebar TOC -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Article Body Reader (720px - 820px width) -->
      <main class="lg:col-span-8 xl:col-span-8">
        <article class="article-body max-w-[820px]">
          ${currentItem.content}
        </article>

        <!-- Navigation Next / Previous -->
        <nav aria-label="Navigasi Artikel" class="mt-14 pt-8 border-t-2 border-[#161616]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${prevItem ? `
            <a href="materi.html?id=${prevItem.id}" class="p-5 bg-[#FFFDF8] border-2 border-[#161616] rounded-xl hover:bg-[#EFE2CF] transition-colors flex flex-col justify-between group shadow-[3px_3px_0px_#161616]">
              <span class="text-xs font-bold text-[#777] uppercase tracking-wider mb-2">&larr; Materi Sebelumnya</span>
              <span class="font-serif-title text-base sm:text-lg text-[#161616] group-hover:text-[#C86E39] leading-snug">${prevItem.title}</span>
            </a>
          ` : `<div></div>`}

          ${nextItem ? `
            <a href="materi.html?id=${nextItem.id}" class="p-5 bg-[#FFFDF8] border-2 border-[#161616] rounded-xl hover:bg-[#EFE2CF] transition-colors flex flex-col justify-between group text-right shadow-[3px_3px_0px_#161616]">
              <span class="text-xs font-bold text-[#777] uppercase tracking-wider mb-2">Materi Selanjutnya &rarr;</span>
              <span class="font-serif-title text-base sm:text-lg text-[#161616] group-hover:text-[#C86E39] leading-snug">${nextItem.title}</span>
            </a>
          ` : `<div></div>`}
        </nav>
      </main>

      <!-- Editorial Sticky Sidebar (TOC + Kurikulum Link) -->
      <aside class="lg:col-span-4 xl:col-span-4">
        <div class="sticky top-28 space-y-6">
          
          <!-- Table of Contents -->
          <div class="bg-[#FFFDF8] border-2 border-[#161616] p-6 rounded-xl shadow-[5px_5px_0px_#304D36]">
            <div class="flex items-center gap-2 mb-4 pb-2 border-b border-[#161616]/15">
              <span class="star-icon text-[#FFB51B]"></span>
              <h3 class="font-serif-title text-lg text-[#161616] font-bold">Daftar Isi Materi</h3>
            </div>
            <ul id="dynamic-toc" class="space-y-2.5 text-sm text-[#444]">
              <!-- Populated via JS -->
            </ul>
          </div>

          <!-- Class Quick Link Card -->
          <div class="bg-[#304D36] text-[#FFFDF8] border-2 border-[#161616] p-6 rounded-xl shadow-[5px_5px_0px_#080808]">
            <span class="pill-badge bg-[#FFB51B] text-[#080808] mb-3">KURIKULUM RESMI</span>
            <h4 class="font-serif-title text-xl text-[#FFFDF8] mb-2">Kelas ${currentItem.classLevel} SMK</h4>
            <p class="text-sm text-[#dce7df] mb-4">
              Jelajahi seluruh materi dan silabus kompetensi keahlian untuk kelas ini.
            </p>
            <a href="kelas-${currentItem.classLevel}.html" class="inline-flex items-center gap-2 text-sm font-bold text-[#FFB51B] hover:underline">
              <span>Buka Hub Kelas ${currentItem.classLevel}</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>
      </aside>

    </div>

    <!-- Related Materials Section -->
    ${related.length > 0 ? `
      <section class="mt-20 pt-12 border-t-2 border-[#161616]">
        <div class="flex items-center justify-between mb-8">
          <div>
            <span class="text-xs font-black uppercase tracking-widest text-[#C86E39]">REKOMENDASI BELAJAR</span>
            <h3 class="font-serif-title text-2xl md:text-3xl text-[#161616]">Materi Terkait Lainnya</h3>
          </div>
          <a href="kelas-${currentItem.classLevel}.html" class="text-sm font-bold text-[#304D36] hover:underline hidden sm:inline">
            Semua Materi Kelas ${currentItem.classLevel} &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${related.map(r => `
            <div class="bg-[#FFFDF8] border-2 border-[#161616] p-5 rounded-xl editorial-card shadow-[4px_4px_0px_#161616] flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2 text-xs font-bold">
                  <span class="text-[#C86E39]">KELAS ${r.classLevel}</span>
                  <span class="text-[#777]">${r.readTime}</span>
                </div>
                <h4 class="font-serif-title text-lg text-[#161616] mb-2 leading-snug">
                  <a href="materi.html?id=${r.id}" class="hover:text-[#C86E39] transition-colors">${r.title}</a>
                </h4>
                <p class="text-xs text-[#555] line-clamp-2 leading-relaxed mb-4">${r.description}</p>
              </div>
              <a href="materi.html?id=${r.id}" class="text-xs font-bold text-[#304D36] hover:text-[#C86E39] flex items-center gap-1">
                <span>Baca Materi</span>
                <span class="card-arrow">&rarr;</span>
              </a>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}
  `;

  container.innerHTML = html;

  // Build Dynamic Table of Contents from h2 tags
  buildDynamicTOC();

  // Re-trigger Lucide Icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Build Table of Contents dynamically from h2 tags in the article
 */
function buildDynamicTOC() {
  const tocList = document.getElementById('dynamic-toc');
  const headings = document.querySelectorAll('.article-body h2');
  if (!tocList || headings.length === 0) return;

  headings.forEach((heading, idx) => {
    const id = `section-${idx + 1}`;
    heading.setAttribute('id', id);

    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#${id}" class="hover:text-[#C86E39] transition-colors flex items-start gap-2 group py-1">
        <span class="text-xs font-bold text-[#C86E39] mt-0.5">&bull;</span>
        <span class="group-hover:translate-x-1 transition-transform">${heading.innerText}</span>
      </a>
    `;
    tocList.appendChild(li);
  });
}

/**
 * Render Subject Archive Page (when ?subject=Matematika or ?subject=PPLG is requested)
 */
function renderSubjectArchive(subjectName) {
  const container = document.getElementById('article-content-container');
  const archiveContainer = document.getElementById('subject-archive-container');
  if (!archiveContainer || typeof materials === 'undefined') return;

  if (container) container.classList.add('hidden');
  archiveContainer.classList.remove('hidden');

  document.title = `Materi ${subjectName} — RAY LEARN SMK`;

  const matchedMaterials = materials.filter(m => 
    m.subject.toLowerCase() === subjectName.toLowerCase() ||
    m.category.toLowerCase().includes(subjectName.toLowerCase())
  );

  let html = `
    <!-- Subject Header -->
    <header class="py-12 border-b-2 border-[#161616] mb-10">
      <div class="flex items-center gap-2 mb-3">
        <span class="pill-badge bg-[#FFB51B] text-[#080808]">KOLEKSI MATA PELAJARAN</span>
        <span class="text-xs font-bold uppercase tracking-wider text-[#304D36]">${matchedMaterials.length} Materi Tersedia</span>
      </div>
      <h1 class="font-serif-title text-4xl sm:text-5xl md:text-6xl text-[#161616] mb-4">
        ${subjectName}
      </h1>
      <p class="text-lg text-[#3d463f] max-w-2xl leading-relaxed">
        Kumpulan arsip materi pembelajaran SMK terpadu untuk mata pelajaran ${subjectName} dari jenjang Kelas 10, 11, hingga 12.
      </p>
    </header>

    <!-- Materials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  `;

  if (matchedMaterials.length === 0) {
    html += `
      <div class="col-span-full py-16 text-center">
        <h3 class="font-serif-title text-2xl text-[#161616] mb-2">Materi Belum Tersedia</h3>
        <p class="text-sm text-[#666] mb-6">Materi untuk mata pelajaran ini sedang dalam proses penyusunan kurikulum.</p>
        <a href="index.html" class="inline-block px-5 py-2.5 bg-[#304D36] text-[#FFFDF8] rounded-full text-sm font-bold">
          Kembali ke Beranda
        </a>
      </div>
    `;
  } else {
    matchedMaterials.forEach(item => {
      html += `
        <article class="bg-[#FFFDF8] border-2 border-[#161616] p-6 rounded-xl editorial-card shadow-[4px_4px_0px_#161616] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="pill-badge bg-[#304D36] text-[#FFFDF8] text-[10px]">KELAS ${item.classLevel}</span>
              <span class="text-xs font-semibold text-[#666]">${item.readTime}</span>
            </div>

            <h3 class="font-serif-title text-xl md:text-2xl text-[#161616] mb-3 leading-snug">
              <a href="materi.html?id=${item.id}" class="hover:text-[#C86E39] transition-colors">
                ${item.title}
              </a>
            </h3>

            <p class="text-sm text-[#444] line-clamp-3 leading-relaxed mb-4">
              ${item.description}
            </p>
          </div>

          <div class="pt-4 border-t border-[#EFE2CF] flex items-center justify-between text-xs">
            <span class="font-semibold text-[#C86E39]">${item.category}</span>
            <a href="materi.html?id=${item.id}" class="font-bold text-[#304D36] hover:text-[#C86E39] flex items-center gap-1 group">
              <span>Buka</span>
              <span class="card-arrow">&rarr;</span>
            </a>
          </div>
        </article>
      `;
    });
  }

  html += `</div>`;
  archiveContainer.innerHTML = html;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
