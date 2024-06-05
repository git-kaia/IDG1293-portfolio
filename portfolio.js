
// SWIPER

// Get elements from the DOM 
const elContainer = document.querySelector('.swiper-container');
const elSlides = document.querySelectorAll('.swiper-slide');
const elButtonPrev = document.querySelector('.button-prev');
const elButtonNext = document.querySelector('.button-next');

// Offset container
let offset = 0;
// Slide ID on increment
let slideIncrement = 0;
// Slide ID on decrement
let slideDecrement = elSlides.length - 1;

// Add click event to previous button

// Add click event to next button
elButtonNext.addEventListener('click', () => {
    // Disable next button (disable while sliding animation runs)
    elButtonNext.disabled = true;
    // set offset to slide width
    offset = elSlides[0].offsetWidth;
    // Set container transition
    elContainer.style.transition = "left ease-in-out 500ms";
    // Move slides container by negative offset
    elContainer.style.left = -offset + "px";
    // Set a timeout
    setTimeout(() => {
        // Remove container transistion
        elContainer.style.transition = "none";
        // Move the current slide to the last position
        elSlides[slideIncrement].style.order = elSlides.length - 1;
        // move container back to original position
        elContainer.style.left = 0;
        // Increment slide increment ID (to repeat transation when button is clicked again)
        slideIncrement++;
        // Set decrement ID to previous increment (set increment to value before previous one if use clicks the other button)
        slideDecrement = slideIncrement - 1;
        // if the slides increment reaches the slides length (end of swiper)
        if (slideIncrement === elSlides.length) {
            // Set slide increment ID to zero
            slideIncrement = 0;
            // Select all slides
            elSlides.forEach(slide => {
                // Reset all slides order
                slide.style.order = "initial";
            });
        }
        // Enable next button (so that user can click next again)
        elButtonNext.disabled = false;
    }, 500);
});

// Add click event to "previous" button
elButtonPrev.addEventListener('click', () => {
    // Disable previous button
    elButtonPrev.disabled = true;
    // Set offset to slide width
    offset = elSlides[0].offsetWidth;
    // remove container transition 
    elContainer.style.transition = "none";
    // Check if slide decrement is below zero (if is all slides are re-ordered and decrement ID is set to the last slide index value)
    if (slideDecrement < 0) {
        // Select all slides
        elSlides.forEach(slide => {
            slide.style.order = "initial";
        });
        // Set decrement ID to last slide index
        slideDecrement = elSlides.length - 1;
    }
    // Move current slide to the first position
    elSlides[slideDecrement].style.order = "-1";
    // Move slides container by negative offset
    elContainer.style.left = -offset + 'px';
    // Set a short timeout
    setTimeout(() => {
        // Set container transistion
        elContainer.style.transition = "left ease-in-out 500ms"
        // Move condainer to starting position
        elContainer.style.left = 0;
    }, 1);
    // Set timeout (to wait for transition to finish)
    setTimeout(() => {
        // Decrement slide decrement ID
        slideDecrement--;
        // Set increment ID to previous decrement ID
        slideIncrement = slideDecrement + 1;
        // Enable previpus button click
        elButtonPrev.disabled = false;
    }, 500);
});

// FOOTER 

let hoursNow = new Date();

let copyright = `<p>Copyright &copy; ${hoursNow.getFullYear()}</p>`;

let elFooter = document.querySelector('.footer');
elFooter.innerHTML = copyright;
