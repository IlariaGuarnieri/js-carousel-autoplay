const image = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

console.log(image);
const carousel = document.querySelector('.carousel');
const fotoPiccola = document.querySelector('.small-carousel');

// console.log(carousel);

for(i = 0; i < image.length; i++){
  const addImg = image[i];
  console.log (addImg);
  carousel.innerHTML += `<img class="container-img single nascosto" src="${addImg}"> `

  fotoPiccola.innerHTML += `<img class="img-dx single-opacity" src="${addImg}"> `
};

const imgCollection = document.getElementsByClassName('single');
const imgSmall = document.getElementsByClassName('single-opacity');
const btnUp = document.querySelector('.top');
const btnDown = document.querySelector('.bottom');

console.log(btnDown, btnUp);

let counter = 0 ;

imgCollection[0].classList.remove('nascosto');

btnUp.classList.add('nascosto');

btnUp.addEventListener('click', function() {

  imgCollection[counter--].classList.add('nascosto');
  imgCollection[counter].classList.remove('nascosto');

  if(counter === 0){
    btnUp.classList.add('nascosto');
  }

  btnDown.classList.remove('nascosto');

});

btnDown.addEventListener('click', function() {
  imgCollection[counter++].classList.add('nascosto');
  imgCollection[counter].classList.remove('nascosto');
  if(counter === imgCollection.length - 1 ){
    btnDown.classList.add('nascosto');
  }
  btnUp.classList.remove('nascosto');

});

// TIMING FUNCTION ////////

const contatoreAutomatico = setInterval(()=>{
  counter++
  console.log(image);
},1000)

setTimeout(()=>{
  console.log('stop');
  clearInterval(contatoreAutomatico)
},5000)

