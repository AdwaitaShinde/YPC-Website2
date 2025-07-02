$(document).ready(function() {
  $(".main-img").fadeIn(1200, function() {
    setTimeout(() => {
      $(".main-img").fadeOut(800, function() {
        $(".circle-stage").removeClass("d-none");

        $("#circle1").animate({ top: "60px" }, 1000);
        $("#circle2").animate({ right: "100px" }, 1000);
        $("#circle3").animate({ bottom: "50px", left: "100px" }, 1000, function() {
          $(".green-earth").fadeIn(1000, function() {
            $(".message-text").removeClass("d-none").hide().fadeIn(1200);
          });
        });
      });
    }, 1800);
  });
});


  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  function showSlide(i){
    slides.forEach((s, j) => {
      s.classList.remove('active');
      dots[j].classList.remove('active');
    });
    slides[i].classList.add('active');
    dots[i].classList.add('active');
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(index);
    });
  });
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

// const images = document.querySelectorAll('.collection-img');

//     function showImagesOneByOne() {
//       images.forEach((img, i) => {
//         setTimeout(() => {
//           img.classList.add('show');
//           img.classList.remove('hide');
//         }, i * 300); // delay between each image
//       });

//       setTimeout(() => {
//         images.forEach(img => img.classList.add('hide'));
//         images.forEach(img => img.classList.remove('show'));
//       }, 300 * images.length + 2000); // total display time
//     }

//     setInterval(showImagesOneByOne, 300 * images.length + 2500); // repeat every full cycle
//     showImagesOneByOne(); // run once initially