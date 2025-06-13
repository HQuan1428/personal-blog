import React from 'react';
import Recent from '@/components/dashboard/Recent';
import Heading from '@/components/dashboard/Heading';
import All from '@/components/dashboard/All'
import { mockPosts } from '@/types/Post' 
import Pagination from '@/components/dashboard/Pagination';

export default function HomePage() {

    return (
        <div className="main-container">
            <div className="main-content grid gap-5">
                <Heading text={"The Blog"} />

                <h2 className="text-2xl font-normal text-left py-2">Recent Blog Posts</h2>

                <Recent posts={mockPosts} />

                <h2 className="text-2xl font-normal text-left py-2">All Blog Posts</h2>
                
                <All posts={mockPosts} />

                <Pagination />
            </div>
        </div>
    );
}
