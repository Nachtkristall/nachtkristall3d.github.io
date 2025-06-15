const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "resources/PlaceholderLC.png") {
    myImage.setAttribute("src", "resources/Blender_badge.png");
  } else {
    myImage.setAttribute("src", "resources/PlaceholderLC.png");
  }
});
