const menu = document.querySelector(".hamburger"),
      nav = document.querySelector("nav"),
      overlay = document.querySelector(".overlay"),
      close = document.querySelector(".close");

menu.addEventListener("click", function() {
    nav.classList.add("open")
    overlay.classList.add("open")
});
close.addEventListener("click", function() {
    nav.classList.remove("open")
    overlay.classList.remove("open")
});



//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
});

// pc pictures 

const bigImg = document.querySelector(".big-pic img"),
      photos = document.querySelector(".photos"),
      closee = document.querySelector(".photos .close"),
      smallImgs = document.querySelectorAll(".small-pics img");

smallImgs.forEach(imagee => {
  imagee.onclick = function () {
    smallImgs.forEach(imageee => {
      imageee.setAttribute("class", "")
    })
    imagee.setAttribute("class", "active");
    let attr = imagee.getAttribute("data-img");
    bigImg.setAttribute("src", attr);
  }
})


bigImg.addEventListener("click", function() {
  overlay.classList.add("open");
  photos.classList.add("activ");
})

closee.addEventListener("click", function() {
  overlay.classList.remove("open");
  photos.classList.remove("activ");
})


