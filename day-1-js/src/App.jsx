import React from 'react';

const list = [
  { 
    Name: 'Deepa Ghimire',
    Address: 'Dharan-18', 
    Email: 'deepa@gmail.com'
 },
  { Name: 'Siwani Dahal', 
    Address: 'Dharan-13', 
    Email: 'siwani@gmail.com' 
  },
  {
     Name: 'Dipshika Shrestha',
      Address: 'Dharan-02',
       Email: 'dipshika@gmail.com'
       },
  {
     Name: 'Sweta Niroula', 
    Address: 'Dharan-18',
     Email: 'sweta@gmail.com' },

  { 
    Name: 'Ashim Chhetri', 
    Address: 'Dharan-13', 
    Email: 'ashim@gmail.com' }
];

const App = () => {
  return (
    <div>
      <h1>MY React Learning Squad</h1>
      <p>Hello</p>
      {
        list.map((item) => {
          return (
            <Card key={item.Name} item={item} /> 
          );
        })
      }
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ border: "3px solid black", width: "30%", padding: "10px", margin: "10px", background: "pink" }}>
      <h2>Name: {item.Name}</h2>
      <h2>Address: {item.Address}</h2>
      <h2>Email: {item.Email}</h2>
    </div>
  );
};

export default App;
