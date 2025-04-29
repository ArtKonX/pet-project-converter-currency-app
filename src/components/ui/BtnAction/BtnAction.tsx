import { BtnActionProps } from '@/interfaces/ui/btn-action/btn-action.interface';
import styles from './BtnAction.module.scss';

const BtnAction = ({ text, nameClass, action }: BtnActionProps) => {

    return (
        <button
            className={styles[nameClass]}
            type={action}>
            {text}
        </button>
    )
}

export default BtnAction