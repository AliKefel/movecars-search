import React from 'react'
import LocationSearch from './LocationSearch'
import StateSearch from './StateSearch'

const SearchBarComp = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Search button clicked');
    };

    return (
        <div className=" mx-auto justify-center items-center flex">

            <form className="bg-gray-100 flex row space-x-12 shadow-xl rounded-3xl  pt-2 pb-2 border-4 border-cyan-700 w-fit p-3" id='cars-search ' onSubmit={handleSubmit}>

                <div className='flex flex-col space-y-1 w-1/2 '>

                    <div className='flex flex-col justify-center w-full space-x-0'>
                        <label className="block text-gray-700 text-xl font-extrabold items-center justify-center" htmlFor="pickup-date">
                            Pick-up Location
                        </label>

                        <div className='flex flex-row space-x-5 justify-center   '>

                            <div className="flex flex-col space-x-4 mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="pickup-date">
                                    State
                                </label>
                                <StateSearch />
                            </div>

                            <div className="flex flex-col space-x-4 mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="pickup-date">
                                    City
                                </label>
                                <LocationSearch />
                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col  justify-center w-full '>
                        <label className="block text-gray-700 text-xl font-extrabold items-center justify-center" htmlFor="pickup-date">
                            Drop-Off Location
                        </label>

                        <div className='flex flex-row space-x-5 justify-center '>
                            <div className="flex flex-col space-x-4 mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="pickup-date">
                                    State
                                </label>
                                <StateSearch />
                            </div>

                            <div className="flex flex-col space-x-4 mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup-date">
                                    City
                                </label>
                                <LocationSearch />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col space-x-2 w-1/2 ">
                    {/* container for Vehicle Type and Dates */}
                    <div className='flex flex-col '>

                        <div className="flex flex-row items-start w-full">

                            <div className='flex flex-row w-full space-x-5 justify-center mt-6'>

                                <div className="w-full relative items-center mb-3 justify-center">

                                    <label className="block text-gray-700 text-sm font-bold mb-2 flex-row" htmlFor="pickup-date">
                                        Pick-up Date
                                    </label>

                                    <input
                                        id="pickup-date"
                                        type="date"
                                        onFocus={(e) => e.target.showPicker()} // Triggers the calendar popup
                                        className='bg-black rounded-md shadow-md p-2 text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-700 transition-all duration-300'
                                    />
                                </div>


                                <div className="w-full h-1/2 mb-3 ">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle">
                                        Vehicle Type
                                    </label>
                                    <select id="vehicle" className=' bg-black rounded-md shadow-md p-4 text-md text-white focus:shadow-outline hover:bg-slate-800 focus:ring-2 duration-300' >
                                        <option  disabled >Select Vehicle Type</option>
                                        <option>Car</option>
                                        <option>Truck</option>
                                        <option>Motorcycle</option>
                                        <option>SUV</option>
                                        <option>Van</option>
                                        <option>Convertible</option>
                                        <option>Coupe</option>
                                        <option>Wagon</option>
                                        <option>Hatchback</option>
                                        <option>Electric</option>
                                        <option>Hybrid</option>
                                        <option>Pickup Truck</option>
                                        <option>Minivan</option>
                                        <option>Sports Car</option>
                                        <option>Luxury Sedan</option>
                                        <option>RV (Recreational Vehicle)</option>
                                        <option>ATV (All-Terrain Vehicle)</option>
                                        <option>Boat</option>
                                        <option>Trailer</option>
                                    </select>
                                </div>

                            </div>





                        </div>


                        <div className='flex flex-row w-full space-x-5   mt-4'>

                            <div className=' w-1/2'>   

                            </div>

                            <div className='flex flex-row w-1/2 space-x-5 justify-end  mt-8'>

                                <div className='w-full flex flex-col space-x-4 items-end justify-end text-nowrap'>

                                    <button type="submit" className='w-full '>
                                        <div className='h-fit w-full text-sm   md:text-base p-2 justify-center'>
                                            <a href="#" className="relative hover:font-extrabold items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-red-600 rounded-full blur-md"></span>
                                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-600 rounded-full blur-md"></span>
                                                </span>
                                                <span className="relative text-white ">Get your quote now!</span>
                                            </a>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>






            </form>

        </div>
    )
}

export default SearchBarComp