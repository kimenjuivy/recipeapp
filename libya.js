const nigerianRecipes = [
    {
        name: "Bazeen",
        image: "assets/libya/bazeen.webp",
        description: "A traditional Libyan dish made from barley flour, considered one of the national dishes.",
        ingredients: [
            "2 cups barley flour",
            "6 cups water",
            "1 tsp salt",
            "500g lamb or beef, cubed",
            "2 onions, chopped",
            "2 tbsp tomato paste",
            "2 tbsp olive oil",
            "1 tsp turmeric",
            "Salt and pepper to taste"
        ],
        instructions: [
            "For the dough: Boil 4 cups of water with salt. Gradually add barley flour, stirring constantly until thick. Cook for 20 minutes, stirring occasionally.",
            "For the sauce: Brown meat with onions in olive oil.",
            "Add tomato paste, turmeric, salt, pepper, and 2 cups of water. Simmer for 1 hour.",
            "Shape the barley dough into a dome on a serving plate.",
            "Pour the meat sauce around the dough.",
            "Serve hot, traditionally eaten by hand."
        ]
    },
    {
        name: "Shakshuka",
        image: "assets/libya/shakshuka.jpg",
        description: "A popular breakfast dish of eggs poached in a sauce of tomatoes, peppers, and spices.",
        ingredients: [
            "6 eggs",
            "4 tomatoes, diced",
            "1 onion, chopped",
            "1 bell pepper, chopped",
            "3 garlic cloves, minced",
            "2 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Sauté onion, bell pepper, and garlic in olive oil until softened.",
            "Add tomatoes, cumin, paprika, salt, and pepper. Simmer for 10 minutes.",
            "Make wells in the sauce and crack eggs into them.",
            "Cover and cook until eggs are set, about 5-7 minutes.",
            "Garnish with parsley and serve hot with bread."
        ]
    },
    {
        name: "Asida",
        image: "assets/libya/asida.jpg",
        description: "A boiled flour pudding often served during special occasions and religious festivals.",
        ingredients: [
            "2 cups wheat flour",
            "4 cups water",
            "1 tsp salt",
            "1/2 cup butter or olive oil",
            "1/2 cup honey or date syrup"
        ],
        instructions: [
            "Boil water with salt in a pot.",
            "Gradually add flour, stirring constantly to avoid lumps.",
            "Cook on low heat, stirring continuously, until mixture thickens and pulls away from sides of pot.",
            "Shape into a dome on a serving plate.",
            "Make a well in the center and fill with melted butter or olive oil and honey or date syrup.",
            "Serve hot, eaten by hand, dipping into the center."
        ]
    },
    {
        name: "Imbakbaka",
        image: "assets/libya/imbakbaka.jpg",
        description: "A hearty pasta dish with a spicy tomato-based sauce, popular in Tripolitania.",
        ingredients: [
            "500g short pasta (like penne)",
            "500g lamb or beef, cubed",
            "2 onions, chopped",
            "3 tbsp tomato paste",
            "2 tbsp olive oil",
            "2 tsp ground coriander",
            "1 tsp caraway seeds",
            "1 tsp chili powder",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Brown meat with onions in olive oil.",
            "Add tomato paste, coriander, caraway, chili powder, salt, and pepper. Cook for 5 minutes.",
            "Add 4 cups of water and bring to a boil.",
            "Add pasta and cook until al dente and sauce thickens.",
            "Serve hot, garnished with fresh coriander if desired."
        ]
    },
    {
        name: "Usban",
        image: "assets/libya/usban.jpg",
        description: "A traditional Libyan sausage made with lamb intestines stuffed with rice, herbs, and spices.",
        ingredients: [
            "1 set lamb intestines, cleaned",
            "2 cups rice, partially cooked",
            "500g ground lamb",
            "1 onion, finely chopped",
            "1/2 cup chopped parsley",
            "1/4 cup chopped mint",
            "2 tsp ground cinnamon",
            "1 tsp allspice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Mix rice, ground lamb, onion, herbs, and spices in a bowl.",
            "Carefully stuff the mixture into the cleaned intestines, tying off into sausage links.",
            "Place sausages in a pot of boiling water.",
            "Simmer for about 45 minutes until cooked through.",
            "Drain and let cool slightly before serving.",
            "Can be served as is or lightly fried for extra flavor."
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