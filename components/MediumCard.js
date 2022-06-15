import Image from "next/dist/client/image"
export const MediumCard = ({img, title}) => {
  return (
    <div className=" cursor-pointer hover:scale-105  transform  transition duration-200  ease-out">
        <div className="relative h-80 w-80 ">
        <Image src={img}
         layout="fill"
         className="rounded-xl"
         alt="image"
          /> 

        </div>
        <h3>{title}</h3>
    </div>
  )
}
