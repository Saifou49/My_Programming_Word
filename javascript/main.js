const mobileMenuButton = document.querySelector('#menu_button_header');

const ulInNav = document.querySelector('#ul_In_Nav');


// Event for the mobile menu icon
mobileMenuButton.addEventListener('click', () => {
    ulInNav.classList.toggle('nav_is_open');
});
// Event for the mobile menu icon

// The swiper event
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});
// The swiper event

// The animation settings text
const srollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 1000,
    delay:200
});


srollReveal.reveal('.hero__text' , {origin:'top'});

srollReveal.reveal('.steps__step' , {distance: '100px', interval:100});

srollReveal.reveal('.firstTextWithTheKitchen' , {
    distance: '100px', 
    interval:200,
    origin: 'left'
});

srollReveal.reveal('.about_me__image' , {
    distance: '100px', 
    interval:200,
    origin:'rigth'
});

srollReveal.reveal('.testimonial__bg', {
    distance: '200px',
    delay:200, 
    origin:'left'
});

srollReveal.reveal('.divForLogos', {
    distance: '200px', 
    delay: 200,
    origin:'right'
});

srollReveal.reveal('.grid_1', {
    distance: '200px', 
    delay: 200
});

srollReveal.reveal('.grid_2', {
    distance: '200px', 
    origin: 'top',
    delay: 200
});

srollReveal.reveal('.grid_3', {
    distance: '200px',
    origin: 'left', 
    delay: 200
});

srollReveal.reveal('.grid_4', {
    distance: '200px', 
    origin:'right',
    delay: 200
});

srollReveal.reveal('.divForStats', {
    distance: '200px', 
    delay: 200
});

// For the news items
srollReveal.reveal('.news__item1', {
    distance: '200px', 
    origin:'left',
    delay: 200
});

srollReveal.reveal('.news__item', {
    distance: '200px', 
    origin:'top',
    delay: 200
});

srollReveal.reveal('.news__item3', {
    distance: '200px', 
    origin:'right',
    delay: 200
});
// For the news items

//For the contact me div

srollReveal.reveal('.contact_me_div', {
    distance: '200px', 
    origin:'top',
    delay: 200
});
    
//For the contact me div

//For the footer
srollReveal.reveal('.footer__left', {
    distance: '200px', 
    delay: 200
});
srollReveal.reveal('.footer__right', {
    distance: '200px',
    origin: 'rigth' ,
    delay: 200
});
srollReveal.reveal('.footer__copyright', {
    distance: '200px', 
    origin: 'top',
    delay: 200
});
//For the footer



// The animation for the hero text
