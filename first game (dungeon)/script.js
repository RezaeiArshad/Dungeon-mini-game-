let health = 100;
let monsterHealth;
let monsterLevel;
let xp = 0;
let monsterXp;
let gold = 500;
let weaponsInventory = ["stick"];
let currentWeapon = 0;
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const text = document.querySelector(".text");
const goldText = document.querySelector(".goldText");
const healthText = document.querySelector(".healthText");
const xpText = document.querySelector(".xpText");
const image = document.querySelector(".img");
const monsterStats = document.querySelector(".monsterStats");
const monsterNameText = document.querySelector(".monsterNameText");
const monsterHealthText = document.querySelector(".monsterHealthText");
const monsterLevelText = document.querySelector(".monsterLevelText");
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

const weapons = [
    {
        name: "stick",
        power: 5,
    },
    {
        name: "dagger",
        power: 10,
        imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15500_6zq1.jpg')"
    },
    {
        name: "hammer",
        power: 20,
        imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15506_ndn4.jpg')"
    },
    {
        name: "sword",
        power: 30,
        imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15507_mzbb.jpg')"
    }
];

const monsters = [
    {
        name: "Wolf",
        health: 100,
        level: 1
    },
    {
        name: "Golem",
        health: 250,
        level: 5
    },
    {
        name: "Dragon",
        health: 500,
        level: 10
    }
]
 
