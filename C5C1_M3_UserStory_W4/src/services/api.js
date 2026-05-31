const API_URL = "http://localhost:3000/cats";

export async function getCats() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {throw new Error("Could not fetch cats");}
        return await response.json();

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createCat(cat) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cat)
        });

        return await response.json();

    } catch (error) {
        console.error(error);
        throw error;

    }
}

export async function updateCat(id, updatedCat) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedCat)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteCat(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}