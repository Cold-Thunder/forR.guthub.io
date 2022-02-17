
var images1 = document.querySelector("#image-1");

function myR(){
    images1.src="images/love.png";
    document.querySelectorAll("h1")[0].innerHTML="My";
    document.querySelectorAll("h1")[1].innerHTML="I know why are you so huff on me. I am so sorry for Everything..<br>Pleaseeee forgive me...";
}
var forButton = document.querySelectorAll("button")[0].addEventListener("click", function(){
    images1.classList.add("img-anim");
    var style = document.querySelectorAll("button")[0];
    style.classList.add("button");
})




var images2 = document.querySelector("#image-2");

function myR2(){
    images2.src="images/love 2.png";
    document.querySelectorAll("h1")[0].innerHTML="I Love you too.<br>And I will love you forever. If you want,<br> I will wait for you.";
    
}
var forButton = document.querySelectorAll("button")[1].addEventListener("click", function(){
    images2.classList.add("image-2");
    var style = document.querySelectorAll("button")[1];
    style.classList.add("button");
})

