function toggleText() {

  let button = document.querySelector('button');

  button.addEventListener('click', event => {
    if ( event.target.classList.contains("toggle-text-button") ) {
      
      let text = document.getElementById('text');
      if (text.hasAttribute('hidden')) {
        text.removeAttribute('hidden');
      } else {
        text.setAttribute('hidden', 'true');
      };
    };
  });
}