import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search" className={cx('search-input')}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('load')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('Table')}></div>
            </div>
        </header>
    );
}

export default Header;
