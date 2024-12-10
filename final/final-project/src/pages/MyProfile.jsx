import { useState } from "react";
import Avater1 from '../assets/user-avater-01.png';
import Avater2 from '../assets/user-avater-02.png';
import Avater3 from '../assets/user-avater-03.png';
import Avater4 from '../assets/user-avater-04.png';
import Edit from '../assets/icon-edit.png';
import "../styles/MyProfile.css";

function MyProfile({ id, className, userPic, setUserPic, userName, setUserName, userAddress, setUserAddress }) {
    const [actual, setActual] = useState("Alex");
    const [editName, onEditName] = useState(false);
    const [editActual, onEditActual] = useState(false);
    const [editAddress, onEditAddress] = useState(false);

    const handleChangeAvator = (e) => {
        setUserPic(e.target.value);
    };

    let newName = "";
    let newActual = "";
    let newAddress = "";
    const [nameErr, setNameErr] = useState("");
    const [actualErr, setActualErr] = useState("");
    const [addressErr, setAddressErr] = useState("");

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

    const handleAddressChange = (e) => {
        newAddress = e.target.value;
        if(/^\s+$/.test(newAddress)) {
            setAddressErr("Default address cannot be only whitespace");
        } else if (newAddress) {
            setAddressErr("");
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
    
    const saveAddressChange = () => {
        if (!newAddress) {
            setUserAddress(userAddress);
            onEditAddress(false);
        } else if(newAddress) {
            setUserAddress(newAddress);
            onEditAddress(false);
        }
        
    };

    return (
        <div id={id} className={`${className} profile`}>
            <img className="profile-avator" src={userPic} alt="This is user avator." />
            <label htmlFor="avator" className="profile-pic">
                <span className="pic-title">Change an avator: </span>
                <select className="pic-select" name="avator" id="avator" value={userPic} onChange={handleChangeAvator}>
                    <option value={Avater1}>Avater1</option>
                    <option value={Avater2}>Avater2</option>
                    <option value={Avater3}>Avater3</option>
                    <option value={Avater4}>Avater4</option>
                </select>
            </label>
            <span className="profile-title">
                User Name: 
            </span>
            {editName ?
                <div className="edit-name">
                    <input type="text" placeholder={userName} onChange={handleNameChange} className="edit-input" />
                    <span className="error-message">{nameErr}</span>
                </div>
                : <span className="profile-content">{userName}</span>}
            {editName ? 
                <div className="edit-buttons">
                    <button className="buttons-cancel" onClick={() => {onEditName(false)}}>
                        <span className='button-text'>Cancel</span>
                    </button>
                    <button className="buttons-save" onClick={saveNameChange}>
                        <span className='button-text'>Save</span>
                    </button>
                </div>
                :<button className="profile-edit" onClick={() => {onEditName(true)}}>
                    <img className="button-icon" src={Edit} alt="This is a edit icon." />
                    <span className='button-text'>Edit</span>
                </button>}
            <span className="profile-title">
                Actual Name: 
            </span>
            {editActual ?
                <div className="edit-actual">
                    <input type="text" placeholder={actual} onChange={handleActualChange} className="edit-input" />
                    <span className="error-message">{actualErr}</span>
                </div>
                : <span className="profile-content">{actual}</span>}
            {editActual ? 
                <div className="edit-buttons">
                    <button className="buttons-cancel" onClick={() => {onEditActual(false)}}>
                        <span className='button-text'>Cancel</span>
                    </button>
                    <button className="buttons-save" onClick={saveActualChange}>
                        <span className='button-text'>Save</span>
                    </button>
                </div>
                :<button className="profile-edit" onClick={() => onEditActual(true)}>
                    <img className="button-icon" src={Edit} alt="This is a edit icon." />
                    <span className='button-text'>Edit</span>
                </button>}
            

            <span className="profile-title">
                Default Address: 
            </span>
            {editAddress ?
                <div className="edit-actual">
                    <input type="text" placeholder={userAddress} onChange={handleAddressChange} className="edit-input" />
                    <span className="error-message">{addressErr}</span>
                </div>
                : <span className="profile-content">{userAddress}</span>}
            {editAddress ? 
                <div className="edit-buttons">
                    <button className="buttons-cancel" onClick={() => {onEditAddress(false)}}>
                        <span className='button-text'>Cancel</span>
                    </button>
                    <button className="buttons-save" onClick={saveAddressChange}>
                        <span className='button-text'>Save</span>
                    </button>
                </div>
                :<button className="profile-edit" onClick={() => onEditAddress(true)}>
                    <img className="button-icon" src={Edit} alt="This is a edit icon." />
                    <span className='button-text'>Edit</span>
                </button>}
        </div>
    )
}

export default MyProfile;