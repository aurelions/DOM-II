// Your code goes here

//Dark Mode Button!!!

let darkModeBtn = document.querySelector('#darkMode');

darkModeBtn.addEventListener('click', () => {
    // console.log('newfire');
    
    document.body.style.backgroundColor = '#192734';
    document.body.style.color = 'white';
    
})

//Manipulate the logo-heading class
const mainHeading = document.querySelector('h1.logo-heading');

mainHeading.addEventListener('click', () => {
    mainHeading.style.color = 'coral';
    mainHeading.style.textShadow = '2px 2px black';
    
    // console.log('heyo!');
})

mainHeading.style.textAlign = 'center';

//busImg manipulation.
const busImg = document.querySelector('header img');

busImg.addEventListener('click', (event) => {
    // console.log('firing');
    busImg.style.border = "thick solid #ffc61a";
});

//change the color of the anchor tags and their style.

let navigationTop = document.querySelector('a');  //querySelectorAll won't work here???? Tried about 10 different ways so I gave up :( //

navigationTop.addEventListener('click', () => {
    console.log('testing123');
})



const centerAlign = document.querySelector('body');

centerAlign.style.textAlign = 'center';



const secondImg = document.querySelector('.img-content img');

secondImg.addEventListener('mouseover', () => {
    secondImg.style.borderRadius = '50%';
})


const thirdImg = document.querySelector('.inverse-content img');

thirdImg.addEventListener('dblclick', () => {
    thirdImg.style.marginTop = '10px';
    thirdImg.style.border = 'thick solid cyan';
})

//final img

const finalImg = document.querySelector('.content-destination img');

finalImg.addEventListener('wheel', () => {
    
        finalImg.src = "https://ogden_images.s3.amazonaws.com/www.timesobserver.com/images/2019/08/05233235/boat-crash-1100x535.jpg";
    
})


let signMeUp = document.querySelectorAll('.btn');

signMeUp.addEventListener('mouseover', () => {
    signMeUp.style.backgroundColor = 'red'
})