console.log('hello world');

// fetch .then in a function
function pingGecko() {
    fetch('https://api.coingecko.com/api/v3/ping')
    .then((responce) => responce.json())
    .then((data) => console.log("fetch ", data))
}

pingGecko()


// Aysnc Func
let urlGecko = 'https://api.coingecko.com/api/v3/ping'
let globalObj = {}

async function pingGeckoAysnc(url) {
    let responce = await fetch(url);
    let data = await responce.json();
    console.log("Async Func ", data)
    
}

pingGeckoAysnc(urlGecko)

// axios js npm package 
async function getUser() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/ping');
      console.log(response.data.gecko_says);
    } catch (error) {
      console.error(error);
    }
  }
getUser()