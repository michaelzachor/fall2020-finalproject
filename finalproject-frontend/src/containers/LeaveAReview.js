import React from 'react';
import {useParams} from 'react-router-dom';
function LeaveAReview({userInformation}) {
    let {name} = useParams(); // name == "Great_Eastern"
    
    let trailForm = ["difficulty", "fun", 
    "views", "good views", "space", "lots of space", "food", "close to food", "tree", "tree trail", 
    "moguls", "ice", "beginners", "snowboarders", "trail"];
    
    let apresForm = ["food", "prices", 
    "music", "live music", "crowded", "crowded", "casual", "casual", "happyhour", "happy hour",
    "families", "wait", "cash", "overpriced", "apresSki"];
    
    let theForm = [];
    if (name === "Great_Eastern" || name === "Chute") {
        theForm = trailForm;
    } else {
        theForm = apresForm;
    }

    return (
        <div>
            <h2>{name.split('_').join(' ')} rating</h2>
            <form action="https://whispering-bastion-69731.herokuapp.com//review/submit">
                <h4>{theForm[0]}</h4>
                <div>
                    <input type="radio" name={theForm[0]} value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name={theForm[0]} value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name={theForm[0]} value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name={theForm[0]} value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name={theForm[0]} value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>{theForm[1]}</h4>
                <div>
                    <input type="radio" name={theForm[1]} value="1" />
                    <label htmlFor="1">1</label>
                    <input type="radio" name={theForm[1]} value="2" />
                    <label htmlFor="2">2</label>
                    <input type="radio" name={theForm[1]} value="3" />
                    <label htmlFor="3">3</label>
                    <input type="radio" name={theForm[1]} value="4" />
                    <label htmlFor="4">4</label>
                    <input type="radio" name={theForm[1]} value="5" />
                    <label htmlFor="5">5</label>
                </div>
                <h4>Tags</h4>
                <div>
                    <input type="hidden" name="tags" value="placeholder1" />
                    <input type="hidden" name="tags" value="placeholder2" />
                    <input type="checkbox" name="tags" value={theForm[2]} />
                    <label htmlFor={theForm[2]}>{theForm[3]}</label>
                    <input type="checkbox" name="tags" value={theForm[4]} />
                    <label htmlFor={theForm[4]}>{theForm[5]}</label>
                    <input type="checkbox" name="tags" value={theForm[6]} />
                    <label htmlFor={theForm[6]}>{theForm[7]}</label>
                    <input type="checkbox" name="tags" value={theForm[8]} />
                    <label htmlFor={theForm[8]}>{theForm[9]}</label>
                </div>
                <h4>Watch out for</h4>
                <div>
                    <input type="hidden" name="watchout" value="placeholder1" />
                    <input type="hidden" name="watchout" value="placeholder2" />
                    <input type="checkbox" name="watchout" value={theForm[10]} />
                    <label htmlFor={theForm[10]}>{theForm[10]}</label>
                    <input type="checkbox" name="watchout" value={theForm[11]} />
                    <label htmlFor={theForm[11]}>{theForm[11]}</label>
                    <input type="checkbox" name="watchout" value={theForm[12]} />
                    <label htmlFor={theForm[12]}>{theForm[12]}</label>
                    <input type="checkbox" name="watchout" value={theForm[13]} />
                    <label htmlFor={theForm[13]}>{theForm[13]}</label>
                </div>
                <h4>Overall Review</h4>
                <div>
                    <input type="text" name="review" placeholder="Leave a review..." />
                </div>
                <input type="hidden" value={userInformation.email} name="userEmail" />
                <input type="hidden" value={name} name="name" />
                <input type="hidden" value={theForm[14]} name="type" />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default LeaveAReview;