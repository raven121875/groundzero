document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const openIcon = document.querySelector('.open-menu');
    const closeIcon = document.querySelector('.close-menu');


    // Mobile Navigation Menu Buttons
    menuBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
        openIcon.style.display = openIcon.style.display === 'none' ? 'inline' : 'none';
        closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
    });
});


// Contact form submit (prevent default)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! This would normally send the data to a server.');
    contactForm.reset();
  });
}

// Subscribe form submit (prevent default)
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscribed! This would normally register your email.');
    subscribeForm.querySelector('input').value = '';
  });
}
