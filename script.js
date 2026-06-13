const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const progress = document.getElementById('scrollProgress');

const savedTheme = localStorage.getItem('theme') || 'light';
root.dataset.theme = savedTheme;
setThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    setThemeIcon(theme);
});

function setThemeIcon(theme) {
    themeToggle.innerHTML = `<i class="fas fa-${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
}

navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.carousel').forEach(carousel => {
    const images = [...carousel.querySelectorAll('img')];
    const dots = carousel.querySelector('.carousel-dots');
    let current = 0;
    let timer;

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        if (index === 0) dot.classList.add('active');
        dots.appendChild(dot);
    });

    const show = index => {
        images[current].classList.remove('active');
        dots.children[current].classList.remove('active');
        current = index;
        images[current].classList.add('active');
        dots.children[current].classList.add('active');
    };

    const start = () => {
        if (!reduceMotion) timer = window.setInterval(() => show((current + 1) % images.length), Number(carousel.dataset.interval));
    };

    const stop = () => window.clearInterval(timer);
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    start();
});

document.querySelectorAll('.abstract-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const abstract = document.getElementById(button.getAttribute('aria-controls'));
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', String(!isOpen));
        abstract.hidden = isOpen;
    });
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];

window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`;

    let current;
    sections.forEach(section => {
        if (window.scrollY + 130 >= section.offsetTop) current = section;
    });
    links.forEach(link => link.classList.toggle('active', current && link.hash === `#${current.id}`));
}, { passive: true });
