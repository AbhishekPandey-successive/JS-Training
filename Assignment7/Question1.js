// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

console.log("start")

setTimeout(()=>{

    const res = fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
  headers: {
    "X-RapidAPI-Key": "5f4516e06cmshfd4c3e5f19ad444p1ce5fbjsna35db917957a",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
});

res.then((data)=> data.json()).then((data)=> console.log(data));
},2000)

console.log("end")