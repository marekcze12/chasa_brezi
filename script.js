document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializace LightGallery (Fotogalerie)
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        plugins: [lgZoom], // Plugin pro přibližování
        mobileSettings: {
            controls: false,
            showCloseIcon: true,
            download: false
        }
    });

    // 2. Mobilní Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Změna ikony z hamburgeru na křížek
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Zavření menu po kliknutí na odkaz
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-xmark');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // 3. Odpočet do Hodů (Countdown)
    // Nastav si datum příštích hodů! (formát: Měsíc Den, Rok Čas)
    const hodyDate = new Date("Sep 26, 2026 14:00:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = hodyDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "<h3>Hody právě probíhají! 🍷</h3>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);


    // 4. Fade-in Animace při scrollování (stejné jako u portfolia)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});