// Selected DOM elements
const html = document.querySelector('html');
const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.icon-menu');
const siteMenu = document.querySelector('.site-menu');
const socialMenu = document.querySelector('.social-menu');
const toTopBtn = document.querySelector('.to-top');

// Site and social menu toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    siteMenu.classList.toggle('collapsed');
    socialMenu.classList.toggle('collapsed');
    menuIcon.classList.toggle('icon-menu');
    menuIcon.classList.toggle('icon-close');
  });
}

// Random subtitle
const randomSubtitle = () => {
  const error = document.getElementsByClassName('subtitle')[0];
  const subtitleArray = [
    "Halt and catch fire", "Null pointer exception", "lp0 on fire", "PC LOAD LETTER", "Not a typewriter",
    "418 I'm a teapot", "Abort, Retry, Fail?", "Terminal prompts disabled", "nslookup: can't resolve",
    "SERVER: 127.0.0.53#53", "Mojibake Madness", "Update .gitignore"
    ];
  if (error) {
    const subtitle = subtitleArray[Math.floor(Math.random() * subtitleArray.length)];
    error.appendChild(document.createTextNode(subtitle));
  }
};
randomSubtitle();

// Object-fit polyfill for post cover
/* eslint-disable no-undef */
objectFitImages('img.post-cover');

// Show toTopBtn when scroll to 600px
/* eslint-disable no-undef */
let lastPosition = 0;
let ticking = false;
window.addEventListener('scroll', () => {
  lastPosition = body.scrollTop === 0 ? html.scrollTop : body.scrollTop;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (lastPosition >= 600) {
        toTopBtn.classList.remove('is-hide');
      } else {
        toTopBtn.classList.add('is-hide');
      }
      ticking = false;
    });
  }
  ticking = true;
});

// Smooth Scroll to top when click toTopBtn
const scroll = new SmoothScroll('a[href*="#"]');
toTopBtn.addEventListener('click', () => {
  scroll.animateScroll(0);
});

// HMR interface
if (module.hot) module.hot.accept();
