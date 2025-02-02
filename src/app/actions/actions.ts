import { Product } from "../../../types/product";

export const addToCart = (product : Product) => { 
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].stockLevel += 1;
        
    }
    else{
        cart.push({
            ...product,
            stockLevel: 1,
        })
    }

    localStorage.setItem('cart',JSON.stringify(cart));
}

// Remove product from cart
export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart',JSON.stringify(cart));
}

// Update product quantity in cart
export const updateCartQuantity = (productId : string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].stockLevel = quantity;
        localStorage.setItem('cart',JSON.stringify(cart));
        
    }
}


//  get cart items
export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}




// ................................................................


// Add product to wishlist
export const addToWishlist = (product: Product) => {
    const wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
  
    const existingProductIndex = wishlist.findIndex(item => item._id === product._id);
  
    if (existingProductIndex === -1) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  };
  
  // Remove product from wishlist
  export const removeFromWishlist = (productId: string) => {
    let wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(item => item._id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  // Get wishlist items
  export const getWishlistItems = () => {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  };