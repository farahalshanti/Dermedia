let root = document.querySelector("html");
let mood = document.querySelector("i.fa-moon");
let colorIcon = document.querySelector(".color-icon");
let colorPicker = document.querySelector(".color-picker");
let colorOptions = document.querySelectorAll(".color-option");
let toggleBtn = document.querySelector("header .menu-toggle");
let navLinks = document.querySelector("header .nav-links");
let mainLinks = document.querySelectorAll(".nav-links > li > a");
let menuIcon = document.querySelector("header .menu-toggle i");
let arrows = document.querySelectorAll(".arrow i");
let menus = document.querySelectorAll(".menu");
let subMenus = document.querySelectorAll(".sub-menu");
let subMenuLinks = document.querySelectorAll(".sub-menu a");
let h1 = document.querySelector(".hero h1");
let servicesSection = document.querySelector(".services");
let pServices = document.querySelector(".services .offer p");
let whyUsSection = document.querySelector(".whyUs");
let pWhyUs = document.querySelector(".whyUs .team p");
let contactSection = document.querySelector(".contact");
let pContact = document.querySelector(".contact .contact-intro p");
let aboutSection = document.querySelector(".about");
let pAbout = document.querySelector(".about .content-section p");

menus.forEach((menu, index) => {
  menu.onclick = function () {
    arrows[index].classList.toggle("fa-angle-up");
    subMenus[index].classList.toggle("show");
    if (subMenus[index].classList.contains("show")) {
      subMenus[index].style.display = "block";
    } else {
      subMenus[index].style.display = "none";
    }
  };
});

    if (toggleBtn) {
    toggleBtn.onclick = function () {
      navLinks.classList.toggle("active");
      menuIcon.classList.toggle("fa-xmark");
      menuIcon.classList.toggle("fa-bars");
    };
  }

  mainLinks.forEach((link) => {
    link.onclick = function (e) {
      if (!link.parentElement.classList.contains("menu")) {
        if (link.hash) {
          e.preventDefault();
          const target = document.querySelector(link.hash);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
        closeMenu();
      }
    };
  });

  subMenuLinks.forEach((link) => {
    link.onclick = function (e) {
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
    };
  });

  document.onclick = function (e) {
    if (
      navLinks.classList.contains("active") &&
      !e.target.closest(".nav-links") &&
      !e.target.closest(".menu-toggle")
    ) {
      closeMenu();
    }
  };

  function closeMenu() {
    navLinks.classList.remove("active");
    if (menuIcon) {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  }

mood.onclick = function () {
  mood.classList.toggle("fa-sun");
  mood.classList.toggle("fa-moon");
  if (mood.classList.contains("fa-moon")) {
    root.style.setProperty("--font-color", "#141313ff");
    root.style.setProperty("--background", "#c9c7c7");
  } else {
    root.style.setProperty("--font-color", "#c9c7c7");
    root.style.setProperty("--background", "#141313ff");
  }
};

colorIcon.onclick = function () {
  if (colorPicker.style.display === "block") {
    colorPicker.style.display = "none";
  } else {
    colorPicker.style.display = "block";
  }
};

colorOptions.forEach((option) => {
  option.onclick = function () {
    root.style.setProperty("--main-color", option.dataset.color);
    colorPicker.style.display = "none";
  };
});

let text = h1.dataset.text;
let x = 0;
let id = setInterval(() => {
  h1.textContent += text[x];
  x++;
  if (x == text.length) {
    clearInterval(id);
  }
}, 300);

const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  const slideContainer = slider.querySelector(".slider .slide-container");
  const slides = slider.querySelectorAll(".slider .slide");
  const prevBtn = slider.querySelector(".slider .fa-angle-left");
  const nextBtn = slider.querySelector(".slider .fa-angle-right");
  const totalSlides = slides.length;
  let currentIndex = 0;
  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const translateX = -currentIndex * 100;
    slideContainer.style.transform = `translateX(${translateX}%)`;
    captions();
  }
  function captions() {
    const projectName = slider.parentElement.querySelector("h6");
    const projectDesc = slider.parentElement.querySelector("p");
    const projectsData = [
      { name: "Project 1", desc: "Description for project 1" },
      { name: "Project 2", desc: "Description for project 2" },
      { name: "Project 3", desc: "Description for project 3" },
    ];
    if (projectName && projectDesc) {
      projectName.textContent = projectsData[currentIndex].name;
      projectDesc.textContent = projectsData[currentIndex].desc;
    }
  }
  prevBtn.onclick = function () {
    goToSlide(currentIndex - 1);
  };
  nextBtn.onclick = function () {
    goToSlide(currentIndex + 1);
  };
});

window.onscroll = function () {
  if (window.scrollY >= servicesSection.offsetTop + 50) {
    pServices.style.transform = "translateX(0)";
    pServices.style.transition = "4s";
  } else {
    pServices.style.transform = null;
  }
  if (window.scrollY >= whyUsSection.offsetTop - 500) {
    pWhyUs.style.transform = "translateX(0)";
    pWhyUs.style.transition = "4s";
  } else {
    pWhyUs.style.transform = null;
  }
  if (window.scrollY >= contactSection.offsetTop - 500) {
    pContact.style.transform = "translateX(0)";
    pContact.style.transition = "4s";
  } else {
    pContact.style.transform = null;
  }
  if (window.scrollY >= aboutSection.offsetTop - 300) {
    pAbout.style.transform = "translateX(0)";
    pAbout.style.transition = "2s";
  } else {
    pAbout.style.transform = null;
  }
};


