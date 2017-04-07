//declaring variables first
var time,
	days,
	answer;



$(document).ready(function () {

	$("#calculate").on("click", function (e) {
		e.preventDefault();


		time = parseFloat($("#time").val());
		days = parseFloat($("#days").val());
		//call the time and days inputs with float numbers
		console.log(time, days);
		total();
		//calls total
		$("#answer").text(roundedanswer)
		//puts in number text in span


	});

	function total() {
		//place outside of function to calculate
		answer = (time * days * 4) / 480;
		roundedanswer = answer.toFixed(0);
		//use rounded answer to bring to code decimal places to 0 or 2
		console.log("total time", answer, roundedanswer);


	};
});
