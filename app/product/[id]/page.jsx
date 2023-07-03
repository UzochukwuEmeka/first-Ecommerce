import ProductImage from '@/components/ProductImage'
import React from 'react'
import  {notFound} from "next/navigation"

const ProductPage = async ({ params: { id } }) => {

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const produt = await res.json()
    return (
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10 '>
        <ProductImage product={produt} />
        <div className='divide-y'>
          <div className=' space-y-2'>
            <h1 className="text-2xl md:text-4xl font-bold">{produt.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${produt.price}</h2>
          </div>
          <div className='pt-8' ><p className="text-xs md:text-sm">{produt.description}</p></div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()

  }

}

export default ProductPage
