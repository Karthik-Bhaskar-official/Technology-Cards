// Write your code here.
import './index.css'

const Welcome = props => {
  const {name} = props
  const {title, description, imgUrl, className} = name
  return (
    <li className={`card ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="imgdiv">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Welcome
