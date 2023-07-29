import React from 'react'

interface ErrorPlaceholderProps {
    text: string;
    className: string;
}

const ErrorPlaceholder: React.FC<ErrorPlaceholderProps> = ({ className, text }) => {
    return (
        <span className={className}>
            {text}
        </span>
    )
};

export default ErrorPlaceholder;