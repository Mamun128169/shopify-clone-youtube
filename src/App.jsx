import { useContext } from "react"
import Display from "./components/Display/Display"
import Player from "./components/Player/Player"
import Sidebar from "./components/Sidebar/Sidebar"
import { PlayerContext } from "./context/PlayerContext/PlayerContext"

function App() {

  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex p-2 gap-3">
        <Sidebar />
        <Display/>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file}  preload="auto"></audio>
    </div>
  )
}

export default App
