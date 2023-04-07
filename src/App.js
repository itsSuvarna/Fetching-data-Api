/*  simple axios method   */

//by using axios we can performs curd operations

//after getting data check in which form by using console
//if it in arrays,then to store this data, use array inside useState


//afeter getting data in useState array 
//https://codesandbox.io/s/cranky-platform-wxfxpj?file=/src/App.js
//use map 
//make make variable const {id,title,body,etc all present things present in arrays} = post ;
/* eg.
{datas.map((post)=>{
        const {id,title,body} = post;
        return(
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        )
/*



//to fetch diff data from api use ---> backtick  `  `  
// & to search diff value use this ${}. Pass values from input in${}
//  setvalue from axios which not arr or object.
//  it is simply single value after console.log
//  as same as in console.log(res.data.name) gives single value
//  to take multiple data use multiple setvalue -->setDatas,setMoves.etc



import React, { useEffect, useState } from "react"
import axios from "axios"

function App(){
const[num,setNum]=useState(1)
const[datas,setDatas]=useState()   
const[moves,setMoves]=useState()


 //setvalue from axios which not arr or object.
 //it is simply single value after console.log
 //as same as in console.log(res.data.name) gives single value


  useEffect(()=>{
    async function getData(){
      const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setDatas(res.data.name)
      setMoves(res.data.moves.length)
      // console.log(res.data.name)
      }
    getData()
   })


  return(
    <>
    <input value={num} onChange={e=>setNum(e.target.value)}/>
    <div>{datas}</div>
    <div>{moves}</div>
    </>
  )
}
export default App;




