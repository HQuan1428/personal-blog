import React from 'react';

interface TagProps {
    tag: string; // The tag name
    className?: string;
}
// 
const Tag: React.FC<TagProps> = ({ tag, className }) => {
    return (
        <span className={`bg-purple-100 ${className} px-3 py-1 rounded-full text-xs font-semibold `}>
            {tag}
        </span>
    );
}

export default Tag;