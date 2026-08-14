/* ---------------- DATA ---------------- */
const CATS = [
  {id:'all', label:'All Aisles'},
  {id:'spices', label:'Spices & Masalas', tint:'gold'},
  {id:'snacks', label:'Snacks & Namkeen', tint:'ruby'},
  {id:'staples', label:'Rice, Atta & Dals', tint:'sapphire'},
  {id:'pickles', label:'Pickles & Chutneys', tint:'amethyst'},
  {id:'produce', label:'Fresh Produce', tint:'emerald'},
  {id:'festival', label:'Pooja & Festival', tint:'rose'},
];
const TINT = Object.fromEntries(CATS.filter(c=>c.tint).map(c=>[c.id,c.tint]));

const PRODUCTS = [
  {id:'sp1',cat:'spices',icon:'icon-chilli',name:'Kashmiri Lal Mirch',region:'Kashmir',weight:'200g',unit:'pack',price:4.49,desc:"Deep red colour, gentle heat — the base of a good curry."},
  {id:'sp2',cat:'spices',icon:'icon-jar',name:'Haldi (Turmeric) Powder',region:'Sangli',weight:'200g',unit:'pack',price:3.49,desc:"Earthy, high-curcumin turmeric ground from Sangli's finest roots."},
  {id:'sp3',cat:'spices',icon:'icon-jar',name:'Garam Masala, House Blend',region:'In-house',weight:'100g',unit:'pack',price:5.99,desc:"Our own roast-and-grind blend — twelve spices, one tin."},
  {id:'sp4',cat:'spices',icon:'icon-seedbowl',name:'Jeera (Cumin Seeds)',region:'Gujarat',weight:'150g',unit:'pack',price:3.99,desc:"Whole cumin, tempered in hot ghee for that first sizzle."},
  {id:'sp5',cat:'spices',icon:'icon-jar',name:'Dhania Powder',region:'Rajasthan',weight:'200g',unit:'pack',price:3.49,desc:"Coriander seeds, stone-ground for a citrusy, mellow base note."},
  {id:'sp6',cat:'spices',icon:'icon-seedbowl',name:'Rai (Mustard Seeds)',region:'Madhya Pradesh',weight:'100g',unit:'pack',price:2.99,desc:"Small black seeds, big crackle — essential for tempering."},

  {id:'sn1',cat:'snacks',icon:'icon-pouch',name:'Banana Chips, Kerala Style',region:'Kerala',weight:'250g',unit:'pack',price:4.99,desc:"Coconut oil-fried, curry-leaf tossed, properly crunchy."},
  {id:'sn2',cat:'snacks',icon:'icon-pouch',name:'Bhujia Sev',region:'Bikaner',weight:'200g',unit:'pack',price:3.99,desc:"Bikaner's original — thin, spiced, endlessly snackable."},
  {id:'sn3',cat:'snacks',icon:'icon-pouch',name:'Masala Peanuts',region:'Gujarat',weight:'200g',unit:'pack',price:3.49,desc:"Crunch-coated peanuts with a chaat-masala kick."},
  {id:'sn4',cat:'snacks',icon:'icon-pouch',name:'Khakhra, Multigrain',region:'Gujarat',weight:'250g',unit:'pack',price:4.49,desc:"Thin, roasted, six grains — pairs with pickle or chai."},
  {id:'sn5',cat:'snacks',icon:'icon-pouch',name:'Murukku',region:'Tamil Nadu',weight:'200g',unit:'pack',price:4.99,desc:"Spiral rice crisps, ground fresh with roasted urad dal."},
  {id:'sn6',cat:'snacks',icon:'icon-pouch',name:'Moong Dal Namkeen',region:'Uttar Pradesh',weight:'200g',unit:'pack',price:3.99,desc:"Split, fried, lightly salted — the classic tea-time snack."},

  {id:'st1',cat:'staples',icon:'icon-sack',name:'Basmati Rice, Aged 1yr',region:'Punjab',weight:'5kg',unit:'bag',price:14.99,desc:"Extra-long grain, aged a full year for that fragrance."},
  {id:'st2',cat:'staples',icon:'icon-seedbowl',name:'Toor Dal, Split',region:'Maharashtra',weight:'1kg',unit:'pack',price:6.99,desc:"Unpolished, slow-cooked, the everyday dal of most kitchens."},
  {id:'st3',cat:'staples',icon:'icon-seedbowl',name:'Chana Dal',region:'Madhya Pradesh',weight:'1kg',unit:'pack',price:5.99,desc:"Split, hulled chickpeas — sweet, nutty, holds its shape."},
  {id:'st4',cat:'staples',icon:'icon-sack',name:'Whole Wheat Atta',region:'Punjab',weight:'5kg',unit:'bag',price:9.99,desc:"Stone-ground chakki atta, milled the week it's packed."},
  {id:'st5',cat:'staples',icon:'icon-seedbowl',name:'Moong Dal, Yellow',region:'Rajasthan',weight:'1kg',unit:'pack',price:6.49,desc:"Split and skinned — the lightest dal for a quick khichdi."},
  {id:'st6',cat:'staples',icon:'icon-sack',name:'Sona Masoori Rice',region:'Andhra Pradesh',weight:'5kg',unit:'bag',price:11.99,desc:"Lightweight, aromatic, the everyday rice of the south."},

  {id:'pk1',cat:'pickles',icon:'icon-pickle',name:'Alphonso Mango Pickle',region:'Ratnagiri',weight:'400g',unit:'jar',price:7.99,desc:"Sun-cured raw mango, mustard oil, no shortcuts."},
  {id:'pk2',cat:'pickles',icon:'icon-pickle',name:'Mixed Vegetable Pickle',region:'Punjab',weight:'400g',unit:'jar',price:6.99,desc:"Carrot, cauliflower, turnip — a winter-batch classic."},
  {id:'pk3',cat:'pickles',icon:'icon-pickle',name:'Nimbu (Lemon) Pickle',region:'Andhra Pradesh',weight:'350g',unit:'jar',price:6.49,desc:"Sun-fermented lemon, whole spice, sharp and salty."},
  {id:'pk4',cat:'pickles',icon:'icon-jar',name:'Garlic Chutney Powder',region:'Maharashtra',weight:'150g',unit:'pack',price:4.49,desc:"Dry, fiery, meant for dusting over vada pav."},
  {id:'pk5',cat:'pickles',icon:'icon-pickle',name:'Green Chilli Pickle',region:'Rajasthan',weight:'300g',unit:'jar',price:5.99,desc:"Slit chillies, mustard oil, not for the faint-hearted."},
  {id:'pk6',cat:'pickles',icon:'icon-pickle',name:'Amla Pickle',region:'Uttar Pradesh',weight:'350g',unit:'jar',price:6.49,desc:"Gooseberry pickle, tangy — grandmothers swear by it."},

  {id:'pr1',cat:'produce',icon:'icon-leaf',name:'Curry Leaves',region:'Local Farms',weight:'100g',unit:'bunch',price:2.49,desc:"Picked same-morning — the aroma you can't bottle."},
  {id:'pr2',cat:'produce',icon:'icon-root',name:'Fresh Ginger',region:'Local Farms',weight:'250g',unit:'pack',price:2.99,desc:"Knobby, fibrous, full heat — not the pre-peeled kind."},
  {id:'pr3',cat:'produce',icon:'icon-chilli',name:'Green Chillies',region:'Local Farms',weight:'200g',unit:'pack',price:2.49,desc:"Thin, sharp, exactly as spicy as they look."},
  {id:'pr4',cat:'produce',icon:'icon-leaf',name:'Coriander Bunch',region:'Local Farms',weight:'1 bunch',unit:'bunch',price:1.99,desc:"Fresh-cut dhania, roots on, for garnish or chutney."},
  {id:'pr5',cat:'produce',icon:'icon-veg',name:'Drumsticks (Moringa)',region:'Local Farms',weight:'500g',unit:'pack',price:4.49,desc:"For sambar, or just steamed with a squeeze of lime."},
  {id:'pr6',cat:'produce',icon:'icon-veg',name:'Baby Eggplant',region:'Local Farms',weight:'500g',unit:'pack',price:3.49,desc:"Small, thin-skinned, made for bharwa baingan."},

  {id:'fe1',cat:'festival',icon:'icon-diya',name:'Diya Set of 12',region:'Handmade',weight:'1 set',unit:'set',price:8.99,desc:"Clay diyas, hand-turned by a potter family near Pune."},
  {id:'fe2',cat:'festival',icon:'icon-diya',name:'Camphor Tablets',region:'Pure',weight:'50g',unit:'pack',price:3.49,desc:"Pure kapoor tablets, clean-burning for aarti."},
  {id:'fe3',cat:'festival',icon:'icon-incense',name:'Sandalwood Incense Sticks',region:'Mysore',weight:'20 sticks',unit:'pack',price:5.99,desc:"Slow-burning agarbatti, real sandalwood, not synthetic perfume."},
  {id:'fe4',cat:'festival',icon:'icon-sweet',name:'Rava Ladoo, Festive Box',region:'Karnataka',weight:'500g',unit:'box',price:12.99,desc:"Semolina, ghee, cashew — made fresh to order."},
  {id:'fe5',cat:'festival',icon:'icon-jar',name:'Kumkum & Haldi Set',region:'Traditional',weight:'1 set',unit:'set',price:3.99,desc:"Everyday puja essentials, packed in small steel boxes."},
  {id:'fe6',cat:'festival',icon:'icon-garland',name:'Marigold Garland',region:'Fresh-strung',weight:'2 pieces',unit:'pair',price:4.99,desc:"Strung the morning of delivery, for the door or the diya."},
];
const byId = Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));

