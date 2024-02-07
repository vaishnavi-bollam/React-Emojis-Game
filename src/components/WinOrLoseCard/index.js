// Write your code here.

const WinorLoss = props => {
  const {scoreValue, btnClicked} = props
  const playbtnClicked = () => {
    btnClicked()
  }
  if (scoreValue < 12) {
    return (
      <div>
        <h1>You Lose</h1>
        <p>Score {scoreValue}/12</p>
        <button onClick={playbtnClicked}>Play Again</button>
      </div>
    )
  }
  return (
    <div>
      <h1>You won</h1>
      <p>Best Score</p>
      <p>{scoreValue}/12</p>
      <button onClick={playbtnClicked}>Play Again</button>
    </div>
  )
}

export default WinorLoss
