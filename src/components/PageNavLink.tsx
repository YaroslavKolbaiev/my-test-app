import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
}



export const PageNavLink: React.FC<Props> = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      end
      className={(
        { isActive }) => classNames('navbar-item', { 'is-active': isActive }
        )}
    >
      {text}
    </NavLink>
  );
};
