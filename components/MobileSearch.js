export default function MobileSearch({searchInput,setSearchInput, placeholder,SearchIcon}) {
  return (
    <>

            
          <input className="px-7 bg-transparent inline-flex
           outline-none flex-grow text-sm text-gay-600
          placeholder-gray-400 "
          value={searchInput}
           type="text"
            placeholder={placeholder ||"Start your search"} 
            onChange={(e)=>setSearchInput(e.target.value)}
            />
   
          <SearchIcon className="h-8 bg-red-400 
          text-white rounded-full p-2 cursor-pointer mx-2
          "/>
    </>
  
  )
}
