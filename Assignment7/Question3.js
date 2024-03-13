// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })
 
const fetchData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data fetched successfully")
    },1000)
})
  
fetchData.then((data)=> console.log(data)).catch((err)=> console.log(err));

