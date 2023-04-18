// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <div className="about-sm-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="about-sm-img"
        />
      </div>
      <div className="about-lg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="about-lg-img"
        />
      </div>
    </div>
  </>
)
export default About
