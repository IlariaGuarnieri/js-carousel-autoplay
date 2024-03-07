// array con oggetti
const images = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',

  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
  },
];

console.log(images);

// inserisco il blocco html 
images.forEach((images, index) => {
  // console.log(index);
  let classToAdd = '';

  if (index === 0) {
    classToAdd = 'active';
  }
  // stampo IMMAGINE GRANDE che se index è 0 (ha indice zero,ovvero è la prima) ha la classe active quindi si vede
  output.innerHTML += `
  <div class="my-carousel-item ${classToAdd}">
  <img class="img-fluid" src="${images.url}"  picture">
  </div>
</div>
  `
})

// inserimento img carosello
// 1.creo la costante della mia class html
const imagesWrapper = document.querySelector(".my-carousel-images");
const thumbnailsWrapper = document.querySelector(".my-thumbnails-wrapper");

images.forEach((image) => {
  imagesWrapper.innerHTML += createTempImages(image);
  thumbnailsWrapper.innerHTML += createTempThumbnails(image);
});

//Inserimento degli elementi creati in collection
let counterImages = 0;
const imagesCollection = document.querySelectorAll(".my-carousel-item");
imagesCollection[counterImages].classList.add("active");

const thumbnailsCollection = document.querySelectorAll(".my-thumbnail");
thumbnailsCollection[counterImages].classList.add("active");


// faccio si che al click cambi immagine e thumbnails

// creo le costanti (vedi bottoni css) necessarie ad avanzare ed arretrare
// const btnNext = document.querySelector(".my-next");
// btnNext.addEventListener('click', goNext);


// FUNZIONI//
let counter = 0 ;
function createTempImages(imgElement) {
  return `
  <div class="my-carousel-item">
    <img
      class="img-fluid"
      src="${imgElement.url}"
      alt="${imgElement.title} picture"
    />
    <div class="item-description px-3">
      <h2>${imgElement.title}</h2>
      <p>${imgElement.description}</p>
    </div>
  </div>
  `;
}

function createTempThumbnails(thumbElement) {
  return `
  <div class="my-thumbnail">
    <img
      class="img-fluid"
      src="${thumbElement.url}"
      alt="Thumbnail of ${thumbElement.title} picture"
    />
  </div>
  `;
}

function goNext() {
  changeActiveStatus(counterImages);
  counterImages === images.length - 1 ? (counterImages = 0) : counterImages++;
  changeActiveStatus(counterImages);
}

function changeActiveStatus(counter) {
  imagesCollection[counter].classList.toggle("active");
  thumbnailsCollection[counter].classList.toggle("active");
}


// timing function
// autoplay
let autoplay = setInterval(goNext, 2000);


