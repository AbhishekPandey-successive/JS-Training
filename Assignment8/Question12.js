async function getData() {
    return new Promise((resolve) => {
       setTimeout(function() {
          resolve([1, 2, 3, 4, 5]);
       }, 1000);
    });
 }
 
 getData().then(function(data) {
    console.log(data);
 });