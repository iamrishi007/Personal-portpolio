let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// document.getElementById('resume').addEventListener('click', function () {
//   // Open the PDF in a new tab
//   window.open('/images/full stack web devloper resume.pdf', '_blank');

//   // Trigger the download
//   const a = document.createElement('a');
//   a.href = '/images/full stack web devloper resume.pdf';
//   a.download = 'full stack web devloper resume.pdf';
//   a.click();
// })

document.getElementById('resume').addEventListener('click', function (event) {
  event.preventDefault();
  
  window.open('./images/Resume11.pdf', '_blank')
  
  const a = document.createElement('a')
  
  a.href = './images/Resume11.pdf';
  
  a.download = 'computer.pdf';
  
  document.body.appendChild(a);
  
  a.click();
  
  document.body.removeChild(a);
});


