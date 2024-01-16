import { useState } from "react";
import React from 'react'


function useInput() {

    const [value, setValue] = useState("")

    const inputValue = (e) => {
        setValue(e.target.value)
    }
    return [value, inputValue, setValue]
}

export default useInput

