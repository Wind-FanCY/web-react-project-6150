import '../styles/Button.css';

function Button({ type, name, visual, onClick, className="" }) {
    return (
        <button type={type}
            className={`common-button 
            ${visual === 'button' && 'button'} 
            ${visual === 'link' && 'link'} 
            ${visual === 'submit' && 'submit'}
            ${className} `}
            onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;