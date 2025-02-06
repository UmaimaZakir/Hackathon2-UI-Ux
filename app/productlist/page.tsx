'use client'
import { CgChevronRight } from "react-icons/cg";
import Clothes from "../components/clothes/page";
import Footer from "../components/footer/page";
import NavbarDark from "../components/navbarDark/page";
import Link from "next/link";

export default function Productlist() {
  return (

    // dark navbar
    <div style={{ font: "Montserrat" }}>
      <div >
        <NavbarDark />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 gap-6 p-2">
        {/* "Shop" aligned to the left */}
        <div className="col-span-12 md:col-span-6 sm:col-span-12 gap-4 p-2 font-bold text-2xl">
          Shop
        </div>

        {/* Breadcrumb (Home > Shop) aligned to the right */}
        <div className="col-span-12 md:col-span-6 sm:col-span-12 flex justify-end items-center gap-3 p-2">
          <Link href='/home' className="font-bold text-lg">
            Home
          </Link>
          <CgChevronRight className="text-xl" />
          <span className="text-lg text-gray-500 cursor-pointer">Shop</span>
        </div>
      </div>

      <div>
        <Clothes />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}