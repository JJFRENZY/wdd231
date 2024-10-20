// Lazy Loading Implementation
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy");

    const lazyLoad = () => {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
                img.src = img.dataset.src;
                img.classList.remove("lazy");
            }
        });
    };

    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    lazyLoad();
});

// Visitor Message Implementation
const setVisitorMessage = () => {
    const now = new Date();
    const lastVisit = localStorage.getItem("lastVisit");
    const visitorMessage = document.getElementById("visitor-message");

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const differenceInTime = now - lastVisitDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInTime < 24 * 60 * 60 * 1000) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessage.textContent = `You last visited ${differenceInDays} ${differenceInDays === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now.getTime());
};

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    setVisitorMessage();
});
