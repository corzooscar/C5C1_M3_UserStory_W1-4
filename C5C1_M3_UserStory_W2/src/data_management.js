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

// =============================================
// TASK 1: Product object — starts with sample data
// =============================================

const products = {
  product1: { id: 1, nombre: "Laptop",   precio: 1500 },
  product2: { id: 2, nombre: "Mouse",    precio: 25   },
  product3: { id: 3, nombre: "Keyboard", precio: 45   },
  product4: { id: 4, nombre: "Monitor",  precio: 300  },
}

// =============================================
// TASK 2: Set — unique product IDs
// =============================================

// Initialized from the existing products; duplicates are removed automatically
const productIds = new Set([1, 2, 3, 3, 4, 4, 5])

console.log("Initial Set content:", productIds)
// Set(5) { 1, 2, 3, 4, 5 }

productIds.add(6)

console.log("Has 3?",  productIds.has(3))   // true
console.log("Has 10?", productIds.has(10))  // false

productIds.delete(5)

console.log("--- Iterating initial Set ---")
for (const id of productIds) {
  console.log("ID:", id)
}

// =============================================
// TASK 3: Map — category → product name
// =============================================

const productMap = new Map([
  ["Electronics", "Laptop"  ],
  ["Accessories", "Mouse"   ],
  ["Accessories", "Keyboard"],
  ["Peripherals", "Monitor" ],
])

console.log("Initial Map content:", productMap)

// =============================================
// TASK 4: Iteration helpers (called in the menu)
// =============================================

/** Prints every product using for...in and Object utility methods. */
function showProducts() {
  console.log("\n--- Full Product List (for...in) ---")
  for (const key in products) {
    const { id, nombre, precio } = products[key]
    console.log(`${key} → ID: ${id} | Name: ${nombre} | Price: $${precio}`)
  }

  console.log("\nKeys:",    Object.keys(products))
  console.log("Values:",   Object.values(products))
  console.log("Entries:",  Object.entries(products))
  console.table(Object.values(products))
}

/** Prints unique IDs using for...of. */
function showSet() {
  console.log("\n--- Unique IDs (Set / for...of) ---")
  for (const id of productIds) {
    console.log("ID:", id)
  }
}

/** Prints every category→product pair using forEach. */
function showMap() {
  console.log("\n--- Categories and Products (Map / forEach) ---")
  productMap.forEach((value, key) => {
    console.log(`Category: ${key} → Product: ${value}`)
  })
}

// =============================================
// TASK 5: Validation helpers
// =============================================

/**
 * Prompts the user and validates the input based on the expected type.
 *
 * @param {string} promptMsg  - Message shown in the prompt.
 * @param {string} [type="string"] - "string" or "number".
 * @returns {string|number|null} Validated value, or null if user cancelled.
 */
function getInfo(promptMsg, type = "string") {
  const GODwill = true
  while (GODwill) {
    const input = prompt(promptMsg)

    // Exclusive case: user pressed "Cancel"
    if (input === null) return null

    const trimmed = input.trim()

    if (trimmed === "") {
      console.error("Error: This field cannot be empty. Please try again! ＞﹏＜")
      continue
    }

    if (type === "string") return trimmed

    if (type === "number") {
      const value = Number(trimmed)

      if (isNaN(value)) {
        console.error("Error: Please enter a valid price using numbers (～﹃～)~zZ")
        continue
      }
      if (value < 1) {
        console.error("Error: Price cannot be less than $1! Try again (ㆆ_ㆆ)")
        continue
      }
      return value
    }
  }
}

/**
 * Validates that a product has id, nombre and precio correctly typed.
 *
 * @param {object} product - The product to validate.
 * @returns {boolean} true if valid, false otherwise.
 */
function validateProduct(product) {
  if (!product.id || typeof product.id !== "number") {
    console.error(`Error: Invalid or missing id → ${JSON.stringify(product)}`)
    return false
  }
  if (!product.nombre || typeof product.nombre !== "string") {
    console.error(`Error: Invalid or missing name → ${JSON.stringify(product)}`)
    return false
  }
  if (!product.precio || typeof product.precio !== "number" || product.precio < 1) {
    console.error(`Error: Invalid or missing price → ${JSON.stringify(product)}`)
    return false
  }
  return true
}

// Run validation on the initial dataset
console.log("\n--- Initial Validation Results ---")
for (const key in products) {
  const isValid = validateProduct(products[key])
  console.log(`${key}: ${isValid ? "Valid" : "Invalid"}`)
}

// =============================================
// TASK 5 (continued): Add new product dynamically
// =============================================

/**
 * Asks the user for a new product's data, validates it,
 * and registers it in the object, Set and Map.
 */
function addProduct() {
  console.log("\n--- Register New Product ---")

  // Ask for product name
  const nombre = getInfo("Enter product name:")
  if (nombre === null) {
    console.log("Registration cancelled.")
    return
  }

  // Ask for price (must be a number ≥ 1)
  const precio = getInfo("Enter product price (numbers only, min $1):", "number")
  if (precio === null) {
    console.log("Registration cancelled.")
    return
  }

  // Ask for category (used as Map key)
  const categoria = getInfo("Enter product category (e.g. Electronics, Accessories):")
  if (categoria === null) {
    console.log("Registration cancelled.")
    return
  }

  // Generate a unique ID based on the current highest ID in the Set
  const newId = Math.max(...productIds) + 1

  // Build the new product object
  const newProduct = { id: newId, nombre, precio }

  // Validate before registering
  if (!validateProduct(newProduct)) {
    console.error("Product did not pass validation. Registration aborted.")
    return
  }

  // Register in the products object
  const key = `product${newId}`
  products[key] = newProduct

  // Register ID in the Set (guarantees uniqueness)
  productIds.add(newId)

  // Register in the Map (category → product name)
  productMap.set(categoria, nombre)

  console.log(`\n✅ Product "${nombre}" registered successfully as ${key}!`)

  // Show updated reports immediately
  showProducts()
  showSet()
  showMap()
}

// =============================================
// Menu: lets the user keep adding products
// =============================================

/**
 * Simple prompt-based menu that loops until the user exits.
 */
function menu() {
  const GODwill = true
  while (GODwill) {
    const option = prompt(
      "=== Product Manager ===\n" +
      "1. Add new product\n" +
      "2. Show all products\n" +
      "3. Show unique IDs (Set)\n" +
      "4. Show categories (Map)\n" +
      "5. Exit\n\n" +
      "Choose an option (1-5):"
    )

    if (option === null || option === "5") {
      console.log("Goodbye! 👋")
      break
    }

    switch (option.trim()) {
      case "1":
        addProduct()
        break
      case "2":
        showProducts()
        break
      case "3":
        showSet()
        break
      case "4":
        showMap()
        break
      default:
        console.error("Invalid option. Please enter a number between 1 and 5.")
    }
  }
}

// Start the application
setTimeout(()=>{
  menu()
},16000);
  