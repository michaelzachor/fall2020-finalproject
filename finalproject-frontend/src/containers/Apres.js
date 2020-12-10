function Apres(reviewArray) {
    return (
        <div>
            <h2>Trails</h2>
            <div>
                <ul>
                    <li>
                        <h3>Strangefellows Pub</h3>
                        <div />
                        <div className = "Strangefellows_Pub">
                            <ul>
                                <li><a href="/review/Strangefellows_Pub" className="rateThis">Rate this trail!</a></li>
                                <li>
                                    {reviewArray.reviewArray.map((item, i) => {
                                        console.log(item.data);
                                        if (item.data.name === "Strangefellows_Pub") {
                                        return (<div key={i} className="UserReview">
                                                    <div className="boxes">
                                                        <div className="difficultyBox">
                                                            <div>Food</div>
                                                            <div>{item.data.food}/5</div>
                                                        </div>
                                                        <div className="funBox">
                                                            <div>Fair Prices</div>
                                                            <div>{item.data.prices}/5</div>
                                                        </div>
                                                    </div>
                                                    <div>Tags: {item.data.tags}</div>
                                                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                                                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                                                    <div>Watch out for: {item.data.watchout}</div>
                                                    <div>{item.data.review}</div>
                                                </div>
                                    )}})}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h3>The Lookout Tavern</h3>
                        <div className = "The_Lookout_Tavern">
                            <ul>
                                <li><a href="/review/The_Lookout_Tavern" className="rateThis">Rate this trail!</a></li>
                                <li>
                                    {reviewArray.reviewArray.map((item, i) => {
                                        console.log(item.data);
                                        if (item.data.name === "The_Lookout_Tavern") {
                                        return (<div key={i} className="UserReview">
                                                    <div className="boxes">
                                                        <div className="difficultyBox">
                                                            <div>Food</div>
                                                            <div>{item.data.food}/5</div>
                                                        </div>
                                                        <div className="funBox">
                                                            <div>Fair Prices</div>
                                                            <div>{item.data.prices}/5</div>
                                                        </div>
                                                    </div>
                                                    <div>Tags: {item.data.tags}</div>
                                                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                                                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                                                    <div>Watch out for: {item.data.watchout}</div>
                                                    <div>{item.data.review}</div>
                                                </div>
                                    )}})}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Apres;