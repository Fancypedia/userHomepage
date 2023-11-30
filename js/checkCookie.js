import { getCookie } from "./cookies.js";

export default function checkCookie() {
    let password = getCookie("password");
	if (password != "") {
	alert("Welcome");
	} else {
		alert("Biasakan Login Dulu Ya Bang!")

		// ATTENTION : Ini dinyalakan dan body onload check cookies 
		// window.location.href="https://fancypedia.my.id/theme/signin/";

		window.location.href="../pages/signin.html";
	}
}