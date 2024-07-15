const nigerianRecipes = [
    {
        name: "Kapana",
        image: "assets/namibia/kapana.jpg",
        description: "A popular street food consisting of grilled meat, usually beef, cut into small pieces.",
        ingredients: [
            "1 kg beef, cut into small cubes",
            "2 tbsp vegetable oil",
            "2 tsp paprika",
            "1 tsp cayenne pepper",
            "1 tsp garlic powder",
            "Salt and black pepper to taste",
            "Tomato and onion salsa for serving"
        ],
        instructions: [
            "Mix paprika, cayenne, garlic powder, salt, and black pepper in a bowl.",
            "Toss beef cubes with oil and spice mixture.",
            "Grill meat on high heat for 2-3 minutes per side until cooked and slightly charred.",
            "Serve hot with tomato and onion salsa on the side.",
            "Traditionally eaten by hand as a snack or light meal."
        ]
    },
    {
        name: "Potjiekos",
        image: "assets/namibia/potjiekos.webp",
        description: "A traditional meat and vegetable stew slow-cooked in a cast-iron pot over an open fire.",
        ingredients: [
            "1 kg beef or lamb, cubed",
            "2 onions, chopped",
            "3 potatoes, cubed",
            "2 carrots, sliced",
            "2 tomatoes, chopped",
            "1 cup green beans",
            "2 tbsp vegetable oil",
            "2 cups beef broth",
            "1 tsp thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a potjie (cast-iron pot) and brown the meat.",
            "Add onions and cook until softened.",
            "Layer vegetables on top of the meat, starting with potatoes, then carrots, green beans, and tomatoes.",
            "Pour in beef broth, add thyme, salt, and pepper.",
            "Cover and simmer over low heat for 2-3 hours, without stirring.",
            "Serve hot, traditionally with rice or pap (maize porridge)."
        ]
    },
    {
        name: "Oshifima",
        image: "assets/namibia/oshifima.jpg",
        description: "A staple food in northern Namibia, similar to polenta or grits, often served with meat stews.",
        ingredients: [
            "2 cups mahangu (pearl millet) flour or cornmeal",
            "4 cups water",
            "1 tsp salt"
        ],
        instructions: [
            "Bring 3 cups of water to a boil in a pot.",
            "Mix 1 cup of flour with 1 cup of cold water to form a paste.",
            "Slowly pour the paste into the boiling water, stirring constantly.",
            "Reduce heat and gradually add remaining flour, stirring vigorously to avoid lumps.",
            "Cook for 15-20 minutes, stirring occasionally, until thick and smooth.",
            "Shape into a mound and serve with stew or sauce."
        ]
    },
    {
        name: "Mopane Worms",
        image: "assets/namibia/mopane_worms.webp",
        description: "A traditional protein-rich snack made from dried caterpillars of the emperor moth.",
        ingredients: [
            "2 cups dried mopane worms",
            "2 tbsp vegetable oil",
            "1 onion, chopped",
            "1 tomato, chopped",
            "Salt and pepper to taste",
            "Chili powder (optional)"
        ],
        instructions: [
            "Rehydrate dried mopane worms in warm water for 30 minutes, then drain.",
            "Heat oil in a pan and sauté onions until golden.",
            "Add tomatoes and cook for a few minutes.",
            "Add mopane worms and cook for 5-10 minutes.",
            "Season with salt, pepper, and chili powder if desired.",
            "Serve hot as a snack or side dish."
        ]
    },
    {
        name: "Vetkoek",
        image: "assets/namibia/vetkoek.jpg",
        description: "A traditional fried dough bread, often filled with ground meat or served with jam.",
        ingredients: [
            "4 cups all-purpose flour",
            "2 tsp instant yeast",
            "1 tsp salt",
            "1 tbsp sugar",
            "1 1/2 cups warm water",
            "Vegetable oil for frying",
            "Ground meat or jam for filling (optional)"
        ],
        instructions: [
            "Mix flour, yeast, salt, and sugar in a bowl.",
            "Gradually add warm water, kneading to form a soft dough.",
            "Cover and let rise for 30 minutes.",
            "Heat oil in a deep pan or pot.",
            "Divide dough into small balls and flatten slightly.",
            "Fry in hot oil until golden brown on both sides.",
            "Drain on paper towels.",
            "Serve hot, either plain or filled with ground meat or jam."
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