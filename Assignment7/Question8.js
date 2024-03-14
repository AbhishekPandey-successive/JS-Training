// 8. Create a function that fetches data from multiple APIs in parallel  using async/await.

async function fetchDataFromMultipleAPIs(urls) {
  try {
      
      const responses = await Promise.all(urls.map(url=> fetch(url)));
      
      
      const dataPromises = responses.map(response => response.json());
      const jsonData = await Promise.all(dataPromises);
      return jsonData
  } 
  catch (error) {
      console.error("Error fetching data:", error);
      throw error;
  }
}

const urls=['https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/2','https://jsonplaceholder.typicode.com/posts/3']



fetchDataFromMultipleAPIs(urls)
  .then(total => {
      console.log('Total value:', total);
  })
  .catch(error => {
      console.error('Failed to fetch data:', error);
  });