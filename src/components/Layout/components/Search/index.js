import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([1, 2, 3]);
    const [showResults, setShowResults] = useState(true);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };

    const handleShowResult = () => {
        setShowResults(true);
    };

    const handleHideResult = () => {
        setShowResults(false);
    };
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1]);
        }, 3000);
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={cx('search-input')}
                    onFocus={handleShowResult}
                ></input>

                {!!searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <button className={cx('load')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button>

                <button className={cx('search-icon')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
