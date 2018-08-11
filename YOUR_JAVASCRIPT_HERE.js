// Write your JS here
let hero = {
    name: "name",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "blade",
        damage: 2
    }
}

function rest(hero) {
    console.log('hero rested')
    hero.health = 10
    console.log('health added')
    return hero
    
}

function pickUpItem(hero, object) {
    hero.inventory.push(object)
    console.log(hero.inventory)
}

let dagger = {
    type: "dagger",
    damage: 2
}

function equipWeapon(hero) {

}