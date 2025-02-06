import Link from "next/link";
import Clothes from "../components/clothes/page";
import Footer from "../components/footer/page";
import NavbarDark from "../components/navbarDark/page";
import { CgChevronRight } from "react-icons/cg";


export default function Productshop() {
    return (
        <div>
            <div>

                <NavbarDark />
            </div>
            <div className="grig grid-cols-1 md:grid-cols-6 sm:grid-cols-1 gap-4 p-2 ml-4 font-bold flex ">
                <Link href='/home'>
                    Home
                </Link>
                <CgChevronRight className="mt-1" />
                <span className="hower:text-grey-50 transition" style={{ color: "#BDBDBD" }}>
                    Shop
                </span>
            </div>
            <div>
                <Clothes />
            </div>
            <div>
                <Footer />

            </div>










        </div >
    )
}