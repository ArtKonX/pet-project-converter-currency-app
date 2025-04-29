import Copyright from './Copyright/Copyright';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <div className={styles['footer']}>
            <Copyright text='ArtKonX © 2025' />
        </div>
    )
}

export default Footer