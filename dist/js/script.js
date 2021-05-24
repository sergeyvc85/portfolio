const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__closed');

hamburger.addEventListener('click', () => {
   menu.classList.add('active')

});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active')

});

const counters = document.querySelectorAll('.knowledge__expereance_counter'),
      lines = document.querySelectorAll('.knowledge__expereance_line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});