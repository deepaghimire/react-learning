import { useEffect, useState } from "react";
import style from "./App.module.css";
import React from "react";
import { startTransition } from "react";

const oldblogs = [
  {
    title: "Best Tech Stack for Startups in 2025",
    readingTime: "3m",
    publishAt: "Dec 29, 2024",
    Author: "Deepa",
  },
  {
    title: "Terminal picks",
    readingTime: "1m",
    publishAt: "Jan 16",
    Author: "sweta",
  },
  {
    title: "Do I need a jacket?",
    readingTime: "4m",
    publishAt: "Jan 17",
    Author: "siwani",
  },
  {
    title: "I am in love with the rain.",
    readingTime: "5m",
    publishAt: "feb 15",
    Author: "Ram",
  },
  {
    title: "Best tips and tricks",
    readingTime: "5m",
    publishAt: "mar 15",
    Author: "Shyam",
  },
];
function Blogs() {
  const [blogs, setblogs] = useState(oldblogs);

  return (
    <>
      <div className={style.blogs}>
        {blogs.map((item) => {
          return <Card Key={item.Author} item={item} />;
        })}
      </div>
      <Form updateblog={setblogs} />
    </>
  );
}

export default Blogs;

const Card = ({ item }) => {
  const rawdate = new Date(item.publishAt);

  console.log(rawdate);
  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(rawdate);
  return (
    <div className={style.Card}>
      <p className={style.Author}>{item.Author} </p>
      <p className={style.readingTime}>{item.readingTime} read time</p>{" "}
      <time>{date}</time>
      <h2 className={style.title}>{item.title}</h2>
    </div>
  );
};

function Form({ updateblog }) {
  const [title, settitle] = useState(0);
  const [Author, setauthor] = useState(0);
  const [readingTime, setreadingtime] = useState(0);

  const handlesubmit = () => {
    if (title && Author && readingTime) {
      const newblog = { title, Author, readingTime, publishAt: new Date() };
      updateblog((e) => [newblog, ...e]);
    }
  };

  return (
    <div>
      <h1>
        <center>create new blog</center>
      </h1>
      <form className={style.Form} onSubmit={handlesubmit}>
        <FormInputDiv
          lable={"Title"}
          value={title}
          setValue={settitle}
          placeholder={"Give a title name"}
          className={style.input}
        />
        <FormInputDiv
          lable={"Reading time"}
          value={readingTime}
          type="time"
          setValue={setreadingtime}
          className={style.input}
        />
        <FormInputDiv
          lable={"Author name"}
          value={Author}
          setValue={setauthor}
          placeholder={"Enter your name"}
          className={style.input}
        />

        <button type={"submit"} className={style.button}>
          submit
        </button>
      </form>
    </div>
  );
}

function FormInputDiv({ lable, value, type = "text", setValue, placeholder }) {
  return (
    <div>
      <lable>{lable} </lable>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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
