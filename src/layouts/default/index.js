import Header from '~/components/header'
import styles from './default.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return <div className={cx('layout-desktop')}>
        <div className='cps-header-outline'>
            <Header />
        </div>
        <div></div>
        <div className={cx(['cps-container', 'cps-body'])}>
            {children}
        </div>
    </div>
}

export default DefaultLayout
