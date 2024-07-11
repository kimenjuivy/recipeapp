const nigerianRecipes = [
    {
        name: "B’ssara",
        image: "assets/morocco/bssara.jpg",
        description: "A rich and flavorful Moroccan soup made from dried broad beans.",
        ingredients: [
            "500g dried fava beans",
            "4 cloves garlic, minced",
            "1 tsp cumin",
            "1 tsp paprika",
            "1/4 cup olive oil",
            "Salt to taste",
            "Water",
            "Olive oil and paprika for serving"
        ],
        instructions: [
            "Soak the fava beans overnight in water.",
            "Drain the beans and place them in a pot with garlic and enough water to cover.",
            "Cook until the beans are tender.",
            "Blend the beans until smooth and return to the pot.",
            "Add cumin, paprika, and salt, and simmer for 10 minutes.",
            "Serve hot, drizzled with olive oil and sprinkled with paprika."
        ]
    },
    {
        name: "Tagine",
        image: "assets/morocco/tagine.jpg",
        description: "A traditional Moroccan slow-cooked stew made with meat, vegetables, and spices.",
        ingredients: [
            "1 kg lamb or chicken, cut into pieces",
            "2 onions, sliced",
            "3 cloves garlic, minced",
            "2 tsp ground ginger",
            "1 tsp ground cinnamon",
            "1 tsp ground turmeric",
            "1 tsp ground cumin",
            "1/2 tsp ground black pepper",
            "1/2 tsp ground paprika",
            "1/4 tsp ground saffron",
            "1/4 cup olive oil",
            "1 cup water",
            "Salt to taste",
            "Vegetables (carrots, potatoes, zucchini)",
            "Dried fruits (apricots, prunes)"
        ],
        instructions: [
            "In a tagine or heavy pot, heat the olive oil and sauté the onions and garlic.",
            "Add the meat and brown on all sides.",
            "Stir in the spices and mix well.",
            "Add water, cover, and simmer for 1 hour.",
            "Add vegetables and dried fruits, and cook for another 30 minutes until everything is tender.",
            "Serve hot with couscous or bread."
        ]
    },
    {
        name: "Fish Chermoula",
        image: "assets/morocco/fish_chermoula.jpg",
        description: "A zesty marinade made with herbs, garlic, lemon, and spices, used to flavor fish.",
        ingredients: [
            "4 fish fillets",
            "1 cup fresh cilantro, chopped",
            "1 cup fresh parsley, chopped",
            "4 cloves garlic, minced",
            "1 tsp paprika",
            "1 tsp ground cumin",
            "1/2 tsp cayenne pepper",
            "1/2 tsp ground coriander",
            "1/4 cup olive oil",
            "Juice of 1 lemon",
            "Salt to taste"
        ],
        instructions: [
            "In a bowl, mix together the cilantro, parsley, garlic, paprika, cumin, cayenne, coriander, olive oil, lemon juice, and salt.",
            "Rub the marinade over the fish fillets and let marinate for at least 1 hour.",
            "Grill or bake the fish until cooked through.",
            "Serve hot with extra chermoula on the side."
        ]
    },
    {
        name: "Harira",
        image: "assets/morocco/harira.jpg",
        description: "A hearty Moroccan soup made with tomatoes, lentils, chickpeas, and lamb.",
        ingredients: [
            "200g lamb, cut into small pieces",
            "1 cup lentils",
            "1 cup chickpeas, soaked overnight",
            "2 onions, chopped",
            "4 tomatoes, peeled and chopped",
            "1/2 cup chopped celery",
            "1/2 cup chopped cilantro",
            "1/2 cup chopped parsley",
            "2 tbsp tomato paste",
            "1 tsp ground turmeric",
            "1 tsp ground ginger",
            "1 tsp ground cinnamon",
            "1/2 tsp ground black pepper",
            "Salt to taste",
            "2 tbsp flour",
            "Water"
        ],
        instructions: [
            "In a large pot, sauté the onions and lamb until browned.",
            "Add the lentils, chickpeas, tomatoes, celery, cilantro, parsley, tomato paste, and spices.",
            "Add water to cover and bring to a boil.",
            "Reduce heat and simmer for 1 hour.",
            "Mix the flour with water to make a smooth paste and add to the soup.",
            "Simmer for another 30 minutes until the soup thickens.",
            "Serve hot, garnished with extra cilantro and parsley."
        ]
    },
    {
        name: "Kefta Tagine",
        image: "assets/morocco/kefta_tagine.jpg",
        description: "A Moroccan meatball dish cooked in a tomato and spice sauce, often with eggs.",
        ingredients: [
            "500g ground beef or lamb",
            "1 onion, grated",
            "1/2 cup chopped parsley",
            "1/2 cup chopped cilantro",
            "1 tsp ground cumin",
            "1 tsp ground paprika",
            "Salt and pepper to taste",
            "3 tomatoes, chopped",
            "2 cloves garlic, minced",
            "1 tsp ground cinnamon",
            "1/2 tsp ground ginger",
            "1/4 tsp ground saffron",
            "4 eggs (optional)",
            "Olive oil"
        ],
        instructions: [
            "In a bowl, mix the ground meat with the grated onion, parsley, cilantro, cumin, paprika, salt, and pepper.",
            "Form into small meatballs.",
            "In a tagine or heavy pot, heat the olive oil and sauté the garlic.",
            "Add the tomatoes and spices, and cook until the tomatoes break down.",
            "Add the meatballs and cover with the sauce.",
            "Simmer for 30 minutes until the meatballs are cooked through.",
            "If using eggs, crack them over the top and cook until set.",
            "Serve hot with bread."
        ]
    },
    {
        name: "Couscous",
        image: "assets/morocco/couscous.jpg",
        description: "A staple Moroccan dish made from steamed semolina grains, often served with meat and vegetables.",
        ingredients: [
            "2 cups couscous",
            "2 cups water",
            "2 tbsp olive oil",
            "1/2 tsp salt",
            "Vegetables (carrots, zucchini, bell peppers)",
            "Meat or chickpeas (optional)",
            "Spices (cumin, coriander, turmeric)"
        ],
        instructions: [
            "In a pot, bring water to a boil with olive oil and salt.",
            "Remove from heat, stir in couscous, and cover.",
            "Let sit for 5 minutes, then fluff with a fork.",
            "In a separate pan, sauté vegetables and meat (if using) with spices until cooked.",
            "Serve the couscous topped with the vegetable and meat mixture."
        ]
    },
    {
        name: "Makouda",
        image: "assets/morocco/makouda.jpg",
        description: "Deep-fried potato cakes, crispy on the outside and soft on the inside.",
        ingredients: [
            "4 large potatoes, boiled and mashed",
            "2 eggs",
            "1/2 cup chopped parsley",
            "1/2 cup chopped cilantro",
            "2 cloves garlic, minced",
            "1 tsp ground cumin",
            "Salt and pepper to taste",
            "Flour for coating",
            "Oil for frying"
        ],
        instructions: [
            "In a bowl, mix the mashed potatoes with eggs, parsley, cilantro, garlic, cumin, salt, and pepper.",
            "Form into small patties and coat with flour.",
            "Heat oil in a pan and fry the patties until golden brown.",
            "Drain on paper towels and serve hot."
        ]
    },
    {
        name: "Zaalouk",
        image: "assets/morocco/zaalouk.jpg",
        description: "A flavorful Moroccan eggplant and tomato salad.",
        ingredients: [
            "2 large eggplants",
            "4 tomatoes, chopped",
            "4 cloves garlic, minced",
            "1/4 cup olive oil",
            "1 tsp ground cumin",
            "1 tsp paprika",
            "1/2 tsp ground coriander",
            "Salt to taste",
            "Chopped cilantro and parsley for garnish"
        ],
        instructions: [
            "Roast or grill the eggplants until the skin is charred and the flesh is soft.",
            "Peel and chop the eggplants.",
            "In a pan, heat the olive oil and sauté the garlic.",
            "Add the tomatoes and cook until softened.",
            "Add the eggplant, cumin, paprika, coriander, and salt, and cook for 10 minutes.",
            "Mash the mixture until smooth and cook for another 10 minutes.",
            "Serve warm or cold, garnished with cilantro and parsley."
        ]
    },
    {
        name: "B’stilla",
        image: "assets/morocco/nstilla.jpg",
        description: "A savory Moroccan pie made with layers of thin pastry, spiced meat, and almonds.",
        ingredients: [
            "1 whole chicken, cooked and shredded",
            "2 onions, chopped",
            "1/2 cup chopped parsley",
            "1/2 cup chopped cilantro",
            "4 eggs, beaten",
            "1/2 cup ground almonds",
            "1/2 cup sugar",
            "1 tsp ground cinnamon",
            "1 tsp ground ginger",
            "1/4 tsp ground saffron",
            "1/4 cup butter, melted",
            "8 sheets phyllo pastry",
            "Powdered sugar and cinnamon for dusting",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large pan, sauté the onions until translucent.",
            "Add the shredded chicken, parsley, cilantro, and spices (ginger, cinnamon, saffron).",
            "Cook for 10 minutes, then stir in the beaten eggs and cook until set.",
            "In a separate bowl, mix the ground almonds with sugar and a pinch of cinnamon.",
            "Brush a pie dish with melted butter and layer 4 sheets of phyllo pastry, brushing each with butter.",
            "Add half of the chicken mixture, then sprinkle with half of the almond mixture.",
            "Layer 2 more sheets of phyllo, then add the remaining chicken and almond mixtures.",
            "Top with the last 2 sheets of phyllo, tucking the edges under and brushing with butter.",
            "Bake at 180°C (350°F) for 30-40 minutes until golden brown.",
            "Dust with powdered sugar and cinnamon before serving."
        ]
    },
    {
        name: "Mint Tea",
        image: "assets/morocco/mint_tea.jpg",
        description: "A refreshing Moroccan tea made with green tea, fresh mint, and sugar.",
        ingredients: [
            "1 tbsp green tea leaves",
            "1 bunch fresh mint",
            "1/4 cup sugar",
            "4 cups boiling water"
        ],
        instructions: [
            "Rinse the tea leaves with a little boiling water and discard the rinse water.",
            "Add the tea leaves to a teapot with the mint and sugar.",
            "Pour in the boiling water and let steep for 5 minutes.",
            "Pour the tea into a glass and then return it to the teapot (repeat this a few times to mix well).",
            "Serve hot, garnished with additional mint leaves if desired."
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