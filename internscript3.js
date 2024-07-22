const dropdownButton = document.getElementById('dropdownButton');
const categoryText = document.getElementById('categoryText');
const dropdownContent = document.getElementById('dropdownContent');
const arrow = document.querySelector('.arrow');

document.addEventListener('click', (event) => {
    const isDropdownButton = dropdownButton.contains(event.target);
    const isDropdownContent = dropdownContent.contains(event.target);

    if (isDropdownButton) {
        const isOpen = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isOpen ? 'none' : 'block';
        arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    } else if (!isDropdownContent) {
        dropdownContent.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
});

dropdownContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        categoryText.textContent = event.target.textContent;
        document.getElementById('searchInput').placeholder = `Search in ${event.target.textContent}...`;
        dropdownContent.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
});
