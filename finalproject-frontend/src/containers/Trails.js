// import { useState } from 'react';

// let btntxt = ["More Info", "More Info", "More Info"];

function Trails(reviewArray) {
    console.log("array: ", reviewArray)
    return (
        <div>
            <h2>Trails</h2>
            <div>
                <ul>
                    <li>
                        <h3>Great Eastern</h3>
                        {/* <div /> */}
                        {/* <div className = "GrEaInfo"> */}
                        <div className = "Great_Eastern">
                            <ul>
                                <li><a href="/review/Great_Eastern" className="rateThis">Rate this trail!</a></li>
                                <li>
                                    {reviewArray.reviewArray.map((item, i) => {
                                        console.log(item.data);
                                        if (item.data.trail === "Great_Eastern") {
                                        return <div key={i} className="UserReview">
                                                    <div className="boxes">
                                                        <div className="difficultyBox">
                                                            <div>Difficulty</div>
                                                            <div>{item.data.difficulty}/5</div>
                                                        </div>
                                                        <div className="funBox">
                                                            <div>Fun</div>
                                                            <div>{item.data.fun}/5</div>
                                                        </div>
                                                    </div>
                                                    <div>Tags: {item.data.tags}</div>
                                                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                                                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                                                    <div>Watch out for: {item.data.watchout}</div>
                                                    <div>{item.data.review}</div>
                                                </div>
                                    }})}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h3>Chute</h3>
                        <div className = "Chute">
                            <ul>
                                <li><a href="/review/Chute" className="rateThis">Rate this trail!</a></li>
                                <li>
                                    {reviewArray.reviewArray.map((item, i) => {
                                        console.log(item.data);
                                        if (item.data.trail === "Chute") {
                                        return <div key={i} className="UserReview">
                                                    <div className="boxes">
                                                        <div className="difficultyBox">
                                                            <div>Difficulty</div>
                                                            <div>{item.data.difficulty}/5</div>
                                                        </div>
                                                        <div className="funBox">
                                                            <div>Fun</div>
                                                            <div>{item.data.fun}/5</div>
                                                        </div>
                                                    </div>
                                                    <div>Tags: {item.data.tags}</div>
                                                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                                                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                                                    <div>Watch out for: {item.data.watchout}</div>
                                                    <div>{item.data.review}</div>
                                                </div>
                                    }})}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// function showOrHide(trail, num) {
//     console.log('calling function');
//     console.log(btntxt[0])
//     btntxt[0] = "Less Info"
//     console.log(btntxt[0])
    // let info = document.getElementsByClassName(trail);
    // let btnText = document.getElementsByClassName("showHideButton")[0].outerText;
    // console.log(btnText);
    // btnText.innerHTML = "check";
    // console.log(btnText);
    // if (btnText == "Show Info") {
    //     console.log('if');
    //     // btnText = "Hide Info";
    //     // btnText.setState("Hide Info");
    //     // info.style.display = "block";
    // } else {
    //     console.log('else');
    //     // btnText.setState("Show Info");
    //     // info.style.display = "none";
    // }
// }

export default Trails;