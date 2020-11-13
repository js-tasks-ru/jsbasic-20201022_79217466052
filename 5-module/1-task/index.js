function hideSelf() {
  let list = document.querySelector('button');
  list.addEventListener('click', event => {
    event.target.setAttribute('hidden', 'true');
  });
}
