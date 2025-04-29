import styles from  './Loader.module.scss';

const Loader = () => {

    return (
        <div className={styles['preloader-container']}>
            <div className={styles["preloader"]}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loader