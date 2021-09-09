import React ,{useState}from 'react'



export default function Ex1() {
    const [state , setName]= useState('Hello World');
    const clicked = () =>
{
    if(state==='Hello World')
      {
          setName('Hello Palestine');
      }
    else
      {
         setName("Hello World");
      }  
}
    return (
        <div>
            <h1 onClick={clicked}>{state}</h1>
        </div>
    )
}
