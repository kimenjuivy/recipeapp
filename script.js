const africaData = [
    {
        name: "Nigeria",
        flag: "assets/nigeria/nigeria flag.png", 
        description: "Nigeria, the most populous country in Africa, is known for its rich cultural diversity and delicious cuisine.",
        link: "nigeria.html"
    },
    {
        name: "South Africa",
        flag: "assets/sa/flag.jpg",
        description: "South Africa, often called the 'Rainbow Nation', is renowned for its stunning landscapes, diverse wildlife, and complex history. It's home to iconic figures like Nelson Mandela and boasts world-class vineyards and vibrant cities.",
        link: "sa.html"
    },
    {
        name: "Egypt",
        flag: "assets/egypt/flag.jpg",
        description: "Egypt, the land of pharaohs and pyramids, offers a fascinating blend of ancient history and modern culture. With the Nile River as its lifeline, Egypt continues to captivate visitors with its archaeological wonders and bustling metropolises.",
        link: "egypt.html"
    },
    {
        name: "Kenya",
        flag: "assets/kenya/kenya.png",
        description: "Kenya, famous for its wildlife safaris and long-distance runners, is a country of diverse landscapes. From the iconic Maasai Mara to the bustling capital Nairobi, Kenya offers a unique mix of natural beauty and urban development.",
        link: "kenya.html"
    },
    {
        name: "Morocco",
        flag: "assets/morocco/flag.jpg",
        description: "Morocco, a North African gem, is known for its colorful markets, intricate architecture, and rich cultural heritage. From the medinas of Marrakech to the blue city of Chefchaouen, Morocco offers a sensory adventure at every turn.",
        link: "morocco.html"
    },
    {
        name: "Ghana",
        flag: "assets/ghana/flag.jpg",
        description: "Ghana, often called the 'Gateway to Africa', is celebrated for its warm hospitality and vibrant culture. With a history deeply rooted in the transatlantic slave trade, Ghana today is a beacon of democracy and economic growth in West Africa.",
        link: "ghana.html"
    },
    {
        name: "Tanzania",
        flag: "assets/tanzania/flag.jpg",
        description: "Tanzania is home to natural wonders like Mount Kilimanjaro and the Serengeti. Known for its diverse wildlife and beautiful beaches in Zanzibar, Tanzania offers a perfect blend of adventure and relaxation for visitors.",
        link: "tanzania.html"
    },
    {
        name: "Ethiopia",
        flag: "assets/ethiopia/flag.jpg",
        description: "Ethiopia, one of the oldest independent countries in Africa, boasts a rich history and unique cultural heritage. It's the birthplace of coffee and home to ancient rock-hewn churches, making it a fascinating destination for history buffs and culture enthusiasts.",
        link: "ethiopia.html"
    },
    {
        name: "Senegal",
        flag: "assets/senegal/flag.jpg",
        description: "Senegal, known for its vibrant music scene and colonial architecture, is a West African country with a rich cultural tapestry. Its capital, Dakar, is a hub of art, fashion, and cuisine, reflecting the country's dynamic blend of traditional and modern influences.",
        link: "senegal.html"
    },
    {
        name: "Rwanda",
        flag: "assets/rwanda/flag.jpg",
        description: "Rwanda, often called the 'Land of a Thousand Hills', has emerged as a model of development and reconciliation in Africa. Known for its mountain gorillas and commitment to conservation, Rwanda offers visitors breathtaking landscapes and a inspiring story of national renewal.",
        link: "rwanda.html"
    },
];


function generateCountryHTML(country) {
    const countryElement = document.createElement('div');
    countryElement.className = 'country-card';
    countryElement.innerHTML = `
        <h2>${country.name}</h2>
        <img src="${country.flag}" alt="${country.name} flag" class="country-flag">
        <p>${country.description}</p>
        <a href="${country.link}"><button>Explore ${country.name}'s Recipes</button></a>
    `;
    return countryElement;
}

document.addEventListener('DOMContentLoaded', () => {
    const countriesSection = document.getElementById('countries');
    africaData.forEach(country => {
        countriesSection.appendChild(generateCountryHTML(country));
    });
});