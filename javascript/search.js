document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const categories = document.querySelectorAll(".card");
    const foods = document.querySelectorAll(".food-card");

    let matchFound = false;

    // Search Categories
    categories.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(searchValue)) {
        card.style.display = "";
        matchFound = true;
      } else {
        card.style.display = "none";
      }
    });

    // Search Food Cards
    foods.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(searchValue)) {
        card.style.display = "";
        matchFound = true;
      } else {
        card.style.display = "none";
      }
    });

    // Show or hide "No results found"
    if (!matchFound && searchValue !== "") {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
});
