const ssmga = {
    url: 'https://www.southernstarmga.com',
    git: 'N/A',
    name: 'Southern Star MGA',
    desc: 'A landing page designed for an insurance managing general agency that I maintain as a part of my current job duties.',
    photo: './assets/img/ssmga.jpg'
    };
const licona = {
    url: 'https://www.liconainsurance.com',
    git: 'N/A',
    name: 'Licona Insurance Group',
    desc: 'A landing page designed for a retail insurance agency that I maintain as a part of my current job duties.',
    photo: './assets/img/licona.jpg'
    };
const charge = {
    url: 'https://coltschultz.github.io/charge-on-the-run/',
    git: 'https://github.com/coltschultz/charge-on-the-run',
    name: 'Charge On the Run',
    desc: 'A MVP web app that allows utilized Google Maps SDK to allow users to find charging stations nearby or in any given city.',
    photo: './assets/img/charge.png'
    };

const work = [ssmga, licona, charge];

const main = document.querySelector('#main');
const contentEl = document.querySelector('#contentContainer');
const viewLinkEl2 = document.querySelector('#viewLinkEl2');
const viewLinkEl = document.querySelector('#viewLinkEl');

const clearContent = () => {
    contentEl.remove();
    };

const display = (arg) => {
    newContainer = document.createElement('div');
    newContainer.className = 'columns is-vcentered is-centered contentContainer';
    newContentBox = document.createElement('section');
    newContentBox.className = 'column is-half box columns contentBox m30';
    newPhotoBox  = document.createElement('article');
    newPhotoBox.className = 'column is-two-fifths photoBox';
    newPhoto = document.createElement('img');
    newPhoto.className = 'photoImg is-work';
    newPhoto.setAttribute("src", arg.photo);
    newPhoto.setAttribute("alt", "Screenshot of Application");
    newTextBox = document.createElement('article');
    newTextBox.className = 'column is-three-fifths textBox';
    newTitle = document.createElement('h1');
    newTitle.className = 'title is-3';
    newTitle.innerHTML = arg.name;
    newText = document.createElement('p');
    newText.className = 'subtitle is-6';
    newText.innerHTML = arg.desc;
    deployedButton = document.createElement('a');
    deployedButton.setAttribute = ("href", arg.url);
    deployedButton.innerHTML = 'Deployed'
    deployedButton.className = 'button is-primary';
    gitButton = document.createElement('a');
    gitButton.setAttribute = ("href", arg.url);
    gitButton.innerHTML = 'Github'
    gitButton.className = 'button is-primary second';
    main.appendChild(newContainer);
    newContainer.appendChild(newContentBox);
    newContentBox.appendChild(newPhotoBox);
    newPhotoBox.appendChild(newPhoto);
    newContentBox.appendChild(newTextBox);
    newTextBox.appendChild(newTitle);
    newTextBox.appendChild(newText);
    newTextBox.appendChild(deployedButton);
    newTextBox.appendChild(gitButton);
    };

const showWork = () => {
    clearContent(); 
    work.forEach(display)
};

viewLinkEl2.addEventListener("click", showWork);
viewLinkEl.addEventListener("click", showWork);


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


