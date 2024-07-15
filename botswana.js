const nigerianRecipes = [
    {
        name: "Seswaa",
        image: "assets/botswana/seswaa.jpeg",
        description: "Botswana's national dish, a simple but flavorful shredded beef stew often served at special occasions and ceremonies.",
        ingredients: [
            "1 kg beef (preferably chuck or brisket), cut into large pieces",
            "Water, enough to cover the meat",
            "Salt to taste"
        ],
        instructions: [
            "Place beef in a large pot and cover with water. Bring to a boil.",
            "Reduce heat and simmer for 2-3 hours until meat is very tender.",
            "Remove meat from the pot and shred it using forks.",
            "Return shredded meat to the pot and continue cooking until liquid evaporates.",
            "Add salt to taste and pound the meat lightly to further break it down.",
            "Serve hot with pap (maize porridge) or samp."
        ]
    },
    {
        name: "Bogobe",
        image: "assets/botswana/bogobr.jpg",
        description: "A staple porridge made from sorghum or millet, often served with meat stews or vegetable sides.",
        ingredients: [
            "2 cups sorghum meal or millet meal",
            "4 cups water",
            "1 tsp salt"
        ],
        instructions: [
            "Bring water to a boil in a large pot.",
            "Gradually stir in the sorghum or millet meal, whisking to prevent lumps.",
            "Reduce heat and simmer, stirring frequently, for about 30 minutes.",
            "Add salt and continue cooking until the porridge is thick and smooth.",
            "Serve hot with stew, meat, or vegetables."
        ]
    },
    {
        name: "Dikgobe",
        image: "assets/botswana/dikgobe.jpeg",
        description: "A hearty dish made from a mixture of beans and sorghum or corn, often served with meat.",
        ingredients: [
            "1 cup sorghum or corn kernels",
            "1 cup beans (any variety)",
            "1 onion, chopped",
            "2 tbsp vegetable oil",
            "Salt to taste",
            "Water for cooking"
        ],
        instructions: [
            "Soak beans overnight, then drain and rinse.",
            "In a large pot, combine beans and sorghum/corn. Cover with water and bring to a boil.",
            "Reduce heat and simmer until both are tender (about 1-2 hours), adding water as needed.",
            "In a separate pan, sauté onions in oil until golden.",
            "Add sautéed onions and salt to the bean mixture, stirring well.",
            "Serve hot, optionally with meat on the side."
        ]
    },
    {
        name: "Morogo",
        image: "assets/botswana/morogo.webp",
        description: "A dish of wild spinach or other leafy greens, often cooked with onions and spices.",
        ingredients: [
            "4 cups chopped wild spinach or other leafy greens",
            "1 onion, chopped",
            "2 tbsp vegetable oil",
            "1 tomato, chopped (optional)",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Wash and chop the greens thoroughly.",
            "Heat oil in a pan and sauté onions until translucent.",
            "Add chopped greens and tomato (if using) to the pan.",
            "Cook over medium heat, stirring occasionally, until greens are wilted and tender.",
            "Season with salt and pepper to taste.",
            "Serve hot as a side dish or with pap."
        ]
    },
    {
        name: "Mopane Worms",
        image: "assets/botswana/mopane_worms.jpeg",
        description: "A protein-rich delicacy in Botswana, these caterpillars are typically dried and then fried or rehydrated for stews.",
        ingredients: [
            "2 cups dried mopane worms",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste",
            "Water for rehydrating"
        ],
        instructions: [
            "Soak dried mopane worms in warm water for about 30 minutes, then drain.",
            "Heat oil in a pan and sauté onions until golden.",
            "Add tomatoes and cook until soft.",
            "Add rehydrated mopane worms to the pan.",
            "Season with salt and pepper, and cook for about 10 minutes.",
            "Serve hot as a snack or side dish."
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