const axios = require('axios');
// axios API , syntax : axios (config)
// axios(config)
// Request Config

axios(
    {
        url:'/todos',
        baseURL: '',
        method: 'get'
    }
)

axios({
    url:'/todos',
    baseURL:'https://dummyjson.com/products',
    method:'get'
}).then((response) => {
    console.log(response.data);

}).catch((err) =>{
    console.log(err);
})
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);