import styles from './box-search.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function BoxSearch() {
    return (
        <div className={cx('box-search')}>
            <form className={cx('cps-group-input')}>
                <div >
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div>
                    <input className={cx('cps-input')} />
                </div>
            </form>
        </div>
    )
}

export default BoxSearch
