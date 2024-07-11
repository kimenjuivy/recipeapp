const nigerianRecipes = [
    {
        name: "Ugali",
        image: "assets/tanzania/ugali.jpg",
        description: "A staple Tanzanian dish made from maize flour (cornmeal) cooked into a stiff porridge.",
        ingredients: [
            "4 cups water",
            "2 cups maize flour (cornmeal)",
            "Salt to taste"
        ],
        instructions: [
            "Boil the water in a pot.",
            "Add a pinch of salt.",
            "Gradually add the maize flour while stirring continuously to prevent lumps.",
            "Continue stirring until the mixture thickens and pulls away from the sides of the pot.",
            "Serve hot with vegetables, meat, or fish."
        ]
    },
    {
        name: "Maharage",
        image: "assets/tanzania/maharage.jpg",
        description: "A Tanzanian dish made with red kidney beans cooked in a flavorful tomato and coconut milk sauce.",
        ingredients: [
            "2 cups red kidney beans, soaked overnight",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "2 tomatoes, chopped",
            "1 can coconut milk",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste",
            "Water"
        ],
        instructions: [
            "Boil the soaked beans in water until tender, then drain.",
            "In a pot, heat the oil and sauté the onions and garlic until golden.",
            "Add the tomatoes and cook until soft.",
            "Stir in the cooked beans and coconut milk.",
            "Season with salt and pepper, and simmer for 20 minutes.",
            "Serve hot with rice or ugali."
        ]
    },
    {
        name: "Pilau",
        image: "assets/tanzania/pilau.jpg",
        description: "A fragrant Tanzanian rice dish cooked with spices, meat, and vegetables.",
        ingredients: [
            "2 cups basmati rice",
            "500g beef or chicken, cut into cubes",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tomatoes, chopped",
            "2 tbsp vegetable oil",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "1 tsp ground cardamom",
            "1 cinnamon stick",
            "4 cups beef or chicken broth",
            "Salt to taste"
        ],
        instructions: [
            "In a pot, heat the oil and sauté the onions, garlic, and ginger until golden.",
            "Add the meat and cook until browned.",
            "Stir in the tomatoes and spices (cumin, coriander, cardamom, cinnamon stick).",
            "Add the rice and cook for 2 minutes, stirring frequently.",
            "Pour in the broth, season with salt, and bring to a boil.",
            "Reduce heat, cover, and simmer until the rice is cooked and the liquid is absorbed.",
            "Serve hot."
        ]
    },
    {
        name: "Octopus Coconut Curry",
        image: "assets/tanzania/octopus.jpg",
        description: "A rich and creamy Tanzanian curry made with octopus and coconut milk.",
        ingredients: [
            "1 kg octopus, cleaned and cut into pieces",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tomatoes, chopped",
            "1 can coconut milk",
            "2 tbsp vegetable oil",
            "1 tsp turmeric",
            "1 tsp ground coriander",
            "1 tsp ground cumin",
            "Salt and pepper to taste",
            "Lime wedges for serving"
        ],
        instructions: [
            "In a pot, heat the oil and sauté the onions, garlic, and ginger until fragrant.",
            "Add the tomatoes and cook until soft.",
            "Stir in the spices (turmeric, coriander, cumin) and cook for 1 minute.",
            "Add the octopus and cook for 5 minutes.",
            "Pour in the coconut milk, season with salt and pepper, and bring to a boil.",
            "Reduce heat and simmer until the octopus is tender.",
            "Serve hot with lime wedges."
        ]
    },
    {
        name: "Urojo",
        image: "assets/tanzania/urojo.jpg",
        description: "A popular Tanzanian soup, also known as Zanzibar Mix, made with a variety of ingredients including potatoes, chickpeas, and crispy fritters.",
        ingredients: [
            "2 potatoes, peeled and diced",
            "1 cup cooked chickpeas",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tomatoes, chopped",
            "4 cups vegetable broth",
            "2 tbsp flour",
            "1 tbsp curry powder",
            "Salt and pepper to taste",
            "Vegetable oil for frying",
            "Fritters for serving"
        ],
        instructions: [
            "In a pot, heat the oil and sauté the onions, garlic, and ginger until fragrant.",
            "Add the tomatoes and cook until soft.",
            "Stir in the flour and curry powder, and cook for 1 minute.",
            "Add the potatoes and vegetable broth, and bring to a boil.",
            "Reduce heat and simmer until the potatoes are tender.",
            "Add the cooked chickpeas and season with salt and pepper.",
            "Serve hot with fritters."
        ]
    },
    {
        name: "Red Snapper",
        image: "assets/tanzania/red_snapper.jpg",
        description: "A popular Tanzanian dish featuring grilled or fried red snapper seasoned with spices and served with a side of vegetables.",
        ingredients: [
            "1 whole red snapper, cleaned and scored",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "1 tbsp ground cumin",
            "1 tbsp ground coriander",
            "1 tsp ground turmeric",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste",
            "Lemon wedges for serving"
        ],
        instructions: [
            "In a bowl, mix the garlic, ginger, cumin, coriander, turmeric, oil, salt, and pepper.",
            "Rub the spice mixture all over the red snapper, including inside the cavity.",
            "Let marinate for 30 minutes.",
            "Grill or fry the fish until cooked through and crispy on the outside.",
            "Serve hot with lemon wedges and a side of vegetables."
        ]
    },
    {
        name: "Mandazi",
        image: "assets/tanzania/mandazi.jpg",
        description: "A popular Tanzanian fried dough snack, similar to doughnuts, flavored with coconut and cardamom.",
        ingredients: [
            "2 cups all-purpose flour",
            "1/2 cup sugar",
            "1 tsp ground cardamom",
            "1/2 cup coconut milk",
            "1 egg, beaten",
            "1 tsp baking powder",
            "Vegetable oil for frying",
            "Powdered sugar for dusting"
        ],
        instructions: [
            "In a bowl, mix the flour, sugar, cardamom, and baking powder.",
            "Add the coconut milk and beaten egg, and mix to form a dough.",
            "Roll out the dough on a floured surface and cut into triangles or squares.",
            "Heat the oil in a frying pan over medium heat.",
            "Fry the dough pieces until golden brown and crispy.",
            "Drain on paper towels and dust with powdered sugar before serving."
        ]
    },
    {
        name: "Mshikaki",
        image: "assets/tanzania/mshikaki.jpg",
        description: "Tanzanian skewers of marinated meat, typically beef or chicken, grilled to perfection.",
        ingredients: [
            "500g beef or chicken, cut into cubes",
            "2 tbsp soy sauce",
            "1 tbsp ground cumin",
            "1 tbsp ground coriander",
            "1 tsp ground paprika",
            "2 cloves garlic, minced",
            "1 tbsp vegetable oil",
            "Salt and pepper to taste",
            "Wooden skewers, soaked in water"
        ],
        instructions: [
            "In a bowl, mix the soy sauce, cumin, coriander, paprika, garlic, oil, salt, and pepper.",
            "Add the meat cubes and coat well with the marinade.",
            "Thread the meat onto the soaked skewers.",
            "Grill over medium heat until cooked through, turning occasionally.",
            "Serve hot."
        ]
    },
    {
        name: "Mchuzi wa Birigani",
        image: "assets/tanzania/mchuzi.jpg",
        description: "A Tanzanian eggplant stew made with tomatoes, onions, and spices.",
        ingredients: [
            "2 large eggplants, diced",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ground cumin",
            "1 tbsp ground coriander",
            "1 tsp ground turmeric",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a pot, heat the oil and sauté the onions and garlic until fragrant.",
            "Add the tomatoes and cook until soft.",
            "Stir in the spices (cumin, coriander, turmeric) and cook for 1 minute.",
            "Add the diced eggplant and cook until tender.",
            "Season with salt and pepper, and simmer for 10 minutes.",
            "Serve hot with rice or chapati."
        ]
    },
    {
        name: "Wali na Maharage",
        image: "assets/tanzania/wali.jpg",
        description: "A Tanzanian dish consisting of rice cooked with coconut milk and served with a savory bean stew.",
        ingredients: [
            "2 cups basmati rice",
            "1 can coconut milk",
            "2 cups water",
            "1/2 tsp salt",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "2 tomatoes, chopped",
            "2 cups red kidney beans, soaked overnight and cooked",
            "1 tbsp vegetable oil",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a pot, bring the coconut milk, water, and salt to a boil.",
            "Add the rice, reduce the heat, cover, and simmer until the rice is cooked and the liquid is absorbed.",
            "In another pot, heat the oil and sauté the onions and garlic until golden.",
            "Add the tomatoes and cook until soft.",
            "Stir in the cooked beans, cumin, and coriander.",
            "Season with salt and pepper, and simmer for 10 minutes.",
            "Serve the coconut rice (wali) with the bean stew (maharage)."
        ]
    },
    {
        name: "Mchuzi wa Samaki",
        image: "assets/tanzania/mchuzi wa.jpg",
        description: "A Tanzanian fish stew cooked in a flavorful tomato and coconut milk sauce.",
        ingredients: [
            "1 kg fish fillets (such as tilapia or snapper), cut into pieces",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tomatoes, chopped",
            "1 can coconut milk",
            "2 tbsp vegetable oil",
            "1 tsp ground turmeric",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "Salt and pepper to taste",
            "Lemon wedges for serving"
        ],
        instructions: [
            "In a pot, heat the oil and sauté the onions, garlic, and ginger until fragrant.",
            "Add the tomatoes and cook until soft.",
            "Stir in the spices (turmeric, cumin, coriander) and cook for 1 minute.",
            "Add the fish pieces and cook for 5 minutes.",
            "Pour in the coconut milk, season with salt and pepper, and bring to a boil.",
            "Reduce heat and simmer until the fish is cooked through.",
            "Serve hot with lemon wedges."
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