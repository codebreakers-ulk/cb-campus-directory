// DOM Element References
const resourceGrid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const resourceCount = document.getElementById("resourceCount");
const emptyState = document.getElementById("emptyState");

/**
 * Render resource cards to the DOM
 * @param {Array} itemsList - List of resource objects to display
 */
function renderCards(itemsList) {
  resourceGrid.innerHTML = "";

  if (itemsList.length === 0) {
    emptyState.classList.remove("hidden");
    resourceCount.textContent = "Showing 0 resources";
    return;
  }

  emptyState.classList.add("hidden");
  resourceCount.textContent = `Showing ${itemsList.length} resource${itemsList.length === 1 ? "" : "s"}`;

  itemsList.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    // Format tags
    const tagsHTML = item.tags
      .map((tag) => `<span class="tag">#${tag}</span>`)
      .join("");

    card.innerHTML = `
      <div>
        <div class="card-category">${item.category}</div>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-desc">${item.description}</p>
      </div>
      <div>
        <div class="card-tags">${tagsHTML}</div>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-link">Visit Resource</a>
      </div>
    `;

    resourceGrid.appendChild(card);
  });
}

/**
 * Filter resources based on search input
 */
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = resources.filter((item) => {
    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesCategory = item.category.toLowerCase().includes(query);
    const matchesDescription = item.description.toLowerCase().includes(query);
    const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesTitle || matchesCategory || matchesDescription || matchesTags;
  });

  renderCards(filtered);
}

// Event Listeners
searchInput.addEventListener("input", handleSearch);

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  renderCards(resources);
});