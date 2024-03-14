import Banner from './banner'
import Navbar from './navbar'
import styles from './header.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Header() {
  return (
    <header>
      <Banner />
      <Navbar />
    </header>
  )
}

export default Header
