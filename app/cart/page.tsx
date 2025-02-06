"use client";

import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, removeFromCart as removeFromCartAction, updateCartQuantity } from '../actions/actions';

import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import NavbarDark from '../components/navbarDark/page';
import Footer from '../components/footer/page';

function CartPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: 'Are you sure you want to remove this item?',
            icon: 'warning',
            text: 'This action cannot be undone',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            handleQuantityChange(id, product.stocklevel + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.stocklevel > 1) {
            handleQuantityChange(id, product.stocklevel - 1);
        }
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.stocklevel, 0);
    };

    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: 'Proceed to checkout?',
            icon: 'question',
            text: 'Please review your cart before checkout',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Your order has been successfully processed", "success");
                router.push('/checkout');
                setCartItems([]);
            }
        });
    };

    return (
        <div>
            <div><NavbarDark/></div>
            <div className="container mx-auto p-6">
                <div className="text-3xl font-semibold text-center mb-8">Your Shopping Cart</div>

                {/* Cart Items List */}
                {cartItems.length === 0 ? (
                    <div className="text-center text-xl text-gray-500">Your cart is empty</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item._id} className="border-b">
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                {item.productImage && (
                                                    <Image
                                                        src={urlFor(item.productImage).url()}
                                                        alt='Image'
                                                        width={500}
                                                        height={500}
                                                        className="w-16 h-16 object-cover rounded-md"
                                                    />)}
                                                <span className="ml-4">{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">${item.price.toFixed(2)}</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => handleDecrement(item._id)}
                                                    className="bg-gray-300 p-2 rounded-full"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.stocklevel}</span>
                                                <button
                                                    onClick={() => handleIncrement(item._id)}
                                                    className="bg-gray-300 p-2 rounded-full"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4">${(item.price * item.stocklevel).toFixed(2)}</td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => handleRemove(item._id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Cart Summary */}
                {cartItems.length > 0 && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center text-xl font-semibold">
                            <span className='text-gray-500'>Total:</span>
                            <span>${calculatedTotal().toFixed(2)}</span>
                        </div>

                        {/* Proceed Button */}
                        <button
                            onClick={handleProceed}
                            className="mt-4 w-full md:w-1/4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
                <div><Footer/></div>
            </div></div>
    );
}

export default CartPage;











//   return (
//     <div>
//         <div>
//             {cartItems.map((item) =>(
//                 <div key={item._id}>
//                     {item.title}

//                 </div>
//             ))}
//         </div>
//     </div>
//   )



