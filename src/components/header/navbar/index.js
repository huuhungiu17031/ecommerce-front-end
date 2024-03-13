import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './navbar.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
const cx = classNames.bind(styles)
import images from '~/assets/images'
import { faCartShopping, faChevronDown, faLocationDot, faPhone, faTableList, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import BoxSearch from '~/components/partials/box-search'

function Navbar() {
  const [region, setRegion] = useState(null)
  return <div className={cx(['cps-container'])}>
    <nav className={cx('cps-navbar')}>
      <NavLink className={cx('navbar-brand')} to={'/'}>
        <img src={images.logo} alt="logo.svg" />
      </NavLink>

      <NavLink className={cx('btn-menu')}>
        <FontAwesomeIcon icon={faTableList} />
        <p>Danh Mục</p>
      </NavLink>

      <NavLink className={cx('btn-menu')}>
        <FontAwesomeIcon icon={faLocationDot} />
        <div className={cx('region-layout')}>
          <div className={cx('check-price')}>
            <p>Xem giá tại</p>
            <FontAwesomeIcon icon={faChevronDown} style={{ width: '10px', height: '10px' }} />
          </div>
          <div className={cx('region-name')}>{region && region ? <p>{region}</p> : <p>Hồ Chí Minh</p>}</div>
        </div>
      </NavLink>

      {/* SEARCH BAR */}


      {/* END SEARCH BAR */}

      <NavLink className={cx('btn-menu')}>
        <FontAwesomeIcon icon={faPhone} />
        <div>
          <p>Gọi mua hàng</p>
          <p>1800.2097</p>
        </div>
      </NavLink>

      <NavLink className={cx('btn-menu')}>
        <FontAwesomeIcon icon={faLocationDot} />
        <div className={cx('title')}>
          <p>Cửa hàng </p>
          <p>gần bạn</p>
        </div>
      </NavLink>


      <NavLink className={cx('btn-menu')}>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className={cx('title')}>
          <p>Giỏ hàng</p>
        </div>
      </NavLink>

      <NavLink className={cx(['btn-menu', 'btn-login'])}>
        <FontAwesomeIcon icon={faUser} />
        <div className={cx('title')}>
          <p>Đăng nhập</p>
        </div>
      </NavLink>

      {/* <BoxSearch /> */}
    </nav>
  </div>
}

export default Navbar
