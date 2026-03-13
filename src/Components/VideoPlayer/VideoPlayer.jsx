import { useRef } from 'react'
import video from '../../assets/collage-video.mp4'
function VideoPlayer({ playState, setPlayState }) {

    const player = useRef(null)
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }
    return (
        <div className={`flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${playState ? '' : 'hidden'}`} ref={player} onClick={closePlayer}>
            <video className='w-[90%] max-w-225 h-auto border-2 border-white rounded-md' src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer