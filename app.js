const menuChange = document.querySelector("ul label");
const titleChange = document.getElementsByTagName("span");
let links = document.querySelectorAll("code");
const finale = document.getElementById("owner");
const add = document.createElement("p");
add.innerHTML = "Created by Justice Sithole."

finale.appendChild(add);


finale.style.textAlign = 'center'


setInterval(() => {
    for (const linker of links) {
        linker.classList.add("coder");
    }
},5000);
 

menuChange.addEventListener("mouseover",menuEvent);

function menuEvent(e){
    if(e === "mouseover"){
        menuChange.classList.add(menuChange);
    }else{
        return false;
    }
  
}


setInterval(() => {
    for (const prop of titleChange) {
        if(prop.innerHTML === "System Administrator"){
            prop.innerHTML = "SQL Developer";
        } else if (prop.innerHTML === "SQL Developer"){
            prop.innerHTML = "Web Developer";
        } else if(prop.innerHTML === "Web Developer"){
            prop.innerHTML = "Free Lancer";
        } else{
            prop.innerHTML = "System Administrator";
        }
    }
    
}, 4000);

const navigation = document.querySelectorAll("nav ul li a");

for (const prop of navigation) {
    prop.addEventListener("mouseover", changeLog);

    function changeLog(e){
        console.log(e.type)
        let hasChange = document.querySelectorAll(".activate");
        prop.classList.remove("active");

        if(hasChange){
            prop.classList.add("activate")
        }
    }    
}

let cell  = document.getElementById("number");

cell.addEventListener('click', cellLog);

function cellLog(e){
    e.preventDefault();
    console.log(e.type);
    alert('0769425452');
}
let contact  = document.getElementById("cellz");

contact.addEventListener('click', contactLog);

function contactLog(e){
    e.preventDefault();
    console.log(e.type);
    alert('0769425452');
}