// import React, { useRef } from 'react';

// function Referncee() {
//     const inputR= useRef(null);

//     const handleClick = () => {
//         inputR.current.focus();
//     }
//   return (
//     <div>
//         <input type='text' ref={inputR}></input>
//         <button onClick={handleClick}>Focus input</button>
//     </div>
//   )
// }

// export default Referncee

import React, { useEffect, useRef, useState } from 'react';

function Referncee() {
    const[num,setNum]=useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    })
  return (
    <div>
        <input type='text' value={num} onChange={(e) => setNum(e.target.value)}></input>
        <h1> Render Counter: {count.current}</h1>

      
    </div>
  )
}

export default Referncee




