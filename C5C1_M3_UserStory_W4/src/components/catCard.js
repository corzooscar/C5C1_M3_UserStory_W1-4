export function createCatCard(
    cat,
    onDelete,
    onEdit
) {

    const li = document.createElement("li");
    li.className ="bg-amber-50/90 border-2 border-lime-950 rounded-xl p-4 flex flex-col gap-3";

    /* ==========================
            CAT IMAGE
    ========================== */

    const image = document.createElement("img");
    image.src = cat.image;
    image.alt = cat.name;
    image.className ="w-full h-70 object-cover rounded-lg";

    /* ==========================
            CAT NAME
    ========================== */

    const name = document.createElement("h3");
    name.textContent = cat.name;
    name.className ="text-2xl font-bold text-center";

    /* ==========================
            CAT BREED
    ========================== */

    const breed = document.createElement("p");
    breed.textContent = `Breed: ${cat.breed}`;
    breed.className = "font-bold text-yellow-950"

    /* ==========================
            CAT AGE
    ========================== */

    const age = document.createElement("p");
    age.textContent = `Age: ${cat.age}`;
    age.className = "font-bold text-yellow-950"

    /* ==========================
            BUTTON CONTAINER
    ========================== */

    const buttonContainer =document.createElement("div");

    buttonContainer.className ="flex gap-2";

    /* ==========================
            EDIT BUTTON
    ========================== */

    const editBtn =document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className ="flex-1 bg-blue-900 text-white rounded py-2 hover:bg-blue-700 cursor-pointer";

    /* ==========================
            DELETE BUTTON
    ========================== */

    const deleteBtn =document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className ="flex-1 bg-red-900 text-white rounded py-2 hover:bg-red-700 cursor-pointer";

    deleteBtn.addEventListener("click",() => onDelete(cat.id));

    editBtn.addEventListener( "click",() => showEditForm());

    buttonContainer.append(editBtn,deleteBtn);

    li.append(
        image,
        name,
        breed,
        age,
        buttonContainer
    );

    return li;

    /* ==========================
            EDIT FORM
    ========================== */

    function showEditForm() {

        li.innerHTML = "";

        const nameInput =document.createElement("input");
        nameInput.value = cat.name;

        const breedInput =document.createElement("input");
        breedInput.value = cat.breed;

        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.value = cat.age;

        const imageInput =document.createElement("input");
        imageInput.value = cat.image;

        const saveBtn =document.createElement("button");
        saveBtn.textContent = "Save";

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";

        const inputs = [
            nameInput,
            breedInput,
            ageInput,
            imageInput
        ];

        inputs.forEach(input => { input.className ="border rounded px-2 py-2";});

        saveBtn.className ="bg-green-800 text-white rounded py-2 cursor-pointer";

        cancelBtn.className ="bg-gray-700 text-white rounded py-2 cursor-pointer";

        saveBtn.addEventListener("click",() => {

                const updatedCat = {
                    ...cat,
                    name: nameInput.value,
                    breed: breedInput.value,
                    age: Number(ageInput.value),
                    image: imageInput.value
                };

                onEdit(updatedCat);
            }
        );

        cancelBtn.addEventListener( "click",() => {location.reload();});

        li.append(
            nameInput,
            breedInput,
            ageInput,
            imageInput,
            saveBtn,
            cancelBtn
        );

    }

}