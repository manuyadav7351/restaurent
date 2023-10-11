import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss";
import "./reviews.scss";
import { selectAllReviews } from "../../store/features/reviews/reviewsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reviewAdded, clearReview } from "../../store/features/reviews/reviewsSlice";
import { useState } from "react";


const Reviews = () => {
    const reviews = useSelector(selectAllReviews);
    const dispatch = useDispatch();

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [content , setContent] = useState('');
    const [cleared, setCleared] = useState(false);

    const onNameChange = (e) =>{
      setName(e.target.value);
    }

    const onEmailChange = (e) =>{
      setEmail(e.target.value);
    }

    const onContentChange = (e) =>{
      setContent(e.target.value)
    }

    const reviewSubmit = () => {
      if(name && email && content){
        console.log(name , email, content)
        dispatch(reviewAdded(name , email, content));
        setName('');
        setEmail('');
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
                    <div className="reviews">
                        <div className="review-form">
                            <form className="review-form-fields" action="#">
                                <div className="form-input-field">
                                    <input type="text" className="input" value={name} placeholder="name" onChange={onNameChange} />
                                    <input type="text" className="input" value={email} placeholder="email" onChange={onEmailChange} />
                                </div>
                                <div className="form-text-area">
                                    <textarea className="textarea" rows={7} value={content} placeholder="Your Review" onChange={onContentChange} />
                                </div>
                                <div className="form-button">
                                  <button className="review-button" onClick={reviewSubmit}>Submit</button>
                                  <button className="review-button" onClick={handleReviewClear}>Clear Review</button>
                                </div>
                            </form>
                        </div>
                        <div className="review-list">
                            {reviews.map((review) => (
                                <div className="review-card" key={review.name}>
                                    <div className="review-header" key={review.userId}>
                                        <h2>{review.name}</h2>
                                        <h3>{review.email}</h3>
                                    </div>
                                    <div className="review-description">
                                        <p>{review.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
