// get the navigation bar element 

var navBar = document.getElementById("personal_name")

// add a click event listener to the navigation bar

navBar.addEventListener("click", function(){
    //here we remove the current color class from the navBar

    navBar.classList.remove("color_green","color_blue","color_pink","color_orange","color_yellow");
   
    // generating a random number between 1 and 5

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    //adding a new color class to the navBar based on the random number

    if(randomNumber === 1) {
        navBar.classList.add("color_green");
    } else if (randomNumber === 2) {
        navBar.classList.add("color_blue");
    } else if (randomNumber === 3) {
        navBar.classList.add("color_pink");
    } else if (randomNumber === 4) {
        navBar.classList.add("color_orange");
    } else {
        navBar.classList.add("color_yellow");
    }
}
)