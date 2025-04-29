import styles from './Message.module.scss';

const Message = ({ text }: { text: string }) => {
    return (
        <div className={styles['message']}>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Message