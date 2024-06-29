//cart.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    function addToCart(product) {
        try {
            const id = product.getAttribute('data-id');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));
            const photo = product.getAttribute('data-photo');

            const item = cartItems.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
            } else {
                cartItems.push({ id, name, price, photo, quantity: 1 });
            }

            updateLocalStorage();
            console.log(`${name} added to cart`);
            alert(`${name} added to cart`);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Sorry, the item could not be added to the cart.');
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product-wrapper');
            addToCart(product);
        });
    });
});
