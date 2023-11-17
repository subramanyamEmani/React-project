import'./App.css';
import React,{useState} from 'react';
import {restarent} from './Data';
function  App(){
    const [data,setState] = useState(restarent)
    const deleteHandler = (recieved) =>{
    console.log(recieved)
    const filterData = data.filter((eachobj) => {
        return eachobj.id != recieved
    })
    setData (filterData)
    }
}
return (
    <div className='container'>
        <ul>
            {
            data.map((eachobj)=>{
                const {ImageURL,restarentName,cuisines,rating,id} = eachobj
                return(
                    <li key={id}>
                      <div><img src={ImageURL} alt=""/></div>
                      <div>{restarentName}</div>
                      <div> {cuisines}</div>
                      <div>{rating}</div>
                      <button onClick={()=> deleteHandler(id)}>Delete</button>
                    </li>
                )
                })            
            }
        </ul>
    </div>
)
export default App