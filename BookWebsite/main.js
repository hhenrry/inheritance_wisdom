// Scroll Reveal 動畫
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if(e.isIntersecting){ 
      e.target.classList.add('visible'); 
      obs.unobserve(e.target); 
    } 
  });
}, {threshold: 0.08, rootMargin: '0px 0px -30px 0px'});

reveals.forEach(el => obs.observe(el));

// 推薦序展開/收合
function toggleEndorse(id, btn) {
  const el = document.getElementById(id);
  const collapsed = el.classList.toggle('collapsed');
  el.classList.toggle('expanded');
  btn.textContent = el.classList.contains('collapsed') ? '▼ 展開全文' : '▲ 收合';
}

// 預覽圖片文字設定
const previewSrcs = [
  { caption: 'C7　保險的三種作用：退休現金流 × 家庭防護 × 傳承現金流設計' },
  { caption: 'D3　資產配置（傳承版）：核心 × 流動 × 成長' },
  { caption: 'A3　房屋稅 2.0 判斷流程：自住 vs 非自住五步驟' }
];

// 書封放大
function openBookCover() {
  const coverImg = document.querySelector('.book-cover');
  if(!coverImg) return;
  document.getElementById('lightboxImg').src = coverImg.src;
  document.getElementById('lightboxCaption').textContent = '《傳承的智慧》書封　蕭旭峰 著';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// 內頁預覽放大
function openLightbox(idx) {
  const cards = document.querySelectorAll('.preview-card img');
  if(cards[idx]) {
    document.getElementById('lightboxImg').src = cards[idx].src;
    document.getElementById('lightboxCaption').textContent = previewSrcs[idx]?.caption || '';
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// 關閉燈箱
function closeLightbox(e) {
  if(!e || e.target === document.getElementById('lightbox') || e.currentTarget.tagName === 'BUTTON') {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 表單防跳轉處理 (此處僅供前端視覺回饋，依您的後端需求調整)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // 若您使用 Formspree，可以移除下方 preventDefault，或使用 AJAX 發送
    // e.preventDefault(); 
    // document.getElementById('contactForm').style.display = 'none';
    // document.getElementById('formSuccess').style.display = 'block';
  });
}

// 導覽列滾動反白
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let cur = '';
  sections.forEach(s => { 
    if(window.scrollY >= s.offsetTop - 100) cur = s.id; 
  });
  links.forEach(a => { 
    a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--gold)' : ''; 
  });
});