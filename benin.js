const nigerianRecipes = [
    {
        name: "Kuli-Kuli",
        image: "assets/benin/kuli_kuli.webp",
        description: "A popular Beninese snack made from groundnuts (peanuts), often spiced and deep-fried into crunchy balls or sticks.",
        ingredients: [
            "2 cups roasted unsalted peanuts",
            "1 tsp cayenne pepper",
            "1/2 tsp salt",
            "1 tbsp water",
            "Vegetable oil for frying"
        ],
        instructions: [
            "Grind peanuts into a smooth paste.",
            "Mix in cayenne pepper and salt. Add water to form a thick paste.",
            "Shape the paste into small balls or sticks.",
            "Deep fry in hot oil until golden brown and crispy.",
            "Drain on paper towels and serve as a snack."
        ]
    },
    {
        name: "Wagasi",
        image: "assets/benin/wagasi.jpg",
        description: "A traditional Beninese cheese made from cow's milk, often fried and served as a snack or added to sauces.",
        ingredients: [
            "4 liters whole milk",
            "1/4 cup lemon juice or vinegar",
            "1 tsp salt",
            "Vegetable oil for frying (optional)"
        ],
        instructions: [
            "Heat milk until it's about to boil, then remove from heat.",
            "Stir in lemon juice or vinegar. Let sit until curds form.",
            "Strain curds through cheesecloth and add salt.",
            "Press curds into a mold and let set for a few hours.",
            "Optionally, slice and fry until golden brown before serving."
        ]
    },
    {
        name: "Amiwo",
        image: "assets/benin/amiwo.jpg",
        description: "A vibrant red cornmeal dish often served with chicken or fish, popular in Benin and Togo.",
        ingredients: [
            "2 cups cornmeal",
            "2 cups water",
            "1 cup tomato paste",
            "1 onion, chopped",
            "2 tbsp palm oil",
            "Salt and pepper to taste",
            "Grilled chicken or fish for serving"
        ],
        instructions: [
            "Mix cornmeal with 1 cup of water to form a paste.",
            "Boil remaining water with tomato paste, onion, and palm oil.",
            "Gradually stir in cornmeal paste, cooking until thick.",
            "Season with salt and pepper.",
            "Serve hot with grilled chicken or fish."
        ]
    },
    {
        name: "Sauce Gombo",
        image: "assets/benin/sauce_gmbo.jpeg",
        description: "A popular okra-based sauce in Benin, often served with meat and a side of pounded yam or rice.",
        ingredients: [
            "500g fresh okra, chopped",
            "300g beef or chicken, cubed",
            "1 onion, chopped",
            "2 tomatoes, diced",
            "2 tbsp palm oil",
            "1 tbsp ground crayfish",
            "1 chili pepper, chopped",
            "Salt and pepper to taste",
            "Pounded yam or rice for serving"
        ],
        instructions: [
            "Brown meat in palm oil, then add onions and tomatoes.",
            "Stir in chopped okra and cook until slightly slimy.",
            "Add ground crayfish, chili pepper, salt, and pepper.",
            "Simmer for 15-20 minutes until meat is cooked and sauce thickens.",
            "Serve hot with pounded yam or rice."
        ]
    },
    {
        name: "Ablo",
        image: "assets/benin/abolo.jpg",
        description: "A steamed fermented corn dough, similar to bread, often served with stews or sauces.",
        ingredients: [
            "3 cups corn flour",
            "1 cup rice flour",
            "1 tsp active dry yeast",
            "2 cups warm water",
            "1 tsp salt",
            "Banana leaves or aluminum foil for wrapping"
        ],
        instructions: [
            "Mix flours, yeast, and salt. Gradually add water to form a thick batter.",
            "Cover and let ferment in a warm place for 6-8 hours.",
            "Stir the batter and pour into banana leaf wrappers or greased foil.",
            "Steam for about 30 minutes until firm and cooked through.",
            "Unwrap and serve warm with stews or sauces."
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