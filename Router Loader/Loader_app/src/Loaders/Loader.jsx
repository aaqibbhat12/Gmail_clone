// import axios from 'axios'
// const Loader = async () => {
//     try {
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         const response = await axios.get('https://dummyjson.com/users')
//         console.log(response.data)

//         return response.data

//     } catch (error) {
//         throw new Response("Error while fetching the data")
//     }
// }



// export default Loader

import { defer } from 'react-router-dom';
import axios from 'axios';

const UserLoader = async () => {
    return defer({
        users: new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const response = await axios.get('https://dummyjson.com/users');
                    resolve(response.data.users);
                } catch (error) {
                    throw new Response("Error while fetching the user data");
                }
            }, 5000); 
        })
    });
};

export default UserLoader;







