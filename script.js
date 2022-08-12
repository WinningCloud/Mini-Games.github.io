var box1Content = prompt("Enter a number between 1 and 5");
var box2Content = Math.ceil(Math.random()*5 )

if (box1Content==1 || box1Content==2 ||  box1Content==3 || box1Content==4 || box1Content==5){
    document.querySelector(".box1").innerHTML = (box1Content);
    document.querySelector(".box2").innerHTML = (box2Content)
}
else{
    alert("Please enter a valid number between 1 and 5.")

}

if (box1Content==box2Content){
    document.querySelector("footer").innerHTML = ("Yay! You guessed it right!")
    document.querySelector("footer").style.color = "green"
}
else{
    document.querySelector("footer").innerHTML = ("Oops! Try again (Refresh)")
    document.querySelector("footer").style.color = "red"
    
}