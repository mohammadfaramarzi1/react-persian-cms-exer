import React from 'react'
import Errorbox from '../Errorbox/Errorbox'
import AddNewProduct from '../AddNewProducts/AddNewProduct'

function Products() {
  return (
    <div>
      <AddNewProduct />
      <Errorbox msg="هیچ محصولی یافت نشد..." />
    </div>
  )
}

export default Products