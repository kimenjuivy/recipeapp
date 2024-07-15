const nigerianRecipes = [
    {
        name: "Attiéké",
        image: "assets/cote/attieke.jpg",
        description: "A popular side dish made from fermented cassava pulp, similar in appearance to couscous.",
        ingredients: [
            "500g cassava, peeled and grated",
            "1 tbsp fermented cassava starter (optional)",
            "1/2 tsp salt",
            "Water as needed"
        ],
        instructions: [
            "Mix grated cassava with fermented starter (if using) and let ferment for 1-2 days.",
            "Drain the fermented cassava and press to remove excess water.",
            "Sift the cassava pulp to create small grains.",
            "Steam the grains for about 20-30 minutes until cooked through.",
            "Fluff with a fork and serve as a side dish with grilled fish or chicken."
        ]
    },
    {
        name: "Kedjenou",
        image: "assets/cote/kedjenou.jpg",
        description: "A spicy stew made with chicken or guinea fowl, slow-cooked in a sealed pot.",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 eggplants, cubed",
            "2 chili peppers, chopped",
            "2 garlic cloves, minced",
            "1 tbsp ginger, minced",
            "1 tbsp thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Place all ingredients in a canari (clay pot) or heavy-bottomed pot.",
            "Seal the pot tightly with foil or a lid.",
            "Cook over low heat for about 1-2 hours, shaking the pot occasionally.",
            "Do not open the pot during cooking.",
            "Serve hot with attiéké or rice."
        ]
    },
    {
        name: "Foufou Banane",
        image: "assets/cote/foufou_banane.jpeg",
        description: "A staple food made from mashed plantains and cassava, often served with soups or sauces.",
        ingredients: [
            "4 green plantains",
            "1 cup cassava flour",
            "Water for boiling",
            "Salt to taste"
        ],
        instructions: [
            "Peel and chop plantains, then boil until soft.",
            "Drain plantains and mash while still hot.",
            "Gradually add cassava flour, kneading until smooth and elastic.",
            "Form into small balls.",
            "Serve hot with soup or sauce."
        ]
    },
    {
        name: "Sauce Graine",
        image: "assets/cote/sauce_graine.jpg",
        description: "A popular palm nut soup often served with rice or foutou.",
        ingredients: [
            "2 cups palm nut pulp",
            "500g beef or fish, cubed",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tbsp tomato paste",
            "2 chili peppers, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil palm nut pulp in water for 15 minutes, then strain to extract the juice.",
            "In a pot, cook meat or fish with onions until browned.",
            "Add tomatoes, tomato paste, and chili peppers.",
            "Pour in the palm nut juice and simmer for 30-40 minutes.",
            "Season with salt and pepper.",
            "Serve hot with rice or foutou."
        ]
    },
    {
        name: "Alloco",
        image: "assets/cote/alloco.jpg",
        description: "A popular street food made of fried plantains, often served with spicy chili sauce.",
        ingredients: [
            "4 ripe plantains",
            "Vegetable oil for frying",
            "Salt to taste",
            "Chili sauce for serving"
        ],
        instructions: [
            "Peel plantains and slice diagonally.",
            "Heat oil in a deep frying pan.",
            "Fry plantain slices until golden brown and crispy.",
            "Drain on paper towels and sprinkle with salt.",
            "Serve hot as a snack or side dish, with chili sauce on the side."
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