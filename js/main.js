// SIDEBAR TRANSITION
const sideNav = document.querySelector('.sideNav');
const open = document.querySelector('.open');
const close = document.querySelector('.closeBtn');

if (open) {
  open.addEventListener('click', () => {
    sideNav.style.width = '100%';
    open.style.width = '100%';
  });
} else {
  console.log('Error');
}

close.addEventListener('click', () => {
  sideNav.style.width = '0';
  open.style.width = '0';
});

// PROJECT SLIDER BARS
const htmlBar = document.querySelector('.html');
const cssBar = document.querySelector('.css');
const jsBar = document.querySelector('.javascript');
const reactBar = document.querySelector('.react');
const reduxBar = document.querySelector('.redux');
window.addEventListener('load', () => {
  htmlBar.style.width = '80%';
  cssBar.style.width = '80%';
  jsBar.style.width = '70%';
  reactBar.style.width = '65%';
  reduxBar.style.width = '40%';
});
