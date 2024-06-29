document.addEventListener('DOMContentLoaded', function() {
    renderWishlist();
});

function renderWishlist() {
    let wishlist = localStorage.getItem('wishlist');
    wishlist = wishlist ? JSON.parse(wishlist) : [];

    const wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = ''; // Clear the container

    wishlist.forEach((product, index) => {
        const card = `
            <div class="col-md-4 mb-4 wishlist-item" data-id="${product.id}">
                <div class="card">
                    <img src="${product.photo}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                        <button class="btn btn-primary remove-from-wishlist-btn">Remove from Wishlist</button>
                    </div>
                </div>
            </div>
        `;
        wishlistContainer.innerHTML += card;
    });

    // Attach event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-from-wishlist-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const wishlistItem = button.closest('.wishlist-item');
            const productId = wishlistItem.getAttribute('data-id');
            removeFromWishlist(productId);
        });
    });
}

function removeFromWishlist(productId) {
    let wishlist = localStorage.getItem('wishlist');
    wishlist = wishlist ? JSON.parse(wishlist) : [];

    // Find index of product with given productId
    const index = wishlist.findIndex(product => product.id === productId);

    if (index !== -1) {
        // Remove product from wishlist array
        wishlist.splice(index, 1);
        // Update localStorage with modified wishlist array
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        // Re-render the entire wishlist
        renderWishlist();
    }
}