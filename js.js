document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const introduction = document.querySelector('.introduction');
const loading = document.querySelector('.intro-text');
const loadingSpan = document.querySelectorAll('.loading');

window.addEventListener('DOMContentLoaded', ()=>{

	setTimeout(()=>{

		loadingSpan.forEach((span, idx)=>{

			setTimeout(()=>{
				span.classList.add('in');
			}, (idx + 1) * 200)
		});

		setTimeout(()=>{
			loadingSpan.forEach((span, idx)=>{

				setTimeout(()=>{
					span.classList.remove('in');
					span.classList.add('out');
				}, (idx + 1) * 10)
			})
		}, 1750);

		setTimeout(()=>{
			introduction.style.top = '-100vh';
		}, 1750)
	})
})

$(document).ready(function(){
    $(this).scrollTop(0);
});

window.addEventListener('load', function() {
    setTimeout(function() {
      const navbar = document.getElementById('navbar');
      navbar.style.visibility = 'visible';  
      navbar.style.opacity = '0.6';           
    }, 2200); 
});

window.addEventListener('load', function() {
    setTimeout(function() {
      const homeIcons = document.querySelectorAll('.home-icon a'); // Select all <a> tags in .home-icon

      homeIcons.forEach(function(icon) {
        icon.style.visibility = 'visible';  // Make the icons visible
        icon.style.opacity = '1';           // Fade in the icons
      });
    }, 2000); // 2000 milliseconds = 2 seconds
  });

