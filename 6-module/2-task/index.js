import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.elem = this.render(product);
  }

  render(product) {
    let card = document.createElement('div')
    card.classList.add('card');

    let cardTop = document.createElement('div')
    cardTop.classList.add('card__top');

    let cardImage = document.createElement('img');
    cardImage.setAttribute('alt', 'product');
    let imageAdress = '/assets/images/products/' + product.image;
    cardImage.setAttribute('src', imageAdress);
    cardImage.classList.add('card__image');
    cardTop.appendChild(cardImage);

    let span = document.createElement('span');
    span.classList.add('card__price');
    let price = '€' + product.price.toFixed(2);
    span.innerHTML = price;
    cardTop.appendChild(span);


    card.appendChild(cardTop);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card__body');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');
    cardTitle.innerHTML = product.name;
    cardBody.appendChild(cardTitle);

    let button = document.createElement('button');
    button.classList.add('card__button');
    button.setAttribute('type', 'button');

    function addEventProductAdd() {
      let productAdd = new CustomEvent('product-add', { // имя события должно быть именно "product-add"
        detail: product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает - это понадобится в дальнейшем
      });
      button.dispatchEvent(productAdd);
    }

    button.addEventListener('click', addEventProductAdd)

    let buttonImage = document.createElement('img');
    buttonImage.setAttribute('alt', 'icon');
    buttonImage.setAttribute('src', '/assets/images/icons/plus-icon.svg');
    button.appendChild(buttonImage);

    cardBody.appendChild(button);

    card.appendChild(cardBody);

    return card
  }
}