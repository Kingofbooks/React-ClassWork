import React,{useState,useEffect} from 'react';
import Axios from 'axios';
function Get()
{
    const[book,setBook]=useState([]);
    useEffect(()=>{
Axios.get('http://localhost:3000/books')
.then(response=>setBook(response.data))
    })
return(
    <div>
<h3>My Book List</h3>
{book.map((bo)=>
<div key={bo.id}>
    <div>{bo.title}</div>
    <div>{bo.author}</div>
    </div>
)}
    </div>
)
}
export default Get;
