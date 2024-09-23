// import React from 'react';
// import { useLoaderData,  } from 'react-router-dom';
// import '../Css/UserPage.css';

// const UserPage = () => {
//     const data = useLoaderData();
//     // if(!data){
//     //     return <p>Loading...</p>
//     // }


//     return (

//         <>
//          <h1>Users</h1>
//         <div className='main_div'>
//             <ul>
//                 {data.users.map(user => (
//                     <li key={user.id} className='user_item'>
//                         <div className='user_name'><p>FirstName:</p>{user.firstName}</div>
//                         <div className='user_maiden'><p>MaidenName:</p>{user.maidenName}</div>
//                         <div className='user_last'><p>LastName:</p>{user.lastName}</div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         </>
//     );
// }

// export default UserPage;



import React from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import '../Css/UserPage.css';

const UserPage = () => {
    const data = useLoaderData();

    return (
        <div>
            <h1>Users</h1>
            {/* <div className="static-content">
                <p>This is some static content that remains visible while loading user data.</p>
            </div> */}

            <Suspense fallback={<div>Loading user data...</div>}>
                <Await resolve={data.users}>
                    {(users) => (
                        <div className='main_div'>
                            <ul>
                                {users.map(user => (
                                    <li key={user.id} className='user_item'>
                                        <div className='user_name'><p>FirstName:</p>{user.firstName}</div>
                                        <div className='user_maiden'><p>MaidenName:</p>{user.maidenName}</div>
                                        <div className='user_last'><p>LastName:</p>{user.lastName}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};

export default UserPage;











