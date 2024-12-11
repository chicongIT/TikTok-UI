import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>{data.full_name}</h4>
                <h5 className={cx('accountID')}>{data.nickname}</h5>
            </div>
        </Link>
    );
}

export default AccountItem;
