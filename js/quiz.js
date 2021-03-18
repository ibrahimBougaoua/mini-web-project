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

	var moyenne = 0;

	function genererQuiz()
	{
		let html = '';
		for(let i = 0;i<quiz.length;i++)
		{
			html += '<div class="item-quiz">';
			html += '<h4>' + quiz[i].qst + '</h4>';
			html += '<ul>';
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
	
	function checkReponse()
	{
		var nbr_reponse = 0;
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
		if( nbr_reponse >= 1 )
		{
		for(let i = 0;i<quiz.length;i++)
		{
			for(let j = 0;j<quiz[i].option.length;j++)
			{
			    var reponse = document.getElementById('qst-' + i + '-option-' + j);
				var label = document.getElementById('label-' + i + '-option-' + j);
				if( reponse.checked )
				{	
					if( reponse.value === quiz[i].option[quiz[i].answer] )
					{
						moyenne++;
					}
				}
				if( reponse.value === quiz[i].option[quiz[i].answer] )
				{
					label.style.color = "green";
				} else {
					label.style.color = "red";
				}
			}
		}
		
		getMoy();
		buttonDisabled();
		
		} else {
			getMessage();
		}
	}
	
	function buttonDisabled()
	{
		document.getElementById("valider").disabled = true;
		document.getElementById("valider").style.backgroundColor = "#949494";
		document.getElementById("valider").style.borderColor = "#949494";
	}
	
	function getMessage()
	{	
	    document.getElementById("quiz-footer").innerHTML = "<span style='color:white;'>Choisis la bonne réponse</span>";
	}
	
	function getMoy()
	{
	    document.getElementById("quiz-footer").innerHTML = "<span>Resultat : " + moyenne + " / " + quiz.length + "</span>";
	}