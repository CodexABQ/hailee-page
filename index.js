
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "hidden"
  const preloader = document.querySelector('.preloader')
  setTimeout(() => {
    preloader.style.display = "none"
    document.body.style.overflowY = "visible"
  }, 2000);
})

let counter = 1;
function carousel1(){

    const first_carousel = document.querySelector(".body-1 .carousel")
    
        setInterval(() => {
            first_carousel.style.transform = `translateX(-${counter * 100}%)`
            counter++
            if(counter === 3){
                counter = 0
            }
        }, 3000)
}
carousel1()
const container = document.querySelector('.body-3 .image-container');

for (let i = 0; i < 20; i++) { // Change 50 to the number of images you want
    const width = Math.floor(Math.random() * 10) + 4; // Random width between 7vw and 13vw
    const height = width; // Assuming maintaining aspect ratio
    
    const img = document.createElement('img');
    // for(i=0; i<10; i++){
        img.src = `./img/hailee_${i}.jpg`; // Replace with actual image source
        img.style.width = `${width}vw`;
        img.style.height = `${height}vw`;
    // }
    
    container.appendChild(img);
}
let allImages = document.querySelectorAll(".body-3 .image-container img")
function getRandomImages(){
    let randomNo = Math.floor(Math.random() * 20);
    let imageSelected = allImages[randomNo]
    imageSelected.style.animation = "pop forwards 1s"
}

// Function to be triggered when the div enters the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Execute your function here
        console.log('Div is fully in view!');
        setInterval(()=>{
            getRandomImages()
        
        }, 100)

       // You can call your specific function here
        // functionName();
    }
    });
}

  // Target div you want to observe
const targetDiv = document.querySelector('.body-3');

  // Options for the observer (e.g., root, threshold)
const options = {
    root: null, // Use the viewport as the root
    threshold: 1.0 // Trigger when the entire div is visible
};

  // Create the observer
const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the target div
observer.observe(targetDiv);
let clicked_image_pop = document.querySelector(".open-image-div img")
let clicked_div_pop = document.querySelector(".open-image-div")
for(i=0; i<allImages.length; i++){
    allImages[i].addEventListener("click", (event)=>{
        // alert("ouch")
        console.log(event.target.src)
        clicked_div_pop.style.animation = "name 1s forwards";
        clicked_image_pop.src = event.target.src;
    })
}
// window.addEventListener("touchend", ()=>{
    // clicked_div_pop.style.animation = "oppname 1s forwards"
// })
window.addEventListener("scroll", ()=>{
    clicked_div_pop.style.animation = "oppname .5s forwards"
})