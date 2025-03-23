// //affno information rakhera card banaune  map garera

// const MY_details = [
//  {
//     Name : "Deepa Ghimire",
//     Age : 22,
//     Address :"Dharan",
//     Email :"deepa12345@gmail.com",


//  }
// ]

// const my =()=>{
//     return(
// <div>
// <h> MY details is here </h>
// <p> hello</p>
// {
//     MY_details.map ((item) => {
//         return (
//              <Card key={item.Name} item={item} />
//         );
//     })
// };
// </div>

//  );
// };

// const Card = ({ item }) => {
//     return (
//       <div style={{ border: "3px solid black", width: "30%", padding: "10px", margin: "10px", background: "pink" }}>
//         <h2>Name: {item.Name}</h2>
//         <h2>Address: {item.Address}</h2>
//         <h2>Age :{item.Age} </h2>
//         <h2>Email: {item.Email}</h2>
//       </div>
//     );
//   };
// export default my;







const MY_details = [
  {
    Name: "Deepa Ghimire",
    Age: 22,
    Address: "Dharan",
    Email: "deepa12345@gmail.com",
  },
];

const My = () => {
  return (
    <div>
      <h1>My Details</h1>
      <p>Hello</p>
      {MY_details.map((item) => {
        return <Card key={item.Name} item={item} />;
      })}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ border: "3px solid black", width: "30%", padding: "10px", margin: "10px", background: "pink" }}>
      <h2>Name: {item.Name}</h2>
      <h2>Address: {item.Address}</h2>
      <h2>Age: {item.Age}</h2>
      <h2>Email: {item.Email}</h2>
    </div>
  );
};
// console.log(MY_details);
export default My;
