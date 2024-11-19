import '../styles/Home.css';
import Card from '../components/Card';
import Border from '../assets/dog-01.png';
import Husky from '../assets/dog-02.png';
import Samoyed from '../assets/dog-03.png';
import Balto from '../assets/dog-04.png';
import Hachiko from '../assets/dog-05.png';
import Marley from '../assets/dog-06.png';


const cardData = [
    {
        pic: Border,
        alt: "Border Collie is an herding dog",
        title: "Border Collie",
        text: "The Border Collie is an intelligent and energetic herding "
            + "dog originally bred in the border region of England and Scotland.Known for "
            + "their agility and strong work ethic, they excel in herding livestock and various "
            + "canine sports.With a striking black and white coat, these medium- sized dogs are "
            + "highly trainable and require regular physical and mental stimulation.Their loyal "
            + "and playful nature makes them excellent companions for active families.", 
    },
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
        pic: Balto,
        alt: "Balto was a Siberian Husky",
        title: "Balto",
        text: "Balto was a Siberian Husky who became famous for his role in the 1925 serum run to Nome, Alaska. During a diphtheria "
                + "outbreak, Balto and his team of sled dogs delivered life-saving medicine over treacherous conditions, covering nearly "
                + "700 miles in just five and a half days. Balto's bravery and determination helped save many lives, making him a symbol of "
                + "heroism. Today, a statue in New York City's Central Park honors his legacy.", 
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
        pic: Marley,
        alt: "Marley is a mischievous Labrador Retriever",
        title: "Marley",
        text: "Marley & Me is a bestselling book by John Grogan, published in 2005. It tells the story of Grogan and his wife, Jenny, "
                + "as they raise their mischievous Labrador Retriever, Marley. Through humorous and touching moments, the book explores "
                + "themes of love, loyalty, and family. The book was adapted into a film in 2008, starring Owen Wilson and Jennifer "
                + "Aniston.", 
    }
];


function Home({ setPage, setTitle }) { 
    const cardGroup = cardData.map(item => {
        return (
            <Card key={item.title} pic={item.pic} alt={item.alt} title={item.title} text={item.text} onLearnMore={() => { setPage("Dogs"); setTitle("Dogs")}} />
        )
    });


    return (
        <div className="home">
            {cardGroup}
        </div>
    )
}

export default Home;