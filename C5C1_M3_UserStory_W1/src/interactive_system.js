import './style.css'

/*====================================================
        EXTRA: Just a small countdown of 15 secs 
            so the user can read the HTML info
======================================================*/
const countdown = document.getElementById("countdown");
let seconds = 15;
const timer = setInterval(() => {
    seconds--;
    countdown.textContent = `The code will execute itself in: ${seconds} seconds!`;

    if (seconds <= 0) {
        clearInterval(timer);
        countdown.textContent = 'The code will execute itself now!'
    }
}, 1000);
/*====================================================
    TASK 2: User data inputs   
======================================================*/
// ──────── Alerts and Prompts that will load after 15 seconds.
setTimeout(()=> {
    alert("Hallooooo, welcome to Oczo's attempt for W1US ╰(*°▽°*)╯")
    //          The variable "name" gets defined and prompted inmediately using the function "getInfo"
    const name = getInfo("Enter your name please（￣︶￣）↗")
    // ──────── The variable "age" gets defined and prompted inmediately using the function "getInfo"
    const age = getInfo("Thank you, now enter your age please (●'◡'●)", "number")

    /*====================================================
    TASK 4: Conditionals and Dynamic Messages   
    ======================================================*/
    //──────── Some conditionals that will show certain messages according to the data provided
    if (age === null || name === null) {
        console.log(`Hello? since you didn't provide any data i cannot help you... ( ﾟдﾟ)つ Bye`);
        
    } else if (age >= 18) {
        console.log(`Helloo ${name}! you are an adult. Get prepared for big opportunities in programming world o(≧口≦)o`);

    } else if (age < 18) {
        console.log(`Helloooo ${name}! you are a minor. Keep learning and enjoying code! (ง •_•)ง`);
    }

},16000 )

/*====================================================
    TASK 3: Data Validation   
======================================================*/

// ──── Reusable input function for JS, i had the same in python so i just adapted it
/**
 * Prompts the user for input and validates it based on the expected type.
 *
 * @param {string} promptMsg - The message displayed to the user in the prompt.
 * @param {string} [type="string"] - The expected data type: "string" or "number".
 *
 * @returns {string|number|null} The validated value entered by the user,
 *                               or null if the user pressed "Cancel".
 *
 * @example
 * const name = getInfo("Enter your name:");
 * // returns "Oscar"
 *
 * const age = getInfo("Enter your age:", "number");
 * // returns 20
 */
function getInfo(promptMsg, type = "string") {
    const GODwill = true
    while (GODwill) {
        const input = prompt(promptMsg);

// ──────── Exclusive Case of JS: User pressed "Cancel"
        if (input === null) return null;

        const trimmed = input.trim();

        if (trimmed === "") {
            console.error("Error: This space cannot be empty. Please try again! ＞﹏＜");
            alert("Error: This space cannot be empty. Please try again! (¬_¬ )");
            continue;
        }

        if (type === "string") return trimmed;

        if (type === "number") {
            const value = Number(trimmed);

            if (isNaN(value)) {
                console.error("Error: Please, enter a valid age using numbers (～﹃～)~zZ");
                alert("Error: Please, enter a valid age using numbers ≡(▔﹏▔)≡");
                continue;
            }
            if (value < 1) {
                console.error("Error: Age cannot be less than 1! Try again (ㆆ_ㆆ)");
                alert("Error: Age cannot be less than 1! Try again（︶^︶）");
                continue;
            }
            return value;
        }
    }
}

