import createHome from "./home";
import menuContent from "./menu";
import mainContent from "./test";

createHome();
mainContent();

// const content = document.querySelector('.content')
// const home = document.querySelector('.home')
// content.removeChild(home)

const tabSwitch = (function() {

  const homeBtn = document.querySelector('.home-button');
  homeBtn.addEventListener('click', () => {
    const content = document.querySelector('.content')
    const home = document.querySelector('.home')
    content.removeChild(home)
    mainContent();
  });

  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    const content = document.querySelector('.content')
    const home = document.querySelector('.home')
    content.removeChild(home)
    menuContent();
  });

})();