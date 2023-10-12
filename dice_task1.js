const products = [
    {
        name: "Fried Potato Chips",
        price: 19.99,
        image: "https://cdn.pixabay.com/photo/2013/07/13/12/49/chips-160417_960_720.png",
        description: "Carefully handpicked potatos have fried deepy in oil and dressed in the packet!",
        information:"25g Potato chips: ingredients:potato,corn-flour, palm oil; Best before: 2024 Jan"
    },
    {
        name: "Coco-Cola",
        price: 29.99,
        image: "https://as2.ftcdn.net/v2/jpg/04/84/03/73/1000_F_484037324_UfkErDld3FHHJ1tzysL0cEAg6wkBp6ku.jpg",
        description: "Get refreashed without taking a break with our coco-cola",
        information:"500ml coco-cola; Best Before:Nov 2024"
    },
    {
        name:"Kit-kat",
        price:10.99,
        image:"https://www.pngitem.com/pimgs/m/225-2253300_kitkat-chocolate-overlays-stickers-kit-kat-clipart-png.png",
        description:"Have a break Have a kitkat. Drop everything, and treate yourself now",
        information:"30g; Ingredients:Wheat, cocoa, palmolin, preservatives; All natural preservatives and colors used. Best before: Jan 2025"
    },
    {
        name:"Milk-shake",
        price:20.15,
        image:"https://www.bigbasket.com/media/uploads/p/l/1209200-2_2-paper-boat-chocolate-milkshake-enriched-with-vitamin-d.jpg",
        description:"Fulfil your protein requirement in a more tastier way!",
        information:"400ml; Best before: Jan 2025"
    },
    {
        name:"Mixed fruit Juice",
        price:"15.45",
        image:"https://media.istockphoto.com/id/1359199652/vector/carton-box-with-orange-juice-citrus-drink-icon-for-logo-menu-emblem-template-stickers-prints.jpg?s=612x612&w=0&k=20&c=rdrkCCFP9PhMQykKCwKkJBOP9lUYQJ-ec0z8ta6y6ww=",
        description:"Why wait more! Grab all your nutients now with our juice.",
        information:"30g; Ingredients:Fruits, sugar, naturalsweeteners, preservatives; All natural preservatives and colors used. Best before: Jan 2025"
    },
    {
        name:"Cookies",
        price:"30.32",
        image:"https://previews.123rf.com/images/karidesigner/karidesigner2104/karidesigner210400049/168154799-chocolate-chip-cookie-in-cartoon-style-vector-illustration.jpg",
        description:"Fill your tummy with something yummy! Grab our biscuits and it will fill your heart too!",
        information:"30g; Ingredients:Wheat, cocoa, palmolin, preservatives; All natural preservatives and colors used. Best before: Jan 2026"
        
    }
    
];


// Function to create a product card with expandable details
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.width = "400px";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="height:200px;width:300px">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="read-more" style="font-family: Raleway" onclick="showDetails(${products.indexOf(product)})">Read More</button>
    `;

    return card;
}

function renderProductCards() {
    const productGrid = document.querySelector(".product-grid");
            productGrid.innerHTML = "";

            // Divide products into rows with 3 products per row
            for (let i = 0; i < products.length; i += 3) {
                const row = document.createElement("div");
                row.classList.add("row");

                for (let j = i; j < i + 3 && j < products.length; j++) {
                    const product = products[j];
                    const card = createProductCard(product);
                    const col = document.createElement("div");

                    col.classList.add("col-12");
                    col.classList.add("col-md-4");

                    row.appendChild(col);
                    col.appendChild(card);
                }

                productGrid.appendChild(row);
            }
        }

        // Rest of your code for displaying details and handling pop-ups

        renderProductCards();
   







function showDetails(index) {
    const product = products[index];
    const popup = document.getElementById("productPopup");
    const popupDetails = document.getElementById("popupDetails");
    popup.style.display = "block";
    popupDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="height:200px;width:300px">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
        <p>Additional Information:</p>
        <p>${product.information}</p>
        <button class="view-less" style="font-family: Raleway" onclick="closePopup()">View Less</button>
    `;
}

function closePopup() {
    const popup = document.getElementById("productPopup");
    popup.style.display = "none";
}

renderProductCards();