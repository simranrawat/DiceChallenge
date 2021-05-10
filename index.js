var randomnumber1= (Math.floor(Math.random()*6))+1;
var randomnumber2= (Math.floor(Math.random()*6))+1;
var name1="dice" + randomnumber1 + ".png";
var name2="dice" + randomnumber2 + ".png";
var sourceImage1="images/" + name1;
var sourceImage2="images/" + name2;
// var image_1=document.querySelectorAll("img")[0];
// image_1.setAttribute("src",sourceImage1);
// var image_2=document.querySelectorAll("img")[1];
// image_2.setAttribute("src",sourceImage2);
var image_1=document.getElementById('image1');
image_1.setAttribute("src",sourceImage1);
var image_2=document.getElementById('image2');
image_2.setAttribute("src",sourceImage2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 wins.🏆";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 wins.🏆";
}
else{
  document.querySelector("h1").innerHTML="Match Draw. 👀";

}
