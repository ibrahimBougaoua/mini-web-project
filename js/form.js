function validationLogin()
{
	var labelUsername = document.getElementById("label_username");
	var username = document.getElementById("username");
	var labelPassword = document.getElementById("label_password");
	var password = document.getElementById("password");
	
	if(username.value === "")
		labelUsername.style.color = "red";
	else if(username.value.length < 5)
		alert("username : Le nombre de caractères doit être supérieur à 5");
	
	if(password.value === "")
		labelPassword.style.color = "red";
	else if(password.value.length < 5)
		alert("password : Le nombre de caractères doit être supérieur à 5");
	
	if(username.value === "" || password.value === "")
		return false;
	
}

function validationSignup()
{
	var labelNom = document.getElementById("label_nom");
	var nom = document.getElementById("nom");
	var labelPrenom = document.getElementById("label_prenom");
	var prenom = document.getElementById("prenom");
	var labelEmail = document.getElementById("label_email");
	var email = document.getElementById("email");
	var labelSexe = document.getElementById("label_sexe");
	var sexeSelect = document.getElementById("sexe");
	var sexe = sexeSelect.options[sexeSelect.selectedIndex];
	var labelTelephone = document.getElementById("label_telephone");
	var telephone = document.getElementById("telephone");
	var labelPassword = document.getElementById("label_password");
	var password = document.getElementById("password");
	
	if(nom.value === "")
		labelNom.style.color = "red";
	else if(nom.value.length < 5)
		alert("nom : Le nombre de caractères doit être supérieur à 5");
	
	if(prenom.value === "")
		labelPrenom.style.color = "red";
	else if(prenom.value.length < 5)
		alert("prenom : Le nombre de caractères doit être supérieur à 5");
	
	if(email.value === "")
		labelEmail.style.color = "red";
	else if(email.value.length < 5)
		alert("email : Le nombre de caractères doit être supérieur à 5");
	
	if(sexe.value === "")
		labelSexe.style.color = "red";
	else if(sexe.value.length < 3)
		alert("sexe : Le nombre de caractères doit être supérieur à 5");
	
	if(telephone.value === "")
		labelTelephone.style.color = "red";
	else if(telephone.value.length < 5)
		alert("telephone : Le nombre de caractères doit être supérieur à 5");
	
	if(password.value === "")
		labelPassword.style.color = "red";
	else if(password.value.length < 5)
		alert("password : Le nombre de caractères doit être supérieur à 5");
	
	if(	nom.value 		=== "" ||
		prenom.value	=== "" ||
		email.value 	=== "" ||
		sexe.value 		=== "" ||
		telephone.value === "" ||
	    password.value  === ""
	)
		return false;
}


function validationContact()
{
	var label_email = document.getElementById("label_email");
	var email = document.getElementById("email");
	var label_subject = document.getElementById("label_subject");
	var subject = document.getElementById("subject");
	var label_message = document.getElementById("label_message");
	var message = document.getElementById("message");
	
	if(email.value === "")
		label_email.style.color = "red";
	else if(email.value.length < 5)
		alert("email : Le nombre de caractères doit être supérieur à 5");
	
	if(subject.value === "")
		label_subject.style.color = "red";
	else if(subject.value.length < 5)
		alert("subject : Le nombre de caractères doit être supérieur à 5");
	
	if(message.value === "")
		label_message.style.color = "red";
	else if(message.value.length < 15)
		alert("message : Le nombre de caractères doit être supérieur à 15");
	
	if(email.value === "" || subject.value === "" || message.value === "")
		return false;
	
}