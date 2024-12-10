import Accordion from "../components/Accordion";
import accordionData from "../js/aboutData";
import "../styles/About.css";

function About({ id, className }) {
    const accordionGroup = accordionData.map(item => {
        return (
            <Accordion key={item.id} id={item.id} title={item.title} text={item.text} /> 
        )
    });

    return (
        <div id={id} className={`${className} about`}>
            <div className="about-intro">
                <h1 className="intro-title">About Us</h1>
                <p className="intro-real">Welcome to <span className="intro-bold">Dog&apos;s World</span> ! We share information about dogs with you. Dogs are humans&apos; most loyal companions, with a keen
                sense of smell and sensitive hearing, allowing them to detect scents we can&apos;t perceive and hear high-frequency sounds.
                This makes them outstanding in search and rescue, detection, and therapy.</p>
                <p className="intro-real">Dogs come in a variety of breeds, differing in size, coat color, and ear shape, adapting to different environments and
                functions. Their personalities are equally diverse; some are lively and energetic, while others are calm and gentle,
                with each breed having its unique traits.</p>
                <p className="intro-real">They enjoy interacting with humans and other animals, making them excellent companions. Whether as loyal guard dogs or
                playful friends, dogs play an important role in our lives.</p>
            </div>
            <div className="about-accordion">
                <p className="accordion-pre">You may have some questions: </p>
                {accordionGroup}
            </div>
        </div>
    )
}

export default About;