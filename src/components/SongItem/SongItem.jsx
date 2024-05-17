import PropTypes from 'prop-types' // ES6
import { useContext } from 'react'
import { PlayerContext } from '../../context/PlayerContext/PlayerContext'

const SongItem = ({ song }) => {
    const {playWithId} = useContext(PlayerContext);
    const { image, name, desc, id } = song
  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
}

export default SongItem
