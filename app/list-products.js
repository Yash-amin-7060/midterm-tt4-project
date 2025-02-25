document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg", title: "Product 1", desc: "Short description 1", price: "$10" },
        { image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg", title: "Product 2", desc: "Short description 2", price: "$12" },
        { image: "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg", title: "Product 3", desc: "Short description 3", price: "$15" },
        { image: "https://images.pexels.com/photos/3612182/pexels-photo-3612182.jpeg", title: "Product 4", desc: "Short description 4", price: "$20" },
        { image: "https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg", title: "Product 5", desc: "Short description 5", price: "$18" },
        { image: "https://images.pexels.com/photos/2693646/pexels-photo-2693646.jpeg", title: "Product 6", desc: "Short description 6", price: "$25" },
        { image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg", title: "Product 7", desc: "Short description 7", price: "$30" },
        { image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg", title: "Product 8", desc: "Short description 8", price: "$22" },
        { image: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg", title: "Product 9", desc: "Short description 9", price: "$28" },
        { image: "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg", title: "Product 10", desc: "Short description 10", price: "$35" },
        { image: "https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg", title: "Product 11", desc: "Short description 11", price: "$40" },
        { image: "https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg", title: "Product 12", desc: "Short description 12", price: "$45" }
    ];

    const productList = document.querySelector(".row"); // Select the row container

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.desc}</p>
                    <p class="fw-bold">${product.price}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
});
