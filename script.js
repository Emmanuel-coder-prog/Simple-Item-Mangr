/**
 * Simple Item Manager
 * Basic implementation for a 2-hour test
 */

// Initial data from requirements
const initialData = [
    { id: 1, title: "Read" },
    { id: 2, title: "Pray" }
];

// DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const cardContainer = document.getElementById('cardContainer');
const themeToggle = document.getElementById('themeToggle');
const emptyState = document.getElementById('emptyState');

// State
let items = [...initialData];
let nextId = 3;

/**
 * Initialize the app
 */
function init() {
    renderItems();
    setupEventListeners();
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
    // Add button click
    addButton.addEventListener('click', addItem);
    
    // Enter key in input
    itemInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Keyboard support for theme toggle
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            toggleTheme();
        }
    });
}

/**
 * Add item from input
 */
function addItem() {
    const text = itemInput.value.trim();
    
    if (!text) {
        itemInput.focus();
        return;
    }
    
    const newItem = {
        id: nextId++,
        title: text
    };
    
    items.push(newItem);
    itemInput.value = '';
    renderItems();
}

/**
 * Delete an item by ID
 */
function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    renderItems();
}

/**
 * Render all items
 */
function renderItems() {
    cardContainer.innerHTML = '';
    
    if (items.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card fade-in bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600 flex justify-between items-center';
        
        card.innerHTML = `
            <span>${item.title}</span>
            <button class="delete-btn text-red-500 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-gray-600 transition"
                    aria-label="Delete ${item.title}"
                    tabindex="0"
                    data-id="${item.id}">
                ×
            </button>
        `;
        
        cardContainer.appendChild(card);
        
        // Add delete event listener
        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteItem(item.id));
        
        // Keyboard support for delete
        deleteBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                deleteItem(item.id);
            }
        });
    });
}

/**
 * Toggle between light and dark mode
 */
function toggleTheme() {
    const html = document.documentElement;
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        themeToggle.textContent = 'Dark Mode';
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        themeToggle.textContent = 'Light Mode';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);