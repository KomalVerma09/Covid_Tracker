import React, { useEffect, useState } from 'react'

function Covid() {
    const [data,setData]=useState([]);
    const getCovidData = async ()=>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const Data= await res.json();
            console.log(Data.statewise[0]);
            setData(Data.statewise[0]); 
        }
        catch(err){
            console.log("eror"+err);
        }
       
    }
    useEffect(()=>{
        getCovidData();
    },[])
  return (
    <>
	<div className='bg-black w-full flex flex-col justify-center items-center'>
    
    <h1 className='animate-pulse text-2xl font-bold p-5 text-white'>🔴 LIVE </h1>
    <h1 className='text-white text-4xl drop-shadow-4xl-w font-bold md:transition md:duration-500 md:ease-in-out md:hover:scale-110 transition duration-500 ease-in-out hover:scale-75'><span className='text-[#16D1EF]'> COVID-19</span> CORONAVIRUS TRACKER</h1>
    <ul className='bg-black grid md:grid-cols-3 grid-cols-1 items-center justify-center p-10'>
        <li className='bg-[#536FC3] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg'>
                        <span className='text-xs '>
                            OUR
                        </span>
                          &nbsp;COUNTRY
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110'>
                        INDIA
                    </p>
                </div>
            </div>
        </li>
		<li className='bg-[#34A33E] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg'>
                        <span className='text-xs'>
                            TOTAL
                        </span>
                          &nbsp;RECOVERED
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110'>
                        {data.recovered}
                    </p>
                </div>
            </div>
        </li>
		<li className='bg-[#BEAF37] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg'>
                        <span className='text-xs '>
                            TOTAL
                        </span>
                          &nbsp;CONFIRMED
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110'>
                        {data.confirmed}
                    </p>
                </div>
            </div>
        </li>
        <li className='bg-[#AF4E1B] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg'>
                        <span className='text-xs '>
                            TOTAL
                        </span>
                          &nbsp;DEATH
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110'>
                        {data.deaths}
                    </p>
                </div>
            </div>
        </li>
		<li className='bg-[#3E5EB3] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg'>
                        <span className='text-xs '>
                            TOTAL
                        </span>
                          &nbsp;ACTIVE
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110'>
                        {data.active}
                    </p>
                </div>
            </div>
        </li>
		<li className='bg-[#AB9E5B] h-52 flex transition duration-500 ease-in-out hover:scale-110 m-5'>
            <div className='flex justify-center w-full mt-8'>
                <div className=' flex flex-col items-center text-white font-bold gap-2'>
                    <p className='text-lg '>
                        <span className='text-xs '>
                            TOTAL
                        </span>
                          &nbsp;UPDATE
                    </p>
                    <p className='text-5xl drop-shadow-4xl transition duration-500 ease-in-out hover:scale-110 pl-28'>
                        {data.lastupdatedtime}
                    </p>
                </div>
            </div>
        </li>
    </ul>
    </div>
    
    </>
    
  )
}

export default Covid