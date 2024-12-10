import { useId, useRef, useState } from 'react';
import "../styles/Modal.css";

function Modal({ breed, dialogRef, userName, userAddress }) {
    const [name, setName] = useState(userName);
    const [nameErr, setNameErr] = useState("");
    const [paper, setPaper] = useState("paper");
    const [method, setMethod] = useState("pickup");
    const [isChecked, setIsChecked] = useState(false);
    const [success, setSuccess] = useState("");
    const [address, setAddress] = useState("");
    const [addressErr, setAddressErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberErr, setPhoneNumberErr] = useState("");
    const [other, setOtherMethod] = useState("");
    const [otherErr, setOtherMethodErr] = useState("");
    const id = useId();
    const dialog = dialogRef;
    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const otherRef = useRef();

    const handleChangeName = (e) => {
        setName(e.target.value);
        setSuccess("");

        if (!e.target.value) {
            setNameErr("Name cannot be empty!");
        } else if (/^\s+$/.test(e.target.value)) {
            setNameErr("Name cannot be only whitespace!");
        } else {
            setNameErr("");
        }
    }

    const handleChangePaper = (e) => {
        setPaper(e.target.value);
        setSuccess("");

        if (e.target.value === "paper")
            setMethod("pickup");
        if (e.target.value === "paperless")
            setMethod("email");
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
        setSuccess("");

        if (!e.target.value) {
            setAddressErr("Address cannot be empty!");
        } else if (/^\s+$/.test(e.target.value)) {
            setAddressErr("Address cannot be only whitespace!");
        } else {
            setAddressErr("");
        }
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setSuccess("");

        if (!e.target.value) {
            setEmailErr("Eamil cannot be empty!");
        } else if (/^\s+$/.test(e.target.value)) {
            setEmailErr("Email cannot be only whitespace");
        } else {
            setEmailErr("");
        }
    };

    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        setSuccess("");

        if (!e.target.value) {
            setPhoneNumberErr("Phone number cannot be empty!");
        } else if (/^\s+$/.test(e.target.value)) {
            setPhoneNumberErr("Phone number cannot be only whitespace");
        } else {
            setPhoneNumberErr("");
        }
    };

    const handleChangeOther = (e) => {
        setOtherMethod(e.target.value);
        setSuccess("");

        if (!e.target.value) {
            setOtherMethodErr("Method cannot be empty!");
        } else if (/^\s+$/.test(e.target.value)) {
            setOtherMethodErr("Method cannot be only whitespace!");
        } else {
            setOtherMethodErr("");
        }
    };

    const handleCheck = (e) => {
        if (e.target.checked) {
            setAddress(userAddress);
            setAddressErr("");
        } else {
            setAddress("");
        }
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paper === "paper" && method === "pickup" && name && !nameErr) {
            setSuccess("Submit successfully!");
        }

        if (paper === "paper" && method === "delivery" && (!address || addressErr)) {
            if (!address) {
                setAddressErr("Address cannot be empty!");
            } 
        }

        if (paper === "paper" && method === "delivery" && addressRef.current.value) {
            setSuccess("Submit successfully!");
        }

        if (paper === "paperless" && method === "email") {
            if (!email) {
                setEmailErr("Eamil cannot be empty!");
            } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value))) {
                setEmailErr("Email format is incorrect! Correct format: example@test.com");
            } else if (/^\s+$/.test(emailRef.current.value)) {
                setEmailErr("Email cannot be only whitespace!");
            } else {
                setSuccess("Submit successfully!");
            }
        }

        if (paper === "paperless" && method === "text") {
            if (!phoneNumber) {
                setPhoneNumberErr("Phone number cannot be empty!");
            } else if (!(/^\d{10}$/.test(phoneNumberRef.current.value))) {
                setPhoneNumberErr("Phone number format is incorrect! Correct format: 1234567890");
            } else if (/^\s+$/.test(phoneNumberRef.current.value)) {
                setPhoneNumberErr("Phone number cannot be only whitespace!");
            } else {
                setSuccess("Submit successfully!");
            }
        }

        if (paper === "paperless" && method === "other") {
            console.log(otherRef.current.value);
            if (!otherRef.current.value) {
                setOtherMethodErr("Method cannot be empty!");
            } else if (/^\s+$/.test(otherRef.current.value)) {
                setOtherMethodErr("Method cannot be only whitespace!");
            } else {
                setSuccess("Submit successfully!");
            }
        }
    };   

    const handleCloseModal = () => {
        dialog.current.close();
        setSuccess("");
        if (success) {
            setName(userName);
            setNameErr("");
            setAddress("");
            setAddressErr("");
            setPaper("paper");
            setMethod("pickup");
            setIsChecked(false);
            setEmail("");
            setEmailErr("");
            setPhoneNumber("");
            setPhoneNumberErr("");
            setOtherMethod("");
            setOtherMethodErr("");
        }
    };

    return (    
        <dialog ref={dialog} className="home-modal" onSubmit={handleSubmit}>
            <h2 className="modal-title">Subscribe to know more!</h2>
            <form action="/submit" method='post' className="modal-form">
                <label htmlFor={`${id}-breed`} className="form-label">
                    <span className="label-name">Breed: </span>
                    <input className="label-input" type="text" name="username" id={`${id}-breed`} value={breed} readOnly />
                </label>
                <label htmlFor={`${id}-name`} className="form-label">
                    <span className="label-name">Name: </span>
                    <input className="label-input" type="text" name="username" ref={nameRef} value={name} id={`${id}-name`} onChange={handleChangeName} />
                    <span className="err-msg">{nameErr}</span>
                </label>
                <label htmlFor={`${id}-select`}  className="form-select">
                    <span className="select-label">Paper or paperless: </span>
                    <select className="select-list" name="paper" id={`${id}-select`} value={paper} onChange={handleChangePaper}>
                        <option value="paper">paper</option>
                        <option value="paperless">paperless</option>
                    </select>
                </label>
                { paper === "paper" ? 
                <label htmlFor={`${id}-select`}  className="form-select">
                    <span className="select-label">Method to get info: </span>
                        <select className="select-list" name="way" id={`${id}-select`} value={method} onChange={(e) => { setMethod(e.target.value);  setAddressErr("")}}>
                        <option value="pickup">pick up</option>
                        <option value="delivery">delivery</option>
                    </select>
                </label> :
                <label htmlFor={`${id}-select`}  className="form-select">
                    <span className="select-label">Method to get info: </span>
                    <select className="select-list" name="way" id={`${id}-select`} value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="email">email</option>
                        <option value="text">text</option>
                        <option value="other">other</option>
                    </select>
                </label>
                }
                { paper === "paper" &&
                    <>
                    {method === "delivery" &&
                        <>
                            <p className="check-title">Delivery address same as default address?</p>
                            <label htmlFor={`${id}-same`} className="form-check">
                                <input className="check-input" type="checkbox" name="same" id={`${id}-same`} value={isChecked} checked={isChecked} onChange={handleCheck} />
                                <span className="check-name">Yes</span>
                            </label>
                        </>
                    }
                        <label htmlFor={`${id}-address`} className="form-label">
                            <span className="label-name">Address: </span>
                            <input className="label-input" type="text" name="address" id={`${id}-address`} ref={addressRef} value={method === "pickup" ? "4 N 2nd St Suite 150, San Jose, CA 95113" : address} readOnly={ method === "pickup" || address === userAddress } onChange={handleChangeAddress} />
                            <span className="err-msg">{addressErr}</span>
                        </label>
                    </>
                }
                { paper === "paperless" && method === "email" &&  
                     <label htmlFor={`${id}-eamil`} className="form-label">
                        <span className="label-name">Email: </span>
                        <input className="label-input" type="text" name="email" id={`${id}-email`} ref={emailRef} value={email} onChange={handleChangeEmail} />
                        <span className="err-msg">{emailErr}</span>
                    </label>
                }
                { paper === "paperless" && method === "text" &&  
                     <label htmlFor={`${id}-phone`} className="form-label">
                        <span className="label-name">Phone number: </span>
                        <input className="label-input" type="text" name="phone" id={`${id}-phone`} ref={phoneNumberRef} value={phoneNumber} onChange={handleChangePhoneNumber} />
                        <span className="err-msg">{phoneNumberErr}</span>
                    </label>
                }
                { paper === "paperless" && method === "other" &&  
                     <label htmlFor={`${id}-other`} className="form-label">
                        <span className="label-name">Other method: </span>
                        <input className="label-input" type="text" name="other" id={`${id}-other`} ref={otherRef} value={other} onChange={handleChangeOther} />
                        <span className="err-msg">{otherErr}</span>
                    </label>
                }
                <div className="form-btns">
                    <button type="submit" className="form-submit">
                        Subscribe
                    </button>
                    <button type='button' onClick={handleCloseModal} className="form-close">
                        Close
                    </button>
                </div>
                <span className={`sub-success ${success && "show"}`}>{success ? success : "Something here."}</span>
            </form>
        </dialog>
    )
}

export default Modal;
