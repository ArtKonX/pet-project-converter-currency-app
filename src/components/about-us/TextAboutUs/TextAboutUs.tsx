import { TextAboutUsProps } from '@/interfaces/about-us/text-about-us/text-about-us.interface';
import styles from './TextAboutUs.module.scss';

const TextAboutUs = ({text, bolt}: TextAboutUsProps) => {

    return (
        <p className={`${styles['text-about-us']} ${bolt && styles['text-about-us_bolt']}`}>{text}</p>
    )
}

export default TextAboutUs