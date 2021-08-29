var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');

function changebackground(){
    document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
}


document.getElementById('color1').addEventListener("input", changebackground)
document.getElementById('color2').addEventListener("input", changebackground)
color = color1.value
