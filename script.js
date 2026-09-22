// Portfolio welcome message

console.log("Welcome to Madhumitha's Portfolio!");

// Smooth navigation
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});