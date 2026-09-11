/**
 * ==========================================================================
 * Temo (Hot Which) - Restaurant Menu Script
 * Standalone JavaScript Module • Menu Data • State Management • Interactions
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Categories & Menu Items Data (All prices preserved 100% exactly as provided)
// --------------------------------------------------------------------------
const CATEGORIES = [
  {
    id: "shawarma-sandwich",
    name: "سندوتشات الشاورما",
    icon: "🌯",
    items: [
      { name: "شاورما كبير", price: 100 },
      { name: "شاورما وسط", price: 80 },
      { name: "شاورما بطاطس", price: 60 },
      { name: "شاورما فرنساوي", price: 110 },
      { name: "شاورما كايزر", price: 50 },
      { name: "شاورما سوبر", price: 160 }
    ]
  },
  {
    id: "shawarma-meals",
    name: "وجبات شاورما",
    icon: "🍱",
    items: [
      { name: "وجبة شاورما عربي سينجل", price: 125 },
      { name: "وجبة شاورما عربي سوبر", price: 199 },
      { name: "وجبة شاورما هوت ويتش", price: 150, badge: "🔥 وجبة مميزة" },
      { name: "وجبة شاورما حمص", price: 125 },
      { name: "وجبة ماريا", price: 135 },
      { name: "فتة شاورما", price: 99 }
    ]
  },
  {
    id: "gharby",
    name: "القسم الغربي",
    icon: "🍟",
    dual: true,
    col1: "سوري",
    col2: "فرنساوي",
    items: [
      { name: "بطاطس", price1: 30, price2: 40 },
      { name: "زنجر", price1: 70, price2: 80 },
      { name: "كرسبي", price1: 70, price2: 80 },
      { name: "سكالوب", price1: 70, price2: 80 },
      { name: "فاهيتا", price1: 60, price2: 70 },
      { name: "مكسيكانو", price1: 60, price2: 70 },
      { name: "كفتة", price1: 75, price2: 85 },
      { name: "سجق", price1: 70, price2: 80 },
      { name: "شيش", price1: 75, price2: 85 }
    ]
  },
  {
    id: "gharby-meals",
    name: "وجبات غربي",
    icon: "🍽️",
    items: [
      { name: "زنجر", price: 130 },
      { name: "كرسبي", price: 130 },
      { name: "شيش", price: 150 },
      { name: "فاهيتا", price: 130 },
      { name: "سكالوب", price: 130 },
      { name: "سجق", price: 150 }
    ]
  },
  {
    id: "mashawy",
    name: "المشويات",
    icon: "🥩",
    items: [
      { name: "فرخة كاملة", price: 350, badge: "🔥 مشوي فحم" },
      { name: "نص فرخة", price: 190 },
      { name: "ربع فرخة صدر", price: 110 },
      { name: "ربع فرخة ورك", price: 100 },
      { name: "كيلو كفتة", price: 500 },
      { name: "نص كيلو كفتة", price: 250 },
      { name: "ربع كيلو كفتة", price: 125 }
    ]
  },
  {
    id: "hawawshy",
    name: "الحواوشي",
    icon: "🥟",
    items: [
      { name: "حواوشي بلدي", price: 50 },
      { name: "حواوشي سوري", price: 65 },
      { name: "ميكس لحوم بلدي", price: 65 },
      { name: "ميكس لحوم سوري", price: 75 },
      { name: "إضافة جبن", price: 20 }
    ]
  },
  {
    id: "temo-burger",
    name: "برجر Temo",
    icon: "🔥",
    items: [
      { name: "Temo smoked", price: 125, desc: "عيش / كابوتشا / استريبس / تركي مدخن / جبنة شيدر" },
      { name: "Hot wich", price: 125, desc: "خبز / ستربس سبايسي / مايونيز سبايسي / كابوتشا / هاليبينو / جبنة شيدر", badge: "🔥 الأكثر طلباً" },
      { name: "Temo roll", price: 85, desc: "خبز تورتيلا / جبنة شيدر / استريبس / كابوتشا" },
      { name: "Temo tower", price: 180, desc: "خبز / ستريبس / كابوتشا / كول سلو / جبنة شيدر", badge: "⭐ حجم عملاق" },
      { name: "Temo Ranch", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / رانش" },
      { name: "Temo classic", price: 115, desc: "عيش / كابوتشا / استربس / جبنة شيدر / تركي / مايونيز" },
      { name: "Temo Texas", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / تكساس" },
      { name: "Temo triple", price: 270, desc: "عيش / ستريبس / كابوتشا / موزاريلا ستيكس / شيدر", badge: "👑 تريبل ميكس" }
    ]
  },
  {
    id: "burger",
    name: "البرجر",
    icon: "🍔",
    items: [
      { name: "برجر كلاسيك", price: 80 },
      { name: "تشيز برجر", price: 95 },
      { name: "تكساس برجر", price: 99 },
      { name: "دبل برجر", price: 165 }
    ]
  },
  {
    id: "kaiser",
    name: "الكايزر",
    icon: "🥪",
    items: [
      { name: "كرسبي", price: 50 },
      { name: "زنجر", price: 50 },
      { name: "سكالوب", price: 50 },
      { name: "شيش", price: 50 },
      { name: "فاهيتا", price: 50 }
    ]
  },
  {
    id: "crepe",
    name: "الكريبات",
    icon: "🥞",
    items: [
      { name: "كريب كريسبي", price: 90 },
      { name: "كريب زنجر", price: 90 },
      { name: "سكالوب بانيه", price: 90 },
      { name: "شاورما", price: 100 },
      { name: "شيش", price: 100 },
      { name: "بطاطس", price: 45 },
      { name: "ميكس جبن", price: 65 }
    ]
  },
  {
    id: "rizo",
    name: "الريزو",
    icon: "🍚",
    items: [
      { name: "ريزو كريسبي", price: 65 },
      { name: "ريزو زنجر", price: 65 },
      { name: "ريزو سكالوب", price: 65 },
      { name: "ريزو شيش", price: 75 },
      { name: "ريزو شاورما", price: 75 }
    ]
  },
  {
    id: "broast-meals",
    name: "وجبات البروست",
    icon: "🍗",
    items: [
      { name: "وجبة فرد سنجل", price: 120, desc: "2 بروست + 1 عيش + 1 تومية + 1 بطاطس" },
      { name: "وجبة فرد XL", price: 160, desc: "3 بروست + 1 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { name: "Double meal", price: 210, desc: "4 بروست + 2 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { name: "Friends meal", price: 350, desc: "7 بروست + 1 بطاطس عائلي + 3 عيش + تومية + كولسلو" },
      { name: "Super Friends meal", price: 450, desc: "9 بروست + 4 عيش + 1 تومية + 1 بطاطس عائلي + 1 كولسلو + 1 رز + لتر كولا" },
      { name: "Family meal", price: 580, desc: "12 بروست + 3 تومية + 1 بطاطس عائلي + 2 كولسلو + 2 رز + لتر كولا", badge: "👨‍👩‍👧‍👦 الأكثر طلباً" },
      { name: "Family XL Meal", price: 770, desc: "15 بروست + 8 عيش + 4 تومية + بطاطس عائلي + 4 كولسلو + 3 رز + لتر كولا" },
      { name: "Mix fry", price: 170, desc: "2 بروست + 3 ستريبس + 2 عيش + 1 تومية + 1 بطاطس" }
    ]
  },
  {
    id: "extras",
    name: "الإضافات",
    icon: "🍟",
    items: [
      { name: "باكت بطاطس فرد", price: 15 },
      { name: "باكت بطاطس عائلي", price: 25 },
      { name: "كول سلو", price: 20 },
      { name: "تومية", price: 15 },
      { name: "صوصات", price: 20 },
      { name: "موزاريلا ستيكس", price: 15 },
      { name: "هاليبينو", price: 10 },
      { name: "خبز", price: 5 }
    ]
  },
  {
    id: "drinks",
    name: "المشروبات",
    icon: "🥤",
    items: [
      { name: "كانز", price: 25 },
      { name: "عصير", price: 15 },
      { name: "مياه", price: 10 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. DOM Elements Selection
// --------------------------------------------------------------------------
const splashEl = document.getElementById('splash');
const pageList = document.getElementById('page-list');
const pageCat = document.getElementById('page-cat');
const categoriesGrid = document.getElementById('categories-grid');
const catNameEl = document.getElementById('cat-name');
const catDescEl = document.getElementById('cat-desc');
const catItemsCountEl = document.getElementById('cat-items-count');
const catIconHaloEl = document.getElementById('cat-icon-halo');
const crumbCatNameEl = document.getElementById('crumb-cat-name');
const crumbHomeEl = document.getElementById('crumb-home');
const catItemsCountTextEl = document.getElementById('cat-items-count-text');
const catQuickTabsEl = document.getElementById('cat-quick-tabs');
const itemsEl = document.getElementById('items');
const dualHeadWrap = document.getElementById('dual-head-wrap');
const backBtn = document.getElementById('back-btn');
const backBtnInline = document.getElementById('back-btn-inline');
const brandHome = document.getElementById('brand-home');
const menuSearch = document.getElementById('menu-search');
const clearSearch = document.getElementById('clear-search');
const searchResultsWrap = document.getElementById('search-results-wrap');
const searchItemsEl = document.getElementById('search-items');
const resultsCountEl = document.getElementById('results-count');
const categoriesWrap = document.getElementById('categories-wrap');
const embersEl = document.getElementById('embers');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const btnShare = document.getElementById('btn-share');
const toastEl = document.getElementById('toast');

// Custom Appetizing Taglines for Categories
const CATEGORY_TAGLINES = {
  "shawarma-sandwich": "أشهى ساندوتشات الشاورما السوري والفرنساوي بتتبيلة تيمو الخاصة وثومية أصلية",
  "shawarma-meals": "وجبات شاورما عائلية وسوبر متكاملة مع البطاطس والثومية والمخلل والعيش المحمص",
  "gharby": "تشكيلة الساندوتشات الغربية اللذيذة: زنجر، كرسبي، شيش، وفاهيتا بالعيش السوري والفرنساوي",
  "gharby-meals": "وجبات غربي مشبعة تقدم ساخنة مع الأرز والبطاطس المقرمشة وألذ الصصوصات",
  "mashawy": "مشويات على الفحم بتتبيلة تيمو السرية، فراخ مشوية طازجة وكفتة بلدي ممتازة",
  "hawawshy": "حواوشي بلدي وسوري على أصوله بميكس اللحوم المتبلة والجبنة السايحة",
  "temo-burger": "سلسلة برجر Temo الأسطورية بأحجام عملاقة مع الستريبس والموزاريلا ستيكس",
  "burger": "برجر لحم بقري صافي 100% مشوي على اللهب مع الجبنة الشيدر والصوصات الخاصة",
  "kaiser": "ساندوتشات كايزر سريعة وشهية من الكريسبي والزنجر والشيش والفاهيتا",
  "crepe": "كريب فرنسي مقرمش محشو بألذ قطع الدجاج واللحوم ومكس الجبن الموتزاريلا",
  "broast": "قطع دجاج بروست مقرمشة على الطريقة الخاصة مع بطاطس ذهبية وثومية وعيش",
  "pizza": "بيتزا إيطالية بعجينة هشة وخفيفة مخبوزة طازجة مع أشهى المكونات ومكس الجبن",
  "fatta": "فتة أرز بسمتي بالخلطة الخاصة مع الشاورما أو الفاهيتا وصوص الثومية",
  "drinks": "مشروبات غازية باردة وعصائر فريش ومياه مثلجة لإنعاش وجبتك"
};

// --------------------------------------------------------------------------
// 3. Render Categories Grid
// --------------------------------------------------------------------------
function renderCategories() {
  categoriesGrid.innerHTML = '';
  CATEGORIES.forEach((cat, index) => {
    const card = document.createElement('a');
    card.className = 'cat-card glass-card';
    card.href = `#${cat.id}`;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `فتح قسم ${cat.name}`);
    card.style.animationDelay = `${index * 0.04}s`;

    card.innerHTML = `
      <div class="cat-card-main">
        <div class="cat-icon-badge" aria-hidden="true">${cat.icon || '🍽️'}</div>
        <div class="cat-meta">
          <span class="name">${cat.name}</span>
          <span class="items-count">${cat.items.length} أصناف</span>
        </div>
      </div>
      <span class="arrow" aria-hidden="true">‹</span>
    `;

    card.addEventListener('click', (ev) => {
      ev.preventDefault();
      showCategory(cat.id, true);
    });

    categoriesGrid.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 4. View Switching & Category Details
// --------------------------------------------------------------------------
function renderCategoryQuickTabs(activeId) {
  if (!catQuickTabsEl) return;
  catQuickTabsEl.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `quick-cat-tab ${cat.id === activeId ? 'active' : ''}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', cat.id === activeId ? 'true' : 'false');
    tab.setAttribute('aria-label', `الانتقال لقسم ${cat.name}`);
    tab.innerHTML = `
      <span class="tab-icon" aria-hidden="true">${cat.icon || '🍽️'}</span>
      <span class="tab-name">${cat.name}</span>
    `;

    tab.addEventListener('click', () => {
      if (cat.id !== activeId) {
        showCategory(cat.id);
      }
    });

    catQuickTabsEl.appendChild(tab);

    if (cat.id === activeId) {
      setTimeout(() => {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 60);
    }
  });
}

function showCategory(id, pushHistory = true) {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return;

  // Reset category items container
  itemsEl.innerHTML = '';
  dualHeadWrap.innerHTML = '';

  // Update Category Header
  catNameEl.textContent = cat.name;
  if (crumbCatNameEl) crumbCatNameEl.textContent = cat.name;
  if (catIconHaloEl) catIconHaloEl.textContent = cat.icon || '🍽️';
  if (catItemsCountTextEl) {
    catItemsCountTextEl.textContent = `${cat.items.length} أصناف متوفرة`;
  } else if (catItemsCountEl) {
    catItemsCountEl.textContent = `${cat.items.length} أصناف`;
  }

  const customDesc = CATEGORY_TAGLINES[cat.id];
  if (customDesc) {
    catDescEl.textContent = customDesc + (cat.dual ? ' • الأسعار محددة وفق الحجم (سوري / فرنساوي)' : '');
  } else {
    catDescEl.textContent = cat.dual 
      ? 'الأسعار محددة وفق الحجم (سوري / فرنساوي) بالجنيه المصري' 
      : 'جميع الأسعار بالجنيه المصري (ج.م)';
  }

  // Render & highlight quick category tabs
  renderCategoryQuickTabs(cat.id);

  // If Dual-priced Category (e.g. القسم الغربي)
  if (cat.dual) {
    const head = document.createElement('div');
    head.className = 'dual-head';
    head.innerHTML = `
      <span>الصنف</span>
      <span class="cols">
        <span>${cat.col1}</span>
        <span>${cat.col2}</span>
      </span>
    `;
    dualHeadWrap.appendChild(head);
  }

  // Render Category Items with Staggered Fade-in Animation
  cat.items.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.style.animationDelay = `${idx * 0.035}s`;

    let priceHtml = '';
    if (cat.dual) {
      priceHtml = `
        <div class="dual-price-wrap">
          <div class="dual-price-box">
            ${item.price1}
            <span>${cat.col1}</span>
          </div>
          <div class="dual-price-box">
            ${item.price2}
            <span>${cat.col2}</span>
          </div>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="price-tag flame-text">
          <span>${item.price}</span>
          <span class="price-currency">ج.م</span>
        </div>
      `;
    }

    const descHtml = item.desc ? `<p class="item-desc">${item.desc}</p>` : '';
    const badgeHtml = item.badge ? `<span class="item-badge-special">${item.badge}</span>` : '';

    row.innerHTML = `
      <div class="item-info">
        <h3 class="item-name">${item.name} ${badgeHtml}</h3>
        ${descHtml}
      </div>
      ${priceHtml}
    `;

    itemsEl.appendChild(row);
  });

  // Switch Active Page
  pageList.classList.remove('show');
  pageCat.classList.add('show');
  backBtn.classList.add('visible');

  // Clear search query if open
  if (menuSearch.value.trim().length > 0) {
    clearSearchInput();
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Push state for mobile back button support
  if (pushHistory) {
    history.pushState({ view: 'cat', id: id }, '', `#${id}`);
  }
}

function showList(pushHistory = true) {
  pageCat.classList.remove('show');
  pageList.classList.add('show');
  backBtn.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pushHistory) {
    history.pushState({ view: 'list' }, '', '#');
  }
}

// --------------------------------------------------------------------------
// 5. Client-Side Instant Menu Search
// --------------------------------------------------------------------------
function handleSearch() {
  const query = menuSearch.value.trim().toLowerCase();

  if (query.length === 0) {
    clearSearchInput();
    return;
  }

  clearSearch.style.display = 'flex';
  searchResultsWrap.style.display = 'block';
  categoriesWrap.style.display = 'none';

  // Search across all items and categories
  const matches = [];
  CATEGORIES.forEach(cat => {
    cat.items.forEach(item => {
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.desc ? item.desc.toLowerCase().includes(query) : false;
      const matchCat = cat.name.toLowerCase().includes(query);

      if (matchName || matchDesc || matchCat) {
        matches.push({ item, cat });
      }
    });
  });

  resultsCountEl.textContent = matches.length;
  searchItemsEl.innerHTML = '';

  if (matches.length === 0) {
    searchItemsEl.innerHTML = `
      <div class="no-results glass-card">
        <span class="no-results-icon">🔍</span>
        <p>لا توجد وجبات أو أصناف مطابقة لكلمة "<strong>${query}</strong>"</p>
        <span style="font-size:12.5px;color:var(--text-dim);margin-top:6px;display:block;">جرب البحث بكلمة أخرى مثل: شاورما، زنجر، بروست، كفتة</span>
      </div>
    `;
    return;
  }

  matches.forEach(({ item, cat }, idx) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.style.animationDelay = `${idx * 0.025}s`;

    let priceHtml = '';
    if (cat.dual) {
      priceHtml = `
        <div class="dual-price-wrap">
          <div class="dual-price-box">
            ${item.price1}
            <span>${cat.col1}</span>
          </div>
          <div class="dual-price-box">
            ${item.price2}
            <span>${cat.col2}</span>
          </div>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="price-tag flame-text">
          <span>${item.price}</span>
          <span class="price-currency">ج.م</span>
        </div>
      `;
    }

    const descHtml = item.desc ? `<p class="item-desc">${item.desc}</p>` : '';
    const badgeHtml = item.badge ? `<span class="item-badge-special">${item.badge}</span>` : '';

    row.innerHTML = `
      <div class="item-info">
        <span class="item-badge-cat">${cat.name}</span>
        <h3 class="item-name">${item.name} ${badgeHtml}</h3>
        ${descHtml}
      </div>
      ${priceHtml}
    `;

    searchItemsEl.appendChild(row);
  });
}

function clearSearchInput() {
  menuSearch.value = '';
  clearSearch.style.display = 'none';
  searchResultsWrap.style.display = 'none';
  categoriesWrap.style.display = 'block';
  searchItemsEl.innerHTML = '';
}

// --------------------------------------------------------------------------
// 6. Toast Notification Helper
// --------------------------------------------------------------------------
let toastTimeout;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// --------------------------------------------------------------------------
// 7. Optimized Embers Particle Animation
// --------------------------------------------------------------------------
function initEmbers() {
  if (!embersEl) return;
  const count = window.innerWidth < 600 ? 18 : 28;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const ember = document.createElement('div');
    ember.className = 'ember';

    const size = (Math.random() * 3 + 2).toFixed(1);
    const left = (Math.random() * 100).toFixed(2);
    const duration = (Math.random() * 6 + 5).toFixed(2);
    const delay = (Math.random() * 8).toFixed(2);
    const drift = ((Math.random() - 0.5) * 80).toFixed(1) + 'px';

    // Color variety: gold, flame orange, ember ruby
    const colors = [
      'rgba(255, 224, 102, 0.85)',
      'rgba(255, 106, 0, 0.9)',
      'rgba(255, 158, 0, 0.85)',
      'rgba(217, 4, 41, 0.75)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.left = `${left}%`;
    ember.style.backgroundColor = color;
    ember.style.boxShadow = `0 0 ${size * 3}px ${color}`;
    ember.style.setProperty('--drift', drift);
    ember.style.animationDuration = `${duration}s`;
    ember.style.animationDelay = `${delay}s`;

    fragment.appendChild(ember);
  }

  embersEl.appendChild(fragment);
}

// --------------------------------------------------------------------------
// 8. Event Listeners & PWA Initialization
// --------------------------------------------------------------------------
function initEvents() {
  // Back button listeners
  backBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  backBtnInline.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  if (crumbHomeEl) {
    crumbHomeEl.addEventListener('click', (ev) => {
      ev.preventDefault();
      showList();
    });
  }

  brandHome.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  // Hero interactive jump badges
  const menuJumpBadge = document.querySelector('.menu-jump-badge');
  if (menuJumpBadge) {
    menuJumpBadge.addEventListener('click', (ev) => {
      ev.preventDefault();
      clearSearchInput();
      const catWrap = document.getElementById('categories-wrap');
      if (catWrap) {
        catWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const reviewJumpBadge = document.querySelector('.review-jump-badge');
  if (reviewJumpBadge) {
    reviewJumpBadge.addEventListener('click', (ev) => {
      ev.preventDefault();
      const revSec = document.getElementById('reviews-section');
      if (revSec) {
        revSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Search input listeners
  menuSearch.addEventListener('input', handleSearch);
  clearSearch.addEventListener('click', () => {
    clearSearchInput();
    menuSearch.focus();
  });

  // Scroll To Top Button
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Share Menu Button -> Opens WhatsApp to share menu link with anyone
  if (btnShare) {
    function getWhatsAppShareLink() {
      const shareUrl = window.location.href;
      const shareText = 'استعرض منيو وأسعار مطعم Temo (Hot Which) أونلاين:\n' + shareUrl;
      return 'https://api.whatsapp.com/send?text=' + encodeURIComponent(shareText);
    }

    // Set dynamic URL on load
    btnShare.href = getWhatsAppShareLink();

    btnShare.addEventListener('click', (e) => {
      // Refresh URL to current state before opening
      btnShare.href = getWhatsAppShareLink();
      showToast('جارٍ فتح واتساب لمشاركة المنيو... 💬');
    });
  }

  // Mobile Back Button Support via popstate
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'cat') {
      showCategory(event.state.id, false);
    } else {
      showList(false);
    }
  });

  // Handle URL Hash if opened directly (e.g., #temo-burger)
  if (window.location.hash) {
    const catId = window.location.hash.replace('#', '');
    if (CATEGORIES.some(c => c.id === catId)) {
      showCategory(catId, false);
    }
  }

  // Dismiss Splash Screen on Page Load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (splashEl) {
        splashEl.classList.add('hide');
      }
    }, 900);
  });

  // Register PWA Service Worker for Offline Support (Only on HTTP/HTTPS to prevent RESULT_CODE_KILLED_BAD_MESSAGE on file://)
  const isHttpOrHttps = window.location.protocol === 'http:' || window.location.protocol === 'https:';
  if ('serviceWorker' in navigator && isHttpOrHttps) {
    window.addEventListener('load', () => {
      try {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('Temo PWA Service Worker registered successfully:', reg.scope);
          })
          .catch((err) => {
            console.warn('Service Worker registration skipped or failed:', err);
          });
      } catch (err) {
        console.warn('Service Worker registration error:', err);
      }
    });
  }
}



// --------------------------------------------------------------------------
// 9. Initialize Standalone Menu Application
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  initEmbers();
  initEvents();
});
