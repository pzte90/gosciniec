const bar = document.querySelector('.fa-bars');
console.log(bar);
const close = document.querySelector('.fa-times');

const nav_bar = document.querySelector('.navigation__mobile-btns');

const nav_list = document.querySelector('.navigation__list');
const header = document.querySelector('.header');

const nav_element_1 = document.querySelector('.navigation__list-element:nth-of-type(1)');
const nav_element_2 = document.querySelector('.navigation__list-element:nth-of-type(2)');
const nav_element_3 = document.querySelector('.navigation__list-element:nth-of-type(3)');
const nav_element_4 = document.querySelector('.navigation__list-element:nth-of-type(4)');
const nav_element_5 = document.querySelector('.navigation__list-element:nth-of-type(5)');


nav_bar.addEventListener('click', function(){
    console.log('dziala');
    bar.classList.toggle('show');
    close.classList.toggle('show');
    nav_list.classList.toggle('show');
    header.classList.toggle('show');
    nav_element_1.classList.toggle('show');
    nav_element_2.classList.toggle('show');
    nav_element_3.classList.toggle('show');
    nav_element_4.classList.toggle('show');
    nav_element_5.classList.toggle('show');
})



const extra_info = document.querySelector('.extra-info');
const extra_info_one = document.querySelector('.extra-info__holder--one');
const extra_info_two = document.querySelector('.extra-info__holder--two');
const extra_info_three = document.querySelector('.extra-info__holder--three');
const extra_info_four = document.querySelector('.extra-info__holder--four');

console.log(extra_info_one);
console.log(extra_info_two);
console.log(extra_info_three);
console.log(extra_info_four);
console.log(extra_info);

const gallery_item_one = document.querySelector('.gallery__item--one');
const gallery_item_two = document.querySelector('.gallery__item--two');
const gallery_item_three = document.querySelector('.gallery__item--three');
console.log(gallery_item_one);

window.addEventListener('scroll', function(){
    //console.log(window.scrollY);
    //console.log(extra_info_one.offsetTop);
    //console.log(extra_info_two.offsetTop);
    //console.log(window.innerHeight);
    if(window.scrollY > extra_info.offsetTop + extra_info_one.offsetTop - window.innerHeight){
        extra_info_one.classList.add('extra-info__holder--show');
    }
    if(window.scrollY > extra_info.offsetTop + extra_info_two.offsetTop - window.innerHeight){
        extra_info_two.classList.add('extra-info__holder--show');
    }
    if(window.scrollY > extra_info.offsetTop + extra_info_three.offsetTop - window.innerHeight){
        extra_info_three.classList.add('extra-info__holder--show');
    }
    if(window.scrollY > extra_info.offsetTop + extra_info_four.offsetTop - window.innerHeight){
        extra_info_four.classList.add('extra-info__holder--show');
    }

    if(window.scrollY > gallery_item_one.offsetTop - window.innerHeight){
        gallery_item_one.classList.add('gallery__item--show');
    }
    if(window.scrollY > gallery_item_two.offsetTop - window.innerHeight){
        gallery_item_two.classList.add('gallery__item--show');
    }
    if(window.scrollY > gallery_item_three.offsetTop - window.innerHeight){
        gallery_item_three.classList.add('gallery__item--show');
    }

    if(window.scrollY === 0){
        extra_info_one.classList.remove('extra-info__holder--show');
        extra_info_two.classList.remove('extra-info__holder--show');
        extra_info_three.classList.remove('extra-info__holder--show');
        extra_info_four.classList.remove('extra-info__holder--show');
        gallery_item_one.classList.remove('gallery__item--show');
        gallery_item_two.classList.remove('gallery__item--show');
        gallery_item_three.classList.remove('gallery__item--show');
    }
});