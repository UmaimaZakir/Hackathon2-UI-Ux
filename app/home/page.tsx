import EightProduct from "../components/eightproduct/page";
import Footer from "../components/footer/page";
import NavbarDark from "../components/navbarDark/page";


export default function Home() {
  return (

    // dark navbar
    <div style={{ font: "Montserrat" }}>
      <div><NavbarDark />
        <div><div>
          <div>
            <div className="relative">
              <img src="/images/7.jpg" alt="" />
            </div>
            <div className="absolute text-white top-80 left-24 p-12 justify grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1">
              <div className=" col-span-1 md:col-span-8 sm:grid-cols-1 ">
                <h5 className="font-bold " style={{ fontSize: "16px" }}>SUMMER 2020</h5>
                <h1 className="mt-10 font-bold" style={{ fontSize: "58px" }}>NEW COLLECTION</h1>
                <h4 className="mt-10" style={{ fontSize: "20px" }}>We know how large objects will act,<br />
                  but things on a small scale. </h4>
                <button className="font-bold p-3 w-44 text-white mt-9" style={{ background: "#2DC071", fontSize: "24px" }}>SHOP NOW</button>
              </div>
            </div>
            <div style={{ background: "#FAFAFA" }} className="p-16">
              <div className="text-center " style={{ background: "#FAFAFA" }}>
                <div className="font-bold " style={{ color: "#252B42", fontSize: "24px" }}>
                  EDITOR’S PICK
                  <div className="font-thin p-3" style={{ color: "#737373", fontSize: "14px" }}>Problems trying to resolve the conflict between </div>
                </div>
              </div>
            </div>
          </div>
        </div></div></div>
      {/* products */}
      <div className="m-5 p-6">
        <EightProduct />
      </div>

      {/* new collection */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-20 sm:grid-cols-1" style={{ background: "#23856D" }}>
        <div className="col-span-1 md:col-span-6 sm:grid-cols-1 p-2 m-4  ml-16 mt-40">
          <div style={{ fontSize: "20px", color: "#FFFFFF" }}>SUMMER 2020</div>
          <div className="font-bold w-full" style={{ fontSize: "58px", color: "#FFFFFF" }}>Vita Classic Product</div>
          <div style={{ fontSize: "14px", color: "#FFFFFF" }}>We know how large objects will act, We know <br /> how are objects will act, We know</div>
          <div style={{ fontSize: "24px", color: "#FFFFFF" }}> $16.48
            <button className="p-4 rounded-md font-bold m-4 px-10" style={{ background: "#2DC071", fontSize: "14px" }}>ADD TO CART</button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 sm:grid-cols-1 mt-14 mb-2 ml-16" style={{ width: "443px", height: "685px" }}>
          <img src="/images/20.png" alt="" />
        </div></div>
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1" >
        <div className="col-span-1 md:col-span-6 sm:grid-cols-1 " style={{ width: "725px", height: "774px" }}>
          <img src="/images/21.png" alt="" />
        </div>

        <div className="col-span-1 md:col-span-6 sm:grid-cols-1 p-28">
          <div className=" font-bold" style={{ color: "#BDBDBD", fontSize: "16px" }}>SUMMER 2020</div>
          <div className="font-bold" style={{ color: "#252B42", fontSize: "40px" }}>Part of the Neural <br /> Universe</div>
          <div style={{ color: "#737373", fontSize: "20px" }}>We know how large objects will act,<br /> but things on a small scale.</div>
          <div className="font-bold">
            <button className="text-center p-3 px-8 rounded-md" style={{ background: "#2DC071", color: "#FFFFFF", fontSize: "14px" }}>BUY NOW</button>
            <button className=" bg-white text-center p-3  px-4 rounded-md m-4 border-2" style={{ color: "#2DC071", fontSize: "14px", borderColor: "#2DC071" }}>READ MORE</button>
          </div>
        </div>
      </div>
      <div><Footer /></div>


















    </div>
  )
}

