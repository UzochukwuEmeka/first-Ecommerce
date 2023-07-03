'use client'
import React from 'react'
import Image from 'next/image'
import Mountains from '../public/moutain.png'
import { useState } from 'react'

const ProductImage = ({ product, fill }) => {
    const [loading, setLoading] = useState(true)
    return (
        <>
            {
                fill ? (<Image fill src={product.image} alt="Mountains"  className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-100 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}  `}
                onLoadingComplete={() => setLoading(false)} />) : (<Image src={product.image} alt={Mountains} width={400} height={1000} className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-100 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}  `}
                    onLoadingComplete={() => setLoading(false)}
                />)
            }
        </>
    )
}

export default ProductImage
