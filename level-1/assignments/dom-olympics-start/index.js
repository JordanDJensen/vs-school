var header = document.getElementById("header");

// Create h1 element
var h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
header.appendChild(h1);

// Add CSS class for header
header.classList.add("header");

// Create span element for username
var username = document.createElement("span");
username.textContent = "Jordan";
username.classList.add("name");
header.appendChild(username);


//Change messages 
var message = document.getElementsByClassName("message")
var changeText = Array.from(message)
changeText[0].textContent = "How's it going neighbor?"
changeText[1].textContent = "It's going dandy neighbor!"
changeText[2].textContent = "Any fun plans for today?"
changeText[3].textContent = "About to go do some fishin? How about you?"


// Clear all text 
 document.getElementById("clear-button").addEventListener("click", () =>{
    var clear = document.getElementsByClassName("message")
    
    var messageArray = Array.from(clear)
    for(var i = 0; i < messageArray.length; i++ ){
        messageArray[i].remove();
    }
})

document.getElementById("theme-drop-down").addEventListener("change", () =>{
    var selectedItem = event.target.value
    console.log(selectedItem)

    if(selectedItem.value === "them-one"){
      document.getElementsByClassName("left").style
    
    }
})

