import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinorLoss from '../WinOrLoseCard/index'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojiListDetails: emojisList,
      scoreValue: 0,
      topScoreValue: 0,
      emojisListadded: [],
      isIncludes: false,
    }
  }

  topscoreValueFunction = () => {
    const {scoreValue, topScoreValue} = this.state
    if (scoreValue > topScoreValue) {
      this.setState(prevState => ({
        topScoreValue: scoreValue,
      }))
    }
    return topScoreValue
  }

  emojiClickedAction = idNum => {
    const {emojisListadded} = this.state
    console.log(idNum)
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({
      emojiListDetails: shuffledEmojisList,
    })

    if (emojisListadded.includes(idNum)) {
      this.setState(prevState => ({
        isIncludes: true,
        topScoreValue: this.topscoreValueFunction(),
      }))
    } else {
      emojisListadded.push(idNum)
      this.setState(prevState => ({
        scoreValue: prevState.scoreValue + 1,
      }))
    }
  }

  btnClicked = () => {
    const {emojisListadded, isIncludes} = this.state
    this.setState({
      emojisListadded: [],
      isIncludes: false,
      scoreValue: 0,
    })
  }

  render() {
    const {
      emojiListDetails,
      scoreValue,
      topScoreValue,
      emojisListadded,
      isIncludes,
    } = this.state
    console.log(emojiListDetails)

    const renderEmojisUi = () => {
      if (scoreValue !== 12) {
        if (!isIncludes) {
          return emojiListDetails.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              emojiClickedAction={this.emojiClickedAction}
              key={eachEmoji.id}
            />
          ))
        }

        return (
          <WinorLoss scoreValue={scoreValue} btnClicked={this.btnClicked} />
        )
      }
      return <WinorLoss scoreValue={scoreValue} btnClicked={this.btnClicked} />
    }

    return (
      <div>
        <div>
          <NavBar scoreValue={scoreValue} topScoreValue={topScoreValue} />
        </div>
        <div>
          <ul>{renderEmojisUi()}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
