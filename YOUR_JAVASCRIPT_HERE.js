// Write your JS here
let hero = {
    name: "Ezio",
    heroic: true,
    inventory: [],
    health: 1,
    weapon: {
        type: "blade",
        damage: 1
    }
}


function rest(object) {
    object.health = 10
    
    displayStats()
}

function pickUpItem(character, object) {
    character.inventory.push(object) 

    displayStats()
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
    var inputField = document.getElementById("newName")
    var chosenName = inputField.value

    createName(chosenName)
    
    inputField.value = null;

    function createName(name) {
        hero.name = name
    }

    displayStats()

}