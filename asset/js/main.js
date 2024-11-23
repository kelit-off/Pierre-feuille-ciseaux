document.addEventListener('DOMContentLoaded', function () {
    // Bouton pour commencer le jeu
    document.querySelector('#startGame button').addEventListener('click', function () {
        document.querySelector('#startGame').classList.add('d-none');
        document.querySelector('#GamePage').classList.remove('d-none');
    });

    // Bouton pour réinitialiser le jeu
    document.querySelector('#resetBtn').addEventListener('click', function () {
        resetGame();
    });

    // Ajout des événements sur les choix du joueur
    document.querySelectorAll('#GameChoix img').forEach(element => {
        element.addEventListener('click', function () {
            const playerChoice = parseInt(this.getAttribute('data-choix'), 10);
            playRound(playerChoice);
        });
    });
});

// Tableau pour vérifier les résultats
const Tableau = {
    gagne: [103, 201, 302],
    egalite: [101, 202, 303],
    perdant: [102, 203, 301]
};

// Choix de l'ordinateur
const choixOrdinateur = [100, 200, 300];

// Fonction pour jouer un tour
function playRound(playerChoice) {
    const computerChoice = getChoixOrdinateur();
    const total = computerChoice + playerChoice;

    // Déterminer le gagnant
    const resultat = getGagnant(total);

    // Afficher le résultat et actualiser les scores
    renderResult(playerChoice, computerChoice, resultat);
}

// Générer un choix aléatoire pour l'ordinateur
function getChoixOrdinateur() {
    const randomIndex = Math.floor(Math.random() * choixOrdinateur.length);
    return choixOrdinateur[randomIndex];
}

// Déterminer le gagnant
function getGagnant(total) {
    if (Tableau.gagne.includes(total)) {
        return 'gagne';
    } else if (Tableau.perdant.includes(total)) {
        return 'perd';
    } else if (Tableau.egalite.includes(total)) {
        return 'egalite';
    }
    return null;
}

// Afficher le résultat et mettre à jour les scores
function renderResult(playerChoice, computerChoice, resultat) {
    // Afficher les choix
    document.querySelector('#playerChoice').innerText = getNomChoix(playerChoice);
    document.querySelector('#computerChoice').innerText = getNomChoix(computerChoice);

    const resultElement = document.querySelector('#gameResult');
    const scoreJoueur = document.querySelector('#scoreJoueur');
    const scoreOrdinateur = document.querySelector('#scoreOrdinateur');

    if (resultat === 'gagne') {
        resultElement.innerText = 'Vous avez gagné ! 🎉';
        scoreJoueur.innerText = parseInt(scoreJoueur.innerText, 10) + 1;
    } else if (resultat === 'perd') {
        resultElement.innerText = 'Vous avez perdu... 😢';
        scoreOrdinateur.innerText = parseInt(scoreOrdinateur.innerText, 10) + 1;
    } else if (resultat === 'egalite') {
        resultElement.innerText = 'Égalité !';
    }
}

// Récupérer le nom du choix pour l'affichage
function getNomChoix(choix) {
    switch (choix) {
        case 1:
        case 100:
            return 'Pierre';
        case 2:
        case 200:
            return 'Feuille';
        case 3:
        case 300:
            return 'Ciseaux';
        default:
            return '';
    }
}

// Réinitialiser le jeu
function resetGame() {
    document.querySelector('#scoreJoueur').innerText = '0';
    document.querySelector('#scoreOrdinateur').innerText = '0';
    document.querySelector('#playerChoice').innerText = '';
    document.querySelector('#computerChoice').innerText = '';
    document.querySelector('#gameResult').innerText = '';
}