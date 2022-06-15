import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-gray-100   py-7 px-5 gap-x-5'>
       <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-10 md:grid-cols-4 '>
       <div className='space-y-4 text-xs text-gray-800  sm:max-w:7xl sm:mx-auto'>
            <h5 className="font-bold">ABOUT</h5>
           <p>How Airbnb works</p>
           <p>News room</p>
           <p>Investors</p>
           <p>Airbnb plus</p>
           <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800 sm:max-w:7xl sm:mx-auto'>
            <h5 className="font-bold">Community</h5>
           <p>Accesibility</p>
           <p>This is not a real site</p>
           <p>It's a clone of the real site </p>
           <p>Seeking connections</p>
           <p>Open for Freelance</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800 sm:max-w:7xl sm:mx-auto'>
            <h5 className="font-bold">HOST</h5>
           <p>Chimoski</p>
           <p>Airbnb clone</p>
           <p>Reach out to me</p>
           <p>Our Portfolio</p>
           <p>Join Now</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800 sm:max-w:7xl sm:mx-auto'>
            <h5 className="font-bold">Support</h5>
           <p>Help center</p>
           <p>Trust & Safety</p>
           <p>Our team</p>
           <p>Survey</p>
           <p>Referencs</p>
        </div>
        <div></div>
       </div>
    </div>
  )
}
