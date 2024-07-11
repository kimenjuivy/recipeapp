const nigerianRecipes = [
    {
        name: "Fufu",
        image: "assets/ghana/fufu.jpg",
        description: "A staple Ghanaian food made from boiled and pounded starchy vegetables like cassava, yams, or plantains.",
        ingredients: [
            "2 large cassava roots, peeled and chopped",
            "3 large plantains, peeled and chopped",
            "Water"
        ],
        instructions: [
            "Boil the cassava and plantains in separate pots until they are soft.",
            "Drain and pound the cassava in a large mortar until smooth.",
            "Pound the plantains until smooth and combine with the cassava.",
            "Continue pounding until you get a smooth, elastic consistency.",
            "Serve with your favorite soup or stew."
        ]
    },
    {
        name: "Chichinga",
        image: "assets/ghana/chichinga.jpg",
        description: "Ghanaian kebabs made with spiced meat, typically beef or chicken, grilled to perfection.",
        ingredients: [
            "500g beef or chicken, cut into cubes",
            "2 tbsp suya spice mix",
            "1 tbsp ground peanuts",
            "1 tbsp ground paprika",
            "1 tsp ground ginger",
            "1 tsp ground garlic",
            "Salt to taste",
            "2 tbsp vegetable oil",
            "Wooden skewers, soaked in water"
        ],
        instructions: [
            "In a bowl, mix the suya spice, ground peanuts, paprika, ginger, garlic, and salt.",
            "Add the meat cubes and coat well with the spice mixture.",
            "Thread the meat onto the soaked skewers.",
            "Brush with vegetable oil and grill over medium heat until cooked through, turning occasionally.",
            "Serve hot with onions and tomatoes."
        ]
    },
    {
        name: "Banku",
        image: "assets/ghana/banku.jpg",
        description: "A traditional Ghanaian dish made from fermented corn and cassava dough, cooked into a smooth, starchy consistency.",
        ingredients: [
            "2 cups corn dough",
            "1 cup cassava dough",
            "Water",
            "Salt to taste"
        ],
        instructions: [
            "In a large pot, mix the corn dough and cassava dough with water to form a smooth mixture.",
            "Place the pot on medium heat and stir continuously to prevent lumps.",
            "Cook until the mixture thickens and forms a smooth, elastic consistency.",
            "Season with salt and serve hot with soup or stew."
        ]
    },
    {
        name: "Kontimire Soup",
        image: "assets/ghana/kontimire_soup.jpg",
        description: "A rich Ghanaian soup made with cocoyam leaves (kontimire), meat, and fish, cooked in a flavorful broth.",
        ingredients: [
            "1 bunch cocoyam leaves (kontimire), chopped",
            "500g assorted meat (goat, beef, or chicken)",
            "200g smoked fish",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "2 tomatoes, chopped",
            "1 tbsp ground crayfish",
            "1 tbsp palm oil",
            "Salt and pepper to taste",
            "Water"
        ],
        instructions: [
            "In a large pot, heat the palm oil and sauté the onions and garlic until fragrant.",
            "Add the meat and cook until browned.",
            "Add the tomatoes, ground crayfish, and smoked fish, and cook for 10 minutes.",
            "Add water to cover the meat and bring to a boil.",
            "Reduce heat and simmer until the meat is tender.",
            "Add the chopped cocoyam leaves and cook for another 15 minutes.",
            "Season with salt and pepper to taste and serve hot."
        ]
    },
    {
        name: "Kelewele",
        image: "assets/ghana/kelewele.jpg",
        description: "Spicy fried plantains, a popular Ghanaian street food.",
        ingredients: [
            "4 ripe plantains, peeled and cut into bite-sized pieces",
            "1 tbsp grated ginger",
            "2 cloves garlic, minced",
            "1 tsp ground cayenne pepper",
            "1 tsp ground nutmeg",
            "Salt to taste",
            "Vegetable oil for frying"
        ],
        instructions: [
            "In a bowl, mix the plantains with ginger, garlic, cayenne pepper, nutmeg, and salt.",
            "Heat the oil in a frying pan over medium heat.",
            "Fry the plantains until golden brown and crispy.",
            "Drain on paper towels and serve hot."
        ]
    },
    {
        name: "Red Red",
        image: "assets/ghana/red_red.jpg",
        description: "A traditional Ghanaian dish made with black-eyed peas cooked in a tomato and palm oil sauce, often served with fried plantains.",
        ingredients: [
            "2 cups black-eyed peas, soaked overnight",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "2 tomatoes, chopped",
            "1/4 cup red palm oil",
            "1 tsp ground paprika",
            "Salt and pepper to taste",
            "Fried plantains for serving"
        ],
        instructions: [
            "In a large pot, cook the black-eyed peas until tender, then drain.",
            "In another pot, heat the palm oil and sauté the onions and garlic until golden.",
            "Add the tomatoes and paprika, and cook until the tomatoes are soft.",
            "Add the cooked black-eyed peas and stir well.",
            "Season with salt and pepper, and simmer for 10 minutes.",
            "Serve hot with fried plantains."
        ]
    },
    {
        name: "Shito",
        image: "assets/ghana/shito.jpg",
        description: "A spicy Ghanaian black pepper sauce made with dried fish, shrimp, and a variety of spices.",
        ingredients: [
            "1 cup dried fish, ground",
            "1 cup dried shrimp, ground",
            "2 onions, chopped",
            "3 cloves garlic, minced",
            "1 cup vegetable oil",
            "2 tbsp ground red pepper",
            "1 tbsp ground ginger",
            "1 tbsp ground cloves",
            "1 tbsp ground anise seeds",
            "Salt to taste"
        ],
        instructions: [
            "In a large pan, heat the oil and fry the onions and garlic until golden brown.",
            "Add the ground fish and shrimp, and cook for 5 minutes.",
            "Stir in the red pepper, ginger, cloves, and anise seeds, and cook for another 5 minutes.",
            "Season with salt and simmer for 10 minutes.",
            "Let cool and store in a jar. Serve as a condiment."
        ]
    },
    {
        name: "Garden Egg Stew",
        image: "assets/ghana/garden.jpg",
        description: "A flavorful Ghanaian stew made with garden eggs (African eggplants), tomatoes, and onions.",
        ingredients: [
            "6 garden eggs, chopped",
            "2 onions, chopped",
            "3 tomatoes, chopped",
            "2 cloves garlic, minced",
            "1/4 cup palm oil",
            "1 tsp ground crayfish",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil the garden eggs until tender, then mash them.",
            "In a pot, heat the palm oil and sauté the onions and garlic until golden.",
            "Add the tomatoes and cook until soft.",
            "Add the mashed garden eggs and ground crayfish, and stir well.",
            "Season with salt and pepper, and simmer for 10 minutes.",
            "Serve hot with yam or plantains."
        ]
    },
    {
        name: "Kenkey",
        image: "assets/ghana/kenkey.jpg",
        description: "A fermented maize dough dish, steamed in corn husks or banana leaves.",
        ingredients: [
            "4 cups cornmeal",
            "Water",
            "Banana leaves or corn husks for wrapping",
            "Salt to taste"
        ],
        instructions: [
            "Mix the cornmeal with water to form a dough.",
            "Allow the dough to ferment for 2-3 days.",
            "Divide the dough into portions and wrap each portion in banana leaves or corn husks.",
            "Steam the wrapped dough for 1-2 hours until cooked through.",
            "Serve hot with soup, stew, or fish."
        ]
    },
    {
        name: "Palm Nut Soup",
        image: "assets/ghana/palm.jpg",
        description: "A rich and flavorful Ghanaian soup made with palm nut pulp, meat, and fish.",
        ingredients: [
            "1 can palm nut cream",
            "500g assorted meat (goat, beef, or chicken)",
            "200g smoked fish",
            "1 onion, chopped",
            "3 tomatoes, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ground crayfish",
            "1 tbsp ground ginger",
            "Salt and pepper to taste",
            "Water"
        ],
        instructions: [
            "In a large pot, cook the meat until browned.",
            "Add the onions, garlic, and tomatoes, and cook until soft.",
            "Add the palm nut cream and enough water to cover the meat.",
            "Stir in the ground crayfish and ginger, and bring to a boil.",
            "Reduce heat and simmer until the meat is tender.",
            "Add the smoked fish and cook for another 10 minutes.",
            "Season with salt and pepper, and serve hot."
        ]
    },
];
function generateRecipeHTML(recipe) {
    const recipeElement = document.createElement('div');
    recipeElement.className = 'recipe-container';
    recipeElement.innerHTML = `
        <div class="recipe-image-container">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="recipe-content">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="view-recipe-btn">View Recipe</button>
            <div class="recipe-details" style="display: none;">
                <h4>Ingredients:</h4>
                <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                <h4>Instructions:</h4>
                <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
                <button onclick="downloadRecipe('${recipe.name}')">Download Recipe as PDF</button>
            </div>
        </div>
    `;
    return recipeElement;
}

function downloadRecipe(recipeName) {
    const recipe = nigerianRecipes.find(r => r.name === recipeName);
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set the title
    doc.setFontSize(24);
    doc.setTextColor(244, 164, 96); // A nice orange color
    doc.text(recipe.name, 105, 20, null, null, 'center');

    // Add the image
    try {
        const imgData = getBase64Image(recipe.image);
        doc.addImage(imgData, 'JPEG', 15, 30, 180, 100);
    } catch (error) {
        console.error('Error adding image to PDF:', error);
    }

    // Add ingredients
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Ingredients:', 15, 140);

    doc.autoTable({
        startY: 145,
        head: [['Ingredients']],
        body: recipe.ingredients.map(ing => [ing]),
        theme: 'striped',
        headStyles: { fillColor: [244, 164, 96], textColor: 255 },
        margin: { left: 15, right: 15 },
    });

    // Add instructions
    let finalY = doc.lastAutoTable.finalY || 145;
    doc.setFontSize(16);
    doc.text('Instructions:', 15, finalY + 10);

    doc.autoTable({
        startY: finalY + 15,
        head: [['Step', 'Instruction']],
        body: recipe.instructions.map((inst, index) => [index + 1, inst]),
        theme: 'striped',
        headStyles: { fillColor: [244, 164, 96], textColor: 255 },
        margin: { left: 15, right: 15 },
    });

    doc.save(`${recipe.name}.pdf`);
}

function getBase64Image(imgUrl) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgUrl;
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
}

document.addEventListener('DOMContentLoaded', () => {
    const recipesSection = document.getElementById('recipes');
    nigerianRecipes.forEach(recipe => {
        const recipeCard = generateRecipeHTML(recipe);
        recipesSection.appendChild(recipeCard);

        const viewRecipeBtn = recipeCard.querySelector('.view-recipe-btn');
        const recipeDetails = recipeCard.querySelector('.recipe-details');

        viewRecipeBtn.addEventListener('click', () => {
            if (recipeDetails.style.display === 'none') {
                recipeDetails.style.display = 'block';
                viewRecipeBtn.textContent = 'Hide Recipe';
            } else {
                recipeDetails.style.display = 'none';
                viewRecipeBtn.textContent = 'View Recipe';
            }
        });
    });
});