import { buttonProps } from '@/types'
import clsx from 'clsx'
import React from 'react'

const Button = ({type, text, onClick, actionButton, bgColor, ...props}: buttonProps) => {
  return (
    <div>
      <button 
        onClick={onClick} 
        type={type} 
        className={clsx(
          'font-medium rounded-xl text-sm px-4 py-2.5 focus:outline-none',
          'transition-all duration-200 ease-in-out',
          'shadow-lg hover:shadow-xl transform hover:scale-105',
          'active:scale-95',
          actionButton && [
            'text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800',
            'min-w-[40px] min-h-[40px] flex items-center justify-center',
            'border border-gray-600/50 backdrop-blur-sm'
          ],
          bgColor && [
            `${bgColor} hover:${bgColor.replace('bg-', 'bg-').replace('-400', '-500').replace('-500', '-600')}`,
            'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'
          ],
          !bgColor && !actionButton && [
            'bg-gradient-to-r from-blue-600 to-purple-600',
            'hover:from-blue-700 hover:to-purple-700',
            'text-white focus:ring-blue-500/50'
          ]
        )}
        {...props}
      >
        {text}
      </button>
    </div>
  )
}

export default Button

//npm i clsx react-icons
