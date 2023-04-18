// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-sm-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-sm-img"
        />
      </div>
      <div className="home-lg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-lg-img"
        />
      </div>
    </div>
  </>
)
export default Home
