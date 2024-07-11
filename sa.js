const nigerianRecipes = [
    {
        name: "Biltong & Droewors",
        image: "assets/sa/bil.jpg",
        description: "A traditional South African cured meat snack, similar to beef jerky.",
        ingredients: [
            "1 kg lean beef",
            "1/2 cup brown sugar",
            "2 tbsp coarse salt",
            "1 tbsp ground coriander",
            "1 tsp ground black pepper",
            "1 tsp baking soda",
            "1/2 cup red wine vinegar"
        ],
        instructions: [
            "Cut the beef into strips about 1 inch thick.",
            "Mix the brown sugar, salt, coriander, black pepper, and baking soda in a bowl.",
            "Rub the spice mixture into the beef strips.",
            "Place the beef strips in a shallow dish and pour the red wine vinegar over them.",
            "Cover and refrigerate for 24 hours.",
            "Hang the beef strips in a cool, dry place for 5-7 days, until dry and slightly leathery.",
            "Slice thinly and enjoy as a snack."
        ]
    },
    {
        name: "Boerewors",
        image: "assets/sa/boer.jpg",
        description: "A traditional South African sausage made from beef, lamb, and spices.",
        ingredients: [
            "1 kg beef",
            "500 g pork",
            "500 g lamb",
            "25 g salt",
            "5 g ground black pepper",
            "5 g ground coriander",
            "1 g ground cloves",
            "1 g ground nutmeg",
            "2 g ground allspice",
            "200 ml vinegar",
            "100 ml water",
            "Sausage casings"
        ],
        instructions: [
            "Grind the beef, pork, and lamb together.",
            "Mix in the salt, pepper, coriander, cloves, nutmeg, and allspice.",
            "Add the vinegar and water and mix thoroughly.",
            "Stuff the mixture into sausage casings.",
            "Grill or fry the sausages until cooked through."
        ]
    },
    {
        name: "Cape Malay Curry",
        image: "assets/sa/cape.png",
        description: "A fragrant and mildly spiced curry from the Cape Malay community.",
        ingredients: [
            "500 g lamb, cubed",
            "2 tbsp vegetable oil",
            "2 onions, finely chopped",
            "3 cloves garlic, minced",
            "1 tbsp grated ginger",
            "2 tbsp curry powder",
            "1 tbsp ground coriander",
            "1 tbsp ground cumin",
            "1 tsp ground turmeric",
            "1 cinnamon stick",
            "2 tomatoes, chopped",
            "1 cup coconut milk",
            "1 cup chicken stock",
            "2 potatoes, cubed",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat the oil in a large pot and brown the lamb cubes.",
            "Remove the lamb and set aside.",
            "In the same pot, sauté the onions, garlic, and ginger until softened.",
            "Add the curry powder, coriander, cumin, turmeric, and cinnamon stick and cook for 2 minutes.",
            "Add the tomatoes, coconut milk, and chicken stock and bring to a boil.",
            "Return the lamb to the pot, add the potatoes, and season with salt and pepper.",
            "Simmer for 45 minutes to 1 hour, until the lamb is tender and the potatoes are cooked.",
            "Serve with rice or roti."
        ]
    },
    {
        name: "Malva Pudding",
        image: "assets/sa/malva.jpg",
        description: "A sweet and sticky baked dessert pudding of Cape Dutch origin.",
        ingredients: [
            "1 cup flour",
            "1 cup sugar",
            "1 tbsp apricot jam",
            "1 tsp baking soda",
            "1 cup milk",
            "1 tbsp vinegar",
            "2 tbsp butter",
            "1 egg",
            "1 tsp vanilla extract",
            "Pinch of salt"
        ],
        instructions: [
            "Preheat the oven to 180°C (350°F).",
            "Cream the butter and sugar together until light and fluffy.",
            "Beat in the egg, apricot jam, and vanilla extract.",
            "Mix the milk and vinegar together and add to the mixture.",
            "Sift the flour, baking soda, and salt together and fold into the wet mixture.",
            "Pour into a greased baking dish and bake for 30-40 minutes, until golden brown.",
            "Serve warm with custard or ice cream."
        ]
    },
    {
        name: "Chakalaka & Pap",
        image: "assets/sa/chakalaka.jpg",
        description: "A spicy vegetable relish usually served with pap, a traditional maize porridge.",
        ingredients: [
            "1 onion, chopped",
            "2 bell peppers, chopped",
            "2 carrots, grated",
            "2 tomatoes, chopped",
            "1 can baked beans",
            "2 tbsp vegetable oil",
            "2 tsp curry powder",
            "1 tsp ground coriander",
            "1 tsp ground cumin",
            "Salt and pepper to taste",
            "1 cup maize meal",
            "4 cups water",
            "Pinch of salt"
        ],
        instructions: [
            "Heat the oil in a large pan and sauté the onion and bell peppers until softened.",
            "Add the carrots, tomatoes, curry powder, coriander, and cumin, and cook for 5 minutes.",
            "Stir in the baked beans and simmer for 10 minutes. Season with salt and pepper.",
            "In a separate pot, bring the water to a boil and add a pinch of salt.",
            "Gradually stir in the maize meal, reduce the heat, and cook for 30 minutes, stirring occasionally, until thickened.",
            "Serve the chakalaka over the pap."
        ]
    },
    {
        name: "Braai/Shisa Nyama",
        image: "assets/sa/braai.jpg",
        description: "A South African barbecue, traditionally involving grilling meat over an open flame.",
        ingredients: [
            "1 kg beef ribs",
            "1 kg lamb chops",
            "1 kg boerewors",
            "1/4 cup olive oil",
            "2 cloves garlic, minced",
            "2 tbsp barbecue spice",
            "1 tbsp ground black pepper",
            "Salt to taste"
        ],
        instructions: [
            "Mix the olive oil, garlic, barbecue spice, black pepper, and salt in a bowl.",
            "Rub the marinade over the beef ribs, lamb chops, and boerewors.",
            "Heat the grill to medium-high and cook the meat until done to your liking, turning occasionally.",
            "Serve with salads, bread rolls, and sauces."
        ]
    },
    {
        name: "Bunny Chow",
        image: "assets/sa/bunny.jpg",
        description: "A hollowed-out loaf of bread filled with curry, originally from Durban.",
        ingredients: [
            "1 loaf of white bread",
            "500 g chicken, cubed",
            "2 tbsp vegetable oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp grated ginger",
            "2 tbsp curry powder",
            "1 can chopped tomatoes",
            "1 cup chicken stock",
            "1 cup potatoes, cubed",
            "Salt and pepper to taste",
            "Fresh coriander for garnish"
        ],
        instructions: [
            "Heat the oil in a pot and sauté the onion, garlic, and ginger until softened.",
            "Add the chicken and curry powder, and cook until the chicken is browned.",
            "Stir in the tomatoes, chicken stock, and potatoes. Season with salt and pepper.",
            "Simmer for 30 minutes, until the chicken and potatoes are cooked through.",
            "Cut the loaf of bread in half and hollow out the center.",
            "Fill the hollowed bread with the curry and garnish with fresh coriander.",
            "Serve immediately."
        ]
    },
    {
        name: "Amarula Don Pedro",
        image: "assets/sa/amarula.jpg",
        description: "A South African creamy cocktail dessert made with Amarula liqueur.",
        ingredients: [
            "4 scoops vanilla ice cream",
            "100 ml Amarula liqueur",
            "50 ml fresh cream",
            "Grated chocolate for garnish"
        ],
        instructions: [
            "Blend the ice cream, Amarula liqueur, and fresh cream together until smooth.",
            "Pour into glasses and garnish with grated chocolate.",
            "Serve immediately."
        ]
    },
    {
        name: "Bobotie",
        image: "assets/sa/bobotie.jpg",
        description: "A South African dish consisting of spiced minced meat baked with an egg-based topping.",
        ingredients: [
            "1 kg minced beef",
            "2 onions, chopped",
            "2 cloves garlic, minced",
            "2 tbsp curry powder",
            "1 slice white bread, soaked in milk",
            "1/4 cup raisins",
            "1/4 cup chutney",
            "2 tbsp lemon juice",
            "2 eggs",
            "1 cup milk",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat the oven to 180°C (350°F).",
            "In a large pan, sauté the onions and garlic until softened.",
            "Add the minced beef and curry powder, and cook until browned.",
            "Squeeze the milk from the bread and crumble it into the pan.",
            "Stir in the raisins, chutney, and lemon juice. Season with salt and pepper.",
            "Transfer the mixture to a baking dish.",
            "Beat the eggs with the milk and pour over the meat mixture.",
            "Bake for 45 minutes until the topping is set and golden brown."
        ]
    },
    {
        name: "Melkert",
        image: "assets/sa/melktert.jpg",
        description: "A traditional South African tart made with a sweetened almond filling.",
        ingredients: [
            "1 cup ground almonds",
            "1 cup sugar",
            "2 tbsp butter, softened",
            "2 large eggs",
            "1/2 cup cream",
            "1/2 tsp almond extract",
            "1/2 tsp vanilla extract",
            "1 sheet puff pastry, thawed",
            "Icing sugar, for dusting"
        ],
        instructions: [
            "Preheat the oven to 180°C (350°F).",
            "In a bowl, cream together the ground almonds, sugar, and butter.",
            "Add the eggs one at a time, mixing well after each addition.",
            "Stir in the cream, almond extract, and vanilla extract until well combined.",
            "Roll out the puff pastry and line a tart tin with it.",
            "Pour the almond mixture into the pastry case.",
            "Bake for 30-35 minutes until the filling is set and the pastry is golden brown.",
            "Allow to cool before dusting with icing sugar."
        ]
    },
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