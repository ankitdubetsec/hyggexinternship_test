import React, { useState } from 'react';
import './imgcss.css'
const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleMaximize = () => {
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
      if (!isMaximized) {
        if (imageContainer.requestFullscreen) {
          imageContainer.requestFullscreen();
        } else if (imageContainer.webkitRequestFullscreen) { /* Safari */
          imageContainer.webkitRequestFullscreen();
        } else if (imageContainer.msRequestFullscreen) { /* IE11 */
          imageContainer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
      setIsMaximized(!isMaximized);
    }
  };

  const handleReplay = () => {
    // You may need to implement specific logic here depending on your requirements
  };

  return (
    <div>
      <div className="image-container">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <div className="controls">
          {/* <button onClick={handlePrev}>Prev</button>
          <button onClick={handleMaximize}>{isMaximized ? 'Minimize' : 'Maximize'}</button>
          <button onClick={handleReplay}>Replay</button> */}
          {/* <div className="slide-numbers"> */}
          <i class="fa-solid fa-rotate-right" onClick={handleReplay}></i>
          <i class="fa-solid fa-circle-chevron-left" onClick={handlePrev}></i>
        {currentSlide + 1}/{images.length}
      {/* </div> */}
          <i class="fa-solid fa-circle-chevron-right" onClick={handleNext}></i>
          <i class="fa-solid fa-expand" onClick={handleMaximize}></i>
        </div>
      </div>
     
    </div>
  );
};

export default ImageCarousel;
