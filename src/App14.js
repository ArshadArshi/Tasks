import React, { useEffect, useRef } from 'react'

const App14 = () => {
    const data = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.current.value);
    }
    useEffect(() => {
        data.current.focus();
    }, [])
    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={data} placeholder='Enter value' />
                    <input type="submit" />
                </form>
            </center>
        </div>
    )
}

export default App14