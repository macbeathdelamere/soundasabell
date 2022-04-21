function contactSubmit(){
	console.log("check");	
	var iSelection = document.getElementById('instrumentSelection').value;
	var lSelection = document.getElementById('levelSelection').value;
	
if(iSelection !="--Select--" ||lSelection !="--Select--"){
		alert("Query received and we will contact you within 24 hours");
}	
	
if(iSelection ==="--Select--"){
	alert("Please select an instrument");
	return false;

}
return true;

if(lSelection ==="--Select--"){
	alert("Please select an Level of Experience");
	return false;

}
return true;
	alert("Query received and we will contact you within 24 hours");
	
}