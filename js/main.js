("use-strict");
const sideNav = document.getElementById("mySideNavbar");
const mainNav = document.getElementById("main");
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const showSocialIcons = document.getElementById("mySocialIcons");
const navbar = document.getElementById("stickyNav");
const buttonLeft = document.querySelector(".btn-left");
const buttonRight = document.querySelector(".btn-right");
const slides = document.querySelectorAll(".testimonials");
const modal = document.getElementById("myModal");
const showModal = document.querySelector(".sign-up");
const closeModal = document.querySelector(".close");
const bodyHide = document.querySelector("body");
const loginFormModal = document.querySelector(".login-form");
const signupFormModal = document.querySelector(".signup-form");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const newPassword = document.querySelector(".new-password");
const forgotPassword = document.querySelector(".forgot");
const videoModal = document.getElementById("myvideo-modal");
const showVideoModal = document.querySelector(".play-video");
const closeVideoModal = document.querySelector(".close-video-modal");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("iframe");
const videoSignIn = document.querySelector(".signin");
const videoShare = document.querySelector(".share");
const openshareScreen = document.querySelector(".share-screen");
const closeShareScreen = document.querySelector(".close-share-screen");

////////////////////////////////////////////
/* JQuery for
big triangle,
smooth scroll,
scroll to video-section */
///////////////////////////////////////////

/* function to animate triangle using JQuery */
$(document).ready(function () {
  $(".triangle").waypoint(
    function () {
      $(".triangle").addClass("animate__fadeInLeftBig");
    },
    { offset: "50%;" }
  );

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            10,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(".js--scroll-to-video").click(function (e) {
    e.preventDefault();
    const desiredHeight = $(window).height() - 875;
    const desiredHeightMob = $(window).height() - 750;
    // const desiredHeightMob1 = $(window).height() - 750;

    if ($(window).width() >= 360 && $(window).width() <= 768) {
      $("html,body").animate(
        {
          scrollTop: $(".js--section-video").offset().top - desiredHeightMob,
        },
        10
      );
    }
    // else if ($(window).width() >= 601 && $(window).width() <= 768) {
    //   $("html,body").animate(
    //     {
    //       scrollTop: $(".js--section-video").offset().top - desiredHeightMob1,
    //     },
    //     10
    //   );
    // }
    else {
      $("html,body").animate(
        {
          scrollTop: $(".js--section-video").offset().top - desiredHeight,
        },
        10
      );
    }
  });
});

////////////////////////////////////////////
/*Sticky Navbar*/
///////////////////////////////////////////

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

////////////////////////////////////////////
/*Side Navbar*/
///////////////////////////////////////////

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  sideNav.style.width = "250px";
  // mainNav.style.marginLeft = "250px";
  showSocialIcons.style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  showSocialIcons.classList.add("show-social-icons");
  showSocialIcons.classList.remove("social-icons");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sideNav.style.width = "0";
  // mainNav.style.marginLeft = "0";
  showSocialIcons.style.width = "55px";
  document.body.style.backgroundColor = "#f1f5f9";
  showSocialIcons.classList.remove("show-social-icons");
  showSocialIcons.classList.add("social-icons");
}

if (openBtn) {
  openBtn.addEventListener("click", openNav);
}
if (closeBtn) {
  closeBtn.addEventListener("click", function (e) {
    closeNav();
    e.preventDefault();
  });
}

////////////////////////////////////////////
/*Slider Navbar*/
///////////////////////////////////////////

let index = 0;

window.onload = function () {
  display(index);
};

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

if (buttonRight) {
  buttonRight.addEventListener("click", nextSlide);
}

if (buttonLeft) {
  buttonLeft.addEventListener("click", prevSlide);
}

////////////////////////////////////////////
/*login Modal*/
///////////////////////////////////////////
if (showModal) {
  showModal.addEventListener("click", function () {
    modal.style.display = "block";
    bodyHide.style.overflow = "hidden";
    if ((modal.style.display = "block")) {
      signupFormModal.style.display = "flex";
      loginFormModal.style.display = "none";
      newPassword.style.display = "none";
    }
  });
}
if (closeModal) {
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    bodyHide.style.overflow = "auto";
  });
}

if (loginLink) {
  loginLink.addEventListener("click", function () {
    loginFormModal.style.display = "flex";
    signupFormModal.style.display = "none";
  });
}

if (signupLink) {
  signupLink.addEventListener("click", function () {
    loginFormModal.style.display = "none";
    signupFormModal.style.display = "flex";
  });
}

if (forgotPassword) {
  forgotPassword.addEventListener("click", function () {
    loginFormModal.style.display = "none";
    newPassword.style.display = "flex";
  });
}

////////////////////////////////////////////
/* Video Modal */
///////////////////////////////////////////

function playVideoFunction() {
  video.src += "&autoplay=1";
}

function stopVideoFunction() {
  var ysrc = video.src;
  var newsrc = ysrc.replace("&autoplay=1", "");
  video.src = newsrc;
}

if (showVideoModal) {
  showVideoModal.addEventListener("click", function () {
    videoModal.style.display = "block";
    playVideoFunction();
  });
}

if (closeVideoModal) {
  closeVideoModal.addEventListener("click", function () {
    videoModal.style.display = "none";
    stopVideoFunction();
    if (screen.width >= 360 && screen.width <= 768) {
      window.scrollTo(0, 650);
    }
    // else if (screen.width >= 481 && screen.width <= 600) {
    //   window.scrollTo(0, 750);
    // }
    else {
      window.scrollTo(0, 880);
    }
  });
}

if (videoSignIn) {
  videoSignIn.addEventListener("click", function () {
    videoModal.style.display = "none";
    modal.style.display = "block";
    bodyHide.style.overflow = "hidden";
    if ((modal.style.display = "block")) {
      signupFormModal.style.display = "flex";
      loginFormModal.style.display = "none";
      newPassword.style.display = "none";
    }
    stopVideoFunction();
  });
}

if (videoShare) {
  videoShare.addEventListener("click", function () {
    openshareScreen.style.display = "block";
    stopVideoFunction();
  });
}
if (closeShareScreen) {
  closeShareScreen.addEventListener("click", function () {
    openshareScreen.style.display = "none";
  });
}

////////////////////////////////////////////
/* FAQ SECTION */
///////////////////////////////////////////
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
