// Create Box 
var box = document.createElement("div");
box.style.height = "500px";
box.style.width =  "500px";
box.style.border = "solid 3px"
document.body.appendChild(box);


//change box to blue 
box.addEventListener("mouseover", (event) =>{
    box.style.backgroundColor = "blue";
})

//change box to red 
box.addEventListener("mousedown", (event) =>{
    box.style.backgroundColor = "red";
})

//change box to yellow 
box.addEventListener("mouseup", (event) =>{
    box.style.backgroundColor = "yellow";
})

//change box to green 
box.addEventListener("dblclick", (event) =>{
    box.style.backgroundColor = "green";
})

//change box to orange 
window.addEventListener("wheel", (event) =>{
    box.style.backgroundColor = "orange";
})


window.addEventListener("keydown", (event)=>{
    

    
    if(event.key == "r"){
        box.style.backgroundColor = "red"
    }

    if(event.key == "b"){
        box.style.backgroundColor = "blue";
    }

    if(event.key == "g"){
        box.style.backgroundColor = "green";
    }

    if(event.key == "y"){
        box.style.backgroundColor = "yellow";
    }

    if(event.key == "o"){
        box.style.backgroundColor = "orange"
    }


})
