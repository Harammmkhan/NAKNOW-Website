let smallImages = document.querySelectorAll('.thumb');

let mainImage = document.querySelector('#mainImg');

let mainWrap = document.querySelector('#mainImgWrap');

smallImages.forEach(function (img) {

  img.addEventListener("click", function () {

    // image change
    mainImage.src = img.src;

    // background change
    mainWrap.style.backgroundColor = img.dataset.bg;

    // active class
    smallImages.forEach(item => item.classList.remove("active"));
    img.classList.add("active");

  });

});