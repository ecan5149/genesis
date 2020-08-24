// Responsive Nav Menu

const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navlist = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', ()  => {
        navlist.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');

    })
}

navMenu();

// Responsive Nav Menu end


// Services Slider

const serviceChange = () => {
    let firstChild, lastChild;
    const arrowLeft = document.querySelector('#arrowLeft');
    const arrowRight = document.querySelector('#arrowRight');
    const servicesAll = document.querySelector('#services-slider');

    document.addEventListener('click', () => {

        if(event.target === arrowLeft){
            lastChild = servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement('afterbegin', lastChild)
        }else if(event.target === arrowRight){
            firstChild = servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement('beforeend', firstChild)
        }

    })
}


serviceChange();
// Services Slider end


//Scrollreveal Animations

ScrollReveal().reveal('.ani-left', {
    origin: 'left',
    distance:'10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-right', {
    origin: 'right',
    distance:'10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-bottom', {
    origin: 'bottom',
    distance:'10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-fade', {
    opacitiy:0,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-delay-500', {
    delay: 500
});

ScrollReveal().reveal('.ani-delay-1000', {
    delay: 1000
});

//Scrollreveal Animations end
