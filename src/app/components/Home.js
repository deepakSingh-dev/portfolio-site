import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-row justify-center h-full gap-28'>
        {/* <div className='flex flex-col justify-center '>
        <img src={MyImage} alt="Profile Photo" className='h-[400px] w-[700px]'/>
        </div> */}
        <div className='flex flex-col justify-center w-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Deepak Singh  
        </h1>
        <h2 className='text-xl sm:text-xl font-bold text-[#8892b0]'>
          New York, USA
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Master's in Information System's @ Stevens Institute of Technology
          <br/>
          Master's in Financial Engineering @ worldQuant University
          <br/>
          Ex - Software Development Engineer @ RobotSpace
          <br/>
          Ex - Associate Software Developer @ GKB Labs
          <br/>
          Bachelor's in Computer Science Engineering 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
