import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import { ProductContext } from '../utils/Context'
import { useContext } from 'react'
function Details() {
  const navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext)
   const [product, setProduct] = useState(null)
    const { id } = useParams();
    console.log(id)
    // const getSingleProduct = async()=>{
    //     try {
    //         const {data} = await axios.get(`/products/${id}`)
    //        console.log(data);
    //        setProduct(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useEffect(()=>{
      if(!product){
        setProduct(products.filter((p) => p.id == id)[0])
      }
    },[]);

    const ProductDeleteHandler = (id)=>{
      const FilteredProducts = products.filter(p => p.id !== id);
      setProducts(FilteredProducts);
      localStorage.setItem("products", JSON.stringify(FilteredProducts))
      navigate("/")
    }

  return product? (
    <div className='w-[70%] h-screen conntainer m-auto p-[10%] flex  '>
      <img className='w-[45%] h-[80%] object-contain' src={product.image} alt="" />
      <div className='Content w-full  ml-10 font-semibold flex flex-col justify-center '>
        <h1 className='text-3xl'>{product.title}</h1>
        <h3 className='text-zinc-500'>{product.category}</h3>
        <h2 className='text-red-500'>{product.price}</h2>
        <p>{product.description}</p>
        <div className='flex gap-10 mt-2'>
        <Link className='border-2 rounded border-blue-400 text-blue-500 py-1 px-3'>Edit</Link>
        <button onClick={()=>ProductDeleteHandler(product.id)} className='border-2 rounded border-red-400 text-red-500 py-1 px-3'>Delete</button>
        </div>
      </div>

      
    </div>
  ) : <h1>Loading</h1>
}

export default Details
