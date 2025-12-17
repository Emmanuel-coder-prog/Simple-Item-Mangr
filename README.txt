ITEM MANAGER 


REQUIREMENTS MET:

1. COMPONENT UI
   - Text input field
   - "Add" button
   - Card container for items
   - Styled with Tailwind CSS
   - Soft colors and hover states

2. DOM INTERACTIVITY
   - Add items by typing and clicking button or pressing Enter
   - Each card has × button to delete it
   - Toggle button switches between light/dark theme

3. JSON RENDERING
   - Initial data loaded automatically:
     const data = [
       { id: 1, title: "Read" },
       { id: 2, title: "Pray" }
     ];
   - User-added items appear after initial ones

4. ACCESSIBILITY
   - tabindex="0" on all interactive elements
   - aria-label attributes on buttons
   - Enter key adds items
   - Keyboard navigation supported

IMPLEMENTATION NOTES:
- Pure vanilla JavaScript
- Tailwind CSS via CDN
- Simple, clean code
- No external libraries
- All functionality in one JS file

HOW TO USE:
1. Type in the input field
2. Click "Add" or press Enter
3. Click × to delete items
4. Click "Toggle Theme" to switch modes


