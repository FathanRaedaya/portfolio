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
	  navbar.style.opacity = '0.7'; 

	  navbar.addEventListener('mouseover', function() {
		navbar.style.opacity = '1';
	  });

	  navbar.addEventListener('mouseout', function() {
		navbar.style.opacity = '0.7';
	  });
	}, 2200); 
});

window.addEventListener('load', function() {
    setTimeout(function() {
      const homeIcons = document.querySelectorAll('.home-icon a'); 

      homeIcons.forEach(function(icon) {
        icon.style.visibility = 'visible';  
        icon.style.opacity = '1';          
      });
    }, 2500); 
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.getElementById('scroll-arrow');
    let isArrowVisible = false;
    let hasScrolled = false;
    
    scrollArrow.style.display = 'none';
    scrollArrow.style.opacity = '0';

    function fadeInArrow() {
        if (!isArrowVisible) {
            scrollArrow.style.display = 'block';
            setTimeout(() => {
                scrollArrow.style.opacity = '1';
                scrollArrow.classList.remove('fade-out');
            }, 50);
            isArrowVisible = true;
        }
    }

    function fadeOutArrow() {
        if (isArrowVisible) {
            scrollArrow.classList.add('fade-out');
            setTimeout(() => {
                scrollArrow.style.display = 'none';
            }, 500);
            isArrowVisible = false;
        }
    }
    setTimeout(fadeInArrow, 2000);

    window.addEventListener('scroll', function() {
        hasScrolled = true;
        if (window.scrollY === 0) {
            fadeInArrow();
        } else {
            fadeOutArrow();
        }
    });

    scrollArrow.addEventListener('click', function() {
        fadeOutArrow();
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

});