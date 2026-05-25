const ham = document.getElementById('ham');
const mob = document.getElementById('mob');
function closeMob() { mob.classList.remove('open'); ham.classList.remove('open'); }
ham.addEventListener('click', () => { mob.classList.toggle('open'); ham.classList.toggle('open'); });
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('nav--s', window.scrollY > 40);
}, { passive: true });