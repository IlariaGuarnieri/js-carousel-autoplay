// array con oggetti
const images = [
  {
    url: 'img/01.webp',
  },

  {
    url: 'img/02.webp',
  },

  {
    url: 'img/03.webp',

  },
  {
    url: 'img/04.webp',
  },
  {
    url: 'img/05.webp',
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


