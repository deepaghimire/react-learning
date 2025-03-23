import { useEffect, useState } from 'react'
import style from './App.module.css';
import React from "react";
import { startTransition } from 'react';


const blogs =[
  {
    title: "Best Tech Stack for Startups in 2025",
    readingTime: "3m",
    publishAt: "Dec 29, 2024",
    author:"Deepa",

  },
  {
    title:"Terminal picks",
    readingTime: "1m",
    publishAt:"Jan 16",
    author:"sweta",
  },
  {
    title:"Do I need a jacket?",
    readingTime: "4m",
    publishAt:"Jan 17",
    author:"siwani",
  }

]
function Blogs(){
 const rawdate = new Date ("Sun Dec 29 2024 00:00:00 GMT+0545 (Nepal Time)") 
 console.log(rawdate)
 const date = new Intl.DateTimeFormat("en-US",{month:'short',year:'numeric',day:'numeric'}).format(rawdate)

  return(
    <div className={style.blogs}>
      {blogs.map  ((item)=>{
        return(
          <Card Key={item.author} item={item}/>
        )
      }
      )}
   </div>
 
)
}

export default Blogs;

const Card=({item})=>{
  const rawdate = new Date (item.publishAt) 

  console.log(rawdate)
  const date = new Intl.DateTimeFormat("en-US",{month:'short',year:'numeric',day:'numeric'}).format(rawdate)
  return(
    
    <div className={style.Card}>
    <p className={style.author}>{item.author} </p>
    <p className={style.readingTime}>{item.readingTime} read time</p> <time>{date}</time>
    <h2 className={style.title}>{item.title}</h2> 
     
 </div>
   
   
  
  );
}







// function App (){
//   const [count, setCount] = useState(0)

//  function increment (){
//   setCount(count + 1)
//  }

//   function decrement(){
//     setCount(count - 1)
//   }
 
//   return (
//     <div className='card'>

//     <h1>counter App</h1>
//     <h2>count= {count}</h2>
//     <button onClick={increment}>increment


//     </button>
//     <button onClick={decrement}>decrement

//     </button>
    
    
//     </div>
//   )
// }
// export default App


// export default function App(){
//   return(
//     <div>
//       <Greet/>
//       <Greet Name ='Deepa'/>
//     </div>
//   )
// }

// function Greet({Name = "bhai"}){
// return(

//  <div>
//       <p>Hello {Name},how are you ?   </p>


//   </div>
// )

// }

// export default function App(){
//   return(
//     <div>
//       <Sayhello fullName= "react"/>
//       <Sayhello fullName={{ firstName:"Deepa",lastName:"Ghimire"}}/>
//       <Sayhello fullName= {{ lastName:"ghghg"}}/>
//     </div>
//   )
// }
 /* function Sayhello(props) {
    return ( 
      <h1>Hello {props?.fullName?.firstName ?? "dsds" } {props?.fullName?.lastName}</h1>

    )
  } */
 

  // function Sayhello(props) {
  //   return (
  //     <h1>
  //       Hello{" "}
  //       {props?.fullName?.firstName ? (
  //         <>
  //           <span>{props.fullName.firstName}</span>{" "}
  //           <span>{props.fullName.lastName}</span>
  //         </>
  //       ) : (
  //         <span>Guest</span>
  //       )}
  //       , how are you?
  //     </h1>
  //   );
  // }

//   import React, { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1>{name}</h1>
//       <input 
//         type="text" 
//         value={name}  
//         onChange={(event) => setName(event.target.value)}
//       />
//     </div>
//   );
// }

  
// import React from "react";
// const stock = 10;
// export default function App(){
//     const [OrderQty, setOrderQty] = React.useState(0);
// const DecQty =()=>{
//   console.log("previous count",OrderQty);
//   setOrderQty((c)=>(c==0 ? 0:c-1));
//   console.log("updated count",OrderQty);
// };
// const IncQty =()=>{
//   console.log("previous count",OrderQty);
//   setOrderQty((c)=> (c==stock?stock:c+1));
//   console.log("updated count",OrderQty);  

// };

// return(
//   <div>
//     <h1>order</h1>
//     <p>{OrderQty}</p>
//     <button onClick={DecQty}> DecQty</button> 
//     <button onClick={IncQty}>IncQty</button>  
//   </div>
// );
// }



// export default function App(){
//   const [name,setName]=React.useState("");
//   return(
//     <div>
//       <h1>{name}</h1>
//       <input type = "text" value={name} onChange={(aaa) => setName(aaa.target.value)} />
//     </div>


//   );
// }


// export default function App(){

//   function handlename(ee){
    
//     setName(ee.target.value)
    
//   }

//   const [name,setName]=React.useState("");
//   return(
//     <div>
//       <h1>{name}</h1>
//       <input type = "text" value={name} 
//       onChange={handlename} 
//        />



//     </div>


//   );
// }

// export default function App (){
//   const [name,setName]=React.useState("");
//   useEffect(()=>{
//       console.log("useEffect");
//  },[name]);
//  console.log("render");
//  return(
//   <div>
//        <h1>{name}</h1>
//        <input type = "text" value={name} onChange={(aaa) => setName(aaa.target.value)} />
//     </div>
//  )

// }



  





   
    
  







