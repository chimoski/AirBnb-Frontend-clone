import React from 'react'

export default function LoginPopUp() {
  return (
    <div className="absolute right-10 h-[auto] flex flex-col justify-start space-y-5
        bg-[#FE595E] top-[5rem] shadow-xl rounded-md text-white py-4 animate-pulse
        ">
          <div className="flex flex-col space-y-2 border-b  pb-5">
            <button className="hover:bg-[#fd4e54] px-10">Login</button>
            <button className="hover:bg-[#fd4e54] px-10">Sign up</button>
          </div>
          <div className="flex flex-col justify-start space-y-2">
          <button className="hover:bg-[#fd4e54] px-10">Become a host</button>
          <button className="hover:bg-[#fd4e54] px-10">How to use</button>
          <button className="hover:bg-[#fd4e54] px-10">Help</button>
          </div>
        </div>
  )
}
