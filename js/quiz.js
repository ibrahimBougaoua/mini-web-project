var quiz = [
			{
				question : "1",
				options : ["a","b","c"],
				answer : "c"
			},
			{
				question : "2",
				options : ["a","b","c"],
				answer : "c"
			},
			{
				question : "3",
				options : ["a","b","c"],
				answer : "c"
			},
			{
				question : "4",
				options : ["a","b","c"],
				answer : "c"
			},
			{
				question : "5",
				options : ["a","b","c"],
				answer : "c"
			}
];

function DisplayQuiz()
{
    var list = "<ul>";
	for (var i = 0; i < quiz.length; i++) {
		list += "<li>";
		list += "<section class='quiz-item'>";
		list += "<p>" + quiz[i].question + "</p>";
		list += "<div class='quiz-select'>";
		for (var j = 0; j < quiz[i].options.length; j++) {
			list += "<div class='quiz-option'>";
			list += "<input type='radio' name='a' value='0' />";
			list += "<label>" + quiz[i].options[j] + "</label>";
			list += "</div>";
		}
		list += "</div>";
		list += "</section>";
		list += "</li>";
    }
	list += "</ul>";
	document.getElementById("quiz").innerHTML = list;
}

DisplayQuiz();