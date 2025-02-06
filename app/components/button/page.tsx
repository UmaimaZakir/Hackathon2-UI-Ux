// // import { addToCart } from "@/app/actions/actions";
// // import { Product } from "@/types/products";

// // export default function Button({ product }: { product: Product }) {
// //     const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
// //         e.preventDefault();
// //         try {
// //             await addToCart(product);
// //             // Optionally, you can add a success message or notification here
// //         } catch (error) {
// //             console.error("Failed to add product to cart:", error);
// //             // Optionally, you can add an error message or notification here
// //         }
// //     };

// //     return (
// //         <button
// //             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
// //             onClick={(e) => handleAddToCart(e, product)}
// //             aria-label={`Add ${product.title} to cart`}
// //         >
// //             Add to Cart
// //         </button>
// //     );
// // }

// import { addToCart } from "@/app/actions/actions";
// import { Product } from "@/types/products";
// import { useRouter } from 'next/router';

// export default function Button({ product }: { product: Product }) {
//     const router = useRouter();

//     const handleAddToCartAndNavigate = async (e: React.MouseEvent, product: Product) => {
//         e.preventDefault();
//         try {
//             await addToCart(product);
//             router.push(`/slug/${product.slug}`); // Navigate to the slug page
//         } catch (error) {
//             console.error("Failed to add product to cart:", error);
//         }
//     };

//     return (
//         <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
//             onClick={(e) => handleAddToCartAndNavigate(e, product)}
//             aria-label={`Add ${product.title} to cart`}
//         >
//             Add to Cart
//         </button>
//     );
// }

"use client";  // This ensures that the component is only rendered on the client-side

import { useRouter } from "next/navigation";
import { Product } from "@/types/products";
import { useState, useEffect } from "react";
import { addToCart } from "@/app/actions/actions";  // Assuming you have a function to add to cart
import Swal from "sweetalert2";

interface ButtonProps {
    product: Product;
}

export default function Button({ product }: ButtonProps) {
    const [isClient, setIsClient] = useState(false);  // State to check if we're on the client side
    const router = useRouter();  // useRouter will only work on the client side

    useEffect(() => {
        setIsClient(true);  // Set state to true after the component has mounted on the client
    }, []);

    const handleAddToCartAndNavigate = async (e: React.MouseEvent, product:Product) => {
        e.preventDefault();
        
        
        try {
            // await addToCart(product)  // Assuming this adds the product to the cart
            Swal.fire({
                position :"top-right", 
                icon : "success",
                title: `${product.title} added to cart`,
                showConfirmButton: false,
                timer :1000
            })
            addToCart(product)
            router.push(`/slug/${product.slug}`);  // Navigate to the product page by slug
           
        } catch (error) {
            console.error("Failed to add product to cart:", error);
        }
    };

    if (!isClient) return null;  // Render nothing if it's not the client side
  
        <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={(e) => handleAddToCartAndNavigate(e, product)}
            aria-label={`Add ${product.title} to cart`}
        >
            Add to Cart
        </button>
    
}
