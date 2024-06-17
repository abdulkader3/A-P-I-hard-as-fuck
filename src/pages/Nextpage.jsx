import React from 'react'
import { useSelector } from 'react-redux'

const Nextpage = () => {
    const shanto = useSelector((state)=> state.counter.value )
  return (
    <>
    <div className=" w-full h-full gap-[20px] bg-slate-700 flex flex-wrap justify-center items-center justify-evenly ">
    <div className=" w-[400px] h-[650px]  bg-white  flex flex-col items-center ">
    <div className="img w-[150px] h-[220px]  ">
    <img src={shanto.image} alt="photo" />
    </div>
    </div>
    </div>
   
      
    </>
  )
}

export default Nextpage
