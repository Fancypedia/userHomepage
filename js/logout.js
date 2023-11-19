import { deleteCookie } from "https://Fancypedia.github.io/js/cookies.js";

export default function Logout() {
    deleteCookie();
    window.location.href = "https://fancypedia.my.id/";
}