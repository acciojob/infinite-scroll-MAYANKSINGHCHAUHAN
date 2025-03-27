const list = document.getElementById('infinite-list');
let itemCount = 0;

// Function to add new list items
function addItems(count = 10) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Listen for scroll
window.addEventListener('scroll', () => {
  // Check if the user has reached the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    addItems(2); // Add 2 more items when at the bottom
  }
});
