// Write your JS here
let hero = {
    name: "Ezio",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "blade",
        damage: 2
    }
}

function rest(object) {
    object.health = 10
    displayStats()
    return object
}

function pickUpItem(character, object) {
    character.inventory.push(object)
    document.getElementById("dagger").className = "done"; 
    console.log(document.getElementById("dagger"))
    displayStats()
    cleanUp()
}

let dagger = {
    type: "dagger",
    damage: 2
}

function equipWeapon(character) {      
    if (character.inventory.length <= 0) {
        return;
    } else {
        character.weapon = character.inventory[0]
    }

    displayStats()
}

function displayStats() {   
    let heroStats = document.getElementById("stats")
    heroStats.innerHTML = 
    `Name: ${hero.name}<br>
    Health: ${hero.health}<br>
    Weapontype: ${hero.weapon.type}<br>
    Weapondamage: ${hero.weapon.damage}`
}

function submitName(event) {
    event.preventDefault()
    let inputField = document.getElementById("newName")
    let chosenName = inputField.value

    createName(chosenName)
    
    inputField.value = null;

    function createName(name) {
        hero.name = name
    }
    displayStats()
}

function showEnemy() {
    let enemyList = ['enemies/enemy1.png','enemies/enemy2.png','enemies/enemy3.png']
    let randomNumber = Math.floor(Math.random() * enemyList.length)
    let randomEnemy = enemyList[randomNumber]

    document.getElementById('enemy').setAttribute("src", randomEnemy)
    console.log(document.getElementById("enemy"))
    document.getElementById('enemy').style.display = "block"
}

function fightEnemy(statistics) {
    if (hero.weapon.damage < enemyStats.weapon.damage) {
        console.log("enemy wins!")
    } else {
        console.log(`${hero.name} wins!`)
    }
}

let enemyStats = {
    health: 5,
    weapon: {
        type: "sword",
        damage: 1
    }
}

function cleanUp() {
    var done = document.getElementsByClassName("done");

    for (let doneIndex= 0; doneIndex < done.length; doneIndex++) {
        done[doneIndex].remove()
    }
    
}