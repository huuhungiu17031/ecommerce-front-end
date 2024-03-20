import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ to, href, nav, icon, logo, login, onClick, about, children, ...unknownProps }) {
  let Component = 'button';
  const props = {
    onClick,
    ...unknownProps,
  };

  if (to) {
    props['to'] = to;
    Component = NavLink;
  } else if (href) {
    props['href'] = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    nav,
    logo,
    about,
    login,
  });

  return (
    <Component className={classes} {...props}>
      {logo && <img src={logo} alt={props.alt} />}
      {nav && icon && <FontAwesomeIcon icon={icon} />}
      {children && <span>{children}</span>}
    </Component>
  );
}

export default Button;
