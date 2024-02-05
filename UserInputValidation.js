// JavaScript source code


// I first set up some Variables
let vWordF = "";
let vWordL = "";
let vWordZ = "";
//this one will make sure when i combine the first and last name they are not over 20.
let vWordSize = 20;
//this one is for the zipcode
let vWordNumberSize = 6;
let vWordFullName;

//The first function I make Sets up The values of the user Input
function checkIfBlank() {

    vWordF = document.getElementById("userFirstName").value;
    vWordL = document.getElementById("userLastName").value;
    vWordZ = document.getElementById("userZipcode").value;
    //Means if nothing is typed it doesnt run the real function.
    if (vWordF.length == 0 || vWordL.length == 0 || vWordZ.length ==0) {
        //Debug stuff
        console.log("form not done");
        //Explains to the user that they need to finish the form
        document.getElementById("results").innerHTML = "Please fill out all of the form!";
    }
    //Found a word!
    else if (vWordF.length > 0 && vWordL.length > 0 && vWordZ.length > 0) {

        
        wordSizeChecker();
       
        
    }
}



//this function is the first stop for the code and where i use the first name and the last name to see if there over 20 characters
function wordSizeChecker() {
    //This makes any spaces in the first and lasst name go away by calling a gobal command on all spaces
    vWordF.replace(/\s+/g, '');
    vWordL.replace(/\s+/g, '');
    //This checks to see if the word length is less than 20
    if (vWordSize <= vWordF.length + vWordL.length) {
        //if it is more than 20 it does not continue
        document.getElementById("results").innerHTML = "Max Number of Charcters for Name is 20  all together, please Re-enter name";
    } else {
        //if it is. it goes on to check the zip code
        console.log("Name is valid");
        document.getElementById("results").innerHTML = "Thank you!";
        //This makes a variable for both the first and last name for later.
        vWordFullName = vWordF + " " + vWordL;
        zipCodeChecker();
    }

}

//This checks to see if the zip code has less than 5 characters
function zipCodeChecker() {
    if (vWordNumberSize < vWordZ.length && vWordZ.length == 5) {
        //if it has more it stops the code here
        document.getElementById("results").innerHTML = "Zip code is not valid. 5 numbers Max!";
    } else {
        console.log("Zipcode is valid");
        document.getElementById("results").innerHTML = "Thank you!"
        signUpFinished();
    }
}


//this function changes the page to welcome the person signning up as well as push a messages to the person.
function signUpFinished() {
    alert("Thank you for signing up! " + vWordFullName +  " your app will be review with upmost haste!");
    document.getElementById("body").style.backgroundColor = "lightBlue";
    document.getElementById("welcome").innerHTML = "Welcome " + vWordFullName + "!";
    //This changes the text to sommething . . .more relaxing and cute! by using emoji code.
    document.getElementById("skullB").innerHTML = "&#128568 &#128568 &#128568 &#128568 &#128568";
    document.getElementById("skullT").innerHTML = "&#128568 &#128568 &#128568 &#128568 &#128568";
}