/* ---------------- STATE ---------------- */
let activeCat = 'all';
let searchTerm = '';
let cart = {}; // id -> qty
let modalId = null;
let modalQty = 1;

/* ---------------- RENDER: AISLES ---------------- */
const aisleGrid = document.getElementById('aisleGrid');
aisleGrid.innerHTML = CATS.filter(c=>c.id!=='all').map(c=>{
  const count = PRODUCTS.filter(p=>p.cat===c.id).length;
  return `<div class="aisle-card" data-cat-link="${c.id}" style="--tint:var(--${c.tint});cursor:pointer">
    <div class="aisle-icon"><svg><use href="#tin"/></svg></div>
    <h3>${c.label}</h3><span class="count">${count} items</span>
  </div>`;
}).join('');

/* ---------------- RENDER: PILLS ---------------- */
const pillRow = document.getElementById('pillRow');
function renderPills(){
  pillRow.innerHTML = CATS.map(c=>{
    const tintStyle = c.tint ? `style="--tint:var(--${c.tint})"` : '';
    return `<button class="pill ${activeCat===c.id?'active':''}" ${tintStyle} data-cat="${c.id}">${c.label}</button>`;
  }).join('');
}

/* ---------------- RENDER: PRODUCTS ---------------- */
const productGrid = document.getElementById('productGrid');
const itemCount = document.getElementById('itemCount');
function renderProducts(){
  let list = PRODUCTS.filter(p => activeCat==='all' || p.cat===activeCat);
  if(searchTerm){
    const t = searchTerm.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(t) || p.region.toLowerCase().includes(t));
  }
  itemCount.textContent = `Showing ${list.length} of ${PRODUCTS.length} items`;
  if(list.length===0){
    productGrid.innerHTML = `<div class="no-results">No items match that search. Try another aisle or clear the search.</div>`;
    return;
  }
  productGrid.innerHTML = list.map(p=>{
    const tint = TINT[p.cat];
    return `<div class="product-card" style="--tint:var(--${tint})" data-id="${p.id}">
      <div class="product-media" data-open="${p.id}"><span class="region-tag">${p.region}</span><svg><use href="#${p.icon}"/></svg></div>
      <div class="product-body">
        <h3 data-open="${p.id}">${p.name}</h3>
        <span class="weight">${p.weight}</span>
        <div class="product-foot">
          <span class="price">$${p.price.toFixed(2)}<small>/${p.unit}</small></span>
          <button class="add-btn" data-add="${p.id}" aria-label="Add ${p.name} to basket">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ---------------- CATEGORY / SEARCH WIRING ---------------- */
function setCategory(catId){
  activeCat = catId;
  renderPills();
  renderProducts();
}
function goToShop(catId){
  setCategory(catId);
  document.getElementById('shop').scrollIntoView({behavior:'smooth', block:'start'});
}
pillRow.addEventListener('click', e=>{
  const btn = e.target.closest('[data-cat]');
  if(btn) setCategory(btn.dataset.cat);
});
aisleGrid.addEventListener('click', e=>{
  const card = e.target.closest('[data-cat-link]');
  if(card) goToShop(card.dataset.catLink);
});
document.querySelectorAll('footer [data-cat-link]').forEach(a=>{
  a.addEventListener('click', e=>{ e.preventDefault(); goToShop(a.dataset.catLink); });
});
document.getElementById('searchInput').addEventListener('input', e=>{
  searchTerm = e.target.value;
  if(searchTerm && activeCat!=='all'){ activeCat='all'; renderPills(); }
  renderProducts();
});

/* ---------------- DABBA WHEEL ---------------- */
const wedges = document.querySelectorAll('.dabba-wheel path');
const nameEl = document.getElementById('dabbaName');
const descEl = document.getElementById('dabbaDesc');
const defaultName = nameEl.textContent, defaultDesc = descEl.textContent;
wedges.forEach(w=>{
  const show = ()=>{ nameEl.innerHTML = w.dataset.name; descEl.innerHTML = w.dataset.desc; };
  const hide = ()=>{ nameEl.textContent = defaultName; descEl.textContent = defaultDesc; };
  w.addEventListener('mouseenter', show);
  w.addEventListener('focus', show);
  w.addEventListener('mouseleave', hide);
  w.addEventListener('blur', hide);
  w.addEventListener('click', ()=> goToShop(w.dataset.cat));
  w.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); w.click(); } });
});

/* ---------------- TWINKLE LIGHTS ---------------- */
const lightsWrap = document.getElementById('heroLights');
const palette = ['gold','ruby','emerald','amethyst','sapphire','rose'];
for(let i=0;i<16;i++){
  const el = document.createElement('div');
  const c = palette[i % palette.length];
  const size = 3 + Math.random()*5;
  el.className='light';
  el.style.width=size+'px';
  el.style.height=size+'px';
  el.style.top=Math.random()*100+'%';
  el.style.left=Math.random()*100+'%';
  el.style.background=`var(--${c})`;
  el.style.boxShadow=`0 0 ${6+size}px var(--${c})`;
  el.style.animationDelay=(Math.random()*3)+'s';
  el.style.zIndex='1';
  lightsWrap.appendChild(el);
}

/* ---------------- TOAST ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2200);
}

/* ---------------- CART LOGIC ---------------- */
const cartBadge = document.getElementById('cartBadge');
function addToCart(id, qty=1){
  cart[id] = (cart[id]||0) + qty;
  updateCartUI();
  const p = byId[id];
  showToast(`Added ${p.name} to your basket`);
}
function setQty(id, qty){
  if(qty<=0){ delete cart[id]; } else { cart[id]=qty; }
  updateCartUI();
}
function cartCount(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartSubtotal(){ return Object.entries(cart).reduce((sum,[id,qty])=> sum + byId[id].price*qty, 0); }

function updateCartUI(){
  const count = cartCount();
  cartBadge.textContent = count;
  cartBadge.classList.toggle('show', count>0);
  renderDrawer();
}

const drawerItems = document.getElementById('drawerItems');
const subtotalVal = document.getElementById('subtotalVal');
function renderDrawer(){
  const entries = Object.entries(cart);
  if(entries.length===0){
    drawerItems.innerHTML = `<div class="cart-empty">Your basket is empty — go fill a tin.</div>`;
  } else {
    drawerItems.innerHTML = entries.map(([id,qty])=>{
      const p = byId[id];
      const tint = TINT[p.cat];
      return `<div class="cart-item" style="--tint:var(--${tint})" data-id="${id}">
        <div class="cart-thumb"><svg><use href="#${p.icon}"/></svg></div>
        <div class="cart-info">
          <h4>${p.name}</h4>
          <span>${p.weight} · $${p.price.toFixed(2)}/${p.unit}</span>
          <div class="cart-line-foot">
            <div class="stepper" style="transform:scale(.85);transform-origin:left center;">
              <button data-dec="${id}">−</button><span>${qty}</span><button data-inc="${id}">+</button>
            </div>
            <button class="cart-remove" data-remove="${id}">Remove</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }
  subtotalVal.textContent = `$${cartSubtotal().toFixed(2)}`;
}
drawerItems.addEventListener('click', e=>{
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  const rem = e.target.closest('[data-remove]');
  if(inc) setQty(inc.dataset.inc, (cart[inc.dataset.inc]||0)+1);
  if(dec) setQty(dec.dataset.dec, (cart[dec.dataset.dec]||0)-1);
  if(rem) setQty(rem.dataset.remove, 0);
});

/* ---------------- CART DRAWER OPEN/CLOSE ---------------- */
const drawerOverlay = document.getElementById('drawerOverlay');
document.getElementById('cartBtn').addEventListener('click', ()=> drawerOverlay.classList.add('open'));
document.getElementById('drawerClose').addEventListener('click', ()=> drawerOverlay.classList.remove('open'));
drawerOverlay.addEventListener('click', e=>{ if(e.target===drawerOverlay) drawerOverlay.classList.remove('open'); });
document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cartCount()===0){ showToast('Your basket is empty'); return; }
  const lines = Object.entries(cart).map(([id,qty])=>{
    const p = byId[id];
    return `${qty} x ${p.name} (${p.weight}) — $${(p.price*qty).toFixed(2)}`;
  }).join('\n');
  const total = cartSubtotal().toFixed(2);
  const message = `New order from Apna Dukaan:\n\n${lines}\n\nTotal: $${total}`;
  const waLink = `https://wa.me/50766036321?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
  showToast('🎉 Order sent to WhatsApp for confirmation');
  cart = {};
  updateCartUI();
  setTimeout(()=> drawerOverlay.classList.remove('open'), 900);
});

/* ---------------- QUICK VIEW MODAL ---------------- */
const modalOverlay = document.getElementById('modalOverlay');
const modalPanel = document.getElementById('modalPanel');
function openModal(id){
  modalId = id; modalQty = 1;
  const p = byId[id];
  const tint = TINT[p.cat];
  modalPanel.style.setProperty('--tint', `var(--${tint})`);
  document.getElementById('modalRegion').textContent = p.region;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalWeight').textContent = `${p.weight} · per ${p.unit}`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = `$${p.price.toFixed(2)}`;
  document.getElementById('modalQty').textContent = modalQty;
  modalOverlay.querySelector('.modal-media use').setAttribute('href', `#${p.icon}`);
  modalOverlay.classList.add('open');
}
function closeModal(){ modalOverlay.classList.remove('open'); modalId=null; }
productGrid.addEventListener('click', e=>{
  const opener = e.target.closest('[data-open]');
  const adder = e.target.closest('[data-add]');
  if(adder){
    addToCart(adder.dataset.add, 1);
    adder.classList.remove('pulse'); void adder.offsetWidth; adder.classList.add('pulse');
    return;
  }
  if(opener) openModal(opener.dataset.open);
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e=>{ if(e.target===modalOverlay) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeModal(); drawerOverlay.classList.remove('open'); } });
document.getElementById('modalMinus').addEventListener('click', ()=>{ modalQty=Math.max(1,modalQty-1); document.getElementById('modalQty').textContent=modalQty; });
document.getElementById('modalPlus').addEventListener('click', ()=>{ modalQty+=1; document.getElementById('modalQty').textContent=modalQty; });
document.getElementById('modalAdd').addEventListener('click', ()=>{ addToCart(modalId, modalQty); closeModal(); });

/* ---------------- SCROLL REVEAL ---------------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------------- INIT ---------------- */
renderPills();
renderProducts();
updateCartUI();
