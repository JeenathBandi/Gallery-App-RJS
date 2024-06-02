// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, key, onChooseImage, isSelected} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imagesList

  const onClickThumbnail = () => onChooseImage(id)

  const selectedThumbnailClassName = isSelected ? 'selected' : ''

  return (
    <li className="margin">
      <button type="button">
        <img
          className={`thumbnail-img ${selectedThumbnailClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
