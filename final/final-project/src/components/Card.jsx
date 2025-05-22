
import "../styles/Card.css";

function Card({
    type,
    pic,
    alt,
    title,
    traits,
    text,
    onLearnMore,
    className
}) {
    return (
        <div className={`${type === "cardPic" ? "pic" : "card"} ${className}`}>
            <img className={type === "cardPic" ? "pic-image" : "card-image"} src={pic} alt={alt} />
            <h2 className={type === "cardPic" ? "pic-title" : "card-title"}>{title}</h2>
            {type === "cardInfo" && 
            <>
                <h5 className="card-traits">Trats: {traits}</h5>
                <p className="card-text">{text}</p>
                <button type="button" onClick={onLearnMore} className="card-btn">
                    Learn More
                </button>
            </>
            }
        </div>
    )
}

export default Card;