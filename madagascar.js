const nigerianRecipes = [
        {
            name: "Romazava",
            image: "assets/madagascar/romazava.jpeg",
            description: "Considered the national dish of Madagascar, a hearty meat and greens stew.",
            ingredients: [
                "500g beef, cut into cubes",
                "2 cups cassava leaves (or spinach as substitute)",
                "1 cup watercress",
                "2 tomatoes, chopped",
                "2 onions, chopped",
                "3 cloves garlic, minced",
                "1 piece ginger, minced",
                "2 tbsp oil",
                "Salt and pepper to taste",
                "Water as needed"
            ],
            instructions: [
                "Heat oil in a pot and sauté onions, garlic, and ginger.",
                "Add beef and brown on all sides.",
                "Add tomatoes and cook for 5 minutes.",
                "Add cassava leaves (or spinach) and watercress.",
                "Pour in enough water to cover and simmer for 1-2 hours until meat is tender.",
                "Season with salt and pepper.",
                "Serve hot with rice."
            ]
        },
        {
            name: "Ravitoto",
            image: "assets/madagascar/ravitoto.jpg",
            description: "A popular dish made from pounded cassava leaves and pork.",
            ingredients: [
                "4 cups cassava leaves, finely chopped",
                "500g pork, cubed",
                "1 onion, chopped",
                "2 cloves garlic, minced",
                "2 tbsp oil",
                "1 cup coconut milk",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Pound cassava leaves until very fine, or process in a food processor.",
                "Heat oil and sauté onions and garlic.",
                "Add pork and brown on all sides.",
                "Add pounded cassava leaves and coconut milk.",
                "Simmer for 30-40 minutes until pork is tender and leaves are cooked.",
                "Season with salt and pepper.",
                "Serve hot with rice."
            ]
        },
        {
            name: "Koba",
            image: "assets/madagascar/koba.jpg",
            description: "A sweet dessert made from ground peanuts, rice flour, and banana, wrapped in banana leaves.",
            ingredients: [
                "2 cups ground peanuts",
                "1 cup rice flour",
                "3 ripe bananas, mashed",
                "1 cup sugar",
                "1 cup coconut milk",
                "Banana leaves for wrapping"
            ],
            instructions: [
                "Mix ground peanuts, rice flour, mashed bananas, sugar, and coconut milk.",
                "Wrap portions of the mixture in banana leaves, securing tightly.",
                "Steam the wrapped parcels for about 1 hour.",
                "Let cool slightly before unwrapping.",
                "Slice and serve as a dessert or snack."
            ]
        },
        {
            name: "Lasary Voatabia",
            image: "assets/madagascar/lasary_voatabia.jpg",
            description: "A tangy tomato salad often served as a side dish or condiment.",
            ingredients: [
                "4 tomatoes, finely chopped",
                "1 onion, finely chopped",
                "2 green onions, sliced",
                "1 chili pepper, minced (optional)",
                "Juice of 1 lemon",
                "Salt to taste"
            ],
            instructions: [
                "Mix chopped tomatoes, onion, green onions, and chili (if using) in a bowl.",
                "Add lemon juice and salt, toss well.",
                "Let sit for at least 30 minutes to allow flavors to meld.",
                "Serve chilled as a side dish or condiment."
            ]
        },
        {
            name: "Mofo Gasy",
            image: "assets/madagascar/mofo_gasy.jpg",
            description: "Traditional Malagasy rice cakes, often eaten for breakfast or as a snack.",
            ingredients: [
                "2 cups rice flour",
                "1 cup coconut milk",
                "1/2 cup sugar",
                "1 tsp active dry yeast",
                "1/4 tsp salt",
                "1/2 cup warm water"
            ],
            instructions: [
                "Mix yeast with warm water and let sit for 5 minutes.",
                "In a bowl, combine rice flour, sugar, and salt.",
                "Add coconut milk and yeast mixture, mix well.",
                "Let batter rest for 1-2 hours to ferment slightly.",
                "Heat a greased pan or special mofo gasy mold.",
                "Pour batter into molds and cook until golden and crispy.",
                "Serve warm as a breakfast item or snack."
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