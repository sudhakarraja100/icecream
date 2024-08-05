document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.menu-item button');
    const cartCount = document.getElementById('cart-count');
    let cartItemCount = 0;
    cartButtons.forEach(button => {
          button.addEventListener('click', () => {
                cartItemCount++;
                cartCount.textContent = cartItemCount;
                alert('Added to cart!');
          });
    });
});