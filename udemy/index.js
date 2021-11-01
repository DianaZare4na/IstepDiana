const app = document.querySelector(".app");


function moreBtn(){
	let btn1 = document.createElement("button");
		btn1.id = "btn1"; 
	let btn2 = document.createElement("button");
		btn2.id = "btn2";
		app.appendChild(btn1);
		app.appendChild(btn2);
	document.getElementById("btn").style.display = "none";
}


	