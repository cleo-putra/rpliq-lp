import React from 'react'
import CountUp from 'react-countup';

const CountData = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20 w-100">
    <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto rounded-xl py-10 shadow-lg shadow-black">
      <div className="col-span-1 text-center">
        <h3 className='text-green-50 lg:text-[80px] xs:text-[60px] font-bold'>
        <CountUp end={60} duration={8} enableScrollSpy />%
        </h3>
        <p className='text-2xl text-gray-400 font-bold'>
          Reduced average <br/>RTO Costs
        </p>
      </div>

      <div className="col-span-1 text-center">
        <h3 className='text-green-50 lg:text-[80px] xs:text-[60px] font-bold'>
        <CountUp end={70} duration={8} enableScrollSpy />%
        </h3>
        <p className='text-2xl text-gray-400 font-bold'>
          Reduced average <br/>RPL processing time
        </p>
      </div>

      <div className="col-span-1 text-center">
        <h3 className='text-green-50 lg:text-[80px] xs:text-[60px] font-bold'>
        <CountUp end={80} duration={8} enableScrollSpy />%
        </h3>
        <p className='text-2xl text-gray-400 font-bold'>
          Increased Assessor <br/>Productivity
        </p>
      </div>
      
    </div>
  </div>
  )
}

export default CountData