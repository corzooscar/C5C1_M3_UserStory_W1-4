export function showMessage(message, color = "green") {

    const messageElement =document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = color;

}

export function validateCat(cat) {
    if (!cat.name.trim() ||!cat.breed.trim() ||!cat.image.trim()) {
        return false;
    }
    if (cat.age <= 0) {
        return false;
    }
    return true;
}