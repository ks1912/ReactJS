import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID oVqe7mNE5qylwnpQikcvMUujp6Z_VTpqmuDkHyrSQ9U",
    },
})