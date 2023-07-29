import React from 'react'

interface LabelProps {
    text: string;
    htmlFor: string;
    className?: string;
}

const label: React.FC<LabelProps> = ({ htmlFor, text }) => {
    return (
        <label htmlFor={htmlFor}>
            {text}
        </label>
    )
};

export default label;