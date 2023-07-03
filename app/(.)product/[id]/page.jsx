'use client'
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ProductImage from '@/components/ProductImage'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import Link from 'next/link'
import '../../loading.css'

import { FaHSquare } from 'react-icons/fa'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const id = useParams().id

    useEffect(() => {
        async function fetchProduct() {
            setIsLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const product = await res.json()
            setProducts(product)
            setIsLoading(false)

        }
        fetchProduct();
    }, [id])

    console.log(products)
    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                setIsOpen(false)
                router.back()
            }}
            className="relative z-50"
        >


            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
                   
                        <div className='flex gap-x-8 h-96'>
                        {products?.image && (
                            <div className="relative w-72 h-full hidden md:inline">
                                <ProductImage product={products} fill />
                            </div>

                        )}
                        <div className='flex-1 flex flex-col'>
                            <div className='flex-1'>
                                <h4 className='font-semibold'>
                                    {products?.title}
                                </h4>
                                <p className='font-medium text-sm'>${products?.price} </p>

                                <div className="flex items-centr text-sm my-4">
                                    <p>{products?.rating.rate}</p>
                                    {products?.rating.rate && (
                                        <div className="flex items-center ml-2 mr-6">
                                            {Array.from(
                                                { length: Math.floor(products.rating.rate) },
                                                (_, i) => (
                                                    <FaStar key={i} className='h-4 w-4 text-yellow-500' />
                                                )
                                            )}
                                            {Array.from(
                                                {
                                                    length: 5 - Math.floor(products.rating.rate)
                                                },
                                                (_, i) => {
                                                    return <FaStarHalf key={i} className='h-4 w-4 text-yellow-500' />
                                                }
                                            )}

                                        </div>
                                    )}
                                    <p className='text-blue-600 hover:underline cursor-pointer text-xs'>
                                        See all {products?.rating.count}
                                    </p>
                                </div>
                                <p className='line-clamp-5 text-sm'>{products?.description}</p>
                            </div>
                            <div className='space-y-3  text-sm'>
                            <button  className='button w-full text-white border-transparent 
                  bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-black'>Add to bag</button>
                                <button onClick={() => window.location.reload()} className='button w-full text-white border-transparent 
                  bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-black'>View full details</button>

                            </div>
                        </div>

                    </div>
                    


                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default Modal
