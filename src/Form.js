import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [college, setCollege] = useState('')

    return (
        <div>
            <h1>Form Handling</h1>
            <form action="">
                <label>Name</label>
                <input type="text" value={name}
                    onChange={(e) => { setName(e.target.value) }} />
            </form> <br /> <br />
            <label >Collage name</label>
            <input type="text" value={college} onChange={(e)=>{setCollege(e.target.value)}}/>
            <p>
                {name} is studing in RTC {college}
            </p>
        </div>
    )
}

export default Form
