const nigerianRecipes = [
    {
        name: "Ugali",
        image: "assets/uganda/ugali.jpg",
        description: "A staple dish in Uganda made from maize flour (cornmeal), similar to nshima or sadza in other African countries.",
        ingredients: [
            "2 cups Maize flour (cornmeal)",
            "4 cups Water"
        ],
        instructions: [
            "Bring water to a boil in a large pot.",
            "Gradually add maize flour to boiling water, stirring constantly to prevent lumps.",
            "Reduce heat to low and continue stirring until mixture thickens and pulls away from the sides of the pot, about 10-15 minutes.",
            "Cover and let simmer for an additional 5 minutes.",
            "Remove from heat and let rest for a few minutes before serving.",
            "Serve hot as a side dish with stews or sauces."
        ]
    },
    {
        name: "Luweero Kintu",
        image: "assets/uganda/luweero-kintu.jpg",
        description: "A traditional Ugandan dish made with sweet potatoes and peanuts, often enjoyed as a nutritious snack.",
        ingredients: [
            "4 Medium-sized sweet potatoes",
            "1 cup Ground peanuts",
            "1 tablespoon Sugar (optional)",
            "1/2 teaspoon Salt",
            "Water, as needed"
        ],
        instructions: [
            "Peel and cut sweet potatoes into chunks.",
            "In a pot, boil sweet potatoes in water until tender, about 15-20 minutes.",
            "Drain cooked sweet potatoes and mash them in a bowl.",
            "Add ground peanuts, sugar (if using), and salt. Mix well to combine.",
            "Shape mixture into balls or patties.",
            "Serve warm as a snack or light meal."
        ]
    },
    {
        name: "Posho and Groundnut Sauce",
        image: "assets/uganda/posho-and-groundnut-sauce.jpg",
        description: "Posho (cornmeal porridge) served with a rich groundnut (peanut) sauce, a popular dish in Uganda.",
        ingredients: [
            "2 cups Maize flour (cornmeal)",
            "4 cups Water",
            "1 cup Ground peanuts",
            "2 Large Onions",
            "3 cloves Garlic",
            "1-2 Red chilli peppers",
            "2 tablespoons Vegetable oil",
            "1 teaspoon Paprika",
            "1 teaspoon Ground cumin",
            "Salt to taste"
        ],
        instructions: [
            "To make posho, bring water to a boil in a large pot.",
            "Gradually add maize flour to boiling water, stirring constantly to prevent lumps.",
            "Reduce heat to low and continue stirring until mixture thickens and pulls away from the sides of the pot, about 10-15 minutes.",
            "Cover and let simmer for an additional 5 minutes.",
            "For the groundnut sauce, heat vegetable oil in a skillet over medium heat. Add chopped onions, minced garlic, and chopped red chilli peppers. Cook until onions are translucent.",
            "Add ground peanuts, paprika, ground cumin, and salt. Stir well to combine.",
            "Add water gradually, stirring constantly, until sauce reaches desired consistency.",
            "Serve hot posho with groundnut sauce."
        ]
    },
    {
        name: "Ugandan Rolex",
        image: "assets/uganda/ugandan-rolex.jpg",
        description: "A popular Ugandan street food consisting of a rolled chapati filled with eggs, vegetables, and sometimes meat.",
        ingredients: [
            "2 cups All-purpose flour",
            "1/2 teaspoon Salt",
            "1 cup Water",
            "2 Large Eggs",
            "1 Large Onion",
            "1 Tomato",
            "1/2 cup Cabbage, shredded",
            "1/4 cup Carrots, grated",
            "1/4 cup Bell pepper, diced",
            "2 tablespoons Vegetable oil"
        ],
        instructions: [
            "To make chapati dough, combine flour and salt in a bowl. Gradually add water, kneading until a smooth dough forms. Cover and let rest for 30 minutes.",
            "Divide dough into small balls. Roll out each ball into a thin circle.",
            "Heat a skillet over medium heat. Cook chapati until golden brown spots appear on both sides, brushing with vegetable oil as needed. Set aside.",
            "In a bowl, beat eggs. Season with salt and pepper.",
            "Heat vegetable oil in a skillet over medium heat. Add chopped onions and cook until translucent.",
            "Add beaten eggs, stirring gently until scrambled.",
            "Add chopped tomatoes, shredded cabbage, grated carrots, and diced bell pepper. Cook until vegetables are tender.",
            "Place chapati on a plate. Spoon egg and vegetable mixture onto the chapati. Roll tightly to form a Rolex.",
            "Serve hot as a snack or light meal."
        ]
    },
    {
        name: "Ugandan Groundnut (Peanut) Stew",
        image: "assets/uganda/ugandan-groundnut-stew.jpg",
        description: "A hearty stew made with peanuts, vegetables, and sometimes meat, served with rice or posho.",
        ingredients: [
            "1 cup Ground peanuts",
            "2 Large Onions",
            "3 cloves Garlic",
            "2 Tomatoes, chopped",
            "2 cups Water or Vegetable broth",
            "1 cup Okra, sliced (optional)",
            "1 cup Pumpkin or Squash, diced",
            "1 cup Eggplant, diced",
            "2 cups Spinach or Kale, chopped",
            "1 teaspoon Paprika",
            "1 teaspoon Ground cumin",
            "1 teaspoon Ground coriander",
            "Salt and pepper to taste",
            "2 tablespoons Vegetable oil"
        ],
        instructions: [
            "In a large pot, heat vegetable oil over medium heat. Add chopped onions and minced garlic, cook until softened.",
            "Add chopped tomatoes, ground peanuts, paprika, ground cumin, ground coriander, salt, and pepper. Stir well to combine.",
            "Gradually add water or vegetable broth, stirring constantly until smooth.",
            "Add sliced okra (if using), diced pumpkin or squash, and diced eggplant. Simmer for 15-20 minutes or until vegetables are tender.",
            "Add chopped spinach or kale. Cook for an additional 5 minutes.",
            "Serve hot with rice or posho."
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