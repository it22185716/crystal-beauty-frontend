import axios from "axios"
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
       {
        Products.map(
            (product)=>{
                console.log("Mapping"+product.productId)
                return(
                    <h1 key={product.productId}>{product.productId}</h1>
                )
            }
        )
       }
    </div>
)
}