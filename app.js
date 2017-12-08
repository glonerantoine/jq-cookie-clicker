$(document).ready(function(){
	//votre code 

var value_cookie = 0 ;
var message = [ 
	"azzerty",
	"qsdfg",
	"wxcvb"
];



	
$(".cake-is-a-lie").click(function(){

	value_cookie ++;

	$(".counter").html(value_cookie);

	if  (value_cookie %5 === 0){
	
		alert ('Mange le cookie' + message [Math.floor(Math.random() *3)]);
	}
	
	



   });
});
/* Réalisez un petit jeu nommé cookie clicker, 
le but étant de détecter les click sur le cookie et d'incrémenter le contenu de la div #count avec le compte total !
Votre code ira dans le fichier app.js
Pour commencer, dans le dossier faites npm install pour récupèrer les dépendaneces.
N'oubliez pas de lancer caddy dans le dossier. */


/* Bonus

    Tous les 20 click, demandez à l'utilisateur de trouver une activité plus productive via un alert
    Un message différent tous les 20 clicks
    Un message aléatoire parmi une liste de messages
*/