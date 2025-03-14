import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
const Home = () => {


  //is pure componenet me bs humare cards show horhe hai or cards ko link bnaya hai or to={} ko 
  //assign kiya hai details ki id jisse hume card pe click krke uski id mile or us card ki details show ho jaye
  const [products] = useContext(ProductContext)



  //pehli line me use location se jo bhi upr search bar me hai vo aajaega 
  //dusri me humne use state bnaya hai filtered products ke liye
  //third me humne pehle serach.split("=")[1] krke pure location ko = se split kiya hai or uska first index
  //liya hai jisme category hai fir decodeURIComponent krke humne usko decode kiya hai string me 



  const {search} = useLocation();
  console.log(search)
  const category = decodeURIComponent(search.split("=")[1])

  
  const [filteredProducts, setfilteredProducts] = useState(null)
  const getProductCategory = async()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setfilteredProducts(data);
    } catch (error) {
      console.log(error)
    }
  }


  //yha par do condition hai ki kab humko products show krne hai or kb filtered products
  //1. to jab humare filteredProducts me kuch nhi hai or category undefined hai to hum setfilteredproducts
  // me products daal denege jisse humare products hi show ho or 
  //2. agar category undefined nhi hai to hum getProductCategory call krenge jisme humne filteredProducts 
  //ko show karaya hai

  
  useEffect(()=>{
    if(!filteredProducts || category == "undefined") setfilteredProducts(products)
    if (category != "undefined") {
      getProductCategory();
      setfilteredProducts(products.filter(p => p.category == category))
    }
  }, [category, products])

  
  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">

        {filteredProducts && filteredProducts.map((p, i)=>{
          return <Link key={i}
          to={`/details/${p.id}`}
          className="card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center mr-3 mb-3"
        >
          <div
            className="hover:scale-110 h-[80%] w-full bg-contain bg-center bg-no-repeat mb-3"
            style={{
              backgroundImage:
                `url(${p.image})`,
            }}
          ></div>
          <h1 className=" text-xs font-semibold">{p.title}</h1>
        </Link>
        })}
        
      </div>
    </>
  );
};

export default Home;