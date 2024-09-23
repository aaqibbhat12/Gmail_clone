// import React, { Suspense ,lazy } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Loader from './Loaders/Loader';

// const UserPage = lazy(() => import('./components/UserPage'));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserPage />,
//     loader: Loader,
//   },
// ]);

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLoader from './Loaders/Loader';

const UserPage = lazy(() => import('./components/UserPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    loader: UserLoader,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
