// import React, { useRef, useState } from "react";
// import Image from "next/dist/client/image"

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// export default function App({dummyData}) {
//     const [swiperRef, setSwiperRef] = useState(null);

  
  
  
//     return (
      
       
//        <>
    
//       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
       
//       {dummyData.map(({img, title}, i)=>(
//                <SwiperSlide> 
//                  <div className=" cursor-pointer hover:scale-105  transform  transition duration-200  ease-out">
//           <div className="relative h-80 w-80 ">
//           <Image src={img}
//          layout="fill"
//          className="rounded-xl"
//          alt="image"
//           /> 

//           </div>
//         <h3>{title}</h3> <br /> <br />
//           </div>
//                  </SwiperSlide>
//             ))}
       
//       </Swiper>
//     </>
//   );

    
// }


// export async function getStaticProps (){
//     const dummyData = await fetch('https://links.papareact.com/zp1')
//     .then(res=> res.json());

//     return {
//         props:{dummyData}
//     }
// }
