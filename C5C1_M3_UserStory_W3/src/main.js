import './style.css'

/*======================================
    TASK 3: Add notes to DOM while 
    validating that everything is ok
========================================*/

const input = document.getElementById("inputNote");
const form = document.getElementById("notesForm");
const notesList = document.getElementById("notesList");
let list = [];

// Evento 'submit' del form que guarda una nueva nota en la lista (notesList)
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (input.value.trim() === "") {
        return alert("Please enter at least 1 character before trying to add the note (ㆆ_ㆆ)");

    } else {
        const li = document.createElement("li");
        li.className = `flex items-center justify-between w-165 px-4 gap-4`;
        li.innerHTML = `<p class="text-yellow-900 text-xl italic font-bold">~ ${input.value.trim()}</p>
        <button class="h-10 p-2 bg-lime-950 rounded hover:bg-lime-700 hover:text-zinc200 cursor-pointer text-amber-50 font-semibold" class="btnDel">Delete</button>
        `;
        notesList.appendChild(li);

        
        const newNote = input.value.trim();
        list.push(newNote);
        console.log(list);
        input.value ="";
        input.focus();
        saveNotes();
    }    
})

// Evento 'Click' del botón que borra una nota de la lista (notesList)
window.addEventListener('click', (e) => {
    const button = document.getElementById("btnDel");
    console.log(button)
    saveNotes();
})


// Funcion para guardar en localStorage

function saveNotes() {
    localStorage.setItem('Notes', JSON.stringify(list));
}

// Variable que guarda info extraida de locaStorage
const allNotes = JSON.parse(localStorage.getItem(Notes))
