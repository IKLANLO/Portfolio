import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProyecto } from '../../../redux/Proyecto/proyectoSlice'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import Skeleton from '@mui/material/Skeleton'
import { videos, repos, TWEEN_FACTOR_BASE } from './data/data'
import { useSwipeable } from 'react-swipeable'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(new Array(videos.length).fill(false))
  const [allLoaded, setAllLoaded] = useState(false)
  const iframeRefs = useRef([])
  const dispatch = useDispatch()

  const handleLoaded = (index) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded]
      newLoaded[index] = true
      if (newLoaded.every((isLoaded) => isLoaded)) {
        setAllLoaded(true)
      }
      return newLoaded
    })
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % repos.length
      dispatch(setProyecto(repos[nextIndex]))
      return nextIndex
    })
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNormalized = (prevIndex - 1 + repos.length) % repos.length
      dispatch(setProyecto(repos[prevIndexNormalized]))
      return prevIndexNormalized
    })
  }

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `translateX(${translate}%)`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
  }, [emblaApi, tweenParallax])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: allLoaded ? handleNext : {},
    onSwipedRight: allLoaded ? handlePrevious : {},
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const iframeContainerStyle = {
    pointerEvents: allLoaded ? 'auto' : 'none',
  }

  return (
    <div
      className="embla"
      {...(allLoaded ? swipeHandlers : {})}
      style={iframeContainerStyle}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((video, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  {!loaded[index] && (
                    <Skeleton
                      className="embla__slide__img embla__parallax__img embla__skeleton"
                      variant="rectangular"
                    />
                  )}
                  <iframe
                    onSwipedLeft={() => console.log('swipe')}
                    ref={(el) => (iframeRefs.current[index] = el)}
                    className="embla__slide__img embla__parallax__img"
                    src={video}
                    onLoad={() => handleLoaded(index)}
                    style={{ display: loaded[index] ? 'block' : 'none' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="embla__controls"
        style={{ display: allLoaded ? '' : 'none' }}>
        <div className="embla__buttons">
          <PrevButton
            onClick={() => {
              handlePrevious()
              onPrevButtonClick()
            }}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => {
              handleNext()
              onNextButtonClick()
            }}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
