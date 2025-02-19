import "./styles.css";
import { startup } from "./landingPage";
import { about } from "./about";
import { menu } from "./menu";

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',function(){

        if (this.innerText == "Home"){
            startup();
        }
        else if (this.innerText == "Menu"){
            menu();
        }
        else if (this.innerText == "About"){
            about();
        }
        console.log("Button clicked:", this.innerText);
    });
});
startup();
console.log("Hi there");