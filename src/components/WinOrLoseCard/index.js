// Write your code here.
import './index.css'

const WinorLoss = props => {
  const {scoreValue, btnClicked} = props
  const playbtnClicked = () => {
    btnClicked()
  }
  if (scoreValue < 12) {
    return (
      <div className="lose-container">
        <div className="cardScoreContainer">
          <h1 className="description">You Lose</h1>
          <p>Score</p>
          <p>{scoreValue}/12</p>
          <button onClick={playbtnClicked} type="button" className="btnPlay">
            Play Again
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="gameImg"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="lose-container">
      <div className="cardScoreContainer">
        <h1 className="description">You won</h1>
        <p>Best Score</p>
        <p>{scoreValue}/12</p>
        <button onClick={playbtnClicked} type="button" className="btnPlay">
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="gameImg"
        />
      </div>
    </div>
  )
}

export default WinorLoss
