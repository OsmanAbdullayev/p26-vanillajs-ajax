// $(document).ready(function () {
//     $(document).bind('keypress', function(e) {
//         if(e.keyCode==13){
//              $('#button').trigger('click');
//          }
//     });

// 	$("#button").click(function () {
// 		let inputValue = $("#search").val();
// 		$("#textOutput").load(`./assets/data/${inputValue.toLowerCase()}.txt`, function (response, status, xhr) {
// 			if (status == "error") {
// 				var msg = "There was no match in our database. Please, make sure you typed the name of the country correctly.";
// 				alert(msg);
// 			} else {
// 				$("h1").html(`This is what we found about ${inputValue.toUpperCase()}:`);
//                 $("#search").val("");
// 			}
// 		});
// 	});
// });

document.querySelector("#button").onclick = function () {
	const input = document.querySelector("#search").value;
	const ajaxmethod = new XMLHttpRequest();
	ajaxmethod.onload = function () {
		if (this.status === 404) {
			var msg = "There was no match in our database. Please, make sure you typed the name of the country correctly.";
			alert(msg);
		} else {
			document.querySelector("#h1").innerHTML = `This is what we found about ${input.toUpperCase()}`;
			document.querySelector("#textOutput").innerHTML = this.responseText;
			document.querySelector("#search").value = "";
		}
	};
	ajaxmethod.open("GET", `./assets/data/${input}.txt`);
	ajaxmethod.send();
};

// Execute a function when the user presses a key on the keyboard
document.querySelector("#search").addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		document.querySelector("#button").click();
	}
});
