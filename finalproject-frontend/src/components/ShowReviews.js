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
        <div>Tags: {item.tags}</div>
        {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
        {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
        <div>Watch out for: {item.watchout}</div>
        <div>{item.review}</div>
    </div>
)}

export default ShowReviews;