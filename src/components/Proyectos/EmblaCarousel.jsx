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

const socialMedia =
  'https://drive.google.com/file/d/1ZjTEcPnRXw0rJ5E9J1A_iXyPGqT3TLZt/preview'
const LANLAB =
  'https://drive.google.com/file/d/1JJTAGGeZISjFyzUIfE02UN2AMkwTGLU9/preview'
const ecommerce =
  'https://drive.google.com/file/d/1hqAvAeprQHAU_LvV96fHmwOegQptPXpC/preview'
const diario =
  'https://drive.google.com/file/d/1cw_XKr2txSMAocSY83Q9t_xAU_Bn_qpa/preview'
const quiz =
  'https://drive.google.com/file/d/1vnyYp6SkWMxcXle20uLgOhk1yFkFjZFh/preview'

const videos = [LANLAB, socialMedia, ecommerce, diario, quiz]

const LANLABRepo = 'https://github.com/IKLANLO/desafioFS_frontend.git'
const socialMediaRepo =
  'https://github.com/IKLANLO/proyectoSocialMedia_frontend.git'
const ecommerceRepo =
  'https://github.com/olatzgoti/proyectoEcommerceFrontend.git'
const diarioRepo = 'https://github.com/IKLANLO/web_de_noticias.git'
const quizRepo = 'https://github.com/AdrikLarreategui/Proyecto-Quiz.git'

const repos = [LANLABRepo, socialMediaRepo, ecommerceRepo, diarioRepo, quizRepo]

const TWEEN_FACTOR_BASE = 0.5

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(new Array(videos.length).fill(false))
  const iframeRefs = useRef([])
  const dispatch = useDispatch()

  const handleLoaded = (index) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded]
      newLoaded[index] = true
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

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((video, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  {!loaded[index] && (
                    <Skeleton
                      className="embla__slide__img embla__parallax__img"
                      variant="rectangular"
                      width={'100rem'}
                      height={'20rem'}
                    />
                  )}
                  <iframe
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

      <div className="embla__controls">
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
