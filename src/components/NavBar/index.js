// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreValue, topScoreValue} = props

  return (
    <div className="navbar-container">
      <div className="icon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="icon">
        <h1>Score: {scoreValue}</h1>
        <h1>Top Score: {topScoreValue}</h1>
      </div>
    </div>
  )
}

export default NavBar
