import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useStore } from 'react-redux';



function User() {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    useEffect(async()=>{
        try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/users');
            setLoading(false);
            // setError('');
            setUser(res.data);
        } 
        catch(err){
            setError(err);
            setLoading(false);
        }
    })
    return (
        <>{
            loading?<h1>Loading...</h1>:error!=''?<h1>{Error}</h1>:
            <ul >
                {
                    user.map((user)=>(
                        <li >{user.name}</li>

                    ))
                }
            </ul>}
        </>
    )
}


export default User
