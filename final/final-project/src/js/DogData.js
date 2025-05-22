import Labrador01 from "../assets/Labrador-01.jpg";
import Labrador02 from "../assets/Labrador-02.jpg";
import Golden01 from "../assets/Golden-01.jpg";
import Golden02 from "../assets/Golden-02.jpg";
import Poodle01 from "../assets/Poodle-01.jpg";
import Poodle02 from "../assets/Poodle-02.jpg";
import GShepherd01 from "../assets/GShepherd-01.jpg";
import Beagle01 from "../assets/Beagle-01.jpg";
import FBulldog01 from "../assets/FBulldog-01.jpg";
import FBulldog02 from "../assets/FBulldog-02.jpg";
import Husky from '../assets/story-01.png';
import Samoyed from '../assets/story-02.png';
import Hachiko from '../assets/story-03.png';
import Charlie from '../assets/story-04.png';

const dogData = [
    {
        id: 1,
        image: Labrador01,
        name: "",
        type: "Labrador Retriever",
        intro: "Labradors are friendly, intelligent, and energetic dogs. They are typically very friendly toward humans and other animals, making them great family pets. Labradors love water and outdoor activities, making them ideal companions for active individuals.",
        traits: "Gentle, loyal, active, easy to train."
    },
    {
        id: 2,
        image: Golden01,
        name: "",
        type: "Golden Retriever",
        intro: "Golden Retrievers are known for their gentle, friendly, and intelligent nature. They make ideal family pets, especially for households with children. Golden Retrievers enjoy socializing and are easy to bond with other pets and humans.",
        traits: "Loyal, friendly, intelligent, active, gentle."
    },
    {
        id: 3,
        image: Poodle01,
        name: "",
        type: "Poodle",
        intro: "Poodles are highly intelligent, alert, and social dogs. They are active and curious, enjoying challenges and learning new skills. Poodles are excellent companion dogs, known for their elegance and exceptional trainability.",
        traits: "Smart, active, independent, social."
    },
    {
        id: 4,
        image: GShepherd01,
        name: "",
        type: "German Shepherd",
        intro: "German Shepherds are extremely loyal and brave dogs. They are very protective of their family and excel in work environments. Due to their intelligence and ability to be trained, they are often used as police or service dogs.",
        traits: "Loyal, brave, intelligent, alert."
    },
    {
        id: 5,
        image: Beagle01,
        name: "",
        type: "Beagle",
        intro: "Beagles are lively, friendly, and curious dogs that love exploring their environment. They are friendly toward humans and other animals, but they can be a bit mischievous and independent due to their strong sense of smell.",
        traits: "Lively, curious, loyal, great for families."
    },
    {
        id: 6,
        image: FBulldog01,
        name: "",
        type: "French Bulldog",
        intro: "French Bulldogs are excellent companions for apartment living due to their calm and friendly nature. They tend to be very affectionate with their owners and enjoy being part of the family. While they are generally good with children and other pets, they can be a bit stubborn.",
        traits: "Gentle, affectionate, stubborn, family-friendly."
    },
    {
        id: 7,
        image: Labrador02,
        name: "",
        type: "Labrador Retriever",
        intro: "",
        traits: "Gentle, loyal, active, easy to train."
    },
    {
        id: 8,
        image: Golden02,
        name: "",
        type: "Golden Retriever",
        intro: "",
        traits: "Loyal, friendly, intelligent, active, gentle."
    },
    {
        id: 9,
        image: Poodle02,
        name: "",
        type: "Poodle",
        intro: "",
        traits: "Smart, active, independent, social."
    },
    {
        id: 10,
        image: FBulldog02,
        name: "",
        type: "French Bulldog",
        intro: "",
        traits: "Gentle, affectionate, stubborn, family-friendly."
    }
];

const storyData = [
    {
        id: 1,
        pic: Husky,
        alt: "Siberian Husky is a medium-sized working dog",
        title: "Siberian Husky",
        text: "The Siberian Husky is a medium-sized working dog known for its friendly nature and striking appearance. Originally bred "
                + "by the Chukchi people for sled pulling, they are strong and energetic, thriving in cold climates. Huskies are social, "
                + "playful, and good with families, but they require regular exercise and consistent training due to their independent "
                + "spirit.", 
    },
    {
        id: 2,
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
        id: 3,
        pic: Hachiko,
        alt: "Hachiko was an Akita known for his incredible loyalty",
        title: "Hachiko",
        text: "Hachiko was an Akita known for his incredible loyalty. After his owner, Hidesaburo Ueno, passed away in 1925, Hachiko "
                + "continued to wait at Shibuya Station for nearly 10 years. His devotion inspired many, and a statue was erected in his "
                + "honor, making him a symbol of loyalty worldwide.", 
    },
    {   
        id: 4,
        pic: Charlie,
        alt: "Charlie was a golden retriever known for his role as a therapy dog",
        title: "Charlie",
        text: "Charlie was a golden retriever known for his role as a therapy dog. He provided comfort and support to patients in "
                + "hospitals and nursing homes, brightening their days with his gentle demeanor. Charlie's work highlighted the positive "
                + "impact of therapy animals on mental health and well-being, making him a beloved figure in his community.", 
    }
];

export default { dogData, storyData };