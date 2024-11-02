document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#startGame button').addEventListener('click', function() {
        document.querySelector('#startGame').classList.add('d-none');
        document.querySelector('#GamePage').classList.remove('d-none');
    });
    
    document.querySelector('#GamePage button').addEventListener('click', function() {
        document.querySelector('#GamePage span').innerText = '0'
    });
    
    document.querySelectorAll('#GameChoix img').forEach(element => {
        element.addEventListener('click', function() {
            Jeu(this.getAttribute('data-choix'))
        });
    });
})

// Tableau des gagnant et egalite
const Tableau = {
    gagne: [103, 201, 302],
    egalite: [101, 202, 303],
    perdant: [102, 203, 301]
};

const choixOrdinateur = [
    100,200,300
]

function Jeu(choix) {
    choix = parseInt(choix, 10);
    console.log(choix)
    const totalAddition = getChoixOrdinateur() + choix
    console.log(totalAddition)
    let gagnant = getGagnant(totalAddition);
    if (gagnant === true) {
        console.log("Vous avez gagné !");
    } else if (gagnant === false) {
        console.log("Vous avez perdu.");
    } else if (gagnant === null) {
        console.log("Égalité !");
    } else {
        console.log("Résultat inconnu.");
    }
}

function getChoixOrdinateur() {
    const randomindex = Math.floor(Math.random() * choixOrdinateur.length)
    return choixOrdinateur[randomindex]
}

function getGagnant(choix) {
    if (Tableau.gagne.includes(choix)) {
        return true;
    } else if (Tableau.perdant.includes(choix)) {
        return false;
    } else if (Tableau.egalite.includes(choix)) {
        return null;
    } else {
        console.log("Le choix ne correspond à aucun résultat connu.");
        return undefined;
    }
}