const hamburger_menu = document.querySelector(".hamburger-menuM");
const container = document.querySelector(".containerM");
const links = document.querySelector(".linksM");
const ul = document.querySelector('.linksMUl');
const circles = document.querySelector('.circles');
ul.style.display = 'none'
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  if(container.classList.contains('active')){
  links.style.backgroundColor = '#16222a'
  links.style.backgroundImage = 'linear-gradient(to right, #16222a, #3a6073)'
  links.style.height = '100vh'
  ul.style.display = 'flex'
  circles.style.display = 'none'
   
  
}
else{
  links.style.backgroundColor = 'initial';
  links.style.height = '12vh';
  ul.style.display= 'none'
  circles.style.display = 'initial'
  
  
  
} 
});