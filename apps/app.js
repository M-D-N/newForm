// variables 
const blue1 = document.getElementById('blue1');
const gray1 = document.getElementById('gray1');
const blue2 = document.getElementById('blue2');
const gray2 = document.getElementById('gray2');
const name = document.getElementById('name');
const mail = document.getElementById('email');
const phone = document.getElementById('phone');
const textarea = document.getElementById('mess');
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const reset = document.getElementById('reset');

// reset system for rates
reset.addEventListener('click', ()=>{
    star1.classList.remove('red');
    star2.classList.remove('red');
    star3.classList.remove('red');
    star4.classList.remove('red');
    star5.classList.remove('red');
});

//Rate system with stars
star1.addEventListener('click', ()=>{
    star1.classList.toggle('red');
    if(star1.classList.contains != 'red'){
        star2.classList.remove('red');
        star3.classList.remove('red');
        star4.classList.remove('red');
        star5.classList.remove('red');
    }
});
star2.addEventListener('click', ()=>{
    star2.classList.toggle('red')
    if(star2.classList.contains != 'red'){
        star3.classList.remove('red');
        star4.classList.remove('red');
        star5.classList.remove('red');
    }
    if(star2.classList.contains('red')){
        star1.classList.add('red');
    }
});
star3.addEventListener('click', ()=>{
    star3.classList.toggle('red')
    if(star3.classList.contains != 'red'){
        star4.classList.remove('red');
        star5.classList.remove('red');
    }
    if(star3.classList.contains('red')){
        star1.classList.add('red');
        star2.classList.add('red');
    }
});
star4.addEventListener('click', ()=>{
    star4.classList.toggle('red')
    if(star4.classList.contains != 'red'){
        star5.classList.remove('red');
    }
    if(star4.classList.contains('red')){
        star1.classList.add('red');
        star2.classList.add('red');
        star3.classList.add('red');
    }
});
star5.addEventListener('click', ()=>{
    star5.classList.toggle('red')
    if(star5.classList.contains = 'red'){
        star1.classList.add('red');
        star2.classList.add('red');
        star3.classList.add('red');
        star4.classList.add('red');
    }
});

//input textarea
name.addEventListener('click', function (){
    name.style = 'border-color: #0096FF !important';
    mail.style = 'border-color: #DDD !important';
    phone.style = 'border-color: #DDD !important'; 
    textarea.style = 'border-color: #DDD !important';
    blue1.style = 'opacity: 1 !important';
    gray1.style = 'opacity: 0 !important';
    blue2.style = 'opacity: 0 !important';
    gray2.style = 'opacity: 1 !important';
})
mail.addEventListener('click', function (){
    mail.style = 'border-color: #0096FF !important';
    textarea.style = 'border-color: #DDD !important';
    name.style = 'border-color: #DDD !important';
    phone.style = 'border-color: #DDD !important'; 
    blue2.style = 'opacity: 1 !important';
    gray2.style = 'opacity: 0 !important';
    blue1.style = 'opacity: 0 !important';
    gray1.style = 'opacity: 1 !important';
})
phone.addEventListener('click', ()=>{
    phone.style = 'border-color: #0096FF !important;'; 
    mail.style = 'border-color: #DDD !important';
    name.style = 'border-color: #DDD !important';
    textarea.style = 'border-color: #DDD !important';
})
textarea.addEventListener('click', function (){
    textarea.style = 'border-color: #0096FF !important';
    name.style = 'border-color: #DDD !important';
    mail.style = 'border-color: #DDD !important';
    phone.style = 'border-color: #DDD !important'; 
    blue2.style = 'opacity: 0 !important';
    gray2.style = 'opacity: 1 !important';
    blue1.style = 'opacity: 0 !important';
    gray1.style = 'opacity: 1 !important';
})