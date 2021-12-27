const clock = document.querySelector('.clock-trigger');
const crown = document.querySelector('.crown-trigger');
const light = document.querySelector('.light-trigger');
const actualCrown = document.querySelector('#crown');
const lightBulb = document.querySelector('#light');

const options = {
    rootMargin: "270px 0px -200px 0px", threshold: 1
};

observer = new IntersectionObserver((entries) => {

    if(entries[0].intersectionRatio > 0) {
        entries[0].target.style.animation = 'fadeRight 1s';
    }
    else {
        entries[0].target.style.animation = 'none';
    }

}, options);

observer.observe(clock);

observer2 = new IntersectionObserver((entries) => {

    if(entries[0].intersectionRatio > 0) {

        actualCrown.style.animation = 'fadein 1s';
    }
    else {
        actualCrown.style.animation = 'none';
    }

}, options);

observer2.observe(crown);

observer3 = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0) {

        lightBulb.style.animation = 'flicker-in-1 1s linear both';
    }
    else {
        lightBulb.style.animation = 'none';
    }

}, options);

observer3.observe(light);

const heading = document.querySelector('#main-heading');
const headingAnchor = document.querySelector('#heading-anchor');

headObserver = new IntersectionObserver((entries) => {

    
    if(window.innerWidth < 734 ) {

        if(entries[0].intersectionRatio > 0) {

            heading.classList.remove("move-heading-small");
            document.getElementById("heading-anchor").style.height = "4px";
        }
        else {
            heading.classList.add("move-heading-small");
            document.getElementById("heading-anchor").style.height = "100px";
        }
    }
    else {
        
        if(entries[0].intersectionRatio > 0) {

            heading.classList.remove("move-heading");
        }
        else {
            heading.classList.add("move-heading");
        }
    }
}, options);

headObserver.observe(headingAnchor);
