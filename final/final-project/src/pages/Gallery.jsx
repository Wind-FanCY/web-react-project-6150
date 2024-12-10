import { useState } from "react";
import Card from "../components/Card";
import Data from "../js/DogData";
import "../styles/Gallery.css";

function Gallery({ id, className }) {
    const [breed, setBreed] = useState("all");

    const picGroup = Data.dogData.map(item => {
        if (breed === "all") {
            return (
                <Card className="min-gallery" key={item.id} type="cardPic" pic={item.image} alt={item.type + " " + item.traits} title={item.type} traits={item.traits} text={item.intro} onLearnMore={() => console.log("Click Successfully!")} />
            )
        } else if (item.type === breed) {
            return (
                <Card className="min-gallery" key={item.id} type="cardPic" pic={item.image} alt={item.type + " " + item.traits} title={item.type} traits={item.traits} text={item.intro} onLearnMore={() => console.log("Click Successfully!")} />
            )
        }
    });

    const handleFilter = (e) => {
        setBreed(e.target.value);
    };

    return (
        <div id={id} className={className}>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-intro">
                Even dogs of the same breed can be different! This is the gallery of Dog&apos;s World, where you can see photos of various dog breeds.
            </p>
            <div className="gallery-images">
                <label htmlFor="filter" className="gallery-filter">
                    <span className="filter-label">Choose a breed: </span>
                    <select className="filter-select" name="filter" id="filter" value={breed} onChange={handleFilter}>
                        <option value="all">all</option>
                        <option value="Labrador Retriever">Labrador Retriever</option>
                        <option value="Golden Retriever">Golden Retriever</option>
                        <option value="Poodle">Poodle</option>
                        <option value="German Shepherd">German Shepherd</option>
                        <option value="Beagle">Beagle</option>
                        <option value="French Bulldog">French Bulldog</option>
                    </select>
                </label>
                {picGroup}
            </div>
        </div>
    )
}

export default Gallery;