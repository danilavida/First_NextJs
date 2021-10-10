import React from 'react'
import { useRouter } from 'next/dist/client/router'

const ProductItem = () => {
  const { query: { productId } } = useRouter()
  return (
    <div>
      <h1>Esta es la pagina del proyecto: {productId}</h1>
    </div>
  )
}

export default ProductItem
