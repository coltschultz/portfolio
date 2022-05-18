const date = moment().format("MM/DD/YYYY");

const medPortal = {
    url: "https://ancient-tor-23586.herokuapp.com/",
    git: "https://github.com/jen2ags/Med-Portal",
    name: "MedPortal",
    desc: "A collaborative full stack appointment scheduling portal.",
    photo: "./assets/img/medportal.png",
    viewed: ""
    };
const ssmga = {
    url: "https://www.southernstarmga.com",
    git: "#",
    name: "Southern Star MGA",
    desc: "A landing page designed for an insurance managing general agency that I maintain as a part of my current job duties.",
    photo: "./assets/img/ssmga.jpg",
    viewed: ""
    };
const licona = {
    url: "https://www.liconainsurance.com",
    git: "#",
    name: "Licona Insurance Group",
    desc: "A landing page designed for a retail insurance agency that I maintain as a part of my current job duties.",
    photo: "./assets/img/licona.jpg",
    viewed: ""
    };
const charge = {
    url: "#",
    git: "https://github.com/coltschultz/charge-on-the-run",
    name: "Charge On the Run",
    desc: "An MVP web app that allows utilized Google Maps SDK to allow users to find charging stations nearby or in any given city.",
    photo: "./assets/img/charge.png",
    viewed: ""
    };


const work = [medPortal, charge, ssmga, licona];



const main = document.querySelector("#main");
const contentEl = document.querySelector("#contentContainer");
const viewLinkEl2 = document.querySelector("#viewLinkEl2");
const viewLinkEl = document.querySelector("#viewLinkEl");

const clearContent = () => {
    contentEl.remove();
    };

const display = (arg) => {
    newContainer = document.createElement("div");
    newContainer.className = "columns is-vcentered is-centered contentContainer";
    newContentBox = document.createElement("section");
    newContentBox.className = "column is-half-desktop is-four-fifths-mobile box columns contentBox m30";
    newPhotoBox  = document.createElement("article");
    newPhotoBox.className = "column is-two-fifths photoBox";
    newImageLink = document.createElement("a");
    newImageLink.setAttribute("href", arg.url);
    newImageLink.innerHTML = '<img src="' + arg.photo + '" class="photoImg is-work" alt="Screenshot of Application">';
    newTextBox = document.createElement("article");
    newTextBox.className = "column is-three-fifths textBox";
    newTitle = document.createElement("h1");
    newTitle.className = "title is-3";
    newTitle.innerHTML = arg.name;
    newText = document.createElement("p");
    newText.className = "subtitle is-6";
    newText.innerHTML = arg.desc;
    deployedButton = document.createElement("a");
    deployedButton.setAttribute("href", arg.url);
    deployedButton.innerHTML = "Deployed"
    deployedButton.className = "button is-primary";
    gitButton = document.createElement("a");
    gitButton.setAttribute("href", arg.git);
    gitButton.innerHTML = "Github"
    gitButton.className = "button is-primary second";
    main.appendChild(newContainer);
    newContainer.appendChild(newContentBox);
    newContentBox.appendChild(newPhotoBox);
    newPhotoBox.appendChild(newImageLink);
    newContentBox.appendChild(newTextBox);
    newTextBox.appendChild(newTitle);
    newTextBox.appendChild(newText);
    newTextBox.appendChild(deployedButton);
    if(arg.git != '#') {
    newTextBox.appendChild(gitButton);

// Log Views
    viewLog = document.createElement("p");
    viewLog.className = 'viewLog';

    const logView = () => {
        arg.viewed = date;
        console.log(date);
        
        localStorage.setItem("work", JSON.stringify(work));
    }

    newImageLink.addEventListener("click", logView);
    deployedButton.addEventListener("click", logView);
    gitButton.addEventListener("click", logView);

    if(arg.viewed.length > 0) {
        viewLog.innerHTML = "<i>You last viewed this on:</i> " + arg.viewed;
        newTextBox.appendChild(viewLog);
    };
    }
    };

const showWork = () => {
    clearContent(); 
    work.forEach(display)
};

viewLinkEl2.addEventListener("click", showWork);
viewLinkEl.addEventListener("click", showWork);



// Navbar Burger
document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
  
        });
      });
    }
  
  });


  