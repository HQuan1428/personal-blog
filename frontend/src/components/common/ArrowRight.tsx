import React from 'react';

const ReadMore = ({className = 'text-purple-300', size = 18}) => {
    return (
        <span className="inline-block">
            <svg
                width={size}
                height={size}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </span>
    );
};

export default ReadMore;