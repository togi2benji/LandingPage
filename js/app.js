const loader = document.querySelector('.loader');
const header = document.querySelector('.header');

function init(){
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    header.style.display = 'flex';
    setTimeout(()=>(header.style.opacity = 1), 50);
  }, 4000);
}

init();
