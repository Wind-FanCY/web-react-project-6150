import { useRef, useState } from "react";
import Card from "../components/Card";
import Panel from "../components/Panel";
import Modal from "../components/Modal";
import HomeImg from "../assets/home-img.jpg";
import Data from "../js/DogData";
import "../styles/Home.css";

function Home({ id, className, userName, userAddress }) {
    const dialogRef = useRef();
    const [breed, setBreed] = useState();

    const cardGroup = Data.dogData.map(item => {
        if (item.intro) {
            return (
                <Card key={item.id} type="cardInfo" pic={item.image}
                    alt={item.type + " " + item.traits} title={item.type}
                    traits={item.traits} text={item.intro}
                    onLearnMore={(e) => { const selectBreed = e.target.parentNode.querySelector('.card-title').textContent; setBreed(selectBreed); dialogRef.current.showModal(); }} />
            )
        }
    });

    const panelGroup = Data.storyData.map(item => {
        return (
            <Panel key={item.id} pic={item.pic} alt={item.alt} title={item.title} text={item.text} />
        )
    })
    
    return (
        <div id={id} className={className}>
            <Modal breed={breed} dialogRef={dialogRef} userName={userName} userAddress={userAddress} />
            <div className="home-topic">
                <img src={HomeImg} className="topic-image" alt="Many different kinds of dogs sit together." />
                <div className="topic-intro">
                    <h1 className="intro-title">Best friends start here</h1>
                    <p className="intro-text">Discover a variety of dog breeds and find the companion of your dreams.</p>
                </div>
            </div>
            <div className="home-show">
                <h2 className="show-title">Explore breeds</h2>
                {cardGroup}
                <h2 className="show-title">Explore stories</h2>
                {panelGroup}
            </div>
        </div>
    )
}

export default Home;