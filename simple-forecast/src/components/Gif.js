import React from 'react';
import { useSelector } from 'react-redux';

function Gif() {
  const gifLink = useSelector(state => state.gifs.current);

  return (
    <div>
      {gifLink && <video src={gifLink} alt="GIF" loop autoPlay />}
    </div>
  );
}

export default Gif;