import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHouseChimneyCrack,
    faMoon,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import { InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouseChimneyCrack} />,
        title: 'Create tools',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    title: 'Use device theme',
                },
                {
                    title: 'Dark mode',
                },
                {
                    title: 'Light mode',
                },
            ],
        },
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    // handle menu changes
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button rounded leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload-btn')}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('inbox-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('login-button')} primary>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu item={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/eac633999375c6c4351543884b66f4c5.jpeg?lk3s=a5d48078&nonce=86193&refresh_token=6732b709a41f82c3eb9b2925dc926be8&x-expires=1732471200&x-signature=gdt30742v3DwEfWWoSTz4%2BmGKMs%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user-avatar')}
                                alt="Jack - J97"
                                fallBack="https://i.pinimg.com/736x/f7/c3/ab/f7c3ab7931ba3dbac1b9825db2d64441.jpg"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
