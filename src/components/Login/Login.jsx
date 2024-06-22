import styles from './Login.module.css';

import Header from './Header/Header';
import Form from './Form/Form';


export default (() => {

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <Header />
                <Form  />
            </div>
        </div>
    );
})