import React from "react";


const Heading = ({ text } : {text: string}) => {
    return (
        <h1 className="text-5xl font-extrabold text-center py-4 border-y-1">{text}</h1>
    );
}


export default Heading;