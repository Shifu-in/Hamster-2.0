let score = 0;

function tapHamster() {
    score += 10;
    document.getElementById('score').innerText = `GREEC: ${score}`;
}

function startGame() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}

function showSettings() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'block';
}

function backToMenu() {
    document.getElementById('settings-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

function exitGame() {
    alert("Exiting the game...");
    // Здесь можно добавить логику выхода из игры
}

window.onload = () => {
    // Имитация загрузки
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'flex';
    }, 2000); // Загрузка длится 2 секунды
};
