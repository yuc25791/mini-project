const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Find the very next element (the <div>) after the button clicked
        const section = btn.nextElementSibling;
        
        // Toggle the visibility
        const isHidden = section.classList.toggle('hidden');
        
        // Update button text dynamically
        btn.textContent = isHidden 
            ? btn.textContent.replace('Hide', 'Show') 
            : btn.textContent.replace('Show', 'Hide');
    });
});