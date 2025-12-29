import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'

export default function RandomGameButton() {
  return (
    <button className="button">
      <FontAwesomeIcon icon={faShuffle} />
    </button>
  )
}
