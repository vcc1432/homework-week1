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

//Sets health of the object by clicking on the inn-image.
function rest(object) {
    object.health = 10
    displayStats()
    return object
}

//this function runs when image of weapon is clicked. 
function pickUpItem(character, object) {
    character.inventory.push(object)
    document.getElementById("dagger").className = "done" 
    displayStats()
    cleanUp()
}

//this is the object 'dagger' that will be the second argument in the pickUpItem() function.
let dagger = {
    type: "dagger",
    damage: 2
}

//This function will run when bag-image is clicked. Reassigns weapon to the first position in the inventory. 
function equipWeapon(character) {      
    if (character.inventory.length <= 0) {
        return
    } else {
        character.weapon = character.inventory[0]
    }

    displayStats()
}

//Displays the hero's statistics to the page, and is called every time these stats change.
function displayStats() {   
    let heroStats = document.getElementById("stats")
    heroStats.innerHTML = 
    `Name: ${hero.name}<br>
    Health: ${hero.health}<br>
    Weapontype: ${hero.weapon.type}<br>
    Weapondamage: ${hero.weapon.damage}`
}

//
function submitName(event) {
    event.preventDefault()
    let inputField = document.getElementById("newName")
    let chosenName = inputField.value

    createName(chosenName)
    
    inputField.value = null

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

function fightEnemy() {
    let enemyDamage = Math.floor(Math.random() * 4)
    
    if (hero.weapon.damage < enemyDamage) {
        document.getElementById('outcome').innerHTML = `Enemy wins, ${hero.name}'s health is 0. Go to the Inn to restore health.`
        hero.health = 0
        displayStats()
        document.getElementById("enemy").className = "done" 
        cleanUp()     
    } else if (hero.weapon.damage === enemyDamage) {
        document.getElementById('outcome').innerHTML = "keep on fighting!"
    } else {
        displayStats()
        document.getElementById('outcome').innerHTML = `${hero.name} defeats enemy and wins his weapon!` 
    }
}

function cleanUp() {
    var done = document.getElementsByClassName("done")

    for (let doneIndex= 0; doneIndex < done.length; doneIndex++) {
        done[doneIndex].remove()
    }
    
}