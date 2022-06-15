import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import {useRouter} from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from '../components/infoCard';
import MyMap from '../components/Map';

const Search = ({searchResults}) => {
    const route = useRouter();
    const {location,startDate,endDate,noOfGuests} = route.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            <main className="flex flex-col xl:flex-row">
                <section className="flex-grow pt-14 px-16">
                    <p className="text-xs">300+ stays -{range}- or {noOfGuests}  {noOfGuests == 1 ? 'guest':'guests' }</p>
                    <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 
                    text-gray-800 whitespace-nowrap
                     ">
                        <p className="button"> Cancellation Flexibility</p>
                        <p className="button"> Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
               {
                    searchResults.map(({img,location,title,description,star,price,total},i)=>{
                        return (
                           <InfoCard 
                            key={i} 
                            img={img}
                            location={location}
                            title={title}
                            description = {description}
                            star ={ star}
                            price = {price}
                            total ={total}
                            />
                        )
                    })
                }
               </div>
                </section>


                <section className='cursor-pointer inline-flex lg:min-w-[600px] px-4 xl:px-0 h-[700px] mb-[5rem] xl:mb-0 xl:h-auto '>
                <MyMap
                searchResults={searchResults}
                />
                </section>
         
            </main>
        

            <Footer/>
        </div>
    );
}

export default Search;

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res=> res.json());
    return {
        props:{
            searchResults
        }
    }
}