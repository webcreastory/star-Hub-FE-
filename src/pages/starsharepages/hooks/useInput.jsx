import { useState } from "react";
import React from 'react'


export function useInput() {

    const [value, setValue] = useState("")

    const inputValue = (e) => {
        setValue(e.target.value)
    }
    return [value, inputValue, setValue]
}



export function useHover() {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handlePushButton = () => {
        return (
        + "position: relative;"
        + "left: 3px;"
        + "top: 3px;"
        + "box-shadow: none;"
        + "border: none;")
    };

return [handlePushButton]
}
