/**
 * ==========================================================================
 * Temo (Hot Which) - Dine-In QR Digital Menu Logic
 * Standalone JavaScript Module • Menu Engine • Live Bill & Order Tray
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Menu Dataset (100% Preserved: 14 Categories & 87 Items)
// --------------------------------------------------------------------------
const MENU_DATA = [
  {
    id: "shawarma-sandwich",
    name: "سندوتشات الشاورما",
    icon: "🌯",
    items: [
      { id: "sh-1", name: "شاورما كبير", price: 100 },
      { id: "sh-2", name: "شاورما وسط", price: 80 },
      { id: "sh-3", name: "شاورما بطاطس", price: 60 },
      { id: "sh-4", name: "شاورما فرنساوي", price: 110 },
      { id: "sh-5", name: "شاورما كايزر", price: 50 },
      { id: "sh-6", name: "شاورما سوبر", price: 160 }
    ]
  },
  {
    id: "shawarma-meals",
    name: "وجبات شاورما",
    icon: "🍱",
    items: [
      { id: "shm-1", name: "وجبة شاورما عربي سينجل", price: 125 },
      { id: "shm-2", name: "وجبة شاورما عربي سوبر", price: 199 },
      { id: "shm-3", name: "وجبة شاورما هوت ويتش", price: 150, badge: "🔥 وجبة مميزة" },
      { id: "shm-4", name: "وجبة شاورما حمص", price: 125 },
      { id: "shm-5", name: "وجبة ماريا", price: 135 },
      { id: "shm-6", name: "فتة شاورما", price: 99 }
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
      { id: "gh-1", name: "بطاطس", price1: 30, price2: 40 },
      { id: "gh-2", name: "زنجر", price1: 70, price2: 80 },
      { id: "gh-3", name: "كرسبي", price1: 70, price2: 80 },
      { id: "gh-4", name: "سكالوب", price1: 70, price2: 80 },
      { id: "gh-5", name: "فاهيتا", price1: 60, price2: 70 },
      { id: "gh-6", name: "مكسيكانو", price1: 60, price2: 70 },
      { id: "gh-7", name: "كفتة", price1: 75, price2: 85 },
      { id: "gh-8", name: "سجق", price1: 70, price2: 80 },
      { id: "gh-9", name: "شيش", price1: 75, price2: 85 }
    ]
  },
  {
    id: "gharby-meals",
    name: "وجبات غربي",
    icon: "🍽️",
    items: [
      { id: "ghm-1", name: "زنجر", price: 130 },
      { id: "ghm-2", name: "كرسبي", price: 130 },
      { id: "ghm-3", name: "شيش", price: 150 },
      { id: "ghm-4", name: "فاهيتا", price: 130 },
      { id: "ghm-5", name: "سكالوب", price: 130 },
      { id: "ghm-6", name: "سجق", price: 150 }
    ]
  },
  {
    id: "mashawy",
    name: "المشويات",
    icon: "🥩",
    items: [
      { id: "msh-1", name: "فرخة كاملة", price: 350, badge: "🔥 مشوي فحم" },
      { id: "msh-2", name: "نص فرخة", price: 190 },
      { id: "msh-3", name: "ربع فرخة صدر", price: 110 },
      { id: "msh-4", name: "ربع فرخة ورك", price: 100 },
      { id: "msh-5", name: "كيلو كفتة", price: 500 },
      { id: "msh-6", name: "نص كيلو كفتة", price: 250 },
      { id: "msh-7", name: "ربع كيلو كفتة", price: 125 }
    ]
  },
  {
    id: "hawawshy",
    name: "الحواوشي",
    icon: "🥟",
    items: [
      { id: "hw-1", name: "حواوشي بلدي", price: 50 },
      { id: "hw-2", name: "حواوشي سوري", price: 65 },
      { id: "hw-3", name: "ميكس لحوم بلدي", price: 65 },
      { id: "hw-4", name: "ميكس لحوم سوري", price: 75 },
      { id: "hw-5", name: "إضافة جبن", price: 20 }
    ]
  },
  {
    id: "temo-burger",
    name: "برجر Temo",
    icon: "🔥",
    items: [
      { id: "tb-1", name: "Temo smoked", price: 125, desc: "عيش / كابوتشا / استريبس / تركي مدخن / جبنة شيدر" },
      { id: "tb-2", name: "Hot wich", price: 125, desc: "خبز / ستربس سبايسي / مايونيز سبايسي / كابوتشا / هاليبينو / جبنة شيدر", badge: "🔥 الأكثر طلباً" },
      { id: "tb-3", name: "Temo roll", price: 85, desc: "خبز تورتيلا / جبنة شيدر / استريبس / كابوتشا" },
      { id: "tb-4", name: "Temo tower", price: 180, desc: "خبز / ستريبس / كابوتشا / كول سلو / جبنة شيدر", badge: "⭐ حجم عملاق" },
      { id: "tb-5", name: "Temo Ranch", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / رانش" },
      { id: "tb-6", name: "Temo classic", price: 115, desc: "عيش / كابوتشا / استربس / جبنة شيدر / تركي / مايونيز" },
      { id: "tb-7", name: "Temo Texas", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / تكساس" },
      { id: "tb-8", name: "Temo triple", price: 270, desc: "عيش / ستريبس / كابوتشا / موزاريلا ستيكس / شيدر", badge: "👑 تريبل ميكس" }
    ]
  },
  {
    id: "burger",
    name: "البرجر",
    icon: "🍔",
    items: [
      { id: "b-1", name: "برجر كلاسيك", price: 80 },
      { id: "b-2", name: "تشيز برجر", price: 95 },
      { id: "b-3", name: "تكساس برجر", price: 99 },
      { id: "b-4", name: "دبل برجر", price: 165 }
    ]
  },
  {
    id: "kaiser",
    name: "الكايزر",
    icon: "🥪",
    items: [
      { id: "kz-1", name: "كرسبي", price: 50 },
      { id: "kz-2", name: "زنجر", price: 50 },
      { id: "kz-3", name: "سكالوب", price: 50 },
      { id: "kz-4", name: "شيش", price: 50 },
      { id: "kz-5", name: "فاهيتا", price: 50 }
    ]
  },
  {
    id: "crepe",
    name: "الكريبات",
    icon: "🥞",
    items: [
      { id: "cr-1", name: "كريب كريسبي", price: 90 },
      { id: "cr-2", name: "كريب زنجر", price: 90 },
      { id: "cr-3", name: "سكالوب بانيه", price: 90 },
      { id: "cr-4", name: "شاورما", price: 100 },
      { id: "cr-5", name: "شيش", price: 100 },
      { id: "cr-6", name: "بطاطس", price: 45 },
      { id: "cr-7", name: "ميكس جبن", price: 65 }
    ]
  },
  {
    id: "rizo",
    name: "الريزو",
    icon: "🍚",
    items: [
      { id: "rz-1", name: "ريزو كريسبي", price: 65 },
      { id: "rz-2", name: "ريزو زنجر", price: 65 },
      { id: "rz-3", name: "ريزو سكالوب", price: 65 },
      { id: "rz-4", name: "ريزو شيش", price: 75 },
      { id: "rz-5", name: "ريزو شاورما", price: 75 }
    ]
  },
  {
    id: "broast-meals",
    name: "وجبات البروست",
    icon: "🍗",
    items: [
      { id: "br-1", name: "وجبة فرد سنجل", price: 120, desc: "2 بروست + 1 عيش + 1 تومية + 1 بطاطس" },
      { id: "br-2", name: "وجبة فرد XL", price: 160, desc: "3 بروست + 1 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { id: "br-3", name: "Double meal", price: 210, desc: "4 بروست + 2 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { id: "br-4", name: "Friends meal", price: 350, desc: "7 بروست + 1 بطاطس عائلي + 3 عيش + تومية + كولسلو" },
      { id: "br-5", name: "Super Friends meal", price: 450, desc: "9 بروست + 4 عيش + 1 تومية + 1 بطاطس عائلي + 1 كولسلو + 1 رز + لتر كولا" },
      { id: "br-6", name: "Family meal", price: 580, desc: "12 بروست + 3 تومية + 1 بطاطس عائلي + 2 كولسلو + 2 رز + لتر كولا", badge: "👨‍👩‍👧‍👦 الأكثر طلباً" },
      { id: "br-7", name: "Family XL Meal", price: 770, desc: "15 بروست + 8 عيش + 4 تومية + بطاطس عائلي + 4 كولسلو + 3 رز + لتر كولا" },
      { id: "br-8", name: "Mix fry", price: 170, desc: "2 بروست + 3 ستريبس + 2 عيش + 1 تومية + 1 بطاطس" }
    ]
  },
  {
    id: "extras",
    name: "الإضافات",
    icon: "🍟",
    items: [
      { id: "ex-1", name: "باكت بطاطس فرد", price: 15 },
      { id: "ex-2", name: "باكت بطاطس عائلي", price: 25 },
      { id: "ex-3", name: "كول سلو", price: 20 },
      { id: "ex-4", name: "تومية", price: 15 },
      { id: "ex-5", name: "صوصات", price: 20 },
      { id: "ex-6", name: "موزاريلا ستيكس", price: 15 },
      { id: "ex-7", name: "هاليبينو", price: 10 },
      { id: "ex-8", name: "خبز", price: 5 }
    ]
  },
  {
    id: "drinks",
    name: "المشروبات",
    icon: "🥤",
    items: [
      { id: "dr-1", name: "كانز", price: 25 },
      { id: "dr-2", name: "عصير", price: 15 },
      { id: "dr-3", name: "مياه", price: 10 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. Application State & DOM References
// --------------------------------------------------------------------------
let currentTable = "";
const orderTray = new Map(); // key -> { id, name, variant, price, qty }

const categoriesScroll = document.getElementById("categories-scroll");
const sectionsContainer = document.getElementById("menu-sections-container");
const searchInput = document.getElementById("menu-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const searchStatusBar = document.getElementById("search-status-bar");
const searchTermQuery = document.getElementById("search-term-query");
const searchCountBadge = document.getElementById("search-count-badge");
const resetSearchBtn = document.getElementById("reset-search-btn");
const emptyState = document.getElementById("empty-state");
const emptyResetBtn = document.getElementById("empty-reset-btn");

const tableTagDisplay = document.getElementById("table-tag-display");
const tableNumberLabel = document.getElementById("table-number-label");

const floatingOrderBar = document.getElementById("floating-order-bar");
const barItemsCount = document.getElementById("bar-items-count");
const barTotalAmount = document.getElementById("bar-total-amount");
const openTrayBtn = document.getElementById("open-tray-btn");

const trayModal = document.getElementById("order-tray-modal");
const trayBackdrop = document.getElementById("tray-backdrop");
const closeTrayBtn = document.getElementById("close-tray-btn");
const trayItemsList = document.getElementById("tray-items-list");
const trayTableInput = document.getElementById("tray-table-input");
const trayNotesInput = document.getElementById("tray-notes-input");
const traySubtotalVal = document.getElementById("tray-subtotal-val");
const trayTotalVal = document.getElementById("tray-total-val");
const sendWaOrderBtn = document.getElementById("send-wa-order-btn");
const callWaiterOrderBtn = document.getElementById("call-waiter-order-btn");

const callWaiterTrigger = document.getElementById("call-waiter-trigger");
const requestBillTrigger = document.getElementById("request-bill-trigger");
const waiterModalWrap = document.getElementById("waiter-modal-wrap");
const waiterModalBackdrop = document.getElementById("waiter-modal-backdrop");
const closeWaiterModalBtn = document.getElementById("close-waiter-modal-btn");
const waiterModalMsg = document.getElementById("waiter-modal-msg");
const waiterTableInfo = document.getElementById("waiter-table-info");

const toastNotify = document.getElementById("toast-notify");

// --------------------------------------------------------------------------
// 3. Initialization
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  detectTableFromUrl();
  renderCategoriesNav();
  renderMenuSections();
  setupSearch();
  setupTrayEvents();
  setupWaiterModal();
});

// --------------------------------------------------------------------------
// 4. URL Table Number Parsing (e.g. ?table=4)
// --------------------------------------------------------------------------
function detectTableFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const tableParam = params.get("table") || params.get("t");
  if (tableParam) {
    currentTable = tableParam.trim();
    tableNumberLabel.textContent = `طاولة رقم: ${currentTable}`;
    trayTableInput.value = currentTable;
  }
}

// --------------------------------------------------------------------------
// 5. Render Sticky Category Navigation Bar
// --------------------------------------------------------------------------
function renderCategoriesNav() {
  categoriesScroll.innerHTML = "";

  // 'All' Pill
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "cat-pill-btn active";
  allBtn.innerHTML = `<span class="cat-pill-icon">🔥</span><span>الكل</span>`;
  allBtn.addEventListener("click", () => {
    setActiveCategoryPill(allBtn);
    clearSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  categoriesScroll.appendChild(allBtn);

  // Each Category Pill
  MENU_DATA.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-pill-btn";
    btn.dataset.catId = cat.id;
    btn.innerHTML = `<span class="cat-pill-icon">${cat.icon || "🍽️"}</span><span>${cat.name}</span>`;

    btn.addEventListener("click", () => {
      setActiveCategoryPill(btn);
      if (searchInput.value.trim().length > 0) {
        clearSearch();
      }
      const targetSec = document.getElementById(`sec-${cat.id}`);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    categoriesScroll.appendChild(btn);
  });
}

function setActiveCategoryPill(btn) {
  document.querySelectorAll(".cat-pill-btn").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

// --------------------------------------------------------------------------
// 6. Render Menu Sections & Items
// --------------------------------------------------------------------------
function renderMenuSections() {
  sectionsContainer.innerHTML = "";

  MENU_DATA.forEach((cat) => {
    const sec = document.createElement("section");
    sec.className = "menu-section";
    sec.id = `sec-${cat.id}`;
    sec.dataset.catId = cat.id;

    let dualHeaderHtml = "";
    if (cat.dual) {
      dualHeaderHtml = `
        <div class="dual-col-header">
          <span>الصنف</span>
          <div class="dual-col-labels">
            <span>${cat.col1}</span>
            <span>${cat.col2}</span>
          </div>
        </div>
      `;
    }

    sec.innerHTML = `
      <div class="section-card-header glass-card">
        <div class="section-head-title-wrap">
          <span class="section-head-icon" aria-hidden="true">${cat.icon}</span>
          <h2 class="section-head-name">${cat.name}</h2>
        </div>
        <span class="section-items-badge">${cat.items.length} أصناف</span>
      </div>
      ${dualHeaderHtml}
      <div class="items-stack" id="stack-${cat.id}"></div>
    `;

    sectionsContainer.appendChild(sec);

    const stack = sec.querySelector(`#stack-${cat.id}`);
    cat.items.forEach((item) => {
      const card = createItemCard(item, cat);
      stack.appendChild(card);
    });
  });

  setupScrollSpy();
}

function createItemCard(item, cat) {
  const card = document.createElement("div");
  card.className = "item-card";
  card.dataset.itemId = item.id;
  card.dataset.name = item.name;

  const badgeHtml = item.badge ? `<span class="item-badge-pill">${item.badge}</span>` : "";
  const descHtml = item.desc ? `<p class="item-desc">${item.desc}</p>` : "";

  let actionHtml = "";
  if (cat.dual) {
    // Dual pricing
    const key1 = `${item.id}_${cat.col1}`;
    const key2 = `${item.id}_${cat.col2}`;
    const qty1 = orderTray.get(key1)?.qty || 0;
    const qty2 = orderTray.get(key2)?.qty || 0;

    actionHtml = `
      <div class="item-pricing-action">
        <div class="dual-price-container">
          <div class="dual-price-pill">
            <span class="type-tag">${cat.col1}</span>
            <span class="price-val">${item.price1} <small>ج</small></span>
          </div>
          <div class="dual-price-pill">
            <span class="type-tag">${cat.col2}</span>
            <span class="price-val">${item.price2} <small>ج</small></span>
          </div>
        </div>
        <div class="dual-add-wrapper">
          <button type="button" class="dual-order-btn" data-type="dual-add" data-variant="${cat.col1}" data-price="${item.price1}">
            + ${cat.col1}
          </button>
          <button type="button" class="dual-order-btn" data-type="dual-add" data-variant="${cat.col2}" data-price="${item.price2}">
            + ${cat.col2}
          </button>
        </div>
      </div>
    `;
  } else {
    // Single pricing
    const key = `${item.id}_default`;
    const qty = orderTray.get(key)?.qty || 0;

    actionHtml = `
      <div class="item-pricing-action">
        <div class="single-price-box">
          <span class="price-number">${item.price}</span>
          <span class="price-curr">ج.م</span>
        </div>
        <div class="item-action-btn-wrap" id="action-wrap-${item.id}">
          ${renderItemCounterOrAddBtn(item.id, item.name, item.price, "", qty)}
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="item-info">
      <div class="item-title-row">
        <h3 class="item-name">${item.name}</h3>
        ${badgeHtml}
      </div>
      ${descHtml}
    </div>
    ${actionHtml}
  `;

  // Attach event handlers for single and dual buttons
  if (cat.dual) {
    const dualBtns = card.querySelectorAll("[data-type='dual-add']");
    dualBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const variant = btn.getAttribute("data-variant");
        const price = parseFloat(btn.getAttribute("data-price"));
        modifyItemQty(item.id, item.name, price, variant, 1);
      });
    });
  } else {
    attachSingleCounterEvents(card, item.id, item.name, item.price);
  }

  return card;
}

function renderItemCounterOrAddBtn(itemId, itemName, price, variant, qty) {
  if (qty > 0) {
    return `
      <div class="order-counter">
        <button type="button" class="counter-btn minus" data-act="minus" aria-label="تقليل الكمية">−</button>
        <span class="counter-qty">${qty}</span>
        <button type="button" class="counter-btn plus" data-act="plus" aria-label="زيادة الكمية">+</button>
      </div>
    `;
  } else {
    return `
      <button type="button" class="add-init-btn" data-act="add">
        + أضف
      </button>
    `;
  }
}

function attachSingleCounterEvents(container, itemId, itemName, price) {
  const wrap = container.querySelector(`#action-wrap-${itemId}`);
  if (!wrap) return;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const act = btn.getAttribute("data-act");
    if (act === "add" || act === "plus") {
      modifyItemQty(itemId, itemName, price, "", 1);
    } else if (act === "minus") {
      modifyItemQty(itemId, itemName, price, "", -1);
    }
  });
}

// --------------------------------------------------------------------------
// 7. Order Tray State Management & Bill Calculation
// --------------------------------------------------------------------------
function modifyItemQty(itemId, itemName, price, variant, delta) {
  const key = `${itemId}_${variant || "default"}`;
  const existing = orderTray.get(key);

  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      orderTray.delete(key);
      showToast(`تم حذف ${itemName} من الطلب`);
    } else {
      if (delta > 0) showToast(`تمت إضافة ${itemName} للطلب`);
    }
  } else if (delta > 0) {
    orderTray.set(key, {
      id: itemId,
      name: itemName,
      variant: variant || "",
      price: price,
      qty: 1
    });
    showToast(`تمت إضافة ${itemName} ${variant ? `(${variant})` : ""} للطلب`);
  }

  updateItemCardUI(itemId);
  updateTrayUI();
}

function updateItemCardUI(itemId) {
  const wrap = document.getElementById(`action-wrap-${itemId}`);
  if (!wrap) return;

  const key = `${itemId}_default`;
  const qty = orderTray.get(key)?.qty || 0;
  const item = findItemById(itemId);
  if (item) {
    wrap.innerHTML = renderItemCounterOrAddBtn(itemId, item.name, item.price, "", qty);
  }
}

function findItemById(id) {
  for (const cat of MENU_DATA) {
    const found = cat.items.find((i) => i.id === id);
    if (found) return found;
  }
  return null;
}

function updateTrayUI() {
  let totalItemsCount = 0;
  let grandTotal = 0;

  trayItemsList.innerHTML = "";

  if (orderTray.size === 0) {
    floatingOrderBar.style.display = "none";
    trayItemsList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">سلة طلب الطاولة فارغة حالياً. اختر منيو الأطعمة للبدء!</p>`;
    traySubtotalVal.textContent = "0 ج.م";
    trayTotalVal.textContent = "0 ج.م";
    return;
  }

  orderTray.forEach((item, key) => {
    totalItemsCount += item.qty;
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;

    const row = document.createElement("div");
    row.className = "tray-item-row";
    row.innerHTML = `
      <div class="tray-item-meta">
        <span class="tray-item-name">${item.name}</span>
        ${item.variant ? `<span class="tray-item-variant">(${item.variant})</span>` : ""}
      </div>
      <span class="tray-item-price">${itemTotal} ج.م</span>
      <div class="order-counter">
        <button type="button" class="counter-btn" data-k="${key}" data-act="sub">−</button>
        <span class="counter-qty">${item.qty}</span>
        <button type="button" class="counter-btn" data-k="${key}" data-act="add">+</button>
      </div>
    `;

    row.querySelectorAll(".counter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.getAttribute("data-act");
        modifyItemQty(item.id, item.name, item.price, item.variant, act === "add" ? 1 : -1);
      });
    });

    trayItemsList.appendChild(row);
  });

  // Update floating bar
  floatingOrderBar.style.display = "block";
  barItemsCount.textContent = totalItemsCount;
  barTotalAmount.textContent = grandTotal;

  // Update modal bill
  traySubtotalVal.textContent = `${grandTotal} ج.م`;
  trayTotalVal.textContent = `${grandTotal} ج.م`;
}

// --------------------------------------------------------------------------
// 8. Tray Modal Events & WhatsApp Ordering
// --------------------------------------------------------------------------
function setupTrayEvents() {
  openTrayBtn.addEventListener("click", () => {
    trayModal.style.display = "flex";
  });

  closeTrayBtn.addEventListener("click", () => {
    trayModal.style.display = "none";
  });

  trayBackdrop.addEventListener("click", () => {
    trayModal.style.display = "none";
  });

  // Send Order via WhatsApp with Table Number
  sendWaOrderBtn.addEventListener("click", () => {
    if (orderTray.size === 0) {
      showToast("سلة طلبك فارغة! يرجى اختيار وجبات أولاً.");
      return;
    }

    const tableNum = trayTableInput.value.trim() || currentTable || "زائر";
    const notes = trayNotesInput.value.trim();

    let orderText = `*🍔 طلب جديد من طاولة رقم: ${tableNum}*\n`;
    orderText += `*مطعم Temo (Hot Which)*\n`;
    orderText += `--------------------------------\n`;

    let total = 0;
    orderTray.forEach((item) => {
      const itemSum = item.price * item.qty;
      total += itemSum;
      const varStr = item.variant ? ` (${item.variant})` : "";
      orderText += `• ${item.qty}x ${item.name}${varStr} = ${itemSum} ج.م\n`;
    });

    orderText += `--------------------------------\n`;
    if (notes) {
      orderText += `📝 *ملاحظات خاصة:* ${notes}\n`;
    }
    orderText += `💰 *المجموع الإجمالي:* ${total} ج.م\n`;
    orderText += `--------------------------------\n`;
    orderText += `(مرسل عبر المنيو الرقمي للطاولة)`;

    const waUrl = `https://wa.me/201034645003?text=${encodeURIComponent(orderText)}`;
    window.open(waUrl, "_blank");

    trayModal.style.display = "none";
    showToast("تم فتح واتساب لإرسال الطلب للمطعم بنجاح!");
  });

  // Call Waiter for Tray Order
  callWaiterOrderBtn.addEventListener("click", () => {
    const tableNum = trayTableInput.value.trim() || currentTable || "زائر";
    trayModal.style.display = "none";
    triggerWaiterModal("طلب استلام الأوردر", `تم إشعار الويتر بطلب طاولة (${tableNum})! سيتوجه إليك الآن لتسجيل الأوردر وتأكيده.`);
  });
}

// --------------------------------------------------------------------------
// 9. Instant Search Engine
// --------------------------------------------------------------------------
function setupSearch() {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length === 0) {
      clearSearch();
      return;
    }

    clearSearchBtn.style.display = "inline-block";
    searchStatusBar.style.display = "flex";
    searchTermQuery.textContent = `"${query}"`;

    let matchCount = 0;

    MENU_DATA.forEach((cat) => {
      const sec = document.getElementById(`sec-${cat.id}`);
      let catHasMatch = false;

      cat.items.forEach((item) => {
        const card = sec.querySelector(`[data-item-id="${item.id}"]`);
        const itemText = (item.name + " " + (item.desc || "") + " " + (item.badge || "")).toLowerCase();
        const matches = itemText.includes(query);

        if (matches) {
          card.style.display = "flex";
          catHasMatch = true;
          matchCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (catHasMatch) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });

    searchCountBadge.textContent = matchCount;

    if (matchCount === 0) {
      emptyState.style.display = "block";
      sectionsContainer.style.display = "none";
    } else {
      emptyState.style.display = "none";
      sectionsContainer.style.display = "block";
    }
  });

  clearSearchBtn.addEventListener("click", clearSearch);
  resetSearchBtn.addEventListener("click", clearSearch);
  emptyResetBtn.addEventListener("click", clearSearch);
}

function clearSearch() {
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  searchStatusBar.style.display = "none";
  emptyState.style.display = "none";
  sectionsContainer.style.display = "block";

  document.querySelectorAll(".menu-section").forEach((s) => (s.style.display = "block"));
  document.querySelectorAll(".item-card").forEach((c) => (c.style.display = "flex"));
}

// --------------------------------------------------------------------------
// 10. Waiter Call & Request Bill Modals
// --------------------------------------------------------------------------
function setupWaiterModal() {
  if (callWaiterTrigger) {
    callWaiterTrigger.addEventListener("click", () => {
      const tableNum = trayTableInput.value.trim() || currentTable || "زائر";
      triggerWaiterModal("طلب مساعدة الويتر", `تم إشعار الويتر بحضور لطاولة (${tableNum})! سيتوجه لطاولتك في ثوانٍ.`);
    });
  }

  if (requestBillTrigger) {
    requestBillTrigger.addEventListener("click", () => {
      const tableNum = trayTableInput.value.trim() || currentTable || "زائر";
      triggerWaiterModal("طلب الحساب والفاتورة", `تم إشعار الكاشير والويتر بتجهيز حساب طاولة (${tableNum}) وسيحضره لك فوراً.`);
    });
  }

  if (closeWaiterModalBtn) {
    closeWaiterModalBtn.addEventListener("click", () => {
      waiterModalWrap.style.display = "none";
    });
  }

  if (waiterModalBackdrop) {
    waiterModalBackdrop.addEventListener("click", () => {
      waiterModalWrap.style.display = "none";
    });
  }
}

function triggerWaiterModal(title, message) {
  const tableNum = trayTableInput.value.trim() || currentTable || "زائر";
  document.getElementById("waiter-modal-title").textContent = title;
  waiterModalMsg.textContent = message;
  waiterTableInfo.innerHTML = `طاولة رقم: <strong>${tableNum}</strong>`;
  waiterModalWrap.style.display = "flex";
}

// --------------------------------------------------------------------------
// 11. ScrollSpy (Syncs Category Pills with Current Scroll Position)
// --------------------------------------------------------------------------
function setupScrollSpy() {
  let isThrottled = false;
  window.addEventListener("scroll", () => {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 100);

    if (searchInput.value.trim().length > 0) return;

    const sections = document.querySelectorAll(".menu-section");
    let currentActiveId = "";

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 160 && rect.bottom >= 160) {
        currentActiveId = sec.dataset.catId;
      }
    });

    if (currentActiveId) {
      const activePill = categoriesScroll.querySelector(`[data-cat-id="${currentActiveId}"]`);
      if (activePill && !activePill.classList.contains("active")) {
        document.querySelectorAll(".cat-pill-btn").forEach((p) => p.classList.remove("active"));
        activePill.classList.add("active");
        activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  });
}

// --------------------------------------------------------------------------
// 12. Toast Notification Helper
// --------------------------------------------------------------------------
let toastTimer = null;
function showToast(msg) {
  if (!toastNotify) return;
  toastNotify.textContent = msg;
  toastNotify.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastNotify.classList.remove("visible");
  }, 2200);
}
