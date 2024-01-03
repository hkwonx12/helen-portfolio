import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, React } from 'react'

const Porfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const hoverAnimateTimeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(hoverAnimateTimeout)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
        </div>
        <div className='work-zone'>
            <iframe className='video' src="https://youtube.com/embed/crkRcTYdHQw" allowFullScreen />
            <iframe className='video' src="https://youtube.com/embed/4Zy2ocutn9Y" allowFullScreen/>
            <iframe className='video' src="https://youtube.com/embed/KdLOTm4x34s" allowFullScreen/>
        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Porfolio
