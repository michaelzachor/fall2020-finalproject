import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [sampleAPIData, setSampleAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://whispering-bastion-69731.herokuapp.com/`)
        .then(function(response) {
            if (response.data) {
                setSampleAPIData(response.data);
            }
        })
        .catch(function(error) {
            console.warn('error', error);
        });
    }, []);

    return <div>
        <h1>Hi</h1>
        {sampleAPIData.map((item, i) => (
            <div key={i}>
                <p>Name: {item.name}</p>
            </div>
        ))}
        </div>
}

export default Home;