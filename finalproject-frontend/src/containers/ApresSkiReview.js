import React from 'react';
import {useParams} from 'react-router-dom';
function ApresSkiReview({userInformation}) {
    let {name} = useParams(); 
    return (
        <div>
            <h2>{name.split('_').join(' ')} rating</h2>
            <form action="http://localhost:4000/review/submit">
                <h4>Food</h4>
                <div>
                    <input type="radio" name="food" value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name="food" value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name="food" value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name="food" value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name="food" value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>Fair Prices</h4>
                <div>
                    <input type="radio" name="prices" value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name="prices" value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name="prices" value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name="prices" value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name="prices" value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>Tags</h4>
                <div>
                    <input type="checkbox" name="tags" value="music" />
                    <label htmlFor="music">live music</label>
                    <input type="checkbox" name="tags" value="crowded" />
                    <label htmlFor="crowded">crowded</label>
                    <input type="checkbox" name="tags" value="casual" />
                    <label htmlFor="fancy">casual</label>
                    <input type="checkbox" name="tags" value="happyhour" />
                    <label htmlFor="happyhour">happy hour</label>
                </div>
                <h4>Watch out for</h4>
                <div>
                    <input type="checkbox" name="watchout" value="families" />
                    <label htmlFor="families">families</label>
                    <input type="checkbox" name="watchout" value="wait" />
                    <label htmlFor="wait">long wait time</label>
                    <input type="checkbox" name="watchout" value="cash" />
                    <label htmlFor="cash">cash only</label>
                    <input type="checkbox" name="watchout" value="overpriced" />
                    <label htmlFor="overpriced">overpriced cocktails</label>
                </div>
                <h4>Overall Review</h4>
                <div>
                    <input type="text" name="review" placeholder="Leave a review..." />
                </div>
                <input type="hidden" value={userInformation.email} name="userEmail" />
                {/* <input type="hidden" value={trail} name="trail" /> */}
                <input type="hidden" value={name} name="name" />
                <input type="hidden" value="apresSki" name="type" />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ApresSkiReview;