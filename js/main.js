import getBlog from "./contentUser/getblog.js";
import getCatalog from "./contentUser/getcatalog.js";


const previewBlog = document.getElementById('main-Blog');
if (previewBlog) {
    getBlog();
} else {
    console.log("Element with ID 'main-Blog' not found. getBlog not executed.");
}

const previewCatalog = document.getElementById('mainCatalog');
if (previewCatalog) {
    getCatalog();
} else {
    console.log("Element with ID 'mainCatalog' not found. getCatalog not executed.");
}
