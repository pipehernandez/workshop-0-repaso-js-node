class Note {
    constructor(id, description, important = false) {
        this.id = id;
        this.description = description;
        this.important = important;
    }

    toggleImportant() {
        this.important = !this.important;
    }
}

class NoteManager {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        this.renderNotes();
    }

    addNote(description) {
        const id = this.notes.length ? this.notes[this.notes.length - 1].id + 1 : 1;
        const note = new Note(id, description);
        this.notes.push(note);
        this.saveNotes();
        this.renderNotes();
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.renderNotes();
    }

    toggleNoteImportant(id) {
        const note = this.notes.find((note) => note.id === id);
        if (note) {
            note.toggleImportant();
            this.saveNotes();
            this.renderNotes();
        }
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    updateNote(id, newName){
        const noteToUpdate = this.notes.find(note => note.id === id);
        noteToUpdate.name = newName;
        this.saveNotes();
        this.renderNotes();
    }

    renderNotes() {
        const noteList = document.getElementById('note-list');
        noteList.innerHTML = '';
        this.notes.forEach((note) => {
            const item = document.createElement('LI');
            item.textContent = `Nota ${note.id}: ${note.description}. Importante: ${note.important} `;
            item.className = note.important ? 'important' : '';
            // item.addEventListener('click', () => this.toggleNoteImportant(note.id));

            const $deleteButton = document.createElement('BUTTON');
            $deleteButton.textContent = 'Eliminar';
            $deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que el evento se propague al elemento padre, ¿Por qué? Porque el evento click en el botón también se propaga al elemento li.
                this.deleteNote(note.id);
            });

            const completedButton = document.createElement("BUTTON");
            completedButton.textContent = "Cambiar Importancia";
            completedButton.addEventListener("click", (e) => {
              e.stopPropagation();
              this.toggleNoteImportant(note.id);
            });

            const editBtn = document.createElement("BUTTON");
            editBtn.textContent = "Editar";
            editBtn.addEventListener("click", (e) => {
              e.stopPropagation();
              const newName = prompt("Ingresa nuevo nombre");
              while(!newName){
                alert("Ingresa nombre valido")
              }
              this.updateNote(note.id, newName);
              this.renderNotes();
            });

            item.append(editBtn, completedButton, $deleteButton);
            noteList.appendChild(item);

        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const noteManager = new NoteManager();

    document.getElementById('add-note').addEventListener('click', () => {
        const newNote = document.getElementById('new-note').value;
        if (newNote) {
            noteManager.addNote(newNote);
            document.getElementById('new-note').value = "";
        }
    });
});
