import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TweetBox from "./TweetBox";
import Post from './Post';
import FlipMove from "react-flip-move";
function Feed({ className }) {

    return (

        <div className={className}>
            <div className=" feed">
                <div className="feed_header">
                    <h2>Home</h2>
                </div>
                <TweetBox />
                <Post />
                <Post />
                {/* <FlipMove>
                    {posts.map((post) => (
                        <Post
                            key={post.text}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                        />
                    ))}
                </FlipMove> */}
            </div>
        </div>

    )
}

export default styled(Feed)`

.feed{
  position: relative;
    flex:0.4;
    flex-direction: column;
    border-right: 1px solid #e6ecf0;
  width: 100%;
   
}


.feed_header{
    position: sticky;
    top:0;
    background-color: white;
    z-index:100;
    border:1px solid #e6ecf0;
    padding:15px 20px;
    
}
.feed_header > h2{
    font-size: 20px;
    font-weight: 800;
}
/*Hide scrollbar */
/* .feed::-webkit-scrollbar{
    display: none;
} */
`;
