// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, emojiClickedAction} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  console.log(emojiUrl)

  const emojiClicked = () => {
    emojiClickedAction(id)
  }

  return (
    <li className="li-ele">
      <button onClick={emojiClicked} className="btn-styling">
        <img className="each-emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
