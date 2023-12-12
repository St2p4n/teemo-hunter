import { Champs } from "./champs/Champs.js";
import { Background } from "./ui/basic-ui.js";

const jinx = new Champs("Arcane Jinx", 50, 20, 5);
console.log(jinx);
console.log(jinx.name);
jinx.attack(); //vyvolá metodu

const jax = new Champs("Arcane Jax", 50, 20, 5);
console.log(jax);
console.log(jax.name);
jax.attack(); //změni to všechno na jaxe 

const background = new Background();
console.log(background);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//index    0 1 2 3  4  5 - od nuly 
const a = [5,6,5,90,32,2];
console.log(a[3]) // 3 vypíše 90, 4 vypíše 32
// index         0        1         2
const names = ["Ondra", "Pepa" , "Radek"] 
console.log(names[1]); // 0 vypíše to Ondru , 1 Pepu a 2 Radka

// [] POLE
// {} OBJEKT

const teemo = {
    height: 100,
    width: 50 ,
    hp: 444,
    mana: 232,
}
teemo.mana = 300; // změním manu v const
console.log(teemo.mana)//musíme napsat tečku! a vypíče to manu 

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

const gameLoop = () => {
    ///console.log(keys)
    //resize canvas
    resizeCanvas();
    //clear canvas 
    clearCanvas();
    //update
    update();
    //Render 
    render();
    //fps 
    getFps();
    window.requestAnimationFrame(gameLoop);
}

const resizeCanvas = () => {
 canvas.width = 1280;
 canvas.height = 720;
 }

const clearCanvas = () => { 
  background.draw(ctx);
}

const update = () => {

}

const render = () => {
    
}

const getFps = () => {
    
}

window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}