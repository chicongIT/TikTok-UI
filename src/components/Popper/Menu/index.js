import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import Header from '~/components/Popper/Menu/Header';
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, item = [], onChange = { defaultFn } }) {
    const [history, setHistory] = useState([{ data: item }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else onChange(item);
                        // console.log(current.data);
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // visible
            delay={(0, 500)}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="1" {...attrs}>
                    <PopperWrapper className={cx('wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
