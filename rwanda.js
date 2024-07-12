const nigerianRecipes = [
    {
        name: "Akabenzi",
        image: "assets/rwanda/akabenzi.jpg",
        description: "A popular Rwandan dish made from pork, often grilled or fried with spices.",
        ingredients: [
            "1 kg pork belly, cut into chunks",
            "2 tbsp vegetable oil",
            "1 tbsp paprika",
            "1 tbsp garlic powder",
            "1 tbsp onion powder",
            "1 tsp cayenne pepper",
            "Salt to taste",
            "Lemon wedges for serving"
        ],
        instructions: [
            "Preheat the grill or frying pan to medium-high heat.",
            "In a large bowl, combine the pork chunks, oil, paprika, garlic powder, onion powder, cayenne pepper, and salt.",
            "Grill or fry the pork chunks until they are cooked through and crispy on the outside, about 15-20 minutes.",
            "Serve with lemon wedges."
        ]
    },
    {
        name: "Isombe",
        image: "assets/rwanda/isombe.jpeg",
        description: "A traditional Rwandan dish made from cassava leaves, often cooked with peanut butter and smoked fish.",
        ingredients: [
            "1 kg cassava leaves, finely chopped",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "200 g peanut butter",
            "200 g smoked fish, flaked",
            "2 tbsp vegetable oil",
            "Salt to taste"
        ],
        instructions: [
            "Heat the oil in a large pot over medium heat.",
            "Add the onions and tomatoes, and cook until softened.",
            "Add the cassava leaves and cook for about 10 minutes.",
            "Stir in the peanut butter and smoked fish, and cook for another 10-15 minutes.",
            "Season with salt to taste and serve."
        ]
    },
    {
        name: "Agatogo",
        image: "assets/rwanda/agatogo.jpg",
        description: "A traditional Rwandan plantain stew often cooked with meat or vegetables.",
        ingredients: [
            "4 green plantains, peeled and chopped",
            "500 g beef or chicken, cut into chunks",
            "2 onions, chopped",
            "3 tomatoes, chopped",
            "2 carrots, chopped",
            "2 tbsp vegetable oil",
            "1 tsp ground turmeric",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat the oil in a large pot over medium heat.",
            "Add the onions and cook until softened.",
            "Add the meat and cook until browned.",
            "Add the tomatoes, carrots, and plantains.",
            "Pour in enough water to cover the ingredients.",
            "Stir in the turmeric, salt, and pepper.",
            "Simmer for 30-40 minutes until the plantains and meat are tender."
        ]
    },
    {
        name: "Mizuzu",
        image: "assets/rwanda/mizuzu.jpg",
        description: "Deep-fried plantains, a popular Rwandan snack or side dish.",
        ingredients: [
            "4 ripe plantains, peeled and sliced",
            "Vegetable oil for frying",
            "Salt to taste"
        ],
        instructions: [
            "Heat the oil in a deep fryer or large skillet over medium-high heat.",
            "Fry the plantain slices in batches until golden brown and crispy.",
            "Drain on paper towels and season with salt."
        ]
    },
    {
        name: "Brochettes",
        image: "assets/rwanda/brochettes.jpg",
        description: "Rwandan-style grilled meat skewers, often served with vegetables.",
        ingredients: [
            "1 kg beef, goat, or chicken, cut into cubes",
            "2 bell peppers, cut into chunks",
            "1 onion, cut into chunks",
            "2 tbsp vegetable oil",
            "2 tbsp lemon juice",
            "1 tbsp paprika",
            "1 tbsp garlic powder",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a bowl, combine the meat, oil, lemon juice, paprika, garlic powder, salt, and pepper.",
            "Thread the meat onto skewers, alternating with chunks of bell pepper and onion.",
            "Grill over medium-high heat until the meat is cooked through and slightly charred, about 10-15 minutes.",
            "Serve immediately."
        ]
    },
    {
        name: "Umutsima",
        image: "assets/rwanda/umutsima.jpg",
        description: "A traditional Rwandan dish made from boiled cassava and maize.",
        ingredients: [
            "2 cups cassava flour",
            "2 cups maize flour",
            "4 cups water",
            "Salt to taste"
        ],
        instructions: [
            "In a large pot, bring the water to a boil.",
            "Gradually stir in the cassava and maize flour, reducing the heat to low.",
            "Cook, stirring constantly, until the mixture is thick and smooth.",
            "Season with salt to taste and serve."
        ]
    },
    {
        name: "Kachumbari",
        image: "assets/rwanda/kachumbari.jpg",
        description: "A fresh tomato and onion salad, popular in many East African countries.",
        ingredients: [
            "4 tomatoes, chopped",
            "1 onion, thinly sliced",
            "1 cucumber, chopped",
            "1 lemon, juiced",
            "2 tbsp chopped fresh cilantro",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine the tomatoes, onion, and cucumber.",
            "Drizzle with lemon juice and toss to coat.",
            "Stir in the cilantro and season with salt and pepper.",
            "Serve chilled."
        ]
    },
    {
        name: "Ubugali",
        image: "assets/rwanda/ubugali.jpg",
        description: "A staple food in Rwanda made from maize flour.",
        ingredients: [
            "2 cups maize flour",
            "4 cups water",
            "Salt to taste"
        ],
        instructions: [
            "In a large pot, bring the water to a boil.",
            "Gradually stir in the maize flour, reducing the heat to low.",
            "Cook, stirring constantly, until the mixture is thick and smooth.",
            "Season with salt to taste and serve."
        ]
    },
    {
        name: "Matoke",
        image: "assets/rwanda/matoke.jpeg",
        description: "A traditional Rwandan dish made from steamed or boiled plantains.",
        ingredients: [
            "6 green plantains, peeled and chopped",
            "1 onion, chopped",
            "3 tomatoes, chopped",
            "2 tbsp vegetable oil",
            "1 tsp ground turmeric",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat the oil in a large pot over medium heat.",
            "Add the onions and cook until softened.",
            "Add the tomatoes and cook until softened.",
            "Add the plantains and turmeric, and stir to coat.",
            "Pour in enough water to cover the plantains.",
            "Simmer for 20-30 minutes until the plantains are tender.",
            "Season with salt and pepper to taste and serve."
        ]
    },
    {
        name: "Beans and Avocados with Boiled Sweet Potatoes",
        image: "assets/rwanda/beans.jpg",
        description: "A nutritious Rwandan meal combining beans, avocados, and boiled sweet potatoes.",
        ingredients: [
            "2 cups dry beans, soaked overnight",
            "4 sweet potatoes, peeled and chopped",
            "2 avocados, sliced",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook the beans in a large pot of boiling water until tender, about 1 hour.",
            "In a separate pot, boil the sweet potatoes until tender, about 20-25 minutes.",
            "Heat the oil in a skillet over medium heat.",
            "Add the onions and tomatoes, and cook until softened.",
            "Drain the beans and add them to the skillet, stirring to combine.",
            "Season with salt and pepper to taste.",
            "Serve the beans and tomato mixture with boiled sweet potatoes and sliced avocados."
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