import React, { useState } from 'react'
import Output from './Output';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>text is not changed</Output>}
            {changedText && <p>Changed!</p>}
            {<p>It's good to see you!</p>}
            <button onClick={() => setChangedText(true)}>Change Text</button>
        </div>
    )
}

export default Greeting
