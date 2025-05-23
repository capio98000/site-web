let gold = 0;
let gpc = 1; // or par clic et puissance d'attaque
let bossLevel = 1;
let bossHP = 100;

function updateDisplay() {
    document.getElementById('gold').textContent = gold;
    document.getElementById('gpc').textContent = gpc;
    document.getElementById('boss-level').textContent = bossLevel;
    document.getElementById('boss-hp').textContent = bossHP;
}

function clickChest() {
    gold += gpc;
    bossHP -= gpc;
    if (bossHP <= 0) {
        gold += 100 * bossLevel;
        bossLevel += 1;
        bossHP = 100 * bossLevel;
        alert('Boss vaincu! Prochain niveau: ' + bossLevel);
    }
    updateDisplay();
}

function buyItem(cost, inc) {
    if (gold >= cost) {
        gold -= cost;
        gpc += inc;
        updateDisplay();
    } else {
        alert("Pas assez d'or!");
    }
}

document.addEventListener('DOMContentLoaded', updateDisplay);
