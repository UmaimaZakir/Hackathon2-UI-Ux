// "use client"
// import { client } from "@/sanity/lib/client"
// import { allProducts } from "@/sanity/lib/query"
// import { Product } from "@/types/products"
// import { useEffect, useState } from "react"


// const Clothes =()=> {
//     const [product, setProduct] = useState<Product[]>([])
//     useEffect(() => {
//         async function fetchProduct() {
//             try {
//                 const fetchedProduct: Product[] = await client.fetch(allProducts)
//                 console.log('Fetched Products:', fetchedProduct); // Check what's returned
//                 setProduct(fetchedProduct)
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         }
//         fetchProduct()
//     }, []);

//     return(
//         <div className="max-w-6xl mx-auto px-4 py-8">

//             {product.map((item)=>(
//             <div className="text-sm text-black" key={item._id}>
//                 {item.name}
//             </div>

//             )
//            )}
//         </div>
//     );
// }

// export default Clothes

"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { allProducts, eight } from "@/sanity/lib/query"
import { Product } from "@/types/products"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
// import { addToCart } from "@/app/actions/actions"
import Button from "../button/page"

const Productcard = () => {
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        async function fetchProduct() {
            try {
                const fetchedProduct: Product[] = await client.fetch(allProducts)
                console.log('Fetched Products:', fetchedProduct) // Check if products are being fetched correctly
                setProduct(fetchedProduct)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching products:', error)
                setLoading(false)
            }
        }
        fetchProduct()
    }, []);
    // const handleAddToCart = (e:React.MouseEvent, product:Product) =>{
    //     e.preventDefault()
    //     addToCart(product)
    //     alert("ok")
    //     console.log(handleAddToCart)
    // }

    // Show loading text while fetching
    if (loading) {
        return <div>Loading...</div>
    }

    // Show message if no products
    if (product.length === 0) {
        return <div>No products available</div>
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-center mb-4">
            <div className=" p-2 text-2xl" style={{ color: "#737373" }}>
                Featured Products
            </div>
            <div className="font-bold text-3xl" style={{ color: "#252B42", }}>
                BESTSELLER PRODUCTS

            </div>
            <div className=" p-2" style={{ color: "#737373", }}>
                Problems trying to resolve the conflict between </div>

            <div className="grid grid-col-1 md:grid-cols-4 gap-6 mb-10 sm:grid-cols-2">

                {product.map((product) => (

                    <div key={product._id} >
                      <Link href={`/product/${product.slug.current}`}>
                      <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                        {product.productImage && (
                            <Image
                                src={urlFor(product.productImage).url()}
                                alt="Items"
                                width={400}
                                height={400}
                                className="w-full h-48 object-cover rounded-md"
                            />
                        )}</div>
                        
                        <div className="text-center font-bold p-4">
                            <div className="f font-xl p-2" style={{ color: "#252B42" }}> {product.title}</div>
                            <div className="font-xl" style={{ color: "#737373"}}>English Department</div>
                            <div className="p-2 md:font-2xl" style={{ color: "#BDBDBD"}}>${product.price} <span style={{ color: "#23856D" }}>$6.48</span></div>
                     
                            <div className="space-x-2 ">
                              
                                <button className="rounded-full w-4 h-4" style={{ background: "#23A6F0" }}></button>
                                <button className="rounded-full w-4 h-4 " style={{ background: "#23856D" }}></button>
                                <button className="rounded-full w-4 h-4 " style={{ background: "#E77C40" }}></button>
                                <button className="rounded-full w-4 h-4" style={{ background: "#252B42" }}></button>
                            </div>
                            
                            
                        </div>
                        {/* <button
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                            onClick ={(e) => handleAddToCart(e, product)}>
                                Add to Cart
                        </button> */}
                    {/* <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"> 
                    <Button product={product}/> Add to Cart </button>  */}
                        </Link>
                           <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"> 
                    <Button product={product}/> Add to Cart </button> 
                        {/* <Button product={product}/>  */}
                        </div>
            ))}
                    </div>
                    </div>
            );
}

            export default Productcard
