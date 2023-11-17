import'./App.css';
import React from 'react'
import {data} from './data.1'
function App = (){
    return(
      <div>
    <Restauret/>
    <Restauret/>
      </div>
    )
    }
  const Restauret =()=>{  
     return (
  <>
  <img src={image}/>
  <h1>{Restauret}</h1>
  </>
  )
  }
  function Ap(){
    return(
  <div className='container'>
  {
  data.map((eachobj)=>{
  const {imageURL,restauretName,cuisines,rating}= eachobj;
  return <Restauret image={imageURL} restauret={restauretName} cuisines={cuisines}rating={rating}/>
  })
  }
  </div>
    )
  }
  
const resdt = (props)=>{
return(
<>
<img src= {props.image} alt="restauret"/>
<h4>{props.restauret}</h4>
<h5>{props.cuisines}</h5>
<h6>{props.rating}</h6>
</>
)
}

function App(){
  const [data,setData] = useState(0)
  const changerHandler = ()=>{
    setData(data-1)
  }
  
  const increaseHandler = () =>{
    setData(data+1)
  }
  return(
  <div className='container'>
  <button onClick={changerHandler}></button>
  <span>{data}</span>
  </div>
  )
}
  export default App;