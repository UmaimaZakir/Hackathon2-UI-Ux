import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div style={{ font: "Montserrat" }}>
            <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 p-4 m-2">
                <div className="col-span-1 md:col-span-6 sm:grid-cols-1 font-bold p-4 mt-4" style={{ color: "#252B42", fontSize: "24px" }}>
                    Bandage
                </div>
                {/* Social Media Icons Section */}
                <div className="col-span-1 md:col-span-6 sm:col-span-1 flex justify-end items-center p-2 mt-4">
                    <div className="space-x-4 flex">
                        {/* Change icons color to the blue color used for the Subscribe button */}
                        <FaFacebookF style={{ color: "#23A6F0", fontSize: "20px" }} />
                        <FaInstagram style={{ color: "#23A6F0", fontSize: "20px" }} />
                        <FaTwitter style={{ color: "#23A6F0", fontSize: "20px" }} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 p-4 m-4">
                <div className="col-span-1 md:col-span-2 sm:col-span-1 font-bold p-2 mt-4" style={{ color: "#252B42", fontSize: "15px" }}>
                    Company Info
                    <div className="mt-8" style={{ color: "#737373", fontSize: "14px" }}>
                        <div>About Us</div>
                        <div className="mt-3">Carrier</div>
                        <div className="mt-3">We are hiring</div>
                        <div className="mt-3">Blog</div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 sm:col-span-1 font-bold p-2 mt-4" style={{ color: "#252B42", fontSize: "16px" }}>
                    Legal
                    <div className="mt-8" style={{ color: "#737373", fontSize: "14px" }}>
                        <div>About Us</div>
                        <div className="mt-3">Carrier</div>
                        <div className="mt-3">We are hiring</div>
                        <div className="mt-3">Blog</div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 sm:col-span-1 font-bold p-2 mt-4" style={{ color: "#252B42", fontSize: "16px" }}>
                    Features
                    <div className="mt-8" style={{ color: "#737373", fontSize: "14px" }}>
                        <div>Business Marketing</div>
                        <div className="mt-3">User Analytic</div>
                        <div className="mt-3">Live Chat</div>
                        <div className="mt-3">Unlimited Support</div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 sm:col-span-1 font-bold p-2 mt-4" style={{ color: "#252B42", fontSize: "16px" }}>
                    Resources
                    <div className="mt-8" style={{ color: "#737373", fontSize: "14px" }}>
                        <div>IOS & Android</div>
                        <div className="mt-3">Watch a Demo</div>
                        <div className="mt-3">Customers</div>
                        <div className="mt-3">API</div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-4 sm:col-span-1 p-2 mt-4 font-bold" style={{ color: "#252B42", fontSize: "16px" }}>
                    Get In Touch
                    <div className='font-thin'>
                        <input type="text" placeholder="Your Email" className="p-4 mt-4 rounded-md" style={{ color: "#737373", backgroundColor: "#F9F9F9", fontSize: "14px" }} />
                        <button className="p-3 mt-4 rounded-md" style={{ backgroundColor: "#23A6F0", color: "#FFFFFF" }}>Subscribe</button>
                        <div className="font-bold p-2" style={{ color: "#737373", fontSize: "12px" }}>Lore imp sum dolor Amit</div>
                    </div>
                </div>

            </div>

            {/* Grey Line Above the Text */}
            <div className='' style={{ borderTop: "1px solid #B0B0B0", margin: "20px 0" }}></div>

            <div className="font-bold p-2" style={{ color: "#737373", fontSize: "14px" }}>
                Made With Love By Finland All Right Reserved
            </div>

        </div>
    );
}
