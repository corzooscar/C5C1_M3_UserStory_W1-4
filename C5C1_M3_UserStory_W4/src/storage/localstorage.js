const STORAGE_KEY = "cats";

export function saveCats(cats) {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(cats));
}

export function loadCats() {const cats = localStorage.getItem(STORAGE_KEY);
    return cats? JSON.parse(cats): [];
}