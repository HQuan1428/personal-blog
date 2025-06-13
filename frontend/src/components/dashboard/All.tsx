import React from "react";
import Card from "../common/Card";
import { Post } from "@/types/Post";


const All = ({ posts } : { posts : Post[]}) => {
    return (
        <div className="all-blog-container grid grid-cols-3 gap-2">
            {posts.map((post) => (
                <Card
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}


export default All;