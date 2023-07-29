import React from 'react'

interface InputBoxProps {
    name: string;
    type: string;
    id: string;
    className: string;
    placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ name, type, id, className, placeholder = '' }) => {
    return (
        <input
            name={name}
            type={type}
            id={id}
            className={className}
            placeholder={placeholder} />
    )
};

export default InputBox;