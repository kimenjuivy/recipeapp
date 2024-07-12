const nigerianRecipes = [
    {
        name: "Couscous",
        image: "assets/tunisia/couscous.jpg",
        description: "The national dish of Tunisia, consisting of steamed semolina grains served with a hearty stew.",
        ingredients: [
            "2 cups couscous",
            "500g lamb or chicken, cubed",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 carrots, sliced",
            "1 zucchini, sliced",
            "1 can chickpeas, drained",
            "2 tbsp tomato paste",
            "2 tbsp olive oil",
            "1 tsp harissa paste",
            "1 tsp ground cumin",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Brown meat in olive oil with onions.",
            "Add tomatoes, tomato paste, harissa, cumin, salt, and pepper. Cook for 5 minutes.",
            "Add 4 cups of water and bring to a boil. Simmer for 30 minutes.",
            "Add vegetables and chickpeas. Cook for another 20 minutes.",
            "Meanwhile, prepare couscous according to package instructions.",
            "Serve stew over couscous."
        ]
    },
    {
        name: "Brik",
        image: "assets/tunisia/brik.jpg",
        description: "A crispy pastry filled with egg and various other ingredients, typically fried.",
        ingredients: [
            "8 sheets of malsouka or phyllo pastry",
            "8 eggs",
            "200g canned tuna, drained",
            "1/2 cup chopped parsley",
            "1 onion, finely chopped",
            "Juice of 1 lemon",
            "Salt and pepper to taste",
            "Vegetable oil for frying"
        ],
        instructions: [
            "Mix tuna, parsley, onion, lemon juice, salt, and pepper in a bowl.",
            "Place a spoonful of the mixture in the center of a pastry sheet.",
            "Crack an egg on top of the mixture.",
            "Fold the pastry into a triangle, sealing the edges.",
            "Fry in hot oil until golden brown on both sides.",
            "Drain on paper towels and serve hot."
        ]
    },
    {
        name: "Lablabi",
        image: "assets/tunisia/lablabi.jpg",
        description: "A hearty chickpea soup, often eaten for breakfast.",
        ingredients: [
            "2 cans chickpeas, drained",
            "4 cups chicken or vegetable broth",
            "4 cloves garlic, minced",
            "2 tsp ground cumin",
            "1 tsp harissa paste",
            "Juice of 1 lemon",
            "Salt to taste",
            "Stale bread, cubed",
            "2 eggs (optional)",
            "Olive oil for serving"
        ],
        instructions: [
            "Simmer chickpeas in broth with garlic, cumin, and harissa for 15 minutes.",
            "Mash some chickpeas to thicken the soup.",
            "Add lemon juice and salt to taste.",
            "If using eggs, poach them in the soup.",
            "Place bread cubes in bowls, ladle soup over them.",
            "Top with poached egg if using, and drizzle with olive oil."
        ]
    },
    {
        name: "Ojja",
        image: "assets/tunisia/ojja.jpg",
        description: "A spicy tomato and egg dish, often served for breakfast or as a light meal.",
        ingredients: [
            "4 eggs",
            "4 tomatoes, chopped",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp tomato paste",
            "1 tsp harissa paste",
            "1 tsp ground cumin",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Chopped parsley for garnish"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil until softened.",
            "Add tomatoes, tomato paste, harissa, cumin, salt, and pepper. Simmer for 10 minutes.",
            "Make wells in the sauce and crack eggs into them.",
            "Cover and cook until eggs are set, about 5 minutes.",
            "Garnish with parsley and serve hot with bread."
        ]
    },
    {
        name: "Makroudh",
        image: "assets/tunisia/makroudh.jpg",
        description: "A sweet pastry made with semolina and dates, fried and soaked in honey syrup.",
        ingredients: [
            "2 cups semolina",
            "1/2 cup vegetable oil",
            "1/2 cup water",
            "1 cup pitted dates, mashed",
            "1 tsp cinnamon",
            "1 cup honey",
            "1/2 cup water",
            "Vegetable oil for frying"
        ],
        instructions: [
            "Mix semolina with oil and water to form a dough. Let rest for 30 minutes.",
            "Mix dates with cinnamon.",
            "Roll out dough, spread date mixture on top, and roll up.",
            "Cut into diamond shapes.",
            "Fry in hot oil until golden brown.",
            "Boil honey and water to make syrup.",
            "Soak fried pastries in syrup for a few minutes.",
            "Drain and serve at room temperature."
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