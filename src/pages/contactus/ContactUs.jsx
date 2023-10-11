import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss";
import "./contactus.scss";
import { addRequest } from "../../store/features/contactUs/ContactUsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SelectAllContactUsRequest } from "../../store/features/contactUs/ContactUsSlice";
import { clearReview } from "../../store/features/reviews/reviewsSlice";

const ContactUs = () => {
    const dispatch = useDispatch();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [subject , setSubject] = useState('');
    const [content , setContent] = useState('');
    const [cleared, setCleared] = useState(false);
    
    const allRequest = useSelector(SelectAllContactUsRequest);
    console.log(allRequest);

    const ContactRequestSubmit = () => {
      if(name && email && subject && content){
        dispatch(addRequest(name , email, subject, content))
        setName('');
        setEmail('');
        setSubject('');
        setContent('');
      }else{
        alert("all fields are required");
      }
    }

    const handleReviewClear = () => {
      dispatch(clearReview());
      setCleared(true)
    }


    useEffect(() => {
      if(cleared){
        window.location.reload();
      }
    }, [cleared]);

    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="contacts">
                        <div className="contactus">
                            <form className="contactus-form" action="#">
                                <div className="contactus-credential">
                                    <input type="text" className="contactus-input" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
                                    <input type="text" className="contactus-input" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="contactus-subject">
                                    <input type="text" className="contactus-input-subject" value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="contactus-textarea">
                                    <textarea className="contactus-input-textarea" rows={7} value={content} placeholder="Your Review" onChange={(e) => setContent(e.target.value)} />
                                </div>
                                <div className="contactus-button">
                                  <button className="contactus-button-field" onClick={ContactRequestSubmit}>Submit</button>
                                  {/* <button className="review-button" onClick={handleReviewClear}>Clear LOCALSTORAGE</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
