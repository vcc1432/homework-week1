// Write your JS here
let hero = {
    name: "name",
    heroic: true,
    inventory: [
        {
            type: "arrow",
            damage: 1
        },
        {
            type: "spear",
            damage: 5
        }
    ],
    health: 10,
    weapon: {
        type: "blade",
        damage: 2
    }
}


function rest(object) {
    object.health = 10
    return object
}

function pickUpItem(character, object) {
    character.inventory.push(object) 
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
}
