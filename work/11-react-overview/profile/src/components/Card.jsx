import '../styles/Card.css';
import Button from './Button';

function Card({
    pic,
    alt,
    title,
    text,
    onLearnMore
}) {
    return (
        <div className="card">
            <img className='card__image' src={pic} alt={alt} />
            <h3 className='card__title'>{title}</h3>
            <p className='card__text'>{text}</p>
            <Button type="button" name="LearnMore" visual="link" onClick={onLearnMore} className="card__link" />
        </div>
    )
}

export default Card;