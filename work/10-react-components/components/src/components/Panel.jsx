import '../styles/Panel.css';
import Button from './Button';

function Panel({
    pic,
    alt,
    title,
    text,
    onSubscribe
}) {
    return (
        <div className="panel">
            <img className='panel__image' src={pic} alt={alt} />
            <h3 className='panel__title'>{title}</h3>
            <p className='panel__text'>{text}</p>
            <Button type="button" name="GetInfo" visual="button" onClick={onSubscribe} />
        </div>
    )
}

export default Panel;