"use strict";
/* gamesinclass.
   Loads data/games.json once, then renders cards in batches so the page
   never builds the whole library in the DOM at once. Cover images use
   native lazy loading. No third-party requests of any kind. */

const BATCH_SIZE = 48;

const grid = document.getElementById("game-grid");
const loadMoreBtn = document.getElementById("load-more");
const noResultsEl = document.getElementById("no-results");
const searchInput = document.getElementById("search");

let allGames = [];
let filtered = [];
let shown = 0;

function cardFor(game) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = game.path;

  if (game.cover) {
    const img = document.createElement("img");
    img.className = "cover";
    img.src = game.cover;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "cover cover-fallback";
      fallback.textContent = game.name;
      img.replaceWith(fallback);
    });
    a.appendChild(img);
  } else {
    const fallback = document.createElement("div");
    fallback.className = "cover cover-fallback";
    fallback.textContent = game.name;
    a.appendChild(fallback);
  }

  const title = document.createElement("h3");
  title.textContent = game.name;
  a.appendChild(title);
  return a;
}

function renderBatch() {
  const next = filtered.slice(shown, shown + BATCH_SIZE);
  const fragment = document.createDocumentFragment();
  for (const game of next) fragment.appendChild(cardFor(game));
  grid.appendChild(fragment);
  shown += next.length;
  loadMoreBtn.hidden = shown >= filtered.length;
  noResultsEl.hidden = filtered.length !== 0;
}

function applyFilter() {
  const q = searchInput.value.trim().toLowerCase();
  filtered = q
    ? allGames.filter((g) => g.name.toLowerCase().includes(q))
    : allGames.slice();
  shown = 0;
  grid.textContent = "";
  renderBatch();
}

let searchTimer = null;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilter, 120);
});
loadMoreBtn.addEventListener("click", renderBatch);

/* Auto-load the next batch when the button scrolls into view, too. */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting) && !loadMoreBtn.hidden) {
      renderBatch();
    }
  });
  observer.observe(loadMoreBtn);
}

/* On computers (fine pointer — mouse/trackpad), focus the search box on
   load so typing filters instantly. Skipped on touch devices, where
   autofocus would pop the keyboard open uninvited. */
if (window.matchMedia("(pointer: fine)").matches) {
  searchInput.focus({ preventScroll: true });
}

fetch("data/games.json")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((games) => {
    allGames = games;
    applyFilter();
  })
  .catch((err) => {
    console.error("Failed to load games index:", err);
    noResultsEl.hidden = false;
    noResultsEl.textContent =
      "Could not load data/games.json — is this page being served over HTTP?";
  });
