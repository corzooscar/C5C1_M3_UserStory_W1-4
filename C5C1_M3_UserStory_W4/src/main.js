import "./style.css";
import { getCats, createCat, updateCat, deleteCat } from "./services/api.js";
import { saveCats, loadCats } from "./storage/localStorage.js";
import { showMessage, validateCat } from "./utils/helpers.js";
import { createCatCard } from "./components/catCard.js";

/*====================================
          DOM REFERENCES
====================================*/
const catForm = document.getElementById("catForm");
const catsList = document.getElementById("catsList");
const syncBtn = document.getElementById("syncBtn");
const catsCounter = document.getElementById("catsCounter");
const catName = document.getElementById("catName");
const catBreed = document.getElementById("catBreed");
const catAge = document.getElementById("catAge");
const catImage = document.getElementById("catImage");

/*====================================
          GLOBAL STATE
====================================*/

let cats = [];

/*====================================
            COUNTER
====================================*/

function updateCounter() {
  catsCounter.textContent = `ᓚ₍ ^. ̫ .^₎ Total Cats: ${cats.length}`;
}

/*====================================
            RENDER
====================================*/

function renderCats() {
  catsList.innerHTML = "";
  cats.forEach(cat => {
    const card = createCatCard(cat,handleDeleteCat,handleEditCat);
    catsList.appendChild(card);
  });

  updateCounter();
}

/*====================================
          ADD NEW CAT
====================================*/

async function handleAddCat(event) {

  event.preventDefault();

  const newCat = {
    name: catName.value.trim(),
    breed: catBreed.value.trim(),
    age: Number(catAge.value),
    image: catImage.value.trim()
  };

  if (!validateCat(newCat)) {

    showMessage("Please complete all fields correctly.","red");
    return;
  }

  try {
    const createdCat =await createCat(newCat);
    cats.push(createdCat);
    saveCats(cats);
    renderCats();
    catForm.reset();

    showMessage("Cat added successfully!");

  } catch (error) {
    showMessage("Could not create cat.","red");
  }
}

/*====================================
            DELETE CAT
====================================*/

async function handleDeleteCat(id) {

  const confirmation =confirm("Are you sure you want to delete this cat?");
  if (!confirmation) return;

  try {
    await deleteCat(id);
    cats = cats.filter(cat => cat.id !== id);
    saveCats(cats);
    renderCats();
    showMessage("Cat deleted.");
  } catch (error) {
    showMessage("Could not delete cat.","red");
  }
}

/*====================================
            EDIT CAT
====================================*/

async function handleEditCat(updatedCat) {

  if (!validateCat(updatedCat)) {
    showMessage("Invalid data.","red");
    return;
  }

  try {

    const savedCat =await updateCat(updatedCat.id,updatedCat);
    cats =cats.map(cat =>cat.id === savedCat.id? savedCat: cat);
    saveCats(cats);
    renderCats();
    showMessage("Cat updated successfully.");

  } catch (error) {

    showMessage("Could not update cat.","red");
  }
}

/*====================================
            SYNC API
====================================*/

async function handleSync() {

  try {

    const apiCats =await getCats();
    cats = apiCats;
    saveCats(cats);
    renderCats();
    showMessage("API synchronized successfully.");
    console.log("GET Response:",apiCats);

  } catch (error) {
    showMessage("Could not sync API.","red");
  }
}

/*====================================
          INITIALIZATION
====================================*/

function initializeApp() {
  cats = loadCats();
  renderCats();
}
initializeApp();

/*====================================
          EVENT LISTENERS
====================================*/

catForm.addEventListener("submit",handleAddCat);

syncBtn.addEventListener("click",handleSync);

