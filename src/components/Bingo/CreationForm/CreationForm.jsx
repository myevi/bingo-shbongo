import { useState } from 'react';
import styles from './CreationForm.module.css';
import React from 'react';
import removeIcon from '../../../static/icons/ban-svgrepo-com.svg';

export default (() => {
    const [challenge, setChallenge] = useState('');
    const [challangeList, setChallengeList] = useState(['wet']);

    const handleInput = (e) => {
        setChallenge(e.target.value)
    }

    const handleSubmit = () => {
        if (challenge != "") {
            challangeList.push(challenge)
            setChallengeList(challangeList)
            setChallenge('')
        }
    }

    return (
        <div className={styles.container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    onChange={handleInput}
                    value={challenge}
                    type="text" />
                <button
                    className={styles.button}
                    type="submit">
                    add challenge
                </button>
            </form>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    {challangeList.map((challenge, index) => {
                        return (
                            <li
                                className={styles.listElement}
                                key={index}>
                                {challenge}
                                <span>
                                    <img className={styles.removeIcon} src={removeIcon} alt="" />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
})