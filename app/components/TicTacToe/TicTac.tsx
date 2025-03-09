"use client";

import React from "react";
import styles from "./TicTac.module.css";
import { useState, useEffect } from "react";

const TicTac = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const ifWinner = (board1) => {
    console.log("Boards", board1);
    for (let i = 0; i < board1.length; i++) {
      const temp = board1[i].join("");
      if (temp.includes("XXX" || "OOO")) {
        return true;
      }
    }
    for (let i = 0; i < board1.length; i++) {
      let temp = "";
      for (let j = 0; j < board1.length; j++) {
        temp += board1[j][i];
      }
      if (temp.includes("XXX" || "OOO")) {
        return true;
      }
    }
  };
  const [player, setPlayer] = useState(false);
  const [msg, setMsg] = useState("Player 1");

  const handleClick = (row, index) => {
    const temp = [...board];

    if (player) {
      temp[row][index] = "X";
    } else {
      temp[row][index] = "O";
    }

    if (ifWinner(temp)) {
      setMsg("Game over");
    }

    setBoard(temp);
    setPlayer(!player);
  };

  return (
    <div className={styles.mainContainer}>
      <h4>{msg}</h4>
      <div className={styles.gameGrid}>
        {board.map((block, row) => {
          return block.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.block}
                onClick={() => {
                  handleClick(row, index);
                }}
              >
                {item}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default TicTac;
