import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faDocker, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    const hoverAnimateTimeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(hoverAnimateTimeout)
  }, [])

  return (
    <>

      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>
              <AnimatedLetters strArray={aboutArray} idx={15} />
            </span>
          </h1>
          <p>
            Hello! Welcome to my portfolio. I am a curious software developer
            looking for a role in a company with the opportunity to work with
            creative minds and challenges to help me grow with diverse projects.
          </p>
          <p>
            I'm a collaborative, naturally curious, and quietly confident
            individual with a love for learning!
          </p>
          <p>
            In my past life I was a special education teacher working to problem
            solve and cater intervention to individual students. Likewise, I am
            taking my passion of problem solving and helping others in software to
            make a lasting impact in the world of others.
          </p>
        </div>
        <div className='skills'>

              <FontAwesomeIcon icon={faDocker} className='icon'/>

              <FontAwesomeIcon icon={faPython} className='icon'/>

              <FontAwesomeIcon icon={faJs} className='icon'/>

              <FontAwesomeIcon icon={faReact} className='icon'/>

              <FontAwesomeIcon icon={faCss3} className='icon'/>

              <FontAwesomeIcon icon={faHtml5} className='icon'/>

        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default About
