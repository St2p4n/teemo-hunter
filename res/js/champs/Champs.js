// let foojinx {
//     name = " Arcade Jinx";
//     hp = 12;
//     dmg = 30;
//     mana = 120; 
// }



export class Champs { // stejné jmeno jako soubor 
 
    constructor(name, hp, dmg, mana){ // 12 se přesuna na hp
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
    }
   attack(){
     console.log(`${this.name} is attacking!`);  
 }
}

// const jinx = new Champs("Arcade Jinx",12,30,120);
// jinx.attack();

// console.log(jinx.mana); vypiše do konzole 
// jinx.hp = 50; přepíše hp

