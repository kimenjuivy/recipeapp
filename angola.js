const nigerianRecipes = [
    {
        name: "Moamba de Galinha",
        image: "assets/angola/moamba_de_galinha.jpg",
        description: "A rich and flavorful chicken stew, considered one of Angola's national dishes, cooked with palm oil and palm butter.",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "2 cups palm oil",
            "1 cup palm butter",
            "2 onions, chopped",
            "4 garlic cloves, minced",
            "2 tomatoes, diced",
            "2 chili peppers, chopped",
            "Salt and pepper to taste",
            "Rice for serving"
        ],
        instructions: [
            "Heat palm oil in a large pot and brown the chicken pieces.",
            "Add onions, garlic, tomatoes, and chili peppers. Sauté until softened.",
            "Stir in palm butter and simmer for 30-40 minutes until chicken is cooked.",
            "Season with salt and pepper. Serve hot with rice."
        ]
    },
    {
        name: "Calulu",
        image: "assets/angola/calulu.jpg",
        description: "A traditional fish and vegetable stew, popular in Angola and São Tomé and Príncipe.",
        ingredients: [
            "500g dried fish",
            "500g fresh fish fillets",
            "2 cups chopped okra",
            "2 cups chopped spinach",
            "1 onion, chopped",
            "3 garlic cloves, minced",
            "2 tomatoes, diced",
            "1/4 cup palm oil",
            "Salt and pepper to taste",
            "Funge (cassava flour porridge) for serving"
        ],
        instructions: [
            "Soak dried fish in water for 2 hours, then clean and debone.",
            "In a large pot, layer fish, vegetables, onions, garlic, and tomatoes.",
            "Pour palm oil over the layers and add enough water to cover.",
            "Simmer for 1-2 hours until fish is tender and vegetables are cooked.",
            "Serve hot with funge on the side."
        ]
    },
    {
        name: "Feijoada à Angolana",
        image: "assets/angola/feijoada.jpg",
        description: "An Angolan version of the popular Portuguese bean stew, often made with beef and pork.",
        ingredients: [
            "500g dried red beans",
            "300g beef, cubed",
            "300g pork, cubed",
            "200g chorizo, sliced",
            "2 onions, chopped",
            "4 garlic cloves, minced",
            "2 bay leaves",
            "1/4 cup olive oil",
            "Salt and pepper to taste",
            "Rice for serving"
        ],
        instructions: [
            "Soak beans overnight. Drain and set aside.",
            "In a large pot, brown meat in olive oil. Add onions and garlic.",
            "Add beans, chorizo, bay leaves, and enough water to cover.",
            "Simmer for 2-3 hours until beans and meat are tender.",
            "Season with salt and pepper. Serve with rice."
        ]
    },
    {
        name: "Muamba de Ginguba",
        image: "assets/angola/muamba_de_ginguba.jpg",
        description: "A creamy peanut stew often made with chicken or fish, popular in Angola and other parts of Africa.",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "2 cups unsalted peanut butter",
            "2 onions, chopped",
            "3 tomatoes, diced",
            "2 garlic cloves, minced",
            "1 chili pepper, chopped",
            "2 tbsp palm oil",
            "Salt and pepper to taste",
            "Funge or rice for serving"
        ],
        instructions: [
            "Brown chicken pieces in palm oil in a large pot.",
            "Add onions, garlic, tomatoes, and chili. Sauté until softened.",
            "Stir in peanut butter and enough water to make a sauce.",
            "Simmer for 30-40 minutes until chicken is cooked and sauce thickens.",
            "Season with salt and pepper. Serve with funge or rice."
        ]
    },
    {
        name: "Mufete",
        image: "assets/angola/mufete.jpg",
        description: "A traditional Angolan dish featuring grilled fish, often served with beans, sweet potato, and plantains.",
        ingredients: [
            "1 large whole fish (such as tilapia or sea bream)",
            "2 cups cooked beans",
            "2 sweet potatoes",
            "2 ripe plantains",
            "1 onion, sliced",
            "2 tbsp olive oil",
            "1 lemon",
            "Salt and pepper to taste",
            "Palm oil for drizzling"
        ],
        instructions: [
            "Clean and score the fish, season with salt, pepper, and lemon juice.",
            "Grill the fish until cooked through.",
            "Boil sweet potatoes until tender. Grill plantains until golden.",
            "Sauté sliced onions in olive oil until caramelized.",
            "Serve grilled fish with beans, sweet potatoes, plantains, and onions.",
            "Drizzle with palm oil before serving."
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