let locations = [
{
    name: "village",
    "button text": ["go to store", "go to cave", "fight the dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: " You are at the village. where do you want to go?",
    imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15503_3vri.jpg')",
},
{
    name: "store",
    "button text": [" Buy 10 health (10 gold)", " Buy " + weapons[currentWeapon + 1 ].name + " (30 gold)", " Go to village"],
    "button function": [buyHealth, buyWeapon, goVillage],
    text: " You are at the store. buy supplies...",
    imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15502_i4dr.jpg')",
},
{
    name: "cave",
    "button text": [" Fight Wolf", " Fight Golem", " Go to village"],
    "button function": [fightWolf, fightGolem, goVillage],
    text: " You are in the cave . Where do you want to go?",
    imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15508_(1)_cyn1.jpg')",
},
{
    name: "fight",
    "button text": [" Attack", "Dodge", " Go to village"],
    "button function": [attack, dodge, goVillage],
    text: " You are fighting a monster. Choose your move..."
},
{
    name: "lost",
    "button text": [" Restart?", " Restart?", " Restart?"],
    "button function": [restart, restart, restart],
    text: " You lost. Want to restart?"
},
{
    name: "won",
    "button text": [" Restart?", " Restart?", " Restart?"],
    "button function": [restart, restart, restart],
    text: " You won. Want to restart?",
    imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15804_xbac.jpg')"
},
{
    name: "defeat monster",
    "button text": [" Go to villge", " Go to villge", " Go to villge"],
    "button function": [goVillage, goVillage, goEaster],
    text: " You defeated the monster. Want to go the village?"
},
{
    name: "easter egg",
    "button text": [" Buy 10 health (5 gold)", " Buy " + weapons[currentWeapon + 1 ].name + " (20 gold)", " Go to village"],
    "button function": [buyHealthEaster, buyWeaponEaster, goVillage],
    text: " You entered a secret shop.",
    imgSrc: "url('https://s8.uupload.ir/files/msg23372500-15803_vbl3.jpg')",
}
];

function update(parameter) {
button1.innerText = parameter["button text"][0],
button2.innerText = parameter["button text"][1],
button3.innerText = parameter["button text"][2],
button1.onclick = parameter["button function"][0],
button2.onclick = parameter["button function"][1],
button3.onclick = parameter["button function"][2],
text.innerHTML = parameter.text,
image.style.backgroundImage = parameter.imgSrc;
if (currentWeapon < 3) {
locations[1]["button text"][1] = " Buy " + weapons[currentWeapon + 1].name + " (30 gold)";
}
else {
locations[1]["button text"][1] = " Buy " + weapons[currentWeapon].name + " (30 gold)";
}
}

function goVillage() {
    update(locations[0]);
    monsterStats.style.display = "none";
}

function goEaster() {
    update(locations[7]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function restart() {
    update(locations[0]);
    xp = 0;
    xpText.innerText = xp;
    health = 100;
    healthText.innerText = health;
    gold = 50;
    goldText.innerText = gold;
}

function monsterStatsUpdate(parameter) {
monsterNameText.innerText = parameter.name;
monsterHealthText.innerText = parameter.health;
monsterLevelText.innerText = parameter.level;
monsterHealth = parameter.health;
monsterLevel = parameter.level;
}

function fightDragon() {
image.style.backgroundImage = "url('https://s8.uupload.ir/files/photo1734371660_hmgs.jpeg')"
update(locations[3]);
monsterStatsUpdate(monsters[2]);
monsterStats.style.display = "block";
monsterXp = monsters[2].level;
}

function fightWolf() {
image.style.backgroundImage = "url('https://s8.uupload.ir/files/msg23372500-15511_(2)_n73i.jpg')"
update(locations[3]);
monsterStatsUpdate(monsters[0]);
monsterStats.style.display = "block";
monsterXp = monsters[0].level;
}

function fightGolem() {
image.style.backgroundImage = "url('https://s8.uupload.ir/files/photo1734371660_(1)_60yx.jpeg')";
update(locations[3]);
monsterStatsUpdate(monsters[1]);
monsterStats.style.display = "block";
monsterXp = monsters[1].level;
}

function youLost() {
    if (health < 1) {
        health = 100;
        xp = 0;
        gold = 500;
        weaponsInventory = ["stick"];
        currentWeapon = 0;
        update(location[4]);
    }
}

function attack() {
if (isMonsterHit()) {
monsterHealth -= returnDmgValue();
if (monsterHealth > -1) {
monsterHealthText.innerText = monsterHealth;  
}
else {
monsterHealthText.innerText = 0;  
}
health -= returnMonsterDmgValue();
if (health > 0) {
    healthText.innerText = health;
}
else {
    healthText.innerText = 0;
}
text.innerText = " You attacked the " + monsterNameText.innerText + " with your " + weapons[currentWeapon].name + ".";
}
else {
    text.innerText = " You attacked the " + monsterNameText.innertext + " with your " + weapons[currentWeapon].name;
    text.innerText += " You missed!!!";
    health -= returnMonsterDmgValue();
    if (health > 0) {
        healthText.innerText = health;
    }
    else {
        healthText.innerText = 0;
    }
    }
    if (health < 1) {
        update(locations[4]);
    }
    else if(monsterHealth < 1) {
        if (monsterLevel === 10) {
       update(locations[5]);
        }
        else {
            update(locations[6]);
            xp += monsterLevel;
            xpText.innerText = xp;
            gold += monsterLevel * 40;
            goldText.innerText = gold;
        }
    }
} 

function isMonsterHit() {
return Math.floor((Math.random() * 100 + xp)) > 8 || false;
}

function returnDmgValue() {
let DmgValue = Math.floor((xp + weapons[currentWeapon].power) * 2);
return DmgValue;
}

function returnMonsterDmgValue() {
    let monsterDmgValue = Math.floor(Math.random() * 15 * monsterLevelText.innerText);
    return monsterDmgValue;
}

function dodge() {
text.innerText = " You dodged the " + monsterNameText.innerText + "'s attack.";
}

function buyHealth() {
if (gold >= 10) {
health += 10;
gold -= 10;
healthText.innerText = health;
goldText.innerText = gold; 
text.innerText = " You bought 10 health";
image.style.backgroundImage = "url('https://s8.uupload.ir/files/msg23372500-15501_hu5.jpg')"
}
else {
    text.innerText = " You don't have enough gold!!!";
}
}

function buyHealthEaster() {
    if (gold >= 10) {
    health += 10;
    gold -= 5;
    healthText.innerText = health;
    goldText.innerText = gold; 
    text.innerText = " You bought 10 health";
    image.style.backgroundImage = "url('https://s8.uupload.ir/files/msg23372500-15501_hu5.jpg')"
    }
    else {
        text.innerText = " You don't have enough gold!!!";
    }
    }

function buyWeapon() {
    if (currentWeapon < 3) {
if (gold >= 30) {
gold -= 30;
currentWeapon++ ;
goldText.innerText = gold;
let newWeapon = weapons[currentWeapon].name;
text.innerText = " You now have a " + newWeapon + ".";
weaponsInventory.push(newWeapon);
text.innerText += " You have in your arsenal: " + weaponsInventory + ".";
image.style.backgroundImage = weapons[currentWeapon].imgSrc;
if (currentWeapon < 3) {
button2.innerText = " Buy " + weapons[currentWeapon + 1].name + " (30 gold)";
}
else {
 button2.innerText = " Buy " + weapons[currentWeapon].name + " (30 gold)"; 
}
}
else {
    text.innerText = " You don't have enough gold!!!";
    image.style.backgroundImage = locations[1].imgSrc;
}
    }
    else {
        text.innerText = " You already have the strongest weapon.";
        text.innerText += " Want to sell a weapon ?";
        button2.innerText = " Sell weapon ? (15 gold)";
        button2.onclick = sellWeapon;
    }
}

function buyWeaponEaster() {
    if (currentWeapon < 3) {
if (gold >= 30) {
gold -= 20;
currentWeapon++ ;
goldText.innerText = gold;
let newWeapon = weapons[currentWeapon].name;
text.innerText = " You now have a " + newWeapon + ".";
weaponsInventory.push(newWeapon);
text.innerText += " You have in your arsenal: " + weaponsInventory + ".";
image.style.backgroundImage = weapons[currentWeapon].imgSrc;
if (currentWeapon < 3) {
button2.innerText = " Buy " + weapons[currentWeapon + 1].name + " (30 gold)";
}
else {
 button2.innerText = " Buy " + weapons[currentWeapon].name + " (30 gold)"; 
}
}
else {
    text.innerText = " You don't have enough gold!!!";
    image.style.backgroundImage = locations[1].imgSrc;
}
    }
    else {
        text.innerText = " You already have the strongest weapon.";
        text.innerText += " Want to sell a weapon ?";
        button2.innerText = " Sell weapon ? (15 gold)";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (1 < weaponsInventory.length) {
weaponsInventory.shift();
gold += 15;
goldText.innerText = gold;
text.innerText = " In your enventory you have :" + weaponsInventory + ".";
    }
    else {
        text.innerText = " Don't sell your only weapon!!!";
        text.innerText += " In your enventory you have :" + weaponsInventory + ".";
    } 
};
