import React from 'react';

function ShowReviews({item, isTrail}) {
    console.log("in showreviews:", item);
    console.log("isTrail:", isTrail);
    return (
    <div className="UserReview">
        <div className="boxes">
            <div className="difficultyBox">
                {/* {isTrail ? (<div>Difficulty</div>) : (<div>Food</div>)} */}
                <div>{isTrail ? 'Difficulty' : 'Food'}</div>
                {/* <div>Difficulty</div> */}
                <div>{isTrail ? item.difficulty : item.food}/5</div>
            </div>
            <div className="funBox">
            <div>{isTrail ? 'Fun' : 'Prices'}</div>
                <div>{isTrail ? item.fun : item.prices}/5</div>
            </div>
        </div>
        <div>Tags: 
            {item.tags.map((tag, t) => {
            if (t > 1 && t < item.tags.length-1) return <span key={t}> {tag},</span>
            else if (t == item.tags.length-1) return <span key={t}> {tag}</span>})}
        </div>
        <div>Watch out for: 
            {item.watchout.map((watchoutFor, w) => {
            if (w > 1 && w < item.watchout.length-1) return <span key={w}> {watchoutFor},</span>
            else if (w == item.watchout.length-1) return <span key={w}> {watchoutFor}</span>})}
        </div>
        <div className="review">"{item.review}"</div>
    </div>
)}

export default ShowReviews;