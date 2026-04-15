// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ===============================
// MOBILE MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMobile() {
  mobileMenu.classList.remove("open");
}


// ===============================
// GALLERY DATA
// ===============================
const paintings = [
  { title: "Golden Hour", type: "landscape", price: "₹5,500" },
  { title: "Blooming Soul", type: "floral", price: "₹4,000" },
  { title: "Silent Thoughts", type: "portrait", price: "₹6,000" },
  { title: "Abstract Dreams", type: "abstract", price: "₹3,500" },
  { title: "Ocean Whisper", type: "landscape", price: "₹5,000" },
  { title: "Rose Poetry", type: "floral", price: "₹4,200" },
];

const galleryGrid = document.getElementById("galleryGrid");

// Render gallery
function renderGallery(filter = "all") {
  galleryGrid.innerHTML = "";

  const filtered =
    filter === "all"
      ? paintings
      : paintings.filter((p) => p.type === filter);

  filtered.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    card.innerHTML = `
      <div class="card-art" style="background:#fce4ed">
        🎨
        <div class="card-overlay"><span>View</span></div>
      </div>
      <div class="card-meta">
        <h3>${p.title}</h3>
        <div class="card-meta-row">
          <span class="card-tag">${p.type}</span>
          <span class="card-price">${p.price}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(p));

    galleryGrid.appendChild(card);
  });
}

renderGallery();


// ===============================
// FILTER BUTTONS
// ===============================
const filters = document.querySelectorAll(".filter");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".filter.active")
      .classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    renderGallery(filter);
  });
});


// ===============================
// LIGHTBOX
// ===============================
const lightbox = document.getElementById("lightbox");
const lbOverlay = document.getElementById("lbOverlay");
const lbTitle = document.getElementById("lbTitle");
const lbDesc = document.getElementById("lbDesc");
const lbPrice = document.getElementById("lbPrice");

function openLightbox(p) {
  lbTitle.textContent = p.title;
  lbDesc.textContent = `A beautiful ${p.type} painting crafted with love.`;
  lbPrice.textContent = p.price;

  lightbox.classList.add("open");
  lbOverlay.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lbOverlay.classList.remove("open");
}

document.getElementById("lbClose").onclick = closeLightbox;
lbOverlay.onclick = closeLightbox;


// ===============================
// TESTIMONIALS
// ===============================
const testimonials = [
  { name: "Ananya", text: "Absolutely loved my portrait!" },
  { name: "Rahul", text: "Beautiful detailing and colors." },
  { name: "Meera", text: "Captured my idea perfectly." },
];

const track = document.getElementById("testimonialsTrack");
const dotsContainer = document.getElementById("testimDots");

testimonials.forEach((t, i) => {
  const card = document.createElement("div");
  card.className = "testimonial-card";
  card.innerHTML = `
    <div class="stars">★★★★★</div>
    <blockquote>"${t.text}"</blockquote>
    <div class="reviewer">
      <div class="reviewer-avatar">${t.name[0]}</div>
      <div>
        <div class="reviewer-name">${t.name}</div>
        <div class="reviewer-loc">India</div>
      </div>
    </div>
  `;
  track.appendChild(card);

  const dot = document.createElement("div");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});


// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll(".stat-num");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute("data-count");
      let count = 0;

      const update = () => {
        const increment = target / 50;
        count += increment;

        if (count < target) {
          el.innerText = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };

      update();
      observer.unobserve(el);
    }
  });
});

counters.forEach((c) => observer.observe(c));


// ===============================
// FORM HANDLING
// ===============================
const form = document.getElementById("orderForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // basic validation
  const name = document.getElementById("fname").value;
  const email = document.getElementById("femail").value;
  const type = document.getElementById("ftype").value;
  const desc = document.getElementById("fdesc").value;

  if (!name || !email || !type || !desc) {
    alert("Please fill all required fields!");
    return;
  }

  // simulate success
  successMsg.style.display = "block";
  form.reset();
});