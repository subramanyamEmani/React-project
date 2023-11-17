// // import'./App.css';
// // import React,{useContext, useState} from 'react';
// // import {restarent} from './Data';
// // const person = {
// //   name: "hello",
// //   place: "react"
// // };
// // function App() {
// //   return (
// //     <div>
// //       <h1>{person.name} I am from {person.place}</h1>
// //     </div>
// //   );
// // }
// // const Image = () => {
// //   return (
// //     <>
// //       <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg" alt="jhg" />
// //     </>
// //   );
// // }

// import { useRef, useState } from "react"

// // function App(){
// // return(
// //   <div>
// // <Restauret/>
// // <Restauret/>
// //   </div>
// // )
// // }
// // const Restauret =()=>{
// // return (
// // <>
// // <img src={image}/>
// // <h1>{restauret}</h1>
// // </>
// // )
// // }
// // let data = [
// // {
// // imageURL : "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2869%2Ftrend20200630115235.jpg",
// //  restauretName :"srikanya comfort",
// //  cuisines :"cuisines:italian,chines,north",
// //  rating :"3 stars"
// // }
// // ];
// // function App(){
// //   return(
// // <div className='container'>
// {
// data.map((eachobj)=>{
// const {imageURL,restauretName,cuisines,rating}= eachobj;
// return <Restauret image={imageURL} restauret={restauret} cuisines={cuisines}rating={rating}/>
// })
// }
// </div>
//   )
// }
// const resdt = (props)=>{
// return (
// <>
// <img src= {props.image} alt="restauret"/>
// <h4>{props.restauret}</h4>
// <h5>{props.cuisines}</h5>
// <h6>{props.rating}</h6>
// </>
// )  
// }

// function App(){
// const [data,setData] = useState(0)
// const changerHandler = ()=>{
//   setData(data-1)
// }
// const increaseHandler = () =>{
//   setData(data+1)
// }
// return(
// <div className='container'>
// <button onClick={changerHandler}></button>
// <span>{data}</span>
// </div>
// )
// }

// useContext method...
// import React from 'react'
// import ChildTwo from './childtwo' 
// import React from 'react'
// export const UserContext = React.createContext()
// function App(){
// return(
// <>
// <div className="App">
//   <UserContext.Provider value={"coming from UserContext"}>
//     <ChildTwo/>
//   </UserContext.Provider>
// </div>
// </>
// )
// }

// useReduce method....
// import './App.css';
// import React, {useReducer} fromreact';
// const intialisation = {count :0}
// function reducer (state,action){
//   switch(action.type){
//     case 'increament' :
//       return{count : state.count +1}
//       case 'decreadment':
//         return{count : state.count-1}
//         default :
//         throw new Error()
//   }

// export default App;