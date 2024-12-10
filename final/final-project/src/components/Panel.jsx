import "../styles/Panel.css";

function Panel({
    pic,
    alt,
    title,
    text
}) {
    return (
        <div className="panel">
            <img className="panel-image" src={pic} alt={alt} />
            <h2 className="panel-title">{title}</h2>
            <p className="panel-text">{text}</p>
        </div>
    )
}

export default Panel;