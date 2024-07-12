const nigerianRecipes = [
    {
        name: "Ndolé",
        image: "assets/cameroon/ndole.jpg",
        description: "Often considered Cameroon's national dish, Ndolé is a stew made with bitter leaves, meat, and ground peanuts.",
        ingredients: [
            "500g bitter leaves (or spinach as substitute)",
            "500g beef or shrimp, cubed",
            "1 cup ground peanuts",
            "2 onions, chopped",
            "3 garlic cloves, minced",
            "2 tbsp crayfish powder",
            "2 tbsp palm oil",
            "Salt and pepper to taste",
            "Water as needed"
        ],
        instructions: [
            "Wash and boil bitter leaves for 15 minutes, then drain and set aside.",
            "In a pot, cook meat or shrimp with onions and garlic until browned.",
            "Add ground peanuts, crayfish powder, and palm oil. Stir well.",
            "Add the boiled bitter leaves and enough water to create a stew consistency.",
            "Simmer for 30 minutes, stirring occasionally.",
            "Season with salt and pepper. Serve hot with plantains or rice."
        ]
    },
    {
        name: "Eru",
        image: "assets/cameroon/eru.jpg",
        description: "A popular dish from the Southwest region of Cameroon, made with finely shredded eru leaves and waterleaf.",
        ingredients: [
            "500g eru leaves, finely chopped",
            "300g waterleaf or spinach, chopped",
            "500g cow skin (kanda), sliced",
            "200g dried fish or stockfish",
            "1/2 cup palm oil",
            "1 onion, chopped",
            "2 tbsp crayfish powder",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Soak dried fish in warm water for 30 minutes, then debone and flake.",
            "In a large pot, combine eru leaves, waterleaf, cow skin, and flaked fish.",
            "Add palm oil, onion, crayfish powder, salt, and pepper.",
            "Cook over medium heat for about 30 minutes, stirring occasionally.",
            "Add a little water if needed to prevent sticking.",
            "Serve hot with garri, plantains, or fufu."
        ]
    },
    {
        name: "Koki",
        image: "assets/cameroon/koki.jpg",
        description: "A savory pudding made from beans, popular throughout Cameroon.",
        ingredients: [
            "2 cups black-eyed peas, soaked overnight",
            "1 onion, finely chopped",
            "1/4 cup palm oil",
            "1 tsp baking soda",
            "Salt to taste",
            "Banana leaves for wrapping"
        ],
        instructions: [
            "Blend soaked beans with onion to form a smooth paste.",
            "Mix in palm oil, baking soda, and salt.",
            "Wrap portions of the mixture in banana leaves.",
            "Steam the wrapped portions for about 1 hour until firm.",
            "Unwrap and serve hot or cold as a snack or side dish."
        ]
    },
    {
        name: "Poulet DG",
        image: "assets/cameroon/poulet_dg.jpg",
        description: "A popular chicken dish often served at high-end restaurants and parties, 'DG' stands for 'Directeur Général' (General Director).",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "4 ripe plantains, sliced",
            "2 carrots, sliced",
            "1 bell pepper, sliced",
            "2 onions, sliced",
            "4 garlic cloves, minced",
            "2 tbsp vegetable oil",
            "1 cup chicken broth",
            "Salt, pepper, and mixed herbs to taste"
        ],
        instructions: [
            "Season chicken with salt, pepper, and herbs. Brown in oil.",
            "Remove chicken and sauté onions, garlic, carrots, and bell pepper.",
            "Return chicken to the pan, add broth, and simmer for 20 minutes.",
            "In a separate pan, fry plantain slices until golden.",
            "Add fried plantains to the chicken mixture and cook for 5 more minutes.",
            "Serve hot, garnished with fresh herbs if desired."
        ]
    },
    {
        name: "Kondre",
        image: "assets/cameroon/kondre.jpg",
        description: "A hearty stew made with plantains and meat, popular in the Southwest region of Cameroon.",
        ingredients: [
            "4 green plantains, chopped",
            "500g beef or goat meat, cubed",
            "2 onions, chopped",
            "3 tomatoes, chopped",
            "2 tbsp palm oil",
            "1 tbsp crayfish powder",
            "2 garlic cloves, minced",
            "1 hot pepper, chopped (optional)",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Brown meat in palm oil with onions and garlic.",
            "Add tomatoes, crayfish powder, and hot pepper if using. Simmer for 15 minutes.",
            "Add chopped plantains and enough water to cover.",
            "Cook on low heat for about 30 minutes until plantains are soft and stew thickens.",
            "Season with salt and pepper.",
            "Serve hot as a main dish."
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