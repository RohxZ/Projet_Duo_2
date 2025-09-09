//Exercice 1
function filtrerCommentairesCritiques() {
    txt = document.getElementsByTagName("p");
    lst = [];
    console.log(txt.length);
    for (i=0;i<txt.length;i++){
        element = txt[i].textContent;
        var_tab = element.split(":");
        if((var_tab[0] == 1) || (var_tab[0] == 2)){
            lst.push(var_tab[1]);
        }
    }
    /*item.innerHTML = "<li>Nouveau contenu</li>";
    console.log("Filtrage des commentaires critiques");*/
}

//Exercice 2 -Partie 1 et 2
function miseAJourVilles() {
  console.log("mise à jour de villes");
}

function demarrerDefilementVilles() {
    console.log("Défilement continu des villes");
}

//Exercice 3
function chargerDonnees() {
      console.log("Chargement d'un tableau de données");
}

//Exercice 4
//Exercice 4
let total = 0; //La somme totale des transactions générées
let nbreTotalTransactions = 0; //Nombre de transactions générées
let nbreTransactionsSupMile = 0; //Nombre de transactions dont le montant > 1000

function genererTransaction() {
    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
}

function ajouterTransaction() {
    console.log("Ajout de transaction");
}

function afficherStatistiques() {
    console.log("Affiche statistiques");
}
