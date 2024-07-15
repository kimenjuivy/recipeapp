const nigerianRecipes = [
    {
        name: "Poulet Nyembwe",
        image: "assets/gabon/poulet_nyembwe.jpg",
        description: "Considered Gabon's national dish, this is a chicken stew cooked in palm nut sauce.",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "2 cups palm nut cream (nyembwe sauce)",
            "2 onions, chopped",
            "3 garlic cloves, minced",
            "2 tomatoes, chopped",
            "1 tbsp vegetable oil",
            "Salt and pepper to taste",
            "1 hot pepper (optional)"
        ],
        instructions: [
            "Brown chicken pieces in oil with onions and garlic.",
            "Add tomatoes and cook for 5 minutes.",
            "Pour in palm nut cream and bring to a simmer.",
            "Cook for 30-40 minutes until chicken is tender and sauce thickens.",
            "Season with salt, pepper, and hot pepper if using.",
            "Serve hot with rice or plantains."
        ]
    },
    {
        name: "Manioc Bâtons",
        image: "assets/gabon/manioc_batons.webp",
        description: "A staple food made from cassava, wrapped in leaves and steamed.",
        ingredients: [
            "2 kg cassava, peeled and grated",
            "Banana leaves or aluminum foil for wrapping",
            "Water for boiling",
            "Salt to taste"
        ],
        instructions: [
            "Soak grated cassava in water for 2-3 days, changing water daily.",
            "Drain and press cassava to remove excess water.",
            "Season with salt and form into small logs.",
            "Wrap each log tightly in banana leaves or foil.",
            "Steam or boil the wrapped logs for about 1 hour.",
            "Unwrap and serve as a side dish with stews or sauces."
        ]
    },
    {
        name: "Saka-Saka",
        image: "assets/gabon/saka_saka.jpg",
        description: "A popular dish made from cassava leaves, often cooked with palm oil and fish or meat.",
        ingredients: [
            "500g cassava leaves, finely chopped",
            "200g smoked fish or meat",
            "1/2 cup palm oil",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 tbsp peanut butter",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil cassava leaves for 30 minutes, then drain.",
            "In a pot, sauté onions and garlic in palm oil.",
            "Add smoked fish or meat and cook for 5 minutes.",
            "Stir in boiled cassava leaves and peanut butter.",
            "Simmer for 15-20 minutes, stirring occasionally.",
            "Season with salt and pepper.",
            "Serve hot with rice or plantains."
        ]
    },
    {
        name: "Bouillon de Poisson",
        image: "assets/gabon/bouillon_poisson.jpeg",
        description: "A flavorful fish soup popular in coastal regions of Gabon.",
        ingredients: [
            "500g mixed fish, cleaned and cut into pieces",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 garlic cloves, minced",
            "1 tbsp vegetable oil",
            "1 liter fish stock or water",
            "1 lemon, juiced",
            "Salt and pepper to taste",
            "Fresh herbs (parsley or cilantro) for garnish"
        ],
        instructions: [
            "Sauté onions and garlic in oil until softened.",
            "Add tomatoes and cook for 5 minutes.",
            "Pour in fish stock or water and bring to a boil.",
            "Add fish pieces and simmer for 10-15 minutes.",
            "Season with lemon juice, salt, and pepper.",
            "Garnish with fresh herbs before serving."
        ]
    },
    {
        name: "Folon à la Viande",
        image: "assets/gabon/Folon à la Viande.jpg",
        description: "A dish made with amaranth leaves (folon) and meat, popular in Gabonese cuisine.",
        ingredients: [
            "500g amaranth leaves (folon), chopped",
            "300g beef or chicken, cubed",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tbsp palm oil",
            "1 tbsp peanut butter",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Brown meat in palm oil with onions.",
            "Add tomatoes and cook for 5 minutes.",
            "Stir in chopped amaranth leaves and peanut butter.",
            "Simmer for 15-20 minutes until leaves are tender and meat is cooked.",
            "Season with salt and pepper.",
            "Serve hot with rice or plantains."
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