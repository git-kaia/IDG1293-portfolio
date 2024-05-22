
// Options for the IntersectionObserver
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5 // When 50% of the element is visible
  };
  
  // Callback function when intersection occurs
  const callback = (entries, observer) => {
    entries.forEach(entry => {
        const els2animate = entry.target.querySelectorAll("[to-be-animated]");
        // const el2animate = entry.target.querySelectorAll("[data-class-to-toggle]");
        // const class2include = el2animate.dataset.classToToggle;
      if (entry.isIntersecting) {
        // If the element is in view, add animation class
        els2animate.forEach(el=>el.style["animation-play-state"] = "running");
        // els2animate.forEach(el=>el.style["border"] = "1px red solid");
        console.log(entry.target.id, "is intersecting");
      } else {
        // If the element is out of view, remove animation class
        // els2animate.forEach(el=>el.classList.add('animation-pause'));
        els2animate.forEach(el=>el.style["animation-play-state"] = "paused");
        // els2animate.forEach(el=>el.style["border"] = "unset");
        console.log(entry.target.id, "is nnot intersecting");
      }
    });
  };
  
  // Create an IntersectionObserver instance with the callback function and options
  const observer = new IntersectionObserver(callback, options);
  
  // Loop through each element in section 1 and section 2 and observe them


document.querySelectorAll(".introduction, .important, .ecosystem, .challenges, .habitat-loss, .pollution, .disease, .apocalypse, .what-can-you-do, .touch-frog, .frog-habitat, .cat-walk, .unsg").forEach(sectionEl=>observer.observe(sectionEl));


//TORIL

//Action button
window.addEventListener("scroll", function() {
  const scrollButton = document.querySelector(".frog-habitat__action-button");
  if (window.scrollY > 10400 && window.scrollY < 10800) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

// // Function to add image elements to the grass box
function addImagesToGrass() {
  const image1Coordinates = { x: 800, y: 630 };
  const image2Coordinates = { x: 1000, y: 230 };
  const image3Coordinates = { x: 200, y: 95 };
  const image4Coordinates = { x: 1400, y: 390 };
  const image5Coordinates = { x: 100, y: 360 };
  const image6Coordinates = { x: 1400, y: 10 };

  const grassContainer = document.querySelector(".frog-habitat");

  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");
  let image5 = document.createElement("img");
  let image6 = document.createElement("img");

  image1.src = "assets/SVG/leafs.svg";
  image2.src = "assets/SVG/pond.svg";
  image3.src = "assets/SVG/tree.svg";
  image4.src = "assets/SVG/leafs.svg";
  image5.src = "assets/SVG/leafs.svg";
  image6.src = "assets/SVG/tree.svg";

  image1.height = 100;
  image2.height = 200;
  image3.height = 500;
  image4.height = 100;
  image5.height = 100;
  image6.height = 300;

  image1.style.position = "absolute";
  image1.style.left = `${image1Coordinates.x}px`;
  image1.style.top = `${image1Coordinates.y}px`;

  image2.style.position = "absolute";
  image2.style.left = `${image2Coordinates.x}px`;
  image2.style.top = `${image2Coordinates.y}px`;

  image3.style.position = "absolute";
  image3.style.left = `${image3Coordinates.x}px`;
  image3.style.top = `${image3Coordinates.y}px`;
  
  image4.style.position = "absolute";
  image4.style.left = `${image4Coordinates.x}px`;
  image4.style.top = `${image4Coordinates.y}px`;

  image5.style.position = "absolute";
  image5.style.left = `${image5Coordinates.x}px`;
  image5.style.top = `${image5Coordinates.y}px`;

  image6.style.position = "absolute";
  image6.style.left = `${image6Coordinates.x}px`;
  image6.style.top = `${image6Coordinates.y}px`;

  grassContainer.appendChild(image1);
  grassContainer.appendChild(image2);
  grassContainer.appendChild(image3);
  grassContainer.appendChild(image4);
  grassContainer.appendChild(image5);
  grassContainer.appendChild(image6);

  const removeImagesFromGrass = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.remove();
      }
    });
  }, {});

  removeImagesFromGrass.observe(image1);
  removeImagesFromGrass.observe(image2);
  removeImagesFromGrass.observe(image3);
  removeImagesFromGrass.observe(image4);
  removeImagesFromGrass.observe(image5);
  removeImagesFromGrass.observe(image6);
}

// // Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}