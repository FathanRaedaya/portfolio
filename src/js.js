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
	}, 2050); 
});

window.addEventListener('load', function() {
    setTimeout(function() {
      const homeIcons = document.querySelectorAll('.home-icon a'); 

      homeIcons.forEach(function(icon) {
        icon.style.visibility = 'visible';  
        icon.style.opacity = '1';          
      });
    }, 2050); 
});

window.addEventListener('load', function() {
    setTimeout(function() {
      const homeTitle = document.querySelector('.home-text h2');
      const homeDescription = document.querySelector('.home-text p');
      
      homeTitle.classList.add('fade-in');
      
      setTimeout(function() {
        homeDescription.classList.add('fade-in');
      }, 0);
      
    }, 2050); 
});


  document.addEventListener('DOMContentLoaded', function() {

    const scrollArrow = document.getElementById('scroll-arrow');
    let isArrowVisible = false;
    let isInitialized = false;
    
    scrollArrow.style.display = 'none';
    scrollArrow.style.opacity = '0';
    
    function fadeInArrow() {
        if (!isArrowVisible) {
            scrollArrow.style.display = 'block';
            
            scrollArrow.offsetHeight;
            
            scrollArrow.style.opacity = '1';
            isArrowVisible = true;
            
            if (!isInitialized) {
                scrollArrow.classList.add('initialized');
                isInitialized = true;
            }
        }
    }

    function fadeOutArrow() {
        if (isArrowVisible) {
            scrollArrow.style.opacity = '0';
            
            setTimeout(() => {
                if (scrollArrow.style.opacity === '0') {
                    scrollArrow.style.display = 'none';
                }
            }, 500);
            
            isArrowVisible = false;
        }
    }

    fadeOutArrow();
    
    const initialDelay = new Promise(resolve => setTimeout(resolve, 2000));
    
    initialDelay.then(() => {
        if (window.scrollY === 0) {
            fadeInArrow();
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            if (isInitialized) {
                fadeInArrow();
            }
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

function toggleNavbarVisibility(hide) {
    const navbar = document.getElementById('navbar');
    if (hide) {
        navbar.style.visibility = 'hidden';
    } else {
        navbar.style.visibility = 'visible';
    }
}

const budgetModalOverlay = document.getElementById('budgetModalOverlay');
const budgetLearnMoreBtn = document.getElementById('budgetLearnMoreBtn');
const budgetCloseModalBtn = document.getElementById('budgetCloseModalBtn');

const typingModalOverlay = document.getElementById('typingModalOverlay');
const typingLearnMoreBtn = document.getElementById('typingLearnMoreBtn');
const typingCloseModalBtn = document.getElementById('typingCloseModalBtn');

const routerModalOverlay = document.getElementById('routerModalOverlay');
const routerLearnMoreBtn = document.getElementById('routerLearnMoreBtn');
const routerCloseModalBtn = document.getElementById('routerCloseModalBtn');

function openModal(modalOverlay) {
    if (!modalOverlay) return; 
    
    modalOverlay.style.display = 'flex'; 
    setTimeout(() => {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        toggleNavbarVisibility(true);
    }, 10);
}

function closeModal(modalOverlay) {
    if (!modalOverlay) return; 

    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
        toggleNavbarVisibility(false);
    }, 300);
}

if (budgetLearnMoreBtn) {
    budgetLearnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(budgetModalOverlay);
    });
}

if (budgetCloseModalBtn) {
    budgetCloseModalBtn.addEventListener('click', () => closeModal(budgetModalOverlay));
}

if (budgetModalOverlay) {
    budgetModalOverlay.addEventListener('click', (e) => {
        if (e.target === budgetModalOverlay) {
            closeModal(budgetModalOverlay);
        }
    });
}

if (typingLearnMoreBtn) {
    typingLearnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(typingModalOverlay);
    });
}

if (typingCloseModalBtn) {
    typingCloseModalBtn.addEventListener('click', () => closeModal(typingModalOverlay));
}

if (typingModalOverlay) {
    typingModalOverlay.addEventListener('click', (e) => {
        if (e.target === typingModalOverlay) {
            closeModal(typingModalOverlay);
        }
    });
}

if (routerLearnMoreBtn) {
    routerLearnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(routerModalOverlay);
    });
}

if (routerCloseModalBtn) {
    routerCloseModalBtn.addEventListener('click', () => closeModal(routerModalOverlay));
}

if (routerModalOverlay) {
    routerModalOverlay.addEventListener('click', (e) => {
        if (e.target === routerModalOverlay) {
            closeModal(routerModalOverlay);
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (budgetModalOverlay && budgetModalOverlay.classList.contains('active')) {
            closeModal(budgetModalOverlay);
        }
        if (typingModalOverlay && typingModalOverlay.classList.contains('active')) {
            closeModal(typingModalOverlay);
        }
        if (routerModalOverlay && routerModalOverlay.classList.contains('active')) {
            closeModal(routerModalOverlay);
        }
    }
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const threshold = 50;
    return (
        rect.top >= -threshold &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.slide-in, .slide-in-left, .slide-in-right');
    elements.forEach((element) => {
        if (isElementInViewport(element) && !element.classList.contains('active')) {
            element.classList.add('active');
        }
    });
}

let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);

handleScroll();

document.addEventListener('DOMContentLoaded', function() {
setTimeout(function() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('active');
    
}, 2200); 
});


