const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', `${!isExpanded}`);

        if (isExpanded) {
            mobileMenu.classList.add('translate-x-full');
        } else {
            mobileMenu.classList.remove('translate-x-full');
        }
    });
}

document.addEventListener('click', (e) => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    if (isExpanded && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
        hamburger.setAttribute('aria-expanded', `${!isExpanded}`);
    }
});