import React ,{useState}from 'react'

export default function Ex3() {
    const arr = ["Hello World","WELCOME TO PARIES","MENA","HOW ARE YOU","MARIAM","BAHAA","ABED","SAFFA","EMAN","MOHAMMAD"];
    const [content,setContent] = useState(arr[0]);

    const Change = () =>
    {
       setContent(arr[Math.floor(Math.random()*10)])
    }
    return (
        <div>
            <button onClick={Change}>{content}</button>
        </div>
    )
}
