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
                        <div className = "GrEaInfo">
                            <ul>
                                <li><a href="/review/Great_Eastern" className="rateThis">Rate this trail!</a></li>
                                <li>
                                    {reviewArray.reviewArray.map((item, i) => {
                                        console.log(item.data);
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
                                                    <div>Tags:{item.data.tags}</div>
                                                    <div>Watch out for: {item.data.watchout}</div>
                                                    <div>{item.data.review}</div>
                                                </div>
                                        
                                    })}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h3>Chute</h3>
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