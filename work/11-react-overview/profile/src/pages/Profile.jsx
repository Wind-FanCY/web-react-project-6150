import { useState } from 'react';
import '../styles/Profile.css';
import Border from '../assets/dog-01.png';
import Husky from '../assets/dog-02.png';
import Samoyed from '../assets/dog-03.png';
import Edit from '../assets/edit-icon.png';

function Profile({ userPic, setUserPic, userName, setUserName, dogFree, setDogFree }) {
    const [actual, setActual] = useState("Alex");
    const [editName, onEditName] = useState(false);
    const [editActual, onEditActual] = useState(false);

    const handleChanged = (e) => {
        setDogFree(e.target.checked);
    };

    const handleChangeAvator = (e) => {
        setUserPic(e.target.value);
    };

    let newName = "";
    let newActual = "";
    const [nameErr, setNameErr] = useState("");
    const [actualErr, setActualErr] = useState("");

    const handleNameChange = (e) => {
        newName = e.target.value;
        if(!newName) {
            setNameErr("User name cannot be empty.");
        } else if(/^\s+$/.test(newName)) {
            setNameErr("User name cannot be only whitespace");
        } else if (newName.toLowerCase() === "dog") {
            setNameErr("You're kidding, right?");
        } else {
            setNameErr("");
        }
    };

    const handleActualChange = (e) => {
        newActual = e.target.value;
        if (/^\s+$/.test(newActual)) {
            setActualErr("Actual name cannot be only whitespace");
        } else {
            setActualErr("");
        }
    };

    const saveNameChange = () => {
        if (newName && newName !== "dog") {
            setUserName(newName);
            onEditName(false);
        } else if(!newName) {
            setNameErr("User name cannot be empty.");
        }
    };

    const saveActualChange = () => {
        if (!newActual) {
            setActual(userName);
            onEditActual(false);
        } else if(newActual && !(/^\s*$/.test(newActual))) {
            setActual(newActual);
            onEditActual(false);
        }
        
    };

    return (
        <div className="profile">
            <img className="profile__avator" src={userPic} alt="This is user avator." />
            <label htmlFor="avator" className="profile__label">
                <span className="avator__title">Change an avator: </span>
                <select className="avator__select" name="avator" id="avator" value={userPic} onChange={handleChangeAvator}>
                    <option value={Border}>Border</option>
                    <option value={Husky}>Husky</option>
                    <option value={Samoyed}>Samoyed</option>
                </select>
            </label>
            <span className="profile__title">
                User Name: 
            </span>
            {editName ?
                <div className="edit__name">
                    <input type="text" placeholder={userName} onChange={handleNameChange} className="edit__input" />
                    <span className="error__message">{nameErr}</span>
                </div>
                : <span className="profile__content">{userName}</span>}
            {editName ? 
                <div className="edit__buttons">
                    <button className="buttons__cancel" onClick={() => {onEditName(false)}}>
                        <span className='button__text'>Cancel</span>
                    </button>
                    <button className="buttons__save" onClick={saveNameChange}>
                        <span className='button__text'>Save</span>
                    </button>
                </div>
                :<button className="profile__edit" onClick={() => {onEditName(true)}}>
                    <img className="button__icon" src={Edit} alt="This is a edit icon." />
                    <span className='button__text'>Edit</span>
                </button>}
            <span className="profile__title">
                Actual Name: 
            </span>
            {editActual ?
                <div className="edit__actual">
                    <input type="text" placeholder={actual} onChange={handleActualChange} className="edit__input" />
                    <span className="error__message">{actualErr}</span>
                </div>
                : <span className="profile__content">{actual}</span>}
            {editActual ? 
                <div className="edit__buttons">
                    <button className="buttons__cancel" onClick={() => {onEditActual(false)}}>
                        <span className='button__text'>Cancel</span>
                    </button>
                    <button className="buttons__save" onClick={saveActualChange}>
                        <span className='button__text'>Save</span>
                    </button>
                </div>
                :<button className="profile__edit" onClick={() => onEditActual(true)}>
                    <img className="button__icon" src={Edit} alt="This is a edit icon." />
                    <span className='button__text'>Edit</span>
                </button>}
            
            <label className="profile__label" htmlFor="dog">
                <input className="profile__check" type="checkbox" name="dog" id="dog" checked={dogFree} onChange={handleChanged} />
                <span className="profile__verify">Verified Dog Free</span>
            </label>
        </div>
    )
}

export default Profile;