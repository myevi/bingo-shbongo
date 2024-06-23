import styles from './Grid.module.css';
import React, { useState } from "react";

import Cell from './Cell/Cell';
import React from 'react';

export default (() => {
    const [bingo, setBingo] = useState([
        [
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
        ],
        [
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
        ],
        [
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
        ],
        [
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
        ],
        [
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
            { text: 'Click to edit', },
        ],
    ]);

    return (
        <>
            {bingo.map((row, rowIndex) => {
                return (
                    <div className={styles.row} key={rowIndex}>
                        {row.map((cell, indexCell) => {
                             return <Cell
                                cell={cell} />
                        })}
                    </div>
                )
            })}
        </>
    );
})