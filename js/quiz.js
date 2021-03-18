/*
	structure du quiz : Qst et choix et répondre
	{
		qst : "question",
		option : [
				les choix
		],
		answer : position de réponse
	},
*/
var quiz = [
				  {
					qst : "Quelle est la forme complète de Devops ?",
					option : [
					  "Développement et opérations",
					  "Numérique et opérations",
					  "Conduite et opérations",
					  "Aucune de ces réponses"
					],
					answer : 1
				  },
				  {
					qst : "Lesquels des outils suivants sont les outils populaires pour DevOps ?",
					option : [
					  "Jenkins et Monit",
					  "Nagios et ELK",
					  "Jenkins et Ansible",
					  "Tout ce qui précède"
					],
					answer : 3
				  },
				  {
					qst : "Laquelle des méthodes suivantes ne peut pas être testée par la classe de test JUnit ?",
					option : [
					  "Méthodes protégées",
					  "Méthodes privées",
					  "Méthodes publiques",
					  "Aucune de ces réponses"
					],
					answer : 3
				  },
				  {
					qst : "Quelle commande est utilisée pour supprimer un répertoire vide ?",
					option : [
					  "remove",
					  "rmdir",
					  "rdir",
					  "rm"
					],
					answer : 2
				  },
				  {
					qst : "Quelle méthode de classe Assert vérifie qu'une condition est vraie ?",
					option : [
					  "assert void (condition booléenne)",
					  "void assert (condition booléenne)",
					  "void assertTrue (condition booléenne)",
					  "void assertChecks (condition booléenne)"
					],
					answer : 0
				  }
				];

	/* pour calculer la moyenne */
	var moyenne = 0;

	/* 
		function pour generer Quiz a partir de list ( quiz )
		return html;
	*/
	function genererQuiz()
	{
		/* cette variable est pour concaténer toutes les elements */
		let html = '';
		
		/* parcourir tous la list */
		for(let i = 0;i<quiz.length;i++)
		{
			html += '<div class="item-quiz">';
			html += '<h4>' + quiz[i].qst + '</h4>';
			html += '<ul>';
			/* parcourir les 4 proposition pour chaque question*/
			for(let j = 0;j<quiz[i].option.length;j++)
			{
				html += '<li>';
				html += '<input type="radio" id="qst-' + i + '-option-' + j + '" name="qst-' + i +'" value="' + quiz[i].option[j] + '" />';
				html += '<label id="label-' + i + '-option-' + j +'">' + quiz[i].option[j] + '</label>';
				html += '</li>';
			}
			html += '</ul>';
			html += '</div>';
		}
		return html;
	}
	
	/* 
		function pour vérifier s'il y a une réponse ou une exception puis calculer la moyenne,
		avec quelques messages et couleurs pour les changements de vues.
	*/
	function checkReponse()
	{
		var nbr_reponse = 0;
		
		/* calculer le nombre de réponse */
		for(let i = 0;i<quiz.length;i++)
		{
		    for(let j = 0;j<quiz[i].option.length;j++)
			{
				var reponse = document.getElementById('qst-' + i + '-option-' + j);
				if( reponse.checked )
				{
					nbr_reponse++;
				}
			}
		}
		/* Si c'était au moins une réponse */
		if( nbr_reponse >= 1 )
		{
			/* parcourir tous la list */
			for(let i = 0;i<quiz.length;i++)
			{
				/* parcourir les 4 proposition pour chaque question*/
				for(let j = 0;j<quiz[i].option.length;j++)
				{
					var reponse = document.getElementById('qst-' + i + '-option-' + j);
					var label = document.getElementById('label-' + i + '-option-' + j);
					if( reponse.checked )
					{	
						/* si les deux valeur egeux donc incrémenter la moyenne */
						if( reponse.value === quiz[i].option[quiz[i].answer] )
						{
							moyenne++;
						}
					}
					/* afficher les réponses avec différent couleurs */
					if( reponse.value === quiz[i].option[quiz[i].answer] )
					{
						label.style.color = "green";
					} else {
						label.style.color = "red";
					}
				}
			}
			
			/* ajouter la moyenne */
			getMoy();
			
			/* désactiver le bouton */
			buttonDisabled();
		} else { /* pas de réponse */
			/* afficher message */
			getMessage();
		}
	}
	
	/* function pour désactiver le bouton */
	function buttonDisabled()
	{
		document.getElementById("valider").disabled = true;
		document.getElementById("valider").style.backgroundColor = "#949494";
		document.getElementById("valider").style.borderColor = "#949494";
	}
	
	/* function pour afficher message */
	function getMessage()
	{	
	    document.getElementById("quiz-footer").innerHTML = "<span style='color:white;'>Choisis la bonne réponse</span>";
	}
	
	/* function pour ajouter la moyenne */
	function getMoy()
	{
	    document.getElementById("quiz-footer").innerHTML = "<span>Resultat : " + moyenne + " / " + quiz.length + "</span>";
	}