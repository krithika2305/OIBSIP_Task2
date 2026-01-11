var typed = new Typed(".text", {
    strings: ["Web Developer", "Python Developer","AI/ML Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const aboutSection = document.querySelector('#about');
const aboutLink = document.querySelector('a[href="#about"]');

const left = document.querySelector('.animate-left');
const right = document.querySelector('.animate-right');
const ups = document.querySelectorAll('.animate-up');

function runAboutAnimation() {

    // RESET
    left.classList.remove('show-left');
    right.classList.remove('show-right');
    ups.forEach(el => el.classList.remove('show-up'));

    // FORCE REFLOW (very important)
    void aboutSection.offsetWidth;

    // START
    left.classList.add('show-left');
    right.classList.add('show-right');

    ups.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('show-up');
        }, i * 200);
    });
}

/* NAVBAR CLICK */
aboutLink.addEventListener('click', () => {
    runAboutAnimation();
});

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runAboutAnimation();
        }
    });
}, { threshold: 0.4 });

observer.observe(aboutSection);
