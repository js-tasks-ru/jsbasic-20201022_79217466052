function initCarousel() {

    let tape = document.getElementsByClassName('carousel__inner')[0];

    const width = tape.offsetWidth; // ширина одного слайда
    const imagesNumber = tape.children.length // у нас 4 DIV элемента с картинками

    let arrows = document.getElementsByClassName('carousel__arrow');
    
    let arrowRight = arrows[0]; // правая стрелочка    
    let arrowLeft =  arrows[1]; // левая стрелочка

    arrowLeft.style.display = 'none'; // прячем левую стрелку
    if (imagesNumber == 1) {
        arrowRight.style.display = 'none'; // и правую тоже, если у нас одна картинка
    }

    let currentImg = 0 // следим за тем, какая картинка у нас показывается

    arrowLeft.addEventListener('click', event => {
        --currentImg;
        let offsetStyle = `translateX(-${ width * currentImg }px)`;
        tape.style.transform = offsetStyle;

        arrowRight.style.display = ''
        if (currentImg == 0) {
            arrowLeft.style.display = 'none'
        }
    });

    arrowRight.addEventListener('click', event => {
        ++currentImg;
        let offsetStyle = `translateX(-${ width * currentImg }px)`;
        tape.style.transform = offsetStyle; 

        arrowLeft.style.display = ''
        if (currentImg == ( imagesNumber - 1 )) {
            arrowRight.style.display = 'none'
        }
    });
}
