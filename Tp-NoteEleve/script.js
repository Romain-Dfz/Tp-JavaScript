// Tableaux pour stocker les élèves, les matières et les notes
let eleves = [];
let matieres = [];
let notes = [];

// Fonction pour ajouter un élève
document.getElementById('ajouterEleve').addEventListener('click', function () {
    const nomEleve = document.getElementById('nomEleve').value;
    eleves.push(nomEleve);
    refreshSelects();
    document.getElementById('nomEleve').value = '';
});

// Fonction pour ajouter une matière
document.getElementById('ajouterMatiere').addEventListener('click', function () {
    const nomMatiere = document.getElementById('nomMatiere').value;
    matieres.push(nomMatiere);
    refreshSelects();
    document.getElementById('nomMatiere').value = '';
});

// Fonction pour ajouter une note
document.getElementById('ajouterNote').addEventListener('click', function () {
    const eleveIndex = document.getElementById('selectEleve').selectedIndex;
    const matiereIndex = document.getElementById('selectMatiere').selectedIndex;
    const note = document.getElementById('note').value;

    if (eleveIndex !== -1 && matiereIndex !== -1 && note !== '') {
        notes.push({
            eleve: eleves[eleveIndex],
            matiere: matieres[matiereIndex],
            note: note
        });
        refreshTable();
        document.getElementById('note').value = '';
    }
});

// Fonction pour rafraîchir les sélecteurs
function refreshSelects() {
    const selectEleve = document.getElementById('selectEleve');
    const selectMatiere = document.getElementById('selectMatiere');

    selectEleve.innerHTML = '';
    selectMatiere.innerHTML = '';

    eleves.forEach(function (eleve) {
        const option = document.createElement('option');
        option.textContent = eleve;
        selectEleve.appendChild(option);
    });

    matieres.forEach(function (matiere) {
        const option = document.createElement('option');
        option.textContent = matiere;
        selectMatiere.appendChild(option);
    });
}

// Fonction pour rafraîchir le tableau de détails
function refreshTable() {
    const detailsTable = document.getElementById('detailsTable');
    detailsTable.innerHTML = '';

    notes.forEach(function (note) {
        const row = document.createElement('tr');
        const nomEleve = document.createElement('td');
        nomEleve.textContent = note.eleve;
        // Ajoutez ici le prénom de l'élève (si nécessaire)
        const nomMatiere = document.createElement('td');
        nomMatiere.textContent = note.matiere;
        const noteTd = document.createElement('td');
        noteTd.textContent = note.note;

        row.appendChild(nomEleve);
        row.appendChild(nomMatiere);
        row.appendChild(noteTd);
        detailsTable.appendChild(row);
    });
}