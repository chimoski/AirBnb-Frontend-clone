import { useState } from 'react';
import Map,{Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import   getCenter from 'geolib/es/getCenter'
import {LocationMarkerIcon} from "@heroicons/react/solid"



const MyMap = ({searchResults}) => {
   const [selectedLocation, setSelectedLocation] = useState({})
  
    const coordinates = searchResults.map(result=>({
        latitude: result.lat,
        longitude: result.long,
    }))
   const center = getCenter(coordinates)
   const [viewport, setViewport] = useState({
    width:'100%',
    height:'100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom:11
})



    return  <Map
       mapStyle='mapbox://styles/chimoski/cl4cmyct2001y14ucjwhmk0z1'
       mapboxAccessToken={process.env.mapBox_key}
       {...viewport}
       onMove={evt => setViewport(evt.viewState)}
       >
        {
            searchResults.map(result=>(
                <div key={result.long}>
                    <Marker
                    longitude ={result.long}
                    latitude={ result.lat}
                    offsetLeft = {-20}
                    offsetTop ={-10}
                    anchor="bottom"
                    >    
                   <div onClick={()=>setSelectedLocation(result)}> <LocationMarkerIcon color='#FE595E'/></div>
                    </Marker>
                    {selectedLocation.long ===result.long ? (
                        <Popup
                        closeOnClick={true}
                        onClose={()=>setSelectedLocation({})}
                        latitude ={result.lat}
                        longitude ={result.long}
                        >
                        {result.title}
                        </Popup>
                    ): ''}
                </div>
            ))
        }
       </Map>;

}

export default MyMap;
