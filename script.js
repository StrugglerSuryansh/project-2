const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let verticalelem = document.querySelector('.verticalelem');
let imagecard = document.querySelector('.imagecard')
verticalelem.addEventListener('mouseenter', () => {
    imagecard.style.display = "block";
})
verticalelem.addEventListener('mouseleave', () => {
    imagecard.style.display = "none";
})
console.log(verticalelem);

//  getting all the elements so that i can target them one by one

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let elem6 = document.querySelector('#elem6');
let elem7 = document.querySelector('#elem7');
let elem8 = document.querySelector('#elem8');
console.log(elem1);

//  adding event listener to the first element 

elem1.addEventListener('mouseenter', () => {
    var image = elem1.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem1.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})


//  adding event listener to the second element 

elem2.addEventListener('mouseenter', () => {
    var image = elem2.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem2.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the third element 

elem3.addEventListener('mouseenter', () => {
    var image = elem3.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem3.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the fourth element 

elem4.addEventListener('mouseenter', () => {
    var image = elem4.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem4.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the fifth element 

elem5.addEventListener('mouseenter', () => {
    var image = elem5.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})


elem5.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the sixth element 

elem6.addEventListener('mouseenter', () => {
    var image = elem6.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem6.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the seventh element 

elem7.addEventListener('mouseenter', () => {
    var image = elem7.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem7.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})

//  adding event listener to the eight element 

elem8.addEventListener('mouseenter', () => {
    var image = elem8.getAttribute('data-image')
    imagecard.style.backgroundImage = `url(${image})`
})
elem8.addEventListener('mouseleave', () => {
    imagecard.style.backgroundImage = "none"
})


//  getting the three headings in the services section 

let firsth1 = document.querySelector(".firsth1");
let secondh1 = document.querySelector(".secondh1");
let thirdh1 = document.querySelector(".thirdh1");

// getting the services right part to add a image corresponding to the heading selected by the user 

let servicesright = document.querySelector(".servicesright");

// getting the about section to change the content of about section according to the heaeding selected 
let abouttxt = document.querySelector(".abouttxt")

// adding event click to change the border left and color of the heading that is clicked 


firsth1.addEventListener('click', () => {
    firsth1.style.borderLeft = "5px solid orangered"
    firsth1.style.color = "white"

    secondh1.style.borderLeft = "5px solid grey"
    secondh1.style.color = "grey"

    thirdh1.style.borderLeft = "5px solid grey"
    thirdh1.style.color = "grey"

    servicesright.style.backgroundImage = "url('https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg')"

    abouttxt.innerHTML = "Our team works with our clients to refine an idea and concept into anexecutable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
})


secondh1.addEventListener('click', () => {
    firsth1.style.borderLeft = "5px solid grey"
    firsth1.style.color = "grey"

    secondh1.style.borderLeft = "5px solid orangered"
    secondh1.style.color = "white"

    thirdh1.style.borderLeft = "5px solid grey"
    thirdh1.style.color = "grey"

    servicesright.style.backgroundImage = "url('https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp')"
    abouttxt.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."

})


thirdh1.addEventListener('click', () => {
    firsth1.style.borderLeft = "5px solid grey"
    firsth1.style.color = "grey"

    secondh1.style.borderLeft = "5px solid grey"
    secondh1.style.color = "grey"

    thirdh1.style.borderLeft = "5px solid orangered"
    thirdh1.style.color = "white"

    servicesright.style.backgroundImage = "url('https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg')"

    abouttxt.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});