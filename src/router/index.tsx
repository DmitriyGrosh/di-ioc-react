import React, { FC, PropsWithChildren } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { StepperV1 } from '../pages/stepper-with-context';
import { StepperV2 } from '../pages/stepper-with-inversify';

import { Header } from '../widgets/header';

const PublicRoute: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: 'stepper',
          element: <StepperV1 />,
        },
        {
          path: 'stepper-v2',
          element: <StepperV2 />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};