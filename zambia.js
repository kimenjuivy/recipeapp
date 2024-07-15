const nigerianRecipes = [
        {
            name: "Nshima",
            image: "assets/zambia/nshima.jpg",
            description: "A staple food in Zambia made from maize meal (cornmeal), served as a thick porridge.",
            ingredients: [
                "2 cups Maize meal (cornmeal)",
                "4 cups Water"
            ],
            instructions: [
                "Bring water to a boil in a large pot.",
                "Gradually add maize meal to boiling water, stirring constantly to prevent lumps.",
                "Reduce heat to low and continue stirring until mixture thickens and pulls away from the sides of the pot, about 10-15 minutes.",
                "Cover and let simmer for an additional 5 minutes.",
                "Remove from heat and let rest for a few minutes before serving.",
                "Serve hot as a side dish with stews or sauces."
            ]
        },
        {
            name: "Chikanda",
            image: "assets/zambia/chikanda.jpeg",
            description: "A traditional Zambian dish made from ground wild orchid tubers, peanuts, and spices.",
            ingredients: [
                "500g Ground wild orchid tubers (sakalima)",
                "1 cup Ground peanuts",
                "1 Large Onion",
                "2 tablespoons Vegetable oil",
                "1 teaspoon Ground coriander",
                "1/2 teaspoon Ground cumin",
                "1/2 teaspoon Ground black pepper",
                "Salt to taste"
            ],
            instructions: [
                "In a large bowl, combine ground wild orchid tubers, ground peanuts, chopped onions, vegetable oil, ground coriander, ground cumin, ground black pepper, and salt.",
                "Mix well to form a thick paste.",
                "Divide the mixture into small portions and shape into balls or patties.",
                "Heat vegetable oil in a frying pan over medium heat. Fry chikanda patties until golden brown and cooked through, about 5-7 minutes per side.",
                "Serve hot or cold as a snack or appetizer."
            ]
        },
        {
            name: "Ifisashi",
            image: "assets/zambia/ifisashi.png",
            description: "A popular Zambian dish made from peanuts, spinach or other leafy greens, and spices.",
            ingredients: [
                "500g Spinach or Collard greens, chopped",
                "1 cup Ground peanuts",
                "2 Large Onions",
                "3 cloves Garlic",
                "1-2 Red chilli peppers",
                "1 cup Water",
                "2 tablespoons Vegetable oil",
                "1 teaspoon Ground cumin",
                "1 teaspoon Ground coriander",
                "Salt and pepper to taste"
            ],
            instructions: [
                "In a large pot, heat vegetable oil over medium heat. Add chopped onions, minced garlic, and chopped red chilli peppers. Cook until onions are translucent.",
                "Add ground peanuts, ground cumin, ground coriander, salt, and pepper. Stir well to combine.",
                "Add chopped spinach or collard greens and water. Stir to combine, cover, and simmer over low heat for 15-20 minutes or until greens are tender and cooked through.",
                "Serve hot as a side dish with nshima."
            ]
        },
        {
            name: "Zambia Peanut Chicken",
            image: "assets/zambia/peanut-chicken.jpg",
            description: "Chicken cooked in a rich peanut sauce, a flavorful dish enjoyed in Zambia.",
            ingredients: [
                "1 Whole Chicken, cut into pieces",
                "2 Large Onions",
                "4 cloves Garlic",
                "2 cups Ground peanuts",
                "3 tablespoons Vegetable oil",
                "2-3 Tomatoes, chopped",
                "2 cups Water",
                "1 teaspoon Paprika",
                "1 teaspoon Ground cumin",
                "Salt and pepper to taste"
            ],
            instructions: [
                "In a large pot, heat vegetable oil over medium heat. Add chopped onions and minced garlic, cook until softened.",
                "Add chicken pieces and brown on all sides.",
                "Add chopped tomatoes, ground peanuts, paprika, ground cumin, salt, and pepper. Stir well to combine.",
                "Add water, cover, and simmer over low heat for 45-60 minutes or until chicken is cooked through and sauce has thickened.",
                "Serve hot with nshima or rice."
            ]
        },
        {
            name: "Zambian Samosas",
            image: "assets/zambia/samosas.jpg",
            description: "Deep-fried pastry filled with spiced meat or vegetables, a popular snack in Zambia.",
            ingredients: [
                "For the dough:",
                "2 cups All-purpose flour",
                "1/2 teaspoon Salt",
                "1/4 cup Vegetable oil",
                "Water, as needed",
                "For the filling:",
                "300g Ground beef or Lamb",
                "1 Large Onion",
                "2 cloves Garlic",
                "1 teaspoon Ground cumin",
                "1 teaspoon Ground coriander",
                "1/2 teaspoon Ground turmeric",
                "1/2 teaspoon Ground cinnamon",
                "1/4 teaspoon Ground cloves",
                "1/4 teaspoon Ground nutmeg",
                "Salt and pepper to taste",
                "Vegetable oil for frying"
            ],
            instructions: [
                "To make the dough, combine flour and salt in a bowl. Gradually add vegetable oil, rubbing it into the flour until it resembles breadcrumbs.",
                "Gradually add water, a little at a time, kneading until a smooth dough forms. Cover and let rest for 30 minutes.",
                "For the filling, heat vegetable oil in a skillet over medium heat. Add chopped onions and minced garlic, cook until softened.",
                "Add ground beef or lamb, ground cumin, ground coriander, ground turmeric, ground cinnamon, ground cloves, ground nutmeg, salt, and pepper. Cook until meat is browned and cooked through. Remove from heat and let cool.",
                "Divide the dough into small balls. Roll out each ball into a thin circle.",
                "Place a spoonful of filling in the center of each dough circle. Fold over and seal edges with a fork or by crimping with your fingers.",
                "Heat vegetable oil in a deep pot or frying pan over medium-high heat. Fry samosas in batches until golden brown and crispy, about 3-4 minutes per side.",
                "Remove from oil and drain on paper towels. Serve hot as a snack or appetizer."
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