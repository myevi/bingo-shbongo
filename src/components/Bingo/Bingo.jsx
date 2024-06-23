import styles from './Bingo.module.css';

import Grid from './Grid/Grid';

export default (() => {
    return (
        <div className={styles.container}>
            <div className={styles.bingoGrid}>
                <Grid />
            </div>
        </div>
    );
});