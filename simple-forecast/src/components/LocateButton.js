import React from 'react';
import Button from './Button';
import { locate } from '../redux/reducers/cache';
import { useDispatch } from 'react-redux';

function LocateButton() {
  const dispatch = useDispatch();
  const handleLocateClick = () => {
    console.log("Locate button clicked");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          dispatch(locate({ latitude, longitude }))
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }, error => {
          console.error(error);
      });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
      <Button onClick={() => handleLocateClick()}>Use Location</Button>
  );
}

export default LocateButton;