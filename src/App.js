import './App.css';
import {useState} from "react"


const userAr=[{id:1,name:"shital", age:24, education:"msc"},
{id:2, name:"suvarna",  age:24, education:"msc"},
{id:3, name:"shitu",  age:24, education:"msc"},
{id:4, name:"s",  age:24, education:"msc"} ];

//show array element in table form
function App() {
  const [updatedUserAr,setUpDatedUseAr]=useState(userAr);
 console.log(updatedUserAr)
const deleteOperation=(index)=>{
     updatedUserAr.filter((element)=>element!==userAr[index]);
    // console.log(userAr.filter((element)=>element!==userAr[index]));
}
 return (
   <>
   <div>
    {updatedUserAr.map((element,index)=>{


            <div key={index}>
            {updatedUserAr.name}
            {updatedUserAr.age}
            {updatedUserAr.education}
            <button onClick={()=>deleteOperation(index)}>delete</button>
            </div>
            }
             ) }
  </div>
  </>
  );
  }
  export default App;

  
/*
//show/hide element
function App(){
  const [text,setText]=useState(""); 
return(
    <>
    <button onClick={()=>setText(!text)}>
             { text  ? "hide element":"show element"}
    </button>
            {text && <p>toggle me</p>}
    </>
  )
}
export default App;
/*


/*
//disable button
function App(){
  const[value,setValue]=useState(" ")
  return(
    <>
     <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      <buttom disabled={value.length<6}>submit</buttom>
    
    </>
  )
}
export default App;
*/
/*
//counter-increase & decrease value
function App(){
 const [count,setCount]=useState(0)

 const incre=()=>{
  setCount(count+1)
 }
const decre=()=>{
  setCount(count-1)
 }
  return(
   <>
   <div>{count}</div>
   <button onClick={(incre)}>increment</button>
   <button onClick={decre}>decrement</button>
   </>
  );
  }
  export default App
*/



//store sipmple object inside local storage & get .
/*
function App(){

  const obj={name:"suvarna",
   edu:"msc.math",
   movie:"xyz"};

  localStorage.setItem("user",JSON.stringify(obj));

  const object = localStorage.getItem("user");
  const data = JSON.parse(object)
  console.log(data.movie)
  
  
  return(
      <></>
  )
}
export default App

*/


//delete array of element using id

/*function App(){
  const [datas,setDatas] = useState([
  {id:1, name:"suvarna"},
  {id:4, name:"stu" },
  {id:5, name:"ghhh" }])

const handleDelete=(id)=>{
  setDatas(datas.filter(data=>data.id!==id));}


return(
    <>
    {datas.map((data)=>(
       <p key={data.id}>
              {data.name}
       <button onClick={()=>handleDelete(data.id)}>delete</button>
       </p>
  ))}
    </>
  )
}
export default App;
*/

//or second method

/*const arr=[
  {id:1, name:"suvarna"},
  {id:4, name:"stu" },
  {id:5, name:"ghhh" }]

  
function App(){
  const [datas,setDatas] = useState(arr);
 

const handleDelete=(id)=>{
  setDatas(datas.filter(data=>data.id!==id));}


return(
    <>
    {datas.map((data)=>(
       <p key={data.id}>
              {data.name}
       <button onClick={()=>handleDelete(data.id)}>delete</button>
       </p>
  ))}
    </>
  )
}
export default App;

*/



//add new obj in array
/*
import {useState} from "react";

const arr = [
  {id:1, name:"sdf"},
  {id:2,name:"ffgg"},
  {id:3,name:"rtt"},
  {id:4,name:"wwhytp"}]


function App(){
  const [datas,setDatas]=useState(arr);
  const [newEle,setNewEle]=useState(" ")
  


  const handleDelete=(id)=>{
      setDatas(datas.filter((data)=>data.id!==id))}

 const handleChange=(e)=>{
     setNewEle(e.target.value)
}

const handleSubmit =()=>{
     const addObj = {id:Math.random(),name:newEle }
 setDatas([...datas,addObj])
}

 return(
    <>
       <input placeholder="addarr element" 
              onChange={handleChange}
              value={newEle}/>
        <button onClick={handleSubmit}>ADD</button>

    {datas.map((data)=>
      <div key={data.id}>
        {data.name}
        <button onClick={()=>handleDelete(data.id)}>delete</button>
      </div>
      ) }
    </>
  )
}
export default App

*/



//video in website

/*
import ReactPlayer from 'react-player'

<div>
    <ReactPlayer controls url={'https://youtu.be/jfobiCq0YUc'} />
</div>

*/




//Accordian
/*
const array = [
  { id: 1, question: "what is react", ans: "it is js library" },
  {
    id: 1,
    question: "why used react",
    ans: "it has reusable compnent,virtual dom,jsx syntax"
  },
  { id: 1, question: "define useEffect", ans: "it perform sideEffect" },
  {
    id: 1,
    question: "how virtual dom work",
    ans: "it update only component that have changes"
  },
  {
    id: 1,
    question: "diff bet virtual dom & real dom",
    ans: "diff is memory,time,etc"
  },
  { id: 1, question: "define usememo", ans: "it uses memoized value" }
];




const accordian=({question,ans})=>{
  return
  <div>
  <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
  {question}

  {show && <p>{ans}</p>}
</div>

}
export accordian;
/*function App() {
  const [data, setData] = useState(array);
  const [show, setShow] = useState(false);
  return (
    <>
      {data.map(({ question, ans }) => {
        return (
          <>
            <div key={data.id}>
              <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
              {question}

              {show && <p>{ans}</p>}
            </div>
          </>
        );
      })}
    </>
  );
}
export default App;
*/


//Registration form which prevent value after refresh

/*
import React,{useState,useEffect} from "react"

function App(){
  const [formState,setFormState]=useState({email:"",password:""})
  const {email,password}=formState;
const handleChange=(e)=>{
  let value=e.target.value;
  let name=e.target.name;
  setFormState((prev)=>({...prev,[name]:value}));
}
useEffect(()=>{
  const storedUser=JSON.parse(localStorage.getItem("user"))
  if(email==="" && password===""){setFormState((prev)=>({...prev,...storedUser}));}
},[])

useEffect(()=>{
  localStorage.setItem("user",JSON.stringify(formState))
},[email,password])
  return(
    <>
    <form>
      <input type="email" placeholder="email"
      name="email" value={email}
      onChange={handleChange}
      />
       
       <input type="password" placeholder="password"
      name="password" value={password}
      onChange={handleChange}
      />
    <button type="submit"></button>

    </form>
    </>
  )
}
export default App
*/
//or  using object

import react ,{useState } from "react";

function App(){
  const [name,setName] =useState({firstName:'',lastName:''})

  return(
    <>
    <form>
      <input type="text" 
        value={name.firstName}
        onChange={e=>setName({...name, firstName:e.target.value})}
      />

      <input type="text" 
        value={name.lastName}
        onChange={e=>setName({...name, lastName:e.target.value})}
      />

      <h2>my first name is-{name.firstName}</h2>
      <h2>my last name is -{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>

    </form>
    </>
  )
}
export default App;



/*import {useState} from "react"
export default function App() {
  const [value,setValue]=useState("suvarna")

 const handleChange=(e)=>{
   setValue(e.target.value)
 }
  return (
    <div className="App">
     <p>my name is `{value}`</p>
     <input onChange={handleChange}/>
    </div>
  );
}
*/

//useRef

/*
import React,{useState,useRef} from "react";

function App(){
  let inputRef=useRef(null);

 const handleInput=()=>{
     inputRef.current.value=("1000");
     //inputRef.current.focus()
     //inputRef.current.style.display="none"
  }

  return(
      <>
       <input 
       ref={inputRef}
       type="text"/>
      
      <button onClick={handleInput}>handle dom input</button>
      </>
  )
}
export default App;

*/



