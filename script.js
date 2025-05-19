//your code here!
const list = document.getElementById('infi-list');

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Initial load with 10 items
addItems(10);

// Infinite scroll logic
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 more items when scrolled to the bottom
  }
});