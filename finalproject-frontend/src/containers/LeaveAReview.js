import React from 'react';
import {useParams} from 'react-router-dom';
function LeaveAReview({userInformation}) {
    let {trail} = useParams(); // trail == "Great_Eastern"
    console.log(userInformation);
    return (
        <div>
            <h2>{trail.split('_').join(' ')} rating</h2>
            <form action="http://localhost:4000/review/submit">
                <h4>Difficulty</h4>
                <div>
                    <input type="radio" name="difficulty" value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name="difficulty" value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name="difficulty" value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name="difficulty" value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name="difficulty" value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>Fun</h4>
                <div>
                    <input type="radio" name="fun" value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name="fun" value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name="fun" value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name="fun" value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name="fun" value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>Tags</h4>
                <div>
                    <input type="checkbox" name="tags" value="views" />
                    <label htmlFor="views">good views</label>
                    <input type="checkbox" name="tags" value="space" />
                    <label htmlFor="space">lots of space</label>
                    <input type="checkbox" name="tags" value="food" />
                    <label htmlFor="food">close to food</label>
                    <input type="checkbox" name="tags" value="tree" />
                    <label htmlFor="tree">tree trail</label>
                </div>
                <h4>Watch out for</h4>
                <div>
                    <input type="checkbox" name="watchout" value="moguls" />
                    <label htmlFor="moguls">moguls</label>
                    <input type="checkbox" name="watchout" value="ice" />
                    <label htmlFor="ice">ice</label>
                    <input type="checkbox" name="watchout" value="beginners" />
                    <label htmlFor="beginners">beginners</label>
                    <input type="checkbox" name="watchout" value="snowboarders" />
                    <label htmlFor="snowboarders">snowboarders</label>
                </div>
                <h4>Overall Review</h4>
                <div>
                    <input type="text" name="review" placeholder="Leave a review..." />
                </div>
                <input type="hidden" value={userInformation.email} name="userEmail" />
                <input type="hidden" value={trail} name="trail" />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default LeaveAReview;