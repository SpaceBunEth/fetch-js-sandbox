console.log('hello world');

fetch('https://api.coingecko.com/api/v3/ping')
 .then((responce) => responce.json())
 .then((data) => console.log(data))