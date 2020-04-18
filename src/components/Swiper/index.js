import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Container, Controls, CarouselBullets, CarouselBullet } from './style'
import ChevronLeft from '../../content/icons/ChevronLeft'
import ChevronRight from '../../content/icons/ChevronRight'
import { colors } from '../../content/theme'

function Swiper({ children, currentSlideIndex, setCurrentSlideIndex, isWhiteBackground }) {
  
  const changeSlide = (side, items) => {
    if (side === 'next')
      currentSlideIndex < items.length - 1 && setCurrentSlideIndex(currentSlideIndex + 1)
    else
      currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex - 1)
  }
  console.log(isWhiteBackground)

  return (
    <Container>
      <SwipeableViews 
        index={currentSlideIndex} 
        onChangeIndex={(index) => setCurrentSlideIndex(index)}
      >
        { children }
      </SwipeableViews>
      <Controls>
        <ChevronLeft 
          color={isWhiteBackground ? colors.blue : colors.white} 
          size={40} 
          onClick={() => changeSlide('prev', children)} 
        />
        <CarouselBullets>
          {children &&
            children.map((child, index) => (
              <CarouselBullet
                key={index}
                selected={currentSlideIndex === children.indexOf(child)}
                color={isWhiteBackground ? colors.blue : colors.white}
              />
            ))}
        </CarouselBullets>
        <ChevronRight 
          color={isWhiteBackground ? colors.blue : colors.white} 
          size={40} 
          onClick={() => changeSlide('next', children)} 
        />
      </Controls>
    </Container>
  );
}

export default Swiper;
