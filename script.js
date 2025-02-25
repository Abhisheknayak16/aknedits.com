<script>
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
