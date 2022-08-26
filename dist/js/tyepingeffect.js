
var x = 0;
var textEffect = "We Are Creative";
var container = document.getElementById('effect');
 
function animation(){
  if (x < textEffect.length){
    container.innerHTML += textEffect.charAt(x);
    x++;
    setTimeout(animation, 80);
  }
  
}
animation();