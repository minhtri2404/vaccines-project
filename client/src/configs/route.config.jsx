import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
const LoginPage = React.lazy(() => import('../pages/admin/LoginPage'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
    isProtected: false,
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
    isProtected: false,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    isProtected: false,
  },
];

function renderRoutes(routes, isAuth = false) {
  return (
    <>
      {routes.map((route, index) => {
        const { path, isProtected, element } = route;
        return (
          <Route
            key={index}
            path={path}
            element={
              <>
                {isProtected && !isAuth ? (
                  <Navigate replace={true} to="/admin/login" />
                ) : (
                  element
                )}
              </>
            }
          />
        );
      })}
    </>
  );
}

export { routes, renderRoutes };
