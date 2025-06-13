import React from 'react';
import Card from '@/components/common/Card';
import { Post } from '@/types/Post';


const Recent = ({ posts } : { posts : Post[]}) => {
    const recentItem = (
        <div className='recent-frame grid grid-rows-3 grid-cols-2'>
            <div className='item-1 row-span-2'>
                <Card post={posts[0]} />
            </div >
                
            <div className='item-2 row-full'>
                <Card post={posts[1]} />
            </div>
                
            <div className='item-3 row-ful'>
                <Card post={posts[2]} />
            </div>
                
            <div className='item-3 col-span-2'>
                <Card post={posts[3]}/>
            </div>
        </div>
    );


    return recentItem;
}


export default Recent;