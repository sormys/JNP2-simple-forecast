import { useSelector } from "react-redux"
import { GifContainer } from "./GifContainer"
import { GifVideo } from "./GifVideo"

function Gif() {
  const gifLink = useSelector((state) => state.gifs.current)

  return (
    <GifContainer>
      {gifLink && <GifVideo src={gifLink} alt="GIF" loop autoPlay />}
    </GifContainer>
  )
}

export default Gif
