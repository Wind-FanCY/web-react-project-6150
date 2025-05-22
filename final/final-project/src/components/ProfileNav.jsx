import { useState } from "react";
import "../styles/ProfileNav.css";

function ProfileNav({ changePage, className, userPic, userName }) {
    const [show, setShow] = useState(false);
    
    return (
        <div className={className}>
            <button className="profile-button" onClick={() => setShow(!show)} aria-label={!show ? "Open the profile menu." : "Close the profile menu."}>
                <img className="profile-image" src={userPic} alt="user profile" />
            </button>
            <div className={`profile-dropdown ${show && "show"}`}>
                <h3 className={`dropdown-username`}>{userName}</h3>
                <a href="/myprofile" className="dropdown-link" onClick={() => { changePage; setShow(!show); }}>Profile Setting</a>
            </div>
        </div>
    )
}

export default ProfileNav;