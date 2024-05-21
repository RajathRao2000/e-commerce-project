import React from 'react'
import CategoryNav from '../../Store/CategoryNav/CategoryNav'

const StoreLayout = ({children}) => {
  return (
    <>
    <CategoryNav />
    <div>{children}</div>
    </>
  )
}

export default StoreLayout