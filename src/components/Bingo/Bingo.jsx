import { useLocation } from 'react-router-dom';
import styles from './Bingo.module.css';

import Grid from './Grid/Grid';
import CreationForm from './CreationForm/CreationForm'

export default (() => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            {location.pathname == "/bingo" && <Grid />}
            {location.pathname == "/bingo/create" && <CreationForm />}
        </div>
    );
});