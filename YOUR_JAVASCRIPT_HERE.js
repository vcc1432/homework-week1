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

console.log(hero)

function rest(object) {
    object.health = 10
    console.log(hero)
    return object

    
}

function pickUpItem(character, object) {
    character.inventory.push(object) 

    console.log(hero)
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

console.log(hero)
}
