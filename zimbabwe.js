const nigerianRecipes = [
    {
        name: "Sadza",
        image: "assets/zimbabwe/sadza.jpg",
        description: "A staple food in Zimbabwe, made from cornmeal and served with various stews or sauces.",
        ingredients: [
            "2 cups white cornmeal",
            "4 cups water",
            "1 tsp salt"
        ],
        instructions: [
            "Boil 3 cups of water with salt in a pot.",
            "Mix 1 cup of cornmeal with 1 cup of cold water to form a paste.",
            "Slowly pour the paste into the boiling water, stirring constantly.",
            "Reduce heat and gradually add remaining cornmeal, stirring vigorously to avoid lumps.",
            "Cook for 15-20 minutes, stirring occasionally, until thick and smooth.",
            "Shape into a mound and serve with stew or sauce."
        ]
    },
    {
        name: "Nyama",
        image: "assets/zimbabwe/nyama.jpg",
        description: "A hearty meat stew often served with sadza.",
        ingredients: [
            "500g beef or goat meat, cubed",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "2 tbsp vegetable oil",
            "1 tsp curry powder",
            "Salt and pepper to taste",
            "2 cups water or beef broth"
        ],
        instructions: [
            "Brown meat in oil with onions and garlic.",
            "Add tomatoes, curry powder, salt, and pepper. Cook for 5 minutes.",
            "Add water or broth and bring to a boil.",
            "Reduce heat and simmer for 1-2 hours until meat is tender.",
            "Serve hot with sadza."
        ]
    },
    {
        name: "Mopane Worms",
        image: "assets/zimbabwe/mopane_worms.jpg",
        description: "A protein-rich snack made from dried caterpillars of the emperor moth.",
        ingredients: [
            "2 cups dried mopane worms",
            "2 tbsp vegetable oil",
            "1 onion, chopped",
            "1 tomato, chopped",
            "Salt and pepper to taste",
            "Chili powder (optional)"
        ],
        instructions: [
            "Rehydrate dried mopane worms in warm water for 30 minutes, then drain.",
            "Heat oil in a pan and sauté onions until golden.",
            "Add tomatoes and cook for a few minutes.",
            "Add mopane worms and cook for 5-10 minutes.",
            "Season with salt, pepper, and chili powder if desired.",
            "Serve hot as a snack or side dish."
        ]
    },
    {
        name: "Dovi",
        image: "assets/zimbabwe/dovi.webp",
        description: "A rich peanut butter stew often made with chicken or vegetables.",
        ingredients: [
            "500g chicken, cubed (or mixed vegetables)",
            "1 cup smooth peanut butter",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "2 tbsp vegetable oil",
            "2 cups chicken broth or water",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Brown chicken (or sauté vegetables) in oil with onions and garlic.",
            "Add tomatoes and cook for 5 minutes.",
            "Mix peanut butter with 1 cup of broth or water until smooth.",
            "Add peanut butter mixture to the pot along with remaining broth.",
            "Simmer for 30-40 minutes until chicken is cooked and sauce thickens.",
            "Season with salt and pepper. Serve with sadza."
        ]
    },
    {
        name: "Mapopo Candy",
        image: "assets/zimbabwe/mapopo_candy.webp",
        description: "A sweet treat made from papaya, popular as a snack or dessert.",
        ingredients: [
            "1 large green papaya, peeled and cut into strips",
            "2 cups sugar",
            "1 cup water",
            "1 tsp vanilla extract",
            "1/2 tsp ginger powder (optional)"
        ],
        instructions: [
            "Boil papaya strips in water for 5 minutes, then drain.",
            "In a pan, combine sugar and water. Bring to a boil to make syrup.",
            "Add papaya strips to the syrup and simmer for 30 minutes.",
            "Add vanilla and ginger (if using) and cook for another 5 minutes.",
            "Remove papaya strips and let cool on a wire rack.",
            "Once cool and dry, roll in extra sugar if desired.",
            "Store in an airtight container."
        ]
    }
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