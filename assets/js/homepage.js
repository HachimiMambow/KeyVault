const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const trigger = document.getElementById('btn-teclados');
const dropdown = document.getElementById('dd-teclados');

function setDropdown(opne){
    trigger.setAttribute('aria-expanded', open);
    dropdown.classList.toggle('open', open);
}

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    setDropdown(trigger.getAttribute('aria-expanded') !== 'true');
});

const item = trigger.parentElement;
const hoverable = window.matchMedia ('(hover: hover) and (min-widht: 901px)');
item.addEventListener('mouseenter', () => hoverable.matches && setDropdown(true));
item.addEventListener('mouseleave', () => hoverable.matches && setDropdown(false));

document.addEventListener('click', () => setDropdown(false));
document.addEventListener('keydown', (e) => {if (e.key === 'Escape') setDropdown(false); });

burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
});