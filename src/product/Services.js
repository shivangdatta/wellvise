import {React , useState , useEffect} from 'react'
import {CiSettings, CiFloppyDisk} from 'react-icons/ci'
import {AiOutlinePlus, AiOutlineSearch , AiOutlineShop} from 'react-icons/ai'
import {BsBag,BsListNested} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
// import Flags from 'country-flag-icons/react/3x2'

export default function Search() {
    const [resultObject, setResultObject] = useState([]);
    let req = new XMLHttpRequest();
    let job = 'Teacher';
    
    function onClickHandler() {
      req.open("GET", "https://api.jsonbin.io/v3/b/64a1f78c9d312622a379520f/latest", true);
      req.setRequestHeader("X-Master-Key", "$2b$10$NmVlMkl4D8FkNt96FA7MvOsuFbS1uSqoSTbW/IWaSLWXM2uVRIZJe");
      req.send();
    
      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          const response = JSON.parse(req.responseText);
          const filteredData = response.record.filter(obj => obj.Job === job);
          setResultObject (filteredData.map(obj => ({
            Job: obj.Job,
            Name: obj.name,
            Email: obj.email,
            Location: obj.loc
          })));
    
          console.log(resultObject);
            }
        }
    }
    function handleInputChange(event) {
        job = event.target.value; // Update the job variable with the input field value
    }
    

    
  return (
    <div>
      <div>
      
    <div className="p-4 sm:ml-64 ">
      <div className="p-4   rounded-lg  mt-4">
          <div className="grid grid-cols-4 gap-4 mb-4"> 
            <div className="flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-100">
                {<BsBag size={48} fill="#FFA500"/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Doctors<br/><span className='text-2xl  font-bold'>2,456</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<AiOutlineShop size={48} fill='#6A0DAD'/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Medicine<br/><span className='text-2xl  font-bold'>3,236</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<GoPeople size={48} fill='#1aa260 '/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Test<br/><span className='text-2xl  font-bold'>5,280</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<BsListNested size={48} fill='#8808bf'/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Equipment<br/><span className='text-2xl  font-bold'>1,000</span></p>
               
            </div>
          </div>
          <div className='pt-4'>
            <p className='text-2xl text-black text-align-left align-content-left'>Quick Search</p>
            <div className='w-full'> 
            <form >
            <div className="grid grid-cols-7 gap-4 mb-6">
              <div className=" items-center col-span-3 justify-center rounded ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Location</label>
              
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter any city name/ if none found random will be generated "/>
              </div>
              <div className=" items-center justify-center col-span-2 rounded ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Job</label>
                <input type="text" id="occ" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter 'Teacher' for demo" onChange={handleInputChange}/>
              </div>
              <div className='col-span-2'>
                <br />
                <button type="button" className="flex items-center justify-center text-white bg-[#00ADB5] hover:-[#34c3eb] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full" onClick={onClickHandler}>
                    <AiOutlineSearch size={24} className="mr-2" />
                    <span className='text-xl'>Search</span>
                </button>
                </div>
            </div>
            <div id='results'></div>
          </form>



          </div>
            <div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-red-100 dark:text-red-400 dark:border-red-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Danger alert!</span> All results generated are random as backend is not implemented 
              </div>
          </div>
          </div>
          
          <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-100">
            {/* <p className="text-2xl text-gray-400 dark:text-gray-500">+</p> */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Job
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Decision
                      </th>
                  </tr>
              </thead>  
              <tbody>
              {resultObject.map((obj, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-white dark:border-gray-400">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                        {obj.Job}
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                        {obj.Name}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                        {obj.Email}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                        {obj.Location}
                    </td>
                    <td className="px-6 py-4 text-gray-900 flex">
                        {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Hire</button>
                        <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Remove</button>
                    </td>
                    </tr>
                ))} 
              </tbody>
          </table>
          </div>
          </div>
          <div className='grid grid-cols-3 '>
            <div></div>
            <div className='grid grid-cols-3'>
                <div></div>
                <div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">Screen/ Sort <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort (Salary)</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort (Exp)</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort (Rating)</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Screen (Exp)</a>
                </li>
                </ul>
            </div>
                </div>
                <div></div>
            </div>
            <div></div>
       
            
          </div>
      
         
          
      </div>
    </div>

    </div>
    </div>
  )
}
