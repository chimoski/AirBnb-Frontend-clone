import Image from "next/dist/client/image"
export const SmallCard = ({img, location, distance}) => {
  return (
    <div className="flex items-center
     m-2 mt-5 space-x-4 rounded-xl cursor-pointer
     hover:bg-gray-100  hover:scale-105 transition
      transform duration-200 ease-out 
     ">
        {/* left left left */}
        <div className="relative h-16 w-16 ">
            <Image 
            src={img} 
            layout="fill"
            className="rounded-lg"
            alt="image"
            />
        </div>
         {/* right right right */}
         <div>
             <h2>{location}</h2>
             <h3 className="text-gray-500">{distance}</h3>
         </div>
    </div>
  )
}
