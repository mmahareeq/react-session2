import React ,{useState}from 'react'

export default function Ex2() {
    const [email ,setEmail] = useState('');
    const [name, setUserName] = useState('');

    const userName =(e)=>
    {   const value = e.target.value;
        setUserName(value)
    }

    const Email = (e) =>
    {
        const value = e.target.value;
        setEmail(value);
    }

    
    return (
        <div>
            <p>  {name ?" user name :" +name : null}</p>
            <p> {email ?" Email :" + email : null}</p>
            <input  type="text" value={name} placeholder="enter the user name" onChange={userName}/>
            <input  type="text" value={email} placeholder="enter the email" onChange={Email}/>

            
        </div>
    )
}
