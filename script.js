const formlist = document.querySelectorAll('.forms');
const steps = document.querySelectorAll('.step-col');
const progress = document.querySelector('#progress');
let iterator = 0;
const nextbtn = document.querySelector('.next');
const backbtn = document.querySelector('.back');
const subbtn = document.querySelector('.submit');
let headtext = document.querySelector('.head-text');

formlist.forEach((item, index) => {
    item.style.display = 'none';
});
steps.forEach((item, index) => {
    item.style.display = 'none';
});
formlist[iterator].style.display = 'block';
steps[iterator].style.display = 'block';
backbtn.style.display = 'none';
subbtn.style.display = 'none';

nextbtn.addEventListener('click', () => {
    formlist[iterator].style.display = 'none';
    iterator++;
    formlist[iterator].style.display = 'block';
    steps[iterator].style.display = 'block';
    if(iterator === 1){
        headtext.innerHTML = 'Personal Information';
        backbtn.style.display = 'block';
        nextbtn.style.display = 'block';
        subbtn.style.display = 'none';
        progress.style.width = '280px';
    }
    if(iterator === 2){
        headtext.innerHTML = 'Social Links';
        backbtn.style.display = 'block';
        nextbtn.style.display = 'none';
        subbtn.style.display = 'block';
        progress.style.width = '450px';
    }
});

backbtn.addEventListener('click', () => {
    formlist[iterator].style.display = 'none';
    steps[iterator].style.display = 'none';
    iterator--;
    formlist[iterator].style.display = 'block';
    if(iterator === 0){
        headtext.innerHTML = 'Create Account';
        backbtn.style.display = 'none';
        nextbtn.style.display = 'block';
        subbtn.style.display = 'none';
        progress.style.width = '140px';
    }
    if(iterator === 1){
        headtext.innerHTML = 'Personal Information';
        backbtn.style.display = 'block';
        nextbtn.style.display = 'block';
        subbtn.style.display = 'none';
        progress.style.width = '280px';
    }
});

subbtn.addEventListener('click', () => {
    alert("Form Submitted Successfully!!");
    location.reload();
})