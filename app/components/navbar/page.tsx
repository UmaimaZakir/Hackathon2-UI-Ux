import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Navbar() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 p-6 gap-5 font-Montserrat" >
         
                <div className="md:col-span-3 sm:col-span-1 text-black font-bold font-Montserrat text-3xl text-end">
                        Bandage</div>
                        <div className=" md:col-span-6 sm:col-span-1 text-center r">
                        <ul className="flex gap-8 mt-2 text-center justify-cente font-bold cursor-pointer" style={{color:"#737373"}}>
                        <li><Link href={"/"}>Home
                        </Link>
                        </li>
                        <li><Link href={"/about"}>About
                        </Link>
                        </li>
                        <li ><Link href={"/productlist"}>Product
                        </Link>
                         </li>
                        <li>
                        Pricing</li>
                        <li>
                        Contact</li>

                        </ul>
                        </div>
                     <div className="md:col-span-3 sm:col-span-1 flex gap-5">
                     <div className="font-semibold text-sm mt-2"style={{color:"#23A6F0"}}
                        >Login</div>
                     <button className="rounded-md text-sm bg-blue-400 gap-4 flex items-center px-4 p-2 text-white "
                        >  Become a member <FaArrowRightLong /> </button>
                    
                     </div>
                  
                        
                
                </div>
    )
}
