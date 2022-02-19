const axios = require('axios');
// axios API , syntax : axios (config)
// axios(config)
// Request Config
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// axios(
//     {
//         url:'/todos',
//         baseURL: '',
//         method: 'get'
//     }
// )

axios({
    url:'/',
    baseURL:'https://dummyjson.com/products',
    method:'get'
    ,
    params:{
        id:2
    }
}).then((response) => {
    console.log(response.status);

}).catch((err) =>{
    console.log(err);
}).then(()=>
{
    console.log('end http request');
})
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);