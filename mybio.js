const heading = document.getElementById("main-heading");

heading.addEventListener("click", function () {
    alert("Welcome to my bio page!")
});

const profilePic = document.querySelector("img");

profilePic.addEventListener("mouseover", function () {
    profilePic.classList.add("hovered");
});

profilePic.addEventListener("mouseout", function () {
    profilePic.classList.remove("hovered");
});

const firstLink = document.querySelector("a");

firstLink.addEventListener("click", function () {
    firstLink.style.textDecoration = "underline";
});

const greeting = document.createElement("p");

greeting.textContent = " Welcome to my page!";
document.body.prepend(greeting);