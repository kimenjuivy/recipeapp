const nigerianRecipes = [
    {
        name: "Matapa",
        image: "assets/mozambique/matapa.jpg",
        description: "A traditional Mozambican dish made from cassava leaves, ground peanuts, coconut milk, and spices.",
        ingredients: [
            "500g Cassava leaves",
            "1 cup Ground peanuts",
            "400ml Coconut milk",
            "2 Large Onions",
            "3 cloves Garlic",
            "1-2 Red chilli peppers",
            "1 teaspoon Ground paprika",
            "Salt to taste",
            "500g Shrimp or Fish (optional)",
            "2 tablespoons Palm oil"
        ],
        instructions: [
            "In a large pot, heat palm oil over medium heat. Add chopped onions, minced garlic, and chopped red chilli peppers. Cook until onions are translucent.",
            "Add ground peanuts and cook, stirring frequently, for about 5 minutes.",
            "Add cassava leaves and continue cooking for another 5 minutes.",
            "Pour in coconut milk, add ground paprika, salt, and optional shrimp or fish. Stir well to combine.",
            "Cover and simmer over low heat for 30-40 minutes, stirring occasionally, until cassava leaves are tender and the sauce has thickened.",
            "Serve hot with rice or cornmeal porridge (xima)."
        ]
    },
    {
        name: "Peri-Peri Chicken",
        image: "assets/mozambique/peri-peri-chicken.jpg",
        description: "Spicy grilled chicken marinated in peri-peri sauce, a traditional Mozambican spicy sauce.",
        ingredients: [
            "1 Whole chicken, cut into pieces",
            "4-5 Red chilli peppers",
            "4 cloves Garlic",
            "1 Lemon, juiced",
            "1/4 cup Vegetable oil",
            "1 teaspoon Paprika",
            "1 teaspoon Ground cumin",
            "1 teaspoon Ground coriander",
            "1 teaspoon Salt",
            "1/2 teaspoon Black pepper"
        ],
        instructions: [
            "In a blender, combine red chilli peppers (adjust quantity based on desired spiciness), garlic cloves, lemon juice, vegetable oil, paprika, ground cumin, ground coriander, salt, and black pepper.",
            "Blend until smooth to make peri-peri sauce.",
            "Marinate chicken pieces in peri-peri sauce for at least 2 hours or overnight in the refrigerator.",
            "Preheat grill to medium-high heat. Grill chicken pieces, turning occasionally, until cooked through and juices run clear, about 20-25 minutes.",
            "Serve hot with a side of rice or salad."
        ]
    },
    {
        name: "Chamussas",
        image: "assets/mozambique/chamussas.jpg",
        description: "Deep-fried pastry filled with spiced meat or vegetables, popular as a snack in Mozambique.",
        ingredients: [
            "For the dough:",
            "2 cups All-purpose flour",
            "1/2 teaspoon Salt",
            "1/2 cup Water",
            "2 tablespoons Vegetable oil",
            "For the filling:",
            "300g Ground beef or Lamb",
            "1 Large Onion",
            "2 cloves Garlic",
            "1 teaspoon Ground cumin",
            "1 teaspoon Ground coriander",
            "1/2 teaspoon Ground cinnamon",
            "1/4 teaspoon Ground cloves",
            "1/4 teaspoon Ground nutmeg",
            "Salt and pepper to taste",
            "Vegetable oil for frying"
        ],
        instructions: [
            "To make the dough, combine flour and salt in a bowl. Gradually add water and vegetable oil, kneading until a smooth dough forms. Cover and let rest for 30 minutes.",
            "For the filling, heat vegetable oil in a skillet over medium heat. Add chopped onions and minced garlic, cook until softened.",
            "Add ground beef or lamb, ground cumin, ground coriander, ground cinnamon, ground cloves, ground nutmeg, salt, and pepper. Cook until meat is browned and cooked through. Remove from heat and let cool.",
            "Divide the dough into small balls. Roll out each ball into a thin circle.",
            "Place a spoonful of filling in the center of each dough circle. Fold over and seal edges with a fork or by crimping with your fingers.",
            "Heat vegetable oil in a deep pot or frying pan over medium-high heat. Fry chamussas in batches until golden brown and crispy, about 3-4 minutes per side.",
            "Remove from oil and drain on paper towels. Serve hot as a snack or appetizer."
        ]
    },
    {
        name: "Feijoada",
        image: "assets/mozambique/feijoada.jpg",
        description: "A hearty bean stew with pork, sausage, and spices, influenced by Portuguese cuisine.",
        ingredients: [
            "500g Black beans",
            "300g Pork shoulder or ribs, diced",
            "200g Chorizo sausage, sliced",
            "2 Large Onions",
            "4 cloves Garlic",
            "2 Bay leaves",
            "1 teaspoon Ground paprika",
            "1 teaspoon Ground cumin",
            "Salt and pepper to taste",
            "2 tablespoons Vegetable oil",
            "500ml Water"
        ],
        instructions: [
            "Soak black beans in water overnight. Drain and rinse.",
            "In a large pot, heat vegetable oil over medium heat. Add chopped onions and minced garlic, cook until softened.",
            "Add diced pork shoulder or ribs, sliced chorizo sausage, bay leaves, ground paprika, ground cumin, salt, and pepper. Cook until meat is browned.",
            "Add soaked black beans and water. Bring to a boil, then reduce heat and simmer for 2-3 hours or until beans are tender and stew has thickened.",
            "Serve hot with rice and garnish with fresh parsley or cilantro."
        ]
    },
    {
        name: "Piri-Piri Prawns",
        image: "assets/mozambique/piri-piri-prawns.jpg",
        description: "Grilled prawns marinated in spicy piri-piri sauce, a favorite seafood dish in Mozambique.",
        ingredients: [
            "500g Large prawns, peeled and deveined",
            "4-5 Red chilli peppers",
            "4 cloves Garlic",
            "1 Lemon, juiced",
            "1/4 cup Olive oil",
            "1 teaspoon Paprika",
            "1 teaspoon Ground cumin",
            "1 teaspoon Salt",
            "1/2 teaspoon Black pepper"
        ],
        instructions: [
            "In a blender, combine red chilli peppers (adjust quantity based on desired spiciness), garlic cloves, lemon juice, olive oil, paprika, ground cumin, salt, and black pepper.",
            "Blend until smooth to make piri-piri sauce.",
            "Marinate prawns in piri-piri sauce for at least 30 minutes in the refrigerator.",
            "Preheat grill to medium-high heat. Grill prawns for 2-3 minutes per side or until cooked through and slightly charred.",
            "Serve hot with lemon wedges and a side of rice or vegetables."
        ]
    },
    {
        name: "Xima",
        image: "assets/mozambique/xima.jpg",
        description: "A staple food in Mozambique made from maize flour (cornmeal), served as a side dish with various stews and sauces.",
        ingredients: [
            "2 cups Maize flour (cornmeal)",
            "4 cups Water",
            "Salt to taste"
        ],
        instructions: [
            "Bring water to a boil in a large pot.",
            "Gradually add maize flour to boiling water, stirring constantly to prevent lumps.",
            "Reduce heat to low and continue stirring until mixture thickens and pulls away from the sides of the pot, about 10-15 minutes.",
            "Cover and let simmer for an additional 5 minutes.",
            "Remove from heat and let rest for a few minutes before serving.",
            "Serve hot as a side dish with stews or sauces."
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