import { albumsData, assets } from '../../assets/assets'
import AlbumItem from '../AlbumItem/AlbumItem'
import Navbar from '../Navbar/Navbar'
import { songsData } from '../../assets/assets'
import SongItem from '../SongItem/SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../../context/PlayerContext/PlayerContext'

const DisplayHome = () => {
  const { albumsContainerRef, songsContainerRef } = useContext(PlayerContext)

  const scrollLeft = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollBy({ left: -250, behavior: 'smooth' });
      // console.log("s left")
    }
  };

  const scrollRight = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollBy({ left: 250, behavior: 'smooth' });
      // console.log("s right")
    }
  };


  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex items-center">
          <img
            src={assets.arrow_left}
            onClick={() => scrollLeft(albumsContainerRef)}
            className="hidden md:block cursor-pointer bg-gray-700 w-6 h-6 text-white p-2 rounded-md mr-2 hover:bg-gray-600 2xl:hidden"
          >
          </img>
          <div
            ref={albumsContainerRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
          >
            {albumsData.map((album) => (
              <AlbumItem key={album.id} album={album} />
            ))}
          </div>
          <img 
           src={assets.arrow_right}
           onClick={() => scrollRight(albumsContainerRef)}
           className='hidden md:block 2xl:hidden cursor-pointer bg-gray-700 w-6 h-6 text-white p-2 rounded-md ml-2 hover:bg-gray-600'
           />
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
        <div className="flex items-center">
          <img
            src={assets.arrow_left}
            onClick={() => scrollLeft(songsContainerRef)}
            className="hidden md:block cursor-pointer bg-gray-700 w-6 h-6 text-white p-2 rounded-md mr-2 hover:bg-gray-600"
          >
          </img>
          <div
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
            ref={songsContainerRef}
          >
            {songsData.map((song) => (
              <SongItem key={song.id} song={song} />
            ))}
          </div>
          <img 
           src={assets.arrow_right}
           onClick={() => scrollRight(songsContainerRef)}
           className=' hidden md:block cursor-pointer bg-gray-700 w-6 h-6 text-white p-2 rounded-md ml-2 hover:bg-gray-600'
           >
          </img>
        </div>
      </div>
    </>
  )
}

export default DisplayHome
