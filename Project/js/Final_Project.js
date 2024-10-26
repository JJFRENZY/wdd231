function showContent(deck) {
    const sections = document.querySelectorAll('.deck-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(deck);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Display the Kaito section by default
showContent('kaito');
