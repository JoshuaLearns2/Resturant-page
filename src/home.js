const content = document.getElementById('content');


function createHeader() {
  const header = document.createElement('header');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  header.classList.add('header');
  homeBtn.classList.add('home-button');
  menuBtn.classList.add('menu-button');
  contactBtn.classList.add('contact-button');

  content.appendChild(header);
  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(contactBtn);

  homeBtn.textContent = "HOME";
  menuBtn.textContent = "MENU";
  contactBtn.textContent = "CONTACT";
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');

  footer.classList.add('footer');
  footerText.classList.add('footer-text');

  footerText.textContent = "Copyright © 2022 GECKO'S, a product of JMI"

  content.appendChild(footer);
  footer.appendChild(footerText);
}

// function mainContent() {
  // const home = document.createElement('div');
//   const title = document.createElement('h1');
//   const image = document.createElement('img');


  // home.classList.add('home');
//   title.classList.add('title');
//   image.classList.add('image');

//   title.textContent = "GECKO'S";
//   image.src = 'https://www.galapagospet.com/wp-content/uploads/2020/10/ABOUT-US_Crested-Gecko@2x.png';

  // content.appendChild(home);
//   home.appendChild(title);
//   home.appendChild(image);
// }

function createHome() {
  createHeader();
  // mainContent();
  createFooter();
}

export default createHome