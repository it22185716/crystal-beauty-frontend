/*import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProducstPage(){

    const[Products, setProducts] = useState([])

    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                (response)=>{
                    console.log(response.data)
                    setProducts(response.data)
                }
            )

        }
        ,
        []
    )

   
    return(
    <div className="w-full h-full  rounded-lg">
        <table className="w=full bg-red-200">
            <thead>
                <tr>
                    <th className="p-2">Product ID</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">labeled price</th>
                    <th className="p-2">Stock</th>
                    
                </tr>
                <tbody>
                    <tr>
                        <td className="p-2">1</td>
                        <td className="p-2">Product 1</td>
                        <td className="p-2">100</td>
                        <td className="p-2">150</td>
                        <td className="p-2">10</td>
                    </tr>
                    <tr>
                        <td className="p-2">2</td>
                        <td className="p-2">Product 2</td>
                        <td className="p-2">200</td>
                        <td className="p-2">250</td>
                        <td className="p-2">20</td>
                    </tr>
                </tbody>
            </thead>
        </table>
       {
        Products.map(
            (product,index)=>{
                console.log("Mapping"+product.productId)
                return(
                   <div key={index} className="">
                    
                    </div>
                )
            }
        )
       }
    </div>
)
}*/
import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProducstPage() {
  const [Products, setProducts] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  }, [])

  return (
    <div className="w-full h-full rounded-lg relative">
        <Link to={"/admin/addProduct"} className="text-white absolute bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-900 right-5 bottom-5">
        <FaPlus />
        </Link>
      <table className="w-full text-black bg-gray-100 cursor-pointer hover:bg-gray-700 hover:text-white">
        <thead>
          <tr>
            <th className="p-2">Product ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Labeled Price</th>
            <th className="p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
         
            
        </tbody>
        {
        Products.map((product, index) => {
          console.log("Mapping" + product.productId)
          return (
            <tr key={index} className="bg-gray-200 hover:bg-gray-300 text-center" >
              <td className="p-2">{product.productId}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.labeledPrice}</td>
              <td className="p-2">{product.stock}</td>
            </tr>
          )
        })
      }
      </table>

      
    </div>
  )
}
