const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const dataTable = document.getElementById('dataTable');
const searchIdInput = document.getElementById('searchId');
const searchButton = document.getElementById('searchButton');
const noDataMessage = document.getElementById('noDataMessage');

// Fetch data from API and populate the table
async function fetchData() {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();
    populateTable(data);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
}

// Populate the table with data
function populateTable(data) {
    dataTable.innerHTML = '';
    data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
    `;
    dataTable.appendChild(row);
    });
}

// Search data by ID
async function searchById() {
    const id = searchIdInput.value.trim();
    if (!id) return;

    try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
        const data = await response.json();
        noDataMessage.style.display = 'none';
        populateTable([data]); // Show only the matched row
    } else {
        noDataMessage.style.display = 'block';
        dataTable.innerHTML = '';
    }
    } catch (error) {
    console.error('Error fetching data by ID:', error);
    }
}

// Event listener for search button
searchButton.addEventListener('click', searchById);

// Initialize table with all data
fetchData();