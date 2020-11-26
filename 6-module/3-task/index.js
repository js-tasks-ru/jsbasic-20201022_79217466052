import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render(slides);
  }

  render(slides) {

    let carousel = document.createElement('div');
    carousel.classList.add('carousel');

    let arrowRight = document.createElement('div');
    arrowRight.insertAdjacentHTML('afterbegin', `
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    `);
    arrowRight.classList.add('carousel__arrow');
    arrowRight.classList.add('carousel__arrow_right');
    carousel.appendChild(arrowRight);

    let arrowLeft = document.createElement('div');
    arrowLeft.classList.add('carousel__arrow');
    arrowLeft.classList.add('carousel__arrow_left');
    arrowLeft.insertAdjacentHTML('afterbegin', `
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    `);
    carousel.appendChild(arrowLeft);

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    carousel.appendChild(carouselInner);

    let imagesNumber = 0;

    for (let slide of slides) {
      ++imagesNumber

      let carouselSlide = document.createElement('div');
      carouselSlide.classList.add('carousel__slide');
      carouselSlide.setAttribute('data-id', slide.id);
      carouselInner.appendChild(carouselSlide);

        let cardImage = document.createElement('img');
        cardImage.setAttribute('alt', 'slide');
        cardImage.setAttribute('src', `/assets/images/carousel/${slide.image}`);
        cardImage.classList.add('card__image');
        carouselSlide.appendChild(cardImage);

        let carouselCaption = document.createElement('div');
        carouselCaption.classList.add('carousel__caption');
        carouselSlide.appendChild(carouselCaption);

          let carouselPrice = document.createElement('span');
          carouselPrice.classList.add('carousel__price');
          carouselPrice.innerHTML = `€${slide.price.toFixed(2)}`;
          carouselCaption.appendChild(carouselPrice);

          let carouselTitle = document.createElement('div');
          carouselTitle.classList.add('carousel__title');
          carouselTitle.innerHTML = slide.name;
          carouselCaption.appendChild(carouselTitle);
          
          let carouselButton = document.createElement('button');
          carouselButton.classList.add('carousel__button');
          carouselButton.setAttribute('type', 'button');
          carouselCaption.appendChild(carouselButton);

          function addEventProductAdd() {
            let productAdd = new CustomEvent('product-add', {
              detail: slide.id,
              bubbles: true,
            });
            carouselButton.dispatchEvent(productAdd);
          }
        
          carouselButton.addEventListener('click', addEventProductAdd)

            let buttonImage = document.createElement('img');
            buttonImage.classList.add('carousel__button');
            buttonImage.setAttribute('alt', 'icon');
            buttonImage.setAttribute('src', '/assets/images/icons/plus-icon.svg');
            carouselButton.appendChild(buttonImage);
    }

    const width = 500; // не понимаю, как достать ширину одного слайда offesetWidth = 0 :(
    let currentImg = 0 // следим за тем, какая картинка у нас показывается
    arrowLeft.style.display = 'none'; // прячем левую стрелку
    if (imagesNumber == 1) {
        arrowRight.style.display = 'none'; // и правую тоже, если у нас одна картинка
    }

    arrowLeft.addEventListener('click', event => {
        --currentImg;
        let offsetStyle = `translateX(-${ width * currentImg }px)`;
        carouselInner.style.transform = offsetStyle;

        arrowRight.style.display = ''
        if (currentImg == 0) {
            arrowLeft.style.display = 'none'
        }
    });

    arrowRight.addEventListener('click', event => {
        ++currentImg;
        let offsetStyle = `translateX(-${ width * currentImg }px)`;
        carouselInner.style.transform = offsetStyle; 

        arrowLeft.style.display = ''
        if (currentImg == ( imagesNumber - 1 )) {
            arrowRight.style.display = 'none'
        }
    });

    return carousel
  }

}