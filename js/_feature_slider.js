const sliderContainer = document.querySelector(".project-slider-container");
const leftButton = document.getElementById("slider-left");
const rightButton = document.getElementById("slider-right");


rightButton.addEventListener("click", () => {
    const lastSlider = sliderContainer.lastElementChild;
    sliderContainer.insertBefore(lastSlider, sliderContainer.firstElementChild);
});

leftButton.addEventListener("click", () => {
    const firstSlider = sliderContainer.firstElementChild;
    sliderContainer.removeChild(firstSlider);
    sliderContainer.appendChild(firstSlider);
});
