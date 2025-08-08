import Button from "./utils/Button";

const Herosection = () => {
    return(
          <div className='h-screen text-white items-center flex bg-gradient-to-r from-black via-green-30 to-purple-50'>
      <div className='space-y-6 px-4'>
      <h1 className='text-5xl py-4'>Raining Offers For<br/> Hot Summer</h1>
      <h2 className='text-3xl'> 25% off on All Product</h2>
      <Button />
       <button className='lg:hidden bg-white-700 px-5 py-3 hover:bg-green-700 transition-all ease-in-out duration-1000'>Learn More</button>
      </div>
    </div>
    )
};

export default Herosection;