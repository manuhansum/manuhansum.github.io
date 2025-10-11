const myImage = document.querySelector("img");
const welcomeMessage = "Spread the dog love,";

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sad-puppy.jpg") {
    myImage.setAttribute("src", "images/corgi.jpg");
  } else {
    myImage.setAttribute("src", "images/sad-puppy.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `spread the dog love${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `spread the dog love${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
