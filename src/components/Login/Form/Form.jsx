import styles from './Form.module.css';

export default (() => {
    return (
        <form className={styles.block}>
            <div>
                <label for="login"></label>
                <input className={styles.field} id="login" type="text" placeholder="login or email"/>
            </div>
            <div>
                <label for="password"></label>
                <input className={styles.field} id="password" type="password" placeholder="password" />
            </div>
            <div>
                <button className={styles.submit} type="button">SignIN/SignUP</button>
            </div>
        </form>
    );
});