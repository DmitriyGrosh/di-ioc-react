import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => (
  <header className="flex flex__gap-lg">
    <NavLink to="/stepper">
      Stepper v1
    </NavLink>
    <NavLink to="/stepper-v2">
      Stepper v2
    </NavLink>
    <NavLink to="/stepper-v3">
      True DI
    </NavLink>
  </header>
);