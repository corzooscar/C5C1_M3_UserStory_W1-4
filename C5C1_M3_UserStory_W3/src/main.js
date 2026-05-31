import './style.css'

/*======================================
    TASK 3: Add notes to DOM while 
    validating that everything is ok
========================================*/
// Retrieve DOM elements used throughout the application
const input = document.getElementById("inputNote");
const form = document.getElementById("notesForm");
const notesList = document.getElementById("notesList");

// Load saved notes from Local Storage.
// If no notes exist, initialize an empty array.
let list = JSON.parse(localStorage.getItem('Notes')) || [];

/*======================================
    APPLICATION INITIALIZATION
========================================*/
// Render all saved notes once the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderNotelist();
});

/*======================================
    RENDER NOTES TO THE DOM
========================================*/
// Clears the current list and recreates every note
// stored in memory (list array).
function renderNotelist() {

    // Prevent duplicate elements when re-rendering
    notesList.innerHTML = "";

    // Display startup information in the console
    console.log(`[START]: Successfully loaded and rendered ${list.length} notes from Local Storage! ( •̀ ω •́ )y`);
    console.table(list);

    // Generate the DOM structure for each saved note
    list.forEach(note => {
        const li = document.createElement("li");

        li.className ="flex items-center justify-between w-165 px-4 gap-4";
        li.innerHTML = `<p class="text-yellow-900 text-xl italic font-bold">~ ${note.text}</p>`;
        notesList.appendChild(li);

        // Create the delete button and associate it
        // with the note ID using a custom data attribute
        const delButton = document.createElement("button");

        delButton.setAttribute("data-delete", note.id);
        delButton.className = "h-10 p-2 bg-lime-950 rounded hover:bg-lime-700 hover:text-zinc200 cursor-pointer text-amber-50 font-semibold btnDel";
        delButton.textContent = "Delete";
        li.appendChild(delButton);
    });
}

/*======================================
    ADD NEW NOTE
========================================*/
// Handle form submission and create a new note
form.addEventListener('submit', function (e) {

     // Prevent page refresh
    e.preventDefault();
    const text = input.value.trim();

    // Basic validation to avoid empty notes
    if (!text) {
        return alert("~ Please enter at least 1 character before trying to add the note (ㆆ_ㆆ)");
    } else {

        // Create a new note object with a unique ID
        const newNote = {
            id: Date.now().toString(),
            text: text
        };

        // Add note to memory
        list.push(newNote);
        console.info("[NEW]: A new note was added succesfully! O(∩_∩)O");
        
        // Reset the input field for the next note
        input.value = "";
        input.focus();
        
         // Persist changes and refresh UI
        saveNotes();
        renderNotelist();
    }
})


/*======================================
    DELETE NOTE
========================================*/
// Event delegation:
// Listen for clicks inside the list and determine
// whether a delete button was pressed.
notesList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btnDel")) return;
    const li = e.target.parentElement;

    // Confirm if the user wants to actually delete the note
    const noteText = li.querySelector("p").textContent;
    const confirmation = confirm(`Delete this note permanently? o(TヘTo)\n${noteText}`);
    if (!confirmation) return;

    // Remove note element from the DOM
    notesList.removeChild(li);

    // Retrieve the note ID from the custom data attribute
    const id = e.target.dataset.delete;

    // Remove the corresponding note from memory
    list = list.filter(note => note.id !== id);

    // Persist updated data
    saveNotes();
    console.warn("[DEL]: The selected note was deleted successfully! ᕦ(ò_óˇ)ᕤ");
});


/*======================================
    LOCAL STORAGE
========================================*/
// Save the current notes array to Local Storage
function saveNotes() {
    localStorage.setItem('Notes', JSON.stringify(list));
}