import axios from "axios";

export default axios.create({   
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID oVqe7mNE5qylwnpQikcvMUujp6Z_VTpqmuDkHyrSQ9U&count=10",
    },
});




// import axios from 'axios';
// // const axios = require('axios');

// export default axios.create({
//     baseURL: "https://api.unsplash.com",
//     headers: {
//         Authorization: "oVqe7mNE5qylwnpQikcvMUujp6Z_VTpqmuDkHyrSQ9U",
//     },
// });