import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/dist/client/image"
export default function InfoCard({img,location,title,description,star,price,total}) {
  return (
    <div className="flex flex-col md:flex-row px-0  py-7 md:px-2 border-b cursor-pointer  hover:opacity-80 
    transition duration-200 ease-out first:border-top
    hover:shadow-lg">
        <div className="relative h-[250px] w-50 md:w-80 md:h-52 flex-shrink-0">
            <Image
            src={img}
            alt="Logo"
            layout="fill"
            className="border-2xl rounded-xl object-cover h-[100%] w-[90%] lg:w-[100%] mx-auto"
             />
        </div>
        <div className="flex flex-col flex-grow pl-5 ">
            <div className="flex justify-between">
                <p>{location}</p>
                <HeartIcon className="h-7 cursor-pointer "/>
            </div>
            <h4 className="text-xl">{title}</h4>
            <div className="border-b w-10 pt-2"></div>
            <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

            <div className="flex justify-between items-end pt-5 ">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-500"/>
                    {star}
                </p>
                <div>
                    <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                    <p className="text-right font-extralight">{total}</p>
                </div>
            </div>

        </div>
    </div>
  )
}
