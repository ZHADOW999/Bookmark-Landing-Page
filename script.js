////////code for scroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.toggle("show", entry.isIntersecting);
    }
    else {
      entry.target.classList.remove("show");
    }
  });
});

const extension = document.querySelectorAll(".hidden");
extension.forEach((el) => observer.observe(el));

const hiddenImg = document.querySelectorAll(".hero-img");
hiddenImg.forEach((elImg) => observer.observe(elImg));

const hiddenHeroHead = document.querySelectorAll(".hero-head");
hiddenHeroHead.forEach((elHeroHead) => observer.observe(elHeroHead));

const hiddenHeroPara = document.querySelectorAll(".hero-para");
hiddenHeroPara.forEach((elHeroPara) => observer.observe(elHeroPara));

const hiddenBtn1 = document.querySelectorAll(".btn-1-ani");
hiddenBtn1.forEach((elBtn1) => observer.observe(elBtn1));

const hiddenBtn2 = document.querySelectorAll(".btn-2-ani");
hiddenBtn2.forEach((elBtn2) => observer.observe(elBtn2));

const hiddenFeaturesHead = document.querySelectorAll(".features-head");
hiddenFeaturesHead.forEach((elFeaturesHead) => observer.observe(elFeaturesHead));

const hiddenFeaturesPara = document.querySelectorAll(".features-para");
hiddenFeaturesPara.forEach((elFeaturesPara) => observer.observe(elFeaturesPara));

const hiddenTab = document.querySelectorAll(".tab-animation");
hiddenTab.forEach((elTab) => observer.observe(elTab));

const hiddenQuestion = document.querySelectorAll(".question");
hiddenQuestion.forEach((elQuestion) => observer.observe(elQuestion));

const hiddenDownloadHead = document.querySelectorAll(".download-head");
hiddenDownloadHead.forEach((elDownloadHead) => observer.observe(elDownloadHead));

const hiddenDownloadPara = document.querySelectorAll(".download-para");
hiddenDownloadPara.forEach((elDownloadPara) => observer.observe(elDownloadPara));

const hiddenSection4Head = document.querySelectorAll(".section-4-head");
hiddenSection4Head.forEach((elSection4Head) => observer.observe(elSection4Head));

const hiddenSection4Para = document.querySelectorAll(".section-4-para");
hiddenSection4Para.forEach((elSection4Para) => observer.observe(elSection4Para));

const hiddenSection5Para = document.querySelectorAll(".section-5-para");
hiddenSection5Para.forEach((elSection5Para) => observer.observe(elSection5Para));

const hiddenSection5Head = document.querySelectorAll(".section-5-head");
hiddenSection5Head.forEach((elSection5Head) => observer.observe(elSection5Head));

const hiddenEmailForm = document.querySelectorAll(".email-form");
hiddenEmailForm.forEach((elEmailForm) => observer.observe(elEmailForm));

const hiddenNavSection = document.querySelectorAll(".nav-section");
hiddenNavSection.forEach((elNavSection) => observer.observe(elNavSection));

const hiddenTab1 = document.querySelectorAll(".tab-1");
hiddenTab1.forEach((elTab1) => observer.observe(elTab1));








///////////code for features section to switch between tabs
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



///////////code for the FAQs section
const questionTitle = document.querySelectorAll(".question-title");
const answer = document.querySelectorAll(".answer");
const i = document.querySelectorAll(".icon-main");

for (const title of questionTitle) {
  title.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.classList.toggle("non-active");

    // Define the i variable within the event listener scope
    const i = this.querySelector(".icon-main");
    i.classList.toggle("arrow-color");
  });
};





const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailText');
const emailError = document.getElementById('error');
const errorIcon = document.getElementById("errorIcon")

emailForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (emailText.value.trim() == "") {
    errorIcon.style.display = "block";
    error.style.display = "block";
    error.style.height = "auto";
    error.textContent = "You forgot to add your email";
  }


  else if (!isValidEmail(email)) {
    emailError.textContent = "Whoops, make sure it's an email";
    error.style.display = "block";
    error.style.height = "auto";
    errorIcon.style.display = "block";
  }

  else {

    errorIcon.style.display = "none";
    emailError.textContent = "Thank you for Contacting !";
    error.style.display= "block";
    error.style.height = "auto";

  }
});

//////////////////code for hamburger menu

function isValidEmail(email) {
  // Simple email validation regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



const hamMenu = document.querySelector(".ham-menu");
const logo = document.querySelector(".logo")
const offScreenMenu = document.querySelector(".nav-list");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active2");
  offScreenMenu.classList.toggle("active2");
  logo.classList.toggle("active2");
});