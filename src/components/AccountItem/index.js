import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={
                    'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/f93b52215054d62002e4c5a85870bae7.jpeg?lk3s=a5d48078&nonce=59209&refresh_token=2a2a6d0b35feb05f3d074334e9d11ef5&x-expires=1732118400&x-signature=jHGPR1GtHJKJCAqTLNsGOYVsnGs%3D&shp=a5d48078&shcp=81f88b70'
                }
                alt="Matmotmi"
            />
            <div className={cx('infor')}>
                <h4 className={cx('accountID')}>matmotmiclothing</h4>
                <h5 className={cx('name')}>Mắt Một Mí</h5>
            </div>
        </div>
    );
}

export default AccountItem;
