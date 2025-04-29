import { TitleAboutUsProps } from '@/interfaces/about-us/title-about-us/title-about-us.interface';
import styles from './TitleAboutUs.module.scss';

const TitleAboutUs = ({ text }: TitleAboutUsProps) => {

    return (
        <h3 className={styles['title-about-us']}>
            {text}
        </h3>
    )
}

export default TitleAboutUs