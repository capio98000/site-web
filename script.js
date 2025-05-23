let gold = 0;
let gpc = 1; // or par clic et puissance d'attaque
let bossLevel = 1;
let bossHP = 100;

function loadGame() {
    const saved = JSON.parse(localStorage.getItem('pirateClicker') || '{}');
    if (saved) {
        gold = saved.gold || gold;
        gpc = saved.gpc || gpc;
        bossLevel = saved.bossLevel || bossLevel;
        bossHP = saved.bossHP || bossHP;
    }
}

function saveGame() {
    const data = { gold, gpc, bossLevel, bossHP };
    localStorage.setItem('pirateClicker', JSON.stringify(data));
}

function updateDisplay() {
    document.getElementById('gold').textContent = gold;
    document.getElementById('gpc').textContent = gpc;
    document.getElementById('boss-level').textContent = bossLevel;
    document.getElementById('boss-hp').textContent = bossHP;
    saveGame();
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

document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    updateDisplay();
});

window.addEventListener('beforeunload', saveGame);
