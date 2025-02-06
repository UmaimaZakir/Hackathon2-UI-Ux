"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Footer from "@/app/components/footer/page";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import NavbarDark from "@/app/components/navbarDark/page";
import Link from "next/link";



interface ProductPageProps {
    params: Promise<{ slug: string }>
}
async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            title,
            _type,
            productImage,
            price,
            description
        }`, { slug }
    );
}

export default function ProductPage({ params }: ProductPageProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    // You can replace this with dynamic routing logic if needed
    // const { slug } = await params;
    // const product = await getProduct(slug);
    useEffect(() => {
        const fetchProduct = async () => {

            const { slug } = await params;
            const fetchedProduct = await getProduct(slug);
            setProduct(fetchedProduct);
        };

        fetchProduct();
    }, [params]);

    if (!product) return <div>Loading...</div>; // Show loading state while fetching data


    // Handle add to cart
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.title} added to cart`,
            showConfirmButton: false,
            timer: 1000
        })


        addToCart(product)
    }

    // Handle add to wishlist
    const handleAddToWishlist = () => {
        setIsInWishlist(true);
        console.log(`${product.title} added to wishlist!`);
        // You can add logic to add the product to the wishlist here
    };
    // Toggle description
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    return (<div>
        <div><NavbarDark/></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Product Image */}
            <div className="relative w-full h-96 md:h-auto">
                {product.productImage && (
                <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-lg"
                />
                )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
                <p className="text-3xl text-gray-800 font-medium">${product.price}</p>

                {/* Ratings */}
                <div className="flex items-center gap-1 mt-2">
                {[...Array(4)].map((_, i) => (
                    <CiStar key={i} className="text-yellow-400" fill="yellow" size={22} />
                ))}
                <CiStar className="text-gray-300" size={22} />
                <span className="text-gray-600 text-sm">5 Customer Reviews</span>
                </div>

                {/* Description */}
                <div className="text-ellipsis overflow-hidden break-words">
                <p className={`text-lg text-wrap text-gray-700 ${showFullDescription ? '' : 'line-clamp-3'}`}>
                    {product.description}
                </p>
                <button
                    className="text-blue-500 hover:underline mt-2"
                    onClick={toggleDescription}
                >
                    {showFullDescription ? 'See Less' : 'See More'}
                </button>
                </div>

                {/* Color Buttons */}
                <div className="flex gap-2 mt-4">
                <button className="rounded-full w-6 h-6" style={{ background: "#23A6F0" }}></button>
                <button className="rounded-full w-6 h-6" style={{ background: "#23856D" }}></button>
                <button className="rounded-full w-6 h-6" style={{ background: "#E77C40" }}></button>
                <button className="rounded-full w-6 h-6" style={{ background: "#252B42" }}></button>
                </div>

                {/* Add to Cart Button */}
                <button
                className="text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform bg-blue-400 duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
                >
                Add to Cart
                </button>

                {/* Reviews & Icons */}
                <div className="flex items-center gap-6 mt-4">
                {/* Shopping Cart Icon */}
                <Link href="/cart">
                    <FaShoppingCart className="text-gray-600 hover:text-black cursor-pointer" size={24} />
                </Link>

                {/* Wishlist Icon */}
                <div className="flex items-center gap-1 cursor-pointer" onClick={handleAddToWishlist}>
                    <FaHeart className={`text-red-500 ${isInWishlist ? 'text-pink-500' : ''}`} size={24} />
                    <span className="text-gray-600 text-sm"></span>
                </div>
                </div>
            </div>
            </div>
            
            <div className="mt-6">
            <Footer />
            </div>
        </div>
        </div>
    );
}
