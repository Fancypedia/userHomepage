import getblogUser from "./contentUser/getblog.js";



const previewContentElement = document.getElementById('mainBlog');
if (previewContentElement) {
    getblogUser();
} else {
    console.log("Element with ID 'mainBlog' not found. getblogUser not executed.");
}
