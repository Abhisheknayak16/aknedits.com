let text = "Welcome to AknEditz!";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;<script>
    document.getElementById("toggle-theme").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
</script>
    document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
function filterSelection(category) {
    let items = document.getElementsByClassName("portfolio-item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = category === "all" || items[i].classList.contains(category) ? "block" : "none";
    }
}
