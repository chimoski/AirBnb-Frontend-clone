import Image from "next/dist/client/image"
export const Barnner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px]
   lg:h-[80vh] 2xl:h-[700px]
    '>
        <Image src="https://links.papareact.com/0fm" 
        alt="image"
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go?</p>
            <button className='text-purple-500
             bg-white px-10 py-4  shadow-md rounded-full mt-3 font-bold
             hover:shadow-xl active:scale-90 transition duration-150
            '>I'm Flexible</button>
        </div>
    </div>
  )
}
