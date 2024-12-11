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
    const [showResults, setShowResults] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
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
        if (!searchValue.trim()) {
            setSearchResults([]);
            return;
        }
        setShowLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((item) => item.json())
            .then((item) => {
                setSearchResults(item.data);
                setShowLoading(false);
            })
            .catch(() => {
                setShowLoading(false);
            });
    }, [searchValue]);

    return (
        <HeadlessTippy
            interactive
            visible={searchValue && showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((data) => (
                            <AccountItem key={data.id} data={data} />
                        ))}
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

                {!showLoading && !!searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showLoading && (
                    <button className={cx('load')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-icon')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
