import styles from './Cell.module.css';

export default (({data, index}) => {
    return (
        <div className={styles.cell} key={index}>
            {data.text}
        </div>
    );
});