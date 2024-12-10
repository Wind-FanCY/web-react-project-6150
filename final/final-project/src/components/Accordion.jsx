import { useState } from "react";
import Open from "../assets/icon-open.png";
import Close from "../assets/icon-close.png";
import "../styles/Accordion.css"

function Accordion({ id, title, text }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="accordion">
            <h3 className="accordion-title">
                {title}
                <button className="accordion-btn" id={`${id}-header`} aria-controls={`${id}-panel`} aria-expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
                    <img className="btn-img" src={isExpanded ? Close : Open} />
                </button>
            </h3>
            <section className="accordion-content" id={`${id}-panel`} aria-labelledby={`${id}-header`} hidden={!isExpanded}>
                {text}
            </section>
        </div>
    )
}

export default Accordion;