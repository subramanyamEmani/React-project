import React, {useState,useEffect} from "react";
import './App.css';

constURL =" http://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const Cocktail =() =>{
const [userData,setUserData] = useState([]);
const [searchTerm,setSearchterm] = useState('');
const [loading,setLoading] = useState(false);
const [isError,setIsError] = useState({status:false,msg:''})

const fetchData = async (apiURL) =>{
    setLoading(true)
    setIsError({status:false,msg:''})
    try{
 const response = await fetch(apiURL);
 const {drinks} = await response.json();
 setUserData(drinks)
 setLoading(false)
 setIsError({status:false,msg:''})
 if(!drinks){
    throw new Error("Data not found")
 }
    }
} catch(error){
setLoading(false)
setIsError({status:true,msg:error.message||"something went wrong..."})
}
useEffect(()=>{
const correctURL = `${URL}${searchTerm}`
fetchData(correctURL)
},[searchTerm])
return(
<>
<div className='container'>
<div className='parent'>
<input type="text"name='search' placeholder="search" value={searchTerm} onChange={(e)=> setSearchterm(e.target.value)}/>
</div>
    <hr/>
{loading && ! isError?.status&&<h6>Loading...</h6>}
{isError?.status && <h6 style={{color:'red'}}>{}isError.msg</h6>}
{
!loading && !isError?.status && <ul>
{
userData.map((eachDrink)=>{
const {strDrinkThumb,strDrink,idDrink0}=eachDrink;
return <li key={idDrink}>
    <div className="image"><img src={strDrinkThumb} alt=""/></div>
    <div className='brandName'>{strDrink}</div>
</li>
}
)
}
</ul>
}
</div>
</>
)
}