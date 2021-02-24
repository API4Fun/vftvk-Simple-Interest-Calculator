	//get and set date
	var date = new Date();
	var yearNow = date.getFullYear();

function compute() {
	//set simple variables for calculation
	var p = principal.value; //principal
	var r = sliderRange.value; //rate
	var t = yearsValue.value; //time
	//create date in future
	var future = Number(yearNow) + Number(yearsValue.value);
	//set msgs to blank
	var msg = '';
	var msg1 = '';
	var msg2 = '';
	var msg3 = '';	
	//validate principal amount is greater than zero
	if(p<1){
		alert("Enter a positive number");
		principal.focus();
		return false;
	}
	//if(rangeslider.value<5){
	//	alert("Try again on the rate");
	//	rangeslider.focus();
	//	return false;
	//}
	//if (years.value<5){
	//	alert("Keep it up buddy");
	//	years.focus();
	//	}
	
	//create calculation
	var interest = p * r * t / 100;
	//create messages for display
	var msg = 'If you deposit ' + "<span class='highlight'>" + p + "</span>" + ',';
	var msg1 = 'at an interest rate of ' + "<span class='highlight'>" + r + '%' + "</span>" + '.';
	var msg2 = 'You will receive an amount of ' + "<span class='highlight'>" + interest + "</span>" + ',';
	var msg3 = 'in the year ' + "<span class='highlight'>" + future + "</span>"
	//variable linkage to index.html page at bottom.  Used for clear functional demonstration.
	banner1.innerHTML = msg 
	banner2.innerHTML = msg1
	banner3.innerHTML = msg2
	banner4.innerHTML = msg3
}

