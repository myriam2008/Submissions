var img = document.querySelectorAll("img");
console.log(img);


img[0] = document.getElementById("image1").addEventListener("mouseover", function() {
    img[0].src = "images/image1_2.jpg"; 
})

img[1] = document.getElementById("image2").addEventListener("mouseover", function() {
    img[1].src = "images/image2_2.jpg";
})
img[2] = document.getElementById("image3").addEventListener("mouseover", function() {
    img[2].src = "images/image3_2.jpg";
})
img[3] = document.getElementById("image4").addEventListener("mouseover", function() {
    img[3].src = "images/image4_2.jpg";
})
img[4] = document.getElementById("image5").addEventListener("mouseover", function() {
    img[4].src = "images/image5_2.jpg";

})
var img2 = document.querySelectorAll("img");
console.log(img);


img2[0] = document.getElementById("image1").addEventListener("mouseout", function() {
    img2[0].src = "images/image1.jpg";
})

img2[1] = document.getElementById("image2").addEventListener("mouseout", function() {
    img2[1].src = "images/image2.jpg";
})
img2[2] = document.getElementById("image3").addEventListener("mouseout", function() {
    img2[2].src = "images/image3.jpg";
})
img2[3] = document.getElementById("image4").addEventListener("mouseout", function() {
    img2[3].src = "images/image4.jpg";
})
img2[4] = document.getElementById("image5").addEventListener("mouseout", function() {
    img2[4].src = "images/image5.jpg";
})
