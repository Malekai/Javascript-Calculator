var num = "";
var result = "";
displayOp();

//click listeners
$('#one').click(function(){
	num += "1";
	displayOp();
});
$('#two').click(function(){
	num += "2";
	displayOp();
});
$('#three').click(function(){
	num += "3";
	displayOp();
});
$('#four').click(function(){
	num += "4";
	displayOp();
});
$('#five').click(function(){
	num += "5";
	displayOp();
});
$('#six').click(function(){
	num += "6";
	displayOp();
});
$('#seven').click(function(){
	num += "7";
	displayOp();
});
$('#eight').click(function(){
	num += "8";
	displayOp();
});
$('#nine').click(function(){
	num += "9";
	displayOp();
});
$('#AC').click(function(){
	num = "";
	displayOp();
});
$('#decimal').click(function(){
	num += ".";
	displayOp();
});
$('#zero').click(function(){
	num += "0";
	displayOp();
});
$('#plus').click(function(){
	num += " + ";
	displayOp();
});
$('#minus').click(function(){
	num += " - ";
	displayOp();
});
$('#asterisk').click(function(){
	num += " * ";
	displayOp();
});
$('#divide').click(function(){
	num += " / ";
	displayOp();
});
$('#percent').click(function(){
	num = eval(num)/100;
	displayOp();
});
$('#posNeg').click(function(){
	if (num) {
		num = eval(num) * -1;
	}
	displayOp();
})
$('#equals').click(function(){
	result = eval(num);
	$('#display').html(result);
	//displayResult();
});

function displayOp() {
	$('#display').html(num);
}



