import styles from './navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import images from '~/assets/images';
import {
  faBagShopping,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faTableList,
  faTruck,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/partials/popper-wrapper';
import Button from '~/components/partials/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Navbar() {
  const [region, setRegion] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className={cx(['cps-container'])}>
      <nav className={cx('cps-navbar')}>
        <Button to="/" alt="logo" logo={images.logo}></Button>
        <Button nav icon={faTableList}>
          Danh mục
        </Button>

        <div className={cx('flex-grow')}></div>
        {/* SEARCH BAR */}
        {/* <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          placement={'bottom-start'}
          render={attrs => (
            <div className={cx('suggest-search-wrapper')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx('')}></div>
              </PopperWrapper>
            </div>
          )}>
          <div className={cx('search-bar')}>
            <form>
              <button className={cx('find')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input spellCheck={false} placeholder="Bạn cần tìm gì" />
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </form>
          </div>
        </Tippy> */}
        {/* END SEARCH BAR */}
        <Button nav about icon={faPhone}>
          Gọi mua hàng <br /> 1800.2097
        </Button>
        <Button nav about icon={faLocationDot}>
          Cửa hàng <br /> gần bạn
        </Button>
        <Button nav about icon={faTruck}>
          Tra cứu <br /> đơn hàng
        </Button>
        <Button nav about icon={faBagShopping}>
          Giỏ <br /> hàng
        </Button>
        <Button nav about login icon={faUser}>
          Đăng nhập
        </Button>
        {/* <NavLink className={cx('btn-menu')}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={cx('region-layout')}>
            <div className={cx('check-price')}>
              <p>Xem giá tại</p>
              <FontAwesomeIcon icon={faChevronDown} style={{ width: '10px', height: '10px' }} />
            </div>
            <div className={cx('region-name')}>{region && region ? <p>{region}</p> : <p>Hồ Chí Minh</p>}</div>
          </div>
        </NavLink> */}

        {/* <div style={{ flexGrow: 1 }}></div>
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

        <BoxSearch /> */}
      </nav>
    </div>
  );
}

export default Navbar;
