// import React, { useState } from 'react'

// function App() {
//   const [name, setName] = useState("")
//   return (
//     <div>
//       <h1>Form Handling</h1>
//       <input type="text" value={name} onChange={(e) => {
//         setName(e.target.value)
//       }} />
//       <br /> <br />
//       <h3>Name:{name}</h3>
//       <button type='button'>Submit</button>
//       <br /> <br />
//       <button type='button'onClick={()=>{
//         setName('')
//       }}>Clear</button>
//     </div>
    
//   )
// }

// export default App
import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [college, setCollege] = useState('')

    return (
        <div>
            <h1>Form Handling</h1>
            <form action="">
                <label>Name : </label>
                <input type="text" value={name}
                    onChange={(e) => { setName(e.target.value) }} />
            </form> <br /> <br />
            <label >Collage name : </label>
            <input type="text" value={college} onChange={(e)=>{setCollege(e.target.value)}}/>
            <p>
               <b> {name}</b> is studing in <b> {college}</b>
            </p>
        </div>
    )
}

export default Form
