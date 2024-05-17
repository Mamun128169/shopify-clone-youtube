import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img 
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer ">
            Explore Premium
          </p>
          <p className='bg-black py-1 rounded-2xl text-[15px] cursor-pointer px-3'>Install App</p>
          <p className='bg-purple-500 text-black w-7 h-7 cursor-pointer rounded-full flex items-center justify-center'>M</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='px-4 py-1 cursor-pointer rounded-2xl bg-white text-black font-medium'>All</p>
        <p className='px-4 py-1 cursor-pointer rounded-2xl bg-black'>Music</p>
        <p className='px-4 py-1 cursor-pointer rounded-2xl bg-black'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar
