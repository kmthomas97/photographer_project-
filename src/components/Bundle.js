import { useState } from "react"

const Bundle = ({ image, info, name, price}) =>  { const [readMore, setReadMore] = useState(false)

  return (<article className="single-bundle">
    <img src={image} alt={name} className="img" />
    <span className="bundle-price">${price}</span>
    <div className="bundle-info">
      <h5>{name}</h5>
      <p>{readMore ? info: `${info.substring(0,200)}...`}
      <button 
      type='button'
      className="info-btn"
      onClick={() => setReadMore(!readMore)}
      >
        {readMore ? 'Show Less' : 'Read More'}
      </button>
      </p>
    </div>
  </article>
  );
}


export default Bundle