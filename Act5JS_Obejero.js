/* PASAR CUTIE */

/* gallery */
var video = document.querySelectorAll('video')
video.forEach(play => play.addEventListener('click', () => {
  play.classList.toggle('active');

  if(play.paused){
      play.play();
  }
  else{
    play.pause();
    play.currentTime = 0;
  }
} 
));




/* CONTACT */
const contactForm = document.querySelector('.contact-form');
const sendBtn = document.querySelector('#send-btn');

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const phone = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('phone', phone);
  formData.append('email', email);
  formData.append('message', message);

  fetch('/contact', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
     
    })
    .catch((error) => {
      console.error(error);
      
    });
});



  /* carousel */
  $('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
})
  



  /* footer */
  
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");

}