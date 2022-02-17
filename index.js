var images = document.querySelector("img");

function myR(){
    images.src="images/love.png";
    document.querySelectorAll("h1")[0].innerHTML="My";
    document.querySelectorAll("h1")[1].innerHTML="I am so sorry for Everything..<br>Pleaseeee Give Up...";
}
var forButton = document.querySelector("button").addEventListener("click", function(){
    images.classList.add("img-anim");
})
