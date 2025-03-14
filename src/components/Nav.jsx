import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link} from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  
  

  let distinct_category =

    //ye code hai categories ko extract kre ke liye
    //reduce ek loop me chlta hai jisme do cheeze hoti hai acc and cv , acc ek khali array hota hai
    // or cv current value to hum [...acc, cv.category ] mtlb ki hum acc khali array me currentvalue 
    //ki category ko access krke usko khali array me daal denge jisse ab array me bss ctegories rhenge repeated
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
    console.log(distinct_category);
    

  //ye do line ka code hai ek set bnane ke liye jisme diffrent elements hote h
  //set is a collection of different elements
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  const color =()=>{
    return `rgba(${(Math.random()*255).toFixed()},
     ${(Math.random()*255).toFixed()},
     ${(Math.random()*255).toFixed()},0.5)`
  }
  //console.log(color())


  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-2 px-4 font-semibold border rounded border-blue-300 text-blue-400"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
      {distinct_category.map((c, i) => (
          <Link
          key={i}
            to={`/?category=${c}`}
            
            
            className="flex items-center mb-3 hover:scale-110"
          >
            <span style={{backgroundColor: color()}} className="rounded-full mt-1 mr-2 w-[15px] h-[15px] bg-blue-200"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
