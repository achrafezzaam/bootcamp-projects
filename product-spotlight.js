const addToCart = document.getElementById("add-to-cart");

addToCart.addEventListener("click", function () {
    addToCart.textContent = "Added!";
});

const productPic = document.querySelector("img");

productPic.addEventListener("mouseover", function () {
    productPic.classList.add("hovered");
});

productPic.addEventListener("mouseout", function () {
    productPic.classList.remove("hovered");
});

const toggleList = document.querySelector("i");

toggleList.addEventListener("click", function () {
   const featuresList = document.getElementsByClassName("features-list")[0];
   if (featuresList.style.display === 'block') {
    featuresList.style.display = "none";
    toggleList.className = "glyphicon glyphicon-plus";
   } else {
    featuresList.style.display = "block";
    toggleList.className = "glyphicon glyphicon-minus";
   }
});

const firstLink = document.querySelector("a");

firstLink.addEventListener("click", function () {
    firstLink.style.color = "orange";
});

const formButton = document.getElementById("order-submit");

formButton.addEventListener("click", e => {
    e.preventDefault();
    alert("Order Received!");
});

const formSection = document.getElementById("purchase-form");

formSection.addEventListener("mouseover", function () {
    formSection.style.backgroundColor = "rgba(70, 130, 180, 0.3)";
    formSection.style.borderColor = "#4682B4";
});

formSection.addEventListener("mouseout", function () {
    formSection.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    formSection.style.borderColor = "#AAAAAA";
})