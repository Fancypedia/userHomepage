// import { APIAmbilDataBerita } from "./rahasia.js"
let getallblog = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog";

export default function getBlog() {
    // Fetch GET request
    return fetch(getallblog, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(dataArray => {

        // Display news
        displayNews(dataArray, categoryParam);
        
        // Save data to sessionStorage
        sessionStorage.setItem('cachedNewsData', JSON.stringify(dataArray));

        return dataArray; // Return the data for use if needed
    })
    .catch(error => console.error('Error fetching data:', error));
        
}
function displayNews(dataArray, categoryParam) {
    // Reference to the post container
    const postContainer = document.getElementById('main-Blog');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
        // Check if the category matches the query parameter
        if (categoryParam === null || data.kategori === categoryParam) {
            // Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Set the HTML content for the post
            postDiv.innerHTML = `
            <img src=${data.content_one} alt="" class=" w-100">
            <h2 class="my-5 text-lg">${data.content_two}</h2>
            <p>${data.description}</p>
            `;
            // Append the post div to the post container
            postContainer.appendChild(postDiv);
        }
    });
}