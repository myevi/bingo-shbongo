import styles from './Cell.module.css';

export default (({cell}) => {
    return (
        <div className={styles.cell} key={cell.index}>
            {cell.text}
        </div>
    );
});