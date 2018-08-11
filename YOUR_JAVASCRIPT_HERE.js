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
function rest(character) {
    character.health = 10
    displayStats()
    return character
}

//this function runs when image of weapon is clicked. 
function pickUpItem(character, weaponName) {
    //I am aware that for the purpose of fighting enemies, the push() method should be changed to unshift(), so that the stronger weapon is equipped when fighting enemies.
    character.inventory.push(weaponName)
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

//Lets the user give the hero a different name.
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

//When button is clicked, random enemy is shown.
function showEnemy() {
    let randomEnemy = document.getElementsByClassName("enemy")
    let randomNumber = Math.floor(Math.random() * randomEnemy.length)
    

    for(let enemyIndex = 0; enemyIndex < randomEnemy.length; enemyIndex++) {
        randomEnemy[enemyIndex].style.display = 'none'
    }
    
    randomEnemy[randomNumber].style.display = 'block'
}

//When image is clicked, the enemy's damage is compared to the hero's strength. If hero's health is lower than 8, he cannot fight. 
function fightEnemy(character, nemesis) {

    let outcome = document.getElementById('outcome')

    if (character.health > 8) {    
        if (character.weapon.damage < nemesis.weapon.damage) {
            outcome.innerHTML = `Enemy wins, ${character.name}'s health is 0. Go to the Inn to restore health.`

            character.health = 0
            displayStats()        
        } else if (character.weapon.damage === nemesis.weapon.damage) {
            outcome.innerHTML = "It's a tie, try another enemy!"
        } else {
            outcome.innerHTML = `${character.name} defeats the enemy and wins his weapon!` 
        
            character.inventory.push(nemesis.weapon)
            displayStats()
            } 
        } else {
            return
    }
}

let enemyList = [
    {
        weapon: {
            type: "sword",
            damage: 3
    }
    },
    {
        weapon: {
            type: "spear",
            damage: 2
        }
    },
    {
        weapon: {
            type: "bow and arrow",
            damage: 1
        }
    }
]

//removes elements with class 'done'.
function cleanUp() {
    var done = document.getElementsByClassName("done")

    for (let doneIndex= 0; doneIndex < done.length; doneIndex++) {
        done[doneIndex].remove()
    }
    
}

