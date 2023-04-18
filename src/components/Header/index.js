// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <nav className="navbar-cont">
    <div className="nav-cont">
      <Link className="link-item" to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo-img"
        />
      </Link>
    </div>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button data-testid="hamburgerIconButton" type="button">
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
      >
        {close => (
          <div className="popup-message-cont">
            <button
              data-testid="closeButton"
              className="close-btn"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="paths-item-cont">
              <Link to="/" className="link-item">
                <li className="path-cont">
                  <AiFillHome className="home-icon" />
                  <p className="path-name">Home</p>
                </li>
              </Link>
              <Link to="/about" className="link-item">
                <li className="path-cont">
                  <BsInfoCircleFill className="about-icon" />
                  <p className="path-name">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
