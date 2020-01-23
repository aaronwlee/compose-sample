import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [posts, updatePosts] = useState([]);
    // const [count, updateCount] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get('/api/ping');

            // console.log(resp.data.data + ", " + respC.data.count)
            updatePosts(resp.data);
            // updateCount(respC.data.count);
        }

        fetchData();
    }, []);

    return (
        <div className="App">
            <div>
                posts: {posts}
            </div>
            {/* {posts.map((x) => {
                return (
                    <div style={{
                        border: '1px solid #000000',
                        margin: 20,
                        padding: 10,
                    }}>
                        <a href={x.url}>
                            <div>
                                id: {x._id}
                            </div>
                            <div>
                                title: {x.title}
                            </div>
                            <div>
                                url: {x.url}
                            </div>
                        </a>
                    </div>
                )
            })} */}
        </div>
    )
        ;
}

export default App;
