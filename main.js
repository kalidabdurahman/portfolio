/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      console.log('Before toggle:', nav.classList); // Check classes before toggle
      nav.classList.toggle("show");
      console.log('After toggle:', nav.classList); // Check classes after toggle
    });
  }
};
showMenu("nav-toggle", "nav-menu");



document.addEventListener("DOMContentLoaded", function(event) {
  setDefaultMode();
  // Scroll to the top of the page after reloading
  history.scrollRestoration = "manual";
  window.scrollTo(0,0);
});

// Function to set dark mode as default
function setDefaultMode() {
  document.body.classList.add("dark-mode");
  updateMode(); // Call updateMode to ensure the icons are set correctly
}


/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// JavaScript to update active class on navigation circles based on scroll position
window.addEventListener('scroll', () => {
  const navCircles = document.querySelectorAll('.nav-circle');
  const sections = document.querySelectorAll('section');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      currentSection = section.getAttribute('id');
    }
  });

  navCircles.forEach(circle => {
    circle.classList.remove('active');
    if (circle.getAttribute('href').includes(currentSection)) {
      circle.classList.add('active');
    }
  });
});



// JavaScript to update active class on navigation circles based on scroll position
document.addEventListener('DOMContentLoaded', function () {
  const navCircles = document.querySelectorAll('.nav-circle');
  const sections = document.querySelectorAll('section');

  function getOffset(element) {
      let offset = 0;
      while (element) {
          offset += element.offsetTop;
          element = element.offsetParent;
      }
      return offset;
  }

  function changeActiveCircle() {
      let scrollPosition = window.pageYOffset;

      sections.forEach((section, index) => {
          if (getOffset(section) - window.innerHeight / 2 < scrollPosition &&
              getOffset(section) + section.offsetHeight - window.innerHeight / 2 > scrollPosition) {
              navCircles.forEach((circle) => {
                  circle.classList.remove('active');
              });
              navCircles[index].classList.add('active');
          }
      });
  }

  window.addEventListener('scroll', changeActiveCircle);

  // Remove the line when clicking on a circle
  navCircles.forEach((circle) => {
    circle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      const targetId = circle.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  });
  
});



const navMenu = document.getElementById("nav-menu");
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));

/*===== COPY Email =====*/

document.getElementById('copy').addEventListener('mouseover', function() {
  document.getElementById('email').classList.add('highlight-email');
});

document.getElementById('copy').addEventListener('mouseout', function() {
  document.getElementById('email').classList.remove('highlight-email');
});

const copy = document.getElementById("copy");
const email = document.getElementById("email");
const copiedMessage = document.getElementById("copied");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(email.textContent).then(() => {
    copiedMessage.textContent = "Copied!";
    copiedMessage.classList.add("active");
    
    // Optional: Remove the "Copied" message after a few seconds
    setTimeout(() => {
      copiedMessage.classList.remove("active");
      copiedMessage.textContent = "";
    }, 2000); // 2 seconds before "Copied" message disappears
  });
});

// Function to enlarge the image
function enlargeImage(img) {
  // Create a clone of the image to be shown in fullscreen
  var clone = img.cloneNode();
  clone.classList.add("fullscreen-image"); // Add the class for styling
  clone.onclick = closeImage; // Set the onclick event to close the image

  // Get the overlay div and append the cloned image
  var overlay = document.getElementById("image-overlay");
  overlay.innerHTML = ''; // Clear any previous content
  overlay.appendChild(clone);
  
  // Show the overlay
  overlay.style.display = "flex";
}

// Function to close the full-screen image view
function closeImage() {
  document.getElementById("image-overlay").style.display = "none";
}



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
sr.reveal(".project-img", { interval: 200 });

/*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });

  function updateMode() {
    var ele = document.body;
    var modeIcon = document.querySelector("#mode-icon"); // Ensure your mode icon <img> has id="mode-icon"
    var ocamlIcon = document.getElementById("ocaml-icon"); // Ensure your OCaml icon <img> has id="ocaml-icon"
  
    // Check if the dark-mode class is present and change the icons accordingly
    if (ele.classList.contains("dark-mode")) {
      modeIcon.src = "./img/sun.png"; // Path to sun icon
      ocamlIcon.src = "./img/ocaml_dark.png"; // Path to OCaml dark mode icon
    } else {
      modeIcon.src = "./img/moon.png"; // Path to moon icon
      ocamlIcon.src = "./img/ocaml_light.png"; // Path to OCaml light mode icon
    }
  }
  
  // Run the updateMode function on page load and when toggling dark mode
  document.addEventListener("DOMContentLoaded", updateMode);

  function myFunction(event) {
      // Prevent default action if the function is triggered by an event
    if (event) event.preventDefault();

    document.body.classList.toggle("dark-mode");

    // Update the icons
    updateMode();
  }

  let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    // Scroll Down
    document.querySelector('.l-header').style.top = '-50px'; // Hide the header
  } else {
    // Scroll Up
    document.querySelector('.l-header').style.top = '0'; // Show the header
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

  

  var messageArr = ["UMN Student", "Software Engineer", "Frontend Developer", "Backend Developer", "Data Scientist", "Machine Learning Engineer"];
  var currentMessage = 0;
  var textPosition = 0;
  var typingSpeed = 100;
  var backspacingSpeed = 50;
  var resumeDelay = 2000;
  
  function typewriter() {
    var element = document.querySelector("#jobTitle");
    if (textPosition < messageArr[currentMessage].length) {
      element.innerHTML = messageArr[currentMessage].substring(0, textPosition + 1);
      textPosition++;
      setTimeout(typewriter, typingSpeed);
    } else {
      setTimeout(backspace, resumeDelay);
    }
  }
  
  function backspace() {
    var element = document.querySelector("#jobTitle");
    if (textPosition >= 0) {
      element.innerHTML = messageArr[currentMessage].substring(0, textPosition);
      textPosition--;
      setTimeout(backspace, backspacingSpeed);
    } else {
      currentMessage = (currentMessage + 1) % messageArr.length;
      textPosition = 0;
      setTimeout(typewriter, typingSpeed);
    }
  }
  
  window.addEventListener("load", typewriter);
  
