// N0 1:
var fname = prompt ("Enter your First Name");
var lname = prompt ("Enter your Last Name");
document.write ("Good Morning " + fname + lname);

// N0 2:
var mobile = prompt("Enter Your fav Mobile: ")
var lenght = mobile.length
document.write("My fav Phone is: " + mobile + "<br>" + "Lenght of String " + lenght);

// N0 3:
var country = "Pakistani"
var letter = "n"
var index = country.indexOf(letter)
document.write( "String is " + country + "<br>" +  "The index of '" + letter + "\" is " + index );

// N0 4:
var greet = "Hello World"
var latter = "l"
var index = greet.lastIndexOf(latter)
document.write("String" + greet + "<br>" + "Index of 'l' " + index)

// N0 5:
var word = "Pakistani"
var char = 'i'
var character = word.charAt(3)
document.write("String is " + word + "<br>" + "The character at index 3 is '" + character + "'");

// N0 6:
var fname = prompt ("Enter your First Name");
var lname = prompt ("Enter your Last Name");
var fullname = fname.concat(" ", lname)
document.write("Hello " + fullname)

// N0 7:
var city = "Islambad"
var city1 = city.replace("Islambad","Hyderabad")
document.write("city: " + city + "<br>" + "After Replacement: " + city1);

// N0 8:
var friend = "Ali and Sami are best friends. They play cricket and football together"
var replace = friend.replace( /and/g , "&" )
document.write("Original message: " + friend + "<br>")
document.write( "After replacement: " + replace )

// N0 9:
var num1 = "472"
document.write("Value " + num1 + "<br>" + "Type: " + typeof num1 + "<br>")
var num2 = "472"
var num = Number(num2)
document.write("Value " + num2 + "<br>" + "Type: " + typeof num )

// N0 10:
var fruit = prompt("Enter What dry froit you Like") 
var fruit1 = fruit.toUpperCase()
document.write("User input :" + fruit + "<br>" + "UpperCase :" + fruit1)

// N0 11:

var lang = prompt("Enter programming language") 
var value1 =lang.slice(0,1).toUpperCase()
var value2 =lang.slice(1).toLowerCase()
var lang = value1 + value2
var flag = false
document.write("Title Case: " + lang)

// N0 12:

var num2 = 35.36
var num = num2.toString()
document.write("Value " + num2 + "<br>" + "Type: " + typeof num + "<br>" )
var withoutdot = num.replace('.','')
document.write("Result " + withoutdot);


// N0 14:
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var welcome = prompt("Welcome to our Bakery. What do you want to order?");
var lowerCaseWelcome = welcome.toLowerCase(); 
var matchFound = "no";

    for (var i = 0; i < items.length; i++) {
        if (lowerCaseWelcome === items[i].toLowerCase())
            {
            matchFound = "yes";
            document.write(welcome + " is available in " + "Index " + i);
            break;
        }
    }

    if (matchFound == "no") {
        document.write("Sorry, " + welcome + " is not available");
    }
// N0 15:
    var password = prompt("Enter Your Password");
    var matchFound = "no";
    
    // Check if the password length is less than 6
    if (password.length <=6) {
        matchFound = "yes";
    }
    
    // Check if the password starts with a number
    if (!isNaN(password[0])) {
        matchFound = "yes";
    }
    
    var hasAlphabet = false;
    var hasNumber = false;
    
    // Loop through each character in the password
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
    
        // Check if the character is an alphabet (a-z, A-Z)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        }
    
        // Check if the character is a number (0-9)
        if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }
    
    // Check if the password does not have both alphabets and numbers
    if (!hasAlphabet || !hasNumber) {
        matchFound = "yes";
    }
    
    // Output the result
    if (matchFound === "yes") {
        alert("Password is invalid. Please enter a valid password.");
    } else {
        alert("Password is valid.");
    }
// N0 13:
    var username = prompt("Enter Your Name")
    var matchFound = true;
    for(var i=0;i<=username.length;i++)
       
        {
            var charcode = username[i].charCodeAt()
            if(charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64)
                {
                    document.write("Please Enter The Valid Username")
                    matchFound=false;
                    break;

                }
        }
// N0 16:
    var university = "U n i v e r s i t y o f K a r a c h i";
var universityArray = university.split(" ");

// Display the elements of the array in the browser
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i]+ "<br>");
}

// N0 17:
var userinput = prompt("Enter Country Name");
var lastchar = userinput.charAt(userinput.length-1)
document.write("The last character of the input is: " + lastchar);

// N0 18:
var sentance = "The quick brown fox jumps over the lazy dog"
var find = "the"
var word = sentance.split(" ");
count = 0
for(var i=0; i<word.length; i++)
    {
        if (word[i].toLowerCase() === find) {
            count++;
        }
    }
document.write("The word 'the' occurs " + count + " times in the given string.");

    var username = prompt("Enter Your Name");
var isValid = true;

for (var i = 0; i < username.length; i++) {
    var charcode = username.charCodeAt(i);
    if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64) {
        document.write("Please Enter a Valid Username<br>");
        isValid = false;
        break;
    }
}

if (isValid) {
    document.write("Valid Username");
}