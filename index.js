const characterForm = document.getElementById('characterForm');
const nameInput = document.getElementById('name');
const comicsSelect = document.getElementById('comics');
const favouriteCheckbox = document.getElementById('favourite');
const characterTable = document.getElementById('characterTable').getElementsByTagName('tbody')[0];

characterForm.addEventListener('submit', addCharacter);

function addCharacter(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const comics = comicsSelect.value;
    const isFavourite = favouriteCheckbox.checked;

    if (!name) {
        return;
    }

    const newRow = characterTable.insertRow(characterTable.rows.length);
    newRow.innerHTML = `
        <td>${name}</td>
        <td>Surname</td>
        <td>${comics}</td>
        <td>${isFavourite ? 'Yes' : 'No'}</td>
        <td><button onclick="deleteCharacter(this)">Delete</button></td>
    `;

    clearForm();
}

function clearForm() {
    nameInput.value = '';
    comicsSelect.value = 'DC';
    favouriteCheckbox.checked = false;
}

function deleteCharacter(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
