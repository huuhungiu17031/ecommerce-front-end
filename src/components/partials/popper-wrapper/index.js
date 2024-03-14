import styles from './popper-wrapper.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import React from 'react'

function PopperWrapper({ children }) {
  return <div className={cx('popper-wrapper')}>{children}</div>
}

export default PopperWrapper
