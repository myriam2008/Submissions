// var reset_btn = document.querySelector("button");

// reset_btn.onclick =()=>{
//     document.querySelector("#name").value = "";
//     document.querySelector("#surname").value = "";
//     document.querySelector("#city").value = "";
// }

var resetBTN = document.querySelector("button[type=button]");
resetBTN.addEventListener("click", function () {
  var name = document.querySelector("#name").value = "";
  var surname = document.querySelector("#surname").value = "";
  var city = document.querySelector("#city").value = "";
});