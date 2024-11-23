import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

// console.log(images.noImage);
const Image = forwardRef(({ src, alt, fallBack: customFallBack = images.noImage, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallBack || src}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
