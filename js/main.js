const sideNav = document.querySelector('.sideNav');
const open = document.querySelector('.open');
const close = document.querySelector('.closeBtn')

if (open) {
    open.addEventListener('click', () => {
        sideNav.style.width = '100%';
        open.style.width = '100%';
    })

} else {
    console.log('Error')
}

close.addEventListener('click', () => {
    sideNav.style.width = '0'
    open.style.width = '0'
})