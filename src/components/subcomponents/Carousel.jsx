import React, { useEffect, useState } from "react";
import './Carousel.css';
import { ChevronRightCircleOutline, ChevronLeftCircleOutline } from 'mdi-material-ui'
import { Box } from "@material-ui/core";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <ChevronLeftCircleOutline onClick={() => {updateIndex(activeIndex - 1)}} className="indicator" /> 
      <div className="carousel">
        <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
      <ChevronRightCircleOutline onClick={() => {updateIndex(activeIndex + 1)}} className="indicator" /> 
    </Box>
  )
}

export default Carousel