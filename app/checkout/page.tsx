"use client"
import { Product } from '@/types/products'
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../actions/actions'
import { error } from 'console'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { CgChevronRight } from 'react-icons/cg'
import NavbarDark from '../components/navbarDark/page'
import Footer from '../components/footer/page'

export const CheckOut = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipcode: "",
        phone: "",
        city: ""
    })
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        address: false,
        zipcode: false,
        phone: false,
        city: false
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem('appliedDiscount')
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce((total, item) => total + item.price * item.stocklevel, 0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            address: !formValues.address,
            zipcode: !formValues.zipcode,
            phone: !formValues.phone,
            city: !formValues.city
        };
        setFormErrors(errors)
        return Object.values(errors).every((error) => !error);
    }

    const handlePlaceOrder = () => {
        if (validateForm()) {
            localStorage.removeItem("appliedDiscount")
        }
    }

    return (
        <div>
            <div><NavbarDark/></div>
            <div className='min-h-screen bg-gray-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='py-4'>
                        <nav className='flex items-center space-x-2 text-gray-600'>
                            <Link href='/cart' className='hover:text-gray-800'>Cart</Link>
                            <CgChevronRight />
                            <span className='font-semibold'>CheckOut</span>
                        </nav>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Order Summary Section */}
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item._id} className='flex items-center justify-between border-b py-4'>
                                        <div className='flex items-center'>
                                            {item.productImage && (
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt="image"
                                                    width={50}
                                                    height={50}
                                                    className='object-cover rounded-md'
                                                />
                                            )}
                                            <div className='ml-4'>
                                                <h3 className='text-md font-medium'>{item.title}</h3>
                                                <p className='text-sm text-gray-500'>Quantity: {item.stocklevel}</p>
                                            </div>
                                        </div>
                                        <p className='text-lg font-semibold text-gray-900'>${item.price * item.stocklevel}</p>
                                    </div>
                                ))
                            ) : (
                                <p className='text-gray-600'>No items in cart</p>
                            )}
                            <div className='mt-4'>
                                <p className='flex justify-between font-semibold'>
                                    Subtotal: <span>${subTotal}</span>
                                </p>
                                <p className='flex justify-between font-semibold'>
                                    Discount: <span>${discount}</span>
                                </p>
                                <p className='flex justify-between font-semibold text-xl'>
                                    Total: <span>${(subTotal - discount).toFixed(2)}</span>
                                </p>
                            </div>
                        </div>

                        {/* Billing Information Section */}
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                            <h2 className='text-xl font-semibold mb-4'>Billing Information</h2>
                            <div className='space-y-4'>
                                {[
                                    { id: 'firstName', label: 'First Name' },
                                    { id: 'lastName', label: 'Last Name' },
                                    { id: 'email', label: 'Email' },
                                    { id: 'address', label: 'Address' },
                                    { id: 'zipcode', label: 'Zipcode' },
                                    { id: 'phone', label: 'Phone' },
                                    { id: 'city', label: 'City' }
                                ].map((field) => (
                                    <div key={field.id} className='space-y-1'>
                                        <label htmlFor={field.id} className='text-sm font-medium text-gray-600'>{field.label}</label>
                                        <input
                                            type="text"
                                            id={field.id}
                                            placeholder={`Enter Your ${field.label}`}
                                            value={formValues[field.id as keyof typeof formValues]}
                                            onChange={handleInputChange}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                        />
                                        {formErrors[field.id as keyof typeof formErrors] && (
                                            <p className='text-red-500 text-xs'>This field is required</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handlePlaceOrder}
                                className='mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition'
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
                <div><Footer/></div>
            </div></div>
    )
}

export default CheckOut
