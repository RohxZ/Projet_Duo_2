//Exercice 1
function filtrerCommentairesCritiques() {
    let txt = document.getElementsByTagName("p");
    document.getElementById("critique").style.backgroundColor = "white";
    let lstHTML = "<ol>";
    console.log(txt.length);
    for (i=0;i<txt.length;i++){
        let element = txt[i].textContent;
        var_tab = parseInt(element.split(':')[0]);
        let remarque = element.split(':')[1];
        if((var_tab == 1)){
            lstHTML += "<li> Critique urgente:"+ remarque;
            // supprimer la ligne traitée
            txt[i].parentNode.removeChild(txt[i]);
        }
    }
    lstHTML += "<ol>";
    document.getElementById("critique").innerHTML = lstHTML ;
    /*item.innerHTML = "<li>Nouveau contenu</li>";
    console.log("Filtrage des commentaires critiques");*/
}

//Exercice 2 -Partie 1 et 2
function miseAJourVilles() {
  console.log("mise à jour de villes");
  var phrase = document.getElementById("villes"); // récupère phrase
  var tab = phrase.textContent.split(","); // créé tableau dans lequel les éléments sont les villes

  var first_element = tab.shift();
        console.log(tab);
        tab.push(first_element);
        console.log(tab.join(","));
        phrase.innerText = tab.join(",");
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
