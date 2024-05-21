import React from 'react'
import { useDispatch } from 'react-redux';
import { uiActions } from '@/redux/uiSlice';

const CartHeader = () => {
    const dispatch=useDispatch()
    const setShowCart = (bool) => {
        dispatch(uiActions.setShowCart(bool));
      };
  return (
    <div className="cart-header p-3 flex justify-between">
            <p className="font-semibold text-lg">Shopping Cart</p>
            <button
              className="text-gray-700 hover:text-gray-500 "
              onClick={() => setShowCart(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  )
}

export default CartHeader