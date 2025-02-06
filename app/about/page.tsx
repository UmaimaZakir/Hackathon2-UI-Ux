
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import Weblogo from "../components/weblogo/page";

export default function About() {
    return (
        <div style={{ font: "Montserrat" }}>
            <div><Navbar /></div>



            {/* about */}
            <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1">
                <div className=" col-span-1 md:col-span-6 sm:grid-cols-1"
                    style={{ color: "#252B42", font: "Montserrat" }} >
                    <div className="mt-24 ml-44"
                        style={{ width: "599px", height: "321px", }}>
                        <div className="font-bold">
                            ABOUT COMPANY
                        </div>
                        <div className="font-bold mt-8 text-5xl">
                            ABOUT US
                        </div>
                        <div className=" mt-9 font-bold" style={{ font: "Montserrat" }}>
                            <p>
                                We know how large objects will act,<br /> but thing son a small scale
                            </p>
                        </div>
                        <div>
                            <button className="rounded-md  mt-7 p-5 text-center justify-center items-center font-thin text-white" style={{ width: "195px", height: "52px", gap: "10px", font: "Montserrat", alignContent: "center", background: "#23A6F0" }}>Get Quate Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-6 sm:grid-cols-1" >
                    <div>
                        <img src="/images/1.png" alt="Image" className="md:ml-11" style={{ width: "630px", height: "612px", margin: "" }} />
                    </div>

                </div>
            </div>

            {/* content */}
            <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 mt-20" style={{ font: "Montserrat" }}>
                <div className="col-span-1 md:col-span-5 sm:grid-cols-1 ml-44 ">
                    <div className="font" style={{ color: "#E74040", fontSize: "14px" }}><p>
                        Promblems Typing
                    </p></div>
                    <div className="font-bold mt-5" style={{ fontSize: "24px" }}>
                        <h2>
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-5 sm:grid-cols-1  mt-10">
                    <div style={{ color: "#737373", fontSize: "14px" }}>
                        <p className="ml-11">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p></div>
                </div>
            </div>



            {/* stats */}
            <div className="font-bold text-6xl grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 mt-44 ml-24 mr-20 text-center" style={{ font: "Montserrat", color: "#252B42" }}>

                <div className="col-span-1 md:col-span-3 sm:grid-cols-1">
                    15K
                    <div className="mt-3" style={{ fontSize: "16px", color: "#737373" }}>
                        Happy Customers
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3 sm:grid-cols-1">
                    150K
                    <div className="mt-3" style={{ fontSize: "16px", color: "#737373" }}>
                        Monthly Visitors
                    </div>
                </div>


                <div className="col-span-1 md:col-span-3 sm:grid-cols-1 text-center">
                    15
                    <div className="mt-3" style={{ fontSize: "16px", color: "#737373" }}>
                        Countries Worldwide
                    </div>
                </div>


                <div className="col-span-1 md:col-span-3 sm:grid-cols-1">
                    100+
                    <div className="mt-3" style={{ fontSize: "16px", color: "#737373" }}>
                        Top Partners
                    </div>
                </div>
            </div>



            {/* video */}
            {/* <div >
                <div> <button className="rounded-full text-white m-5 p-9 items-center justify-center   " style={{ background: "#23A6F0", borderRadius: "100%" }}>
                        <img src="/images/2.jpg" alt="Video" className="md:ml-44 mt-24 rounded-lg" style={{ width: "989px", height: "540px"}} />
                        </button>
                        </div>
                        </div> */}
            <div className="grid-cols-1 md:grid-cols-12 sm:grid-cols-1 flex justify-center  items-center mt6 mb-10">
                <div className="relative col-span-1 md:col-span-1 sm:grid-cols-1" style={{ width: "989px", height: "540px" }}>

                    <img
                        src="/images/2.jpg"
                        alt="Scenic Image"
                        className="w-full h-full object-cover rounded-lg text-center p-2"
                    />

                    {/* Button */}
                    <button
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white rounded-full w-20 h-20 hover:bg-blue-600 shadow-lg"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <span className="text-3xl ">{`>`}</span>
                    </button>



                </div>
            </div>



            {/* team */}
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 p-2 ">
                <div className="text-4xl  text-center justify-center font-bold mt- p-2 " style={{ color: "#252B42" }}>
                    Meet Our Team
                </div>
                <div className="text-center mt-3" style={{ color: "#737373" }}>
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics
                </div >
                <div className="flex gap-4 p-2 m-2 ml-36" >
                    <div className="justify-center text-center">
                        <img src="images/3.jpg" alt="" />
                        <div className="text-center justify-center m-4">
                            <div className="font-bold">
                                Username
                            </div>
                            <div className="font-bold m-2" style={{ color: "#737373" }}>
                                Profession
                            </div>
                            <div className=" flex justify-center items-center">
                                {/* Change icons color to the blue color used for the Subscribe button */}
                                <FaFacebookF style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaInstagram style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaTwitter style={{ color: "#23A6F0", fontSize: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-center">
                        <img src="images/4.jpg" alt="" />
                        <div className="text-center justify-center m-4">
                            <div className="font-bold">
                                Username
                            </div>
                            <div className="font-bold m-2" style={{ color: "#737373" }}>
                                Profession
                            </div>
                            <div className=" flex justify-center items-center">
                                {/* Change icons color to the blue color used for the Subscribe button */}
                                <FaFacebookF style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaInstagram style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaTwitter style={{ color: "#23A6F0", fontSize: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-center">
                        <img src="images/5.jpg" alt="" />
                        <div className="text-center justify-center m-4">
                            <div className="font-bold">
                                Username
                            </div>
                            <div className="font-bold m-2" style={{ color: "#737373" }}>
                                Profession
                            </div>
                            <div className=" flex justify-center items-center">
                                {/* Change icons color to the blue color used for the Subscribe button */}
                                <FaFacebookF style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaInstagram style={{ color: "#23A6F0", fontSize: "20px" }} />
                                <FaTwitter style={{ color: "#23A6F0", fontSize: "20px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-center justify-center m-2 p-4 " style={{ background: "#FAFAFA" }}>
                <h2 className="" style={{ fontSize: "20px", }}>Big Companies Are Here</h2>
                <h6 className="m-2" style={{ color: "#737373" }}>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </h6>
                    <Weblogo/>

            </div>
            <div><Footer /></div>






















        </div>
    )
}