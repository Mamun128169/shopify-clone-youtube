import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { albumsData, assets, songsData } from "../../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext/PlayerContext";

const DisplayAlbum = () => {
    const {albumId} = useParams();
    const intId = parseInt(albumId);
    const album = albumsData[intId];

    const {name, image, desc} = album;
    
    const {playWithId} = useContext(PlayerContext);

    return (
        <> 
            <Navbar></Navbar>
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={image} alt="" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{name}</h2>
                    <h4>{desc}</h4>
                   <p className="mt-1">
                     <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                     <b>Spotify</b> {" "}
                    1,323,542 likes {" "}
                    <b>50 songs,</b> {" "}
                    about 2hr 30 min
                   </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Dated Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item, idx) => (
                    <div onClick={() => playWithId(idx)} key={idx} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{idx + 1}</b>
                            <img className="inline w-10 mr-5" src={item.image} alt="" />
                        </p>
                        <p className="text-[15px]">{name}</p>
                        <p className="text-[15px] hidden sm:block">5 days ago</p>
                        <p className="text-[15px] text-center">{item.duration} min</p>
                    </div>
                ))
            }
        </>
    );
};

export default DisplayAlbum;