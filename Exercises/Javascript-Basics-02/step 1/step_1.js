var img = document.querySelector("img");

img.onmouseover  = function () {
    img.src = "images/image1_2.jpg";
}
img.onmouseout = function () {
    img.src = "images/image1.jpg";
}