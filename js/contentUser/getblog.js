let getallblog = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog";

export default function getblogUser() {
    const searchParams = new URLSearchParams(window.location.search);

    // Fetch GET request
    return fetch(getallblog, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(dataArray => {

        // Display news
        displayNews(dataArray);

        return dataArray; // Return the data for use if needed
    })
    .catch(error => console.error('Error fetching data:', error));
        
}

function displayNews(dataArray) {
    // Reference to the post container
    const postContainer = document.getElementById('mainBlog');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
        // Create a new div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Set the HTML content for the post
        postDiv.innerHTML = `
        <h2 class="my-5 text-lg">${data.title}</h2>
        <p>${data.judul}</p>
        `;

        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}
