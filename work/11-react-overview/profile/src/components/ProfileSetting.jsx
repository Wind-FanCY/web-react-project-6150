import { useState } from 'react';
import '../styles/ProfileSetting.css';

function ProfileSetting({ className, setPage, setTitle, userPic, userName, dogFree }) {
    const [show, setShow] = useState(true);

    const jumpToProfile = (e) => {
        e.preventDefault();
        setPage("Profile");
        setTitle("Profile");
    }

    return (
        <div className={className}>
            <button className="profile__button" onClick={() => setShow(!show)}>
                <img className="profile__image" src={userPic} alt="user profile" />
            </button>
            <div className={`profile__dropdown ${show && "hidden"}`}>
                <h3 className={`dropdown__username ${dogFree && "fabulous"}`}>{userName}</h3>
                <a href="/" className="dropdown__link" onClick={jumpToProfile}>Profile Settings</a>
            </div>
        </div>
    );
}

export default ProfileSetting;