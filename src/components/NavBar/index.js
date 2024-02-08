// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreValue, topScoreValue} = props

  return (
    <div className="navbar-container">
      <div className="icon">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="icon">
        <p className="score">Score: {scoreValue}</p>
        <p className="score">Top Score: {topScoreValue}</p>
      </div>
    </div>
  )
}

export default NavBar
