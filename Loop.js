// Iterate over the Given JSON object using all the "for" loops

// Creating a JSON object for the excersise
let obj = [
  { name: "Sachin", age: 20, city: "Noida" },
  {
    name: "Rajesh",
    age: 30,
    city: "Mumbai",
  },
  {
    name: "Hema",
    age: 26,
    city: "Bangalore",
  },
  {
    name: "Ajay",
    age: 39,
    city: "Chennai",
  },
  {
    name: "Badrish",
    age: 50,
    city: "Kolkata",
  },
];

// Iterate over the above obj using all "for" loops
// 1. Normal for loop
for (let i = 0; i < obj.length; i++) {
  console.log(`
    Name:${obj[i].name}
    Age:${obj[i].age}
    `);
}

// 2. ForEach -> forEach loops

obj.forEach((data) => {
  console.log(`
    Name:${data.name} 
    Age:${data.age} 
    City:${data.city}
`);
});

// 3. for-in loop

for (let key in obj) {
  console.log(key);
  console.log(`
    Name:${obj[key].name}
    Age:${obj[i].age}
    `);
}

// 4. for Of loops

for (let data of obj) {
  console.log(`
    Name:${data.name}
    Age:${data.age} 
    City:${data.city}
    `);
}
