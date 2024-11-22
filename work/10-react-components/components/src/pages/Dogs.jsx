import { useId } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import '../styles/Dogs.css';
import Husky from '../assets/dog-02.png';
import Samoyed from '../assets/dog-03.png';
import Hachiko from '../assets/dog-05.png';
import Charlie from '../assets/dog-07.png';
import Panel from '../components/Panel';
import Button from '../components/Button';


const panelData = [
    {
        pic: Husky,
        alt: "Siberian Husky is a medium-sized working dog",
        title: "Siberian Husky",
        text: "The Siberian Husky is a medium-sized working dog known for its friendly nature and striking appearance. Originally bred "
                + "by the Chukchi people for sled pulling, they are strong and energetic, thriving in cold climates. Huskies are social, "
                + "playful, and good with families, but they require regular exercise and consistent training due to their independent "
                + "spirit.", 
    },
    {
        pic: Samoyed,
        alt: "Samoyed is a friendly and cheerful breed",
        title: "Samoyed",
        text: "The Samoyed is a friendly and cheerful breed known for its beautiful white coat and iconic 'Sammy smile.' When wearing a "
                + "Christmas hat, these dogs radiate holiday spirit and joy. Originally bred as working dogs by the Samoyedic people in "
                + "Siberia, they are known for their strength and endurance in cold climates. With their playful and affectionate nature, "
                + "Samoyeds make wonderful family pets, especially during the festive season, bringing warmth and happiness to any "
                + "celebration.", 
    },
    {
        pic: Hachiko,
        alt: "Hachiko was an Akita known for his incredible loyalty",
        title: "Hachiko",
        text: "Hachiko was an Akita known for his incredible loyalty. After his owner, Hidesaburo Ueno, passed away in 1925, Hachiko "
                + "continued to wait at Shibuya Station for nearly 10 years. His devotion inspired many, and a statue was erected in his "
                + "honor, making him a symbol of loyalty worldwide.", 
    },
    {
        pic: Charlie,
        alt: "Charlie was a golden retriever known for his role as a therapy dog",
        title: "Charlie",
        text: "Charlie was a golden retriever known for his role as a therapy dog. He provided comfort and support to patients in "
                + "hospitals and nursing homes, brightening their days with his gentle demeanor. Charlie's work highlighted the positive "
                + "impact of therapy animals on mental health and well-being, making him a beloved figure in his community.", 
    }
];

function Dogs() {
    const [success, setSuccess] = useState();
    const id = useId();
    const dialogRef = useRef();

    const panelGroup = panelData.map(item => {
        return (
            <Panel key={item.title} pic={item.pic} alt={item.alt} title={item.title} text={item.text} onSubscribe={() => dialogRef.current.showModal()} />
        )
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="dogs">
            {panelGroup}
            <dialog ref={dialogRef} className="home-modal" onSubmit={handleSubmit}>
                <h2 className="home-modal__title">Sign in to know more!</h2>
                <form action="/submit" method='post' className="home-modal__form">
                    <label htmlFor={`${id}-name`} className="form__label">Name:</label>
                    <input type="text" name="username" id={`${id}-name`} className="form__input" />
                    <label htmlFor={`${id}-password`} className="form__label">Password:</label>
                    <input type="password" name="password" id={`${id}-password`}  className="form__input" />
                    <Button type="submit" name="Subscribe" visual="submit" onClick={() => setSuccess("Submit successfully!")} className="form__submit" />
                    <button type='button' onClick={() => { dialogRef.current.close(); setSuccess("")}} className="form__close">
                        Close
                    </button>
                    <span className={`sub__success ${success && "show"}`}>{success ? success : "Something here."}</span>
                </form>
            </dialog>
        </div>
    )
}

export default Dogs;