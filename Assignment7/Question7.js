// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

function func()
{
    const p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello")
        },1000)
    })

    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Abhishek")
        },2000)
    })

    const p3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("How are you")
        },3000)
    })

    return Promise.all([p1, p2, p3]).then((values) => {
        console.log(values);
      });
}

console.log(func())



