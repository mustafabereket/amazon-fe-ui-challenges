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

  const [player, setPlayer] = useState(false);
  const [msg, setMsg] = useState("Player 1");

  useEffect(() => {
    setMsg(player ? "Player 2" : "Player 1");
    if (ifWinner()) {
      setMsg(msg + " GAVE OVER!!");
    }
  }, [board]);

  const ifWinner = () => {
    console.log("Boards", board);
    for (let i = 0; i < board.length; i++) {
      const temp = board[i].join("");
      if (temp.includes("XXX") || temp.includes("OOO")) {
        return true;
      }
    }
    for (let i = 0; i < board.length; i++) {
      let temp = "";
      for (let j = 0; j < board.length; j++) {
        temp += board[j][i];
      }
      if (temp.includes("XXX") || temp.includes("OOO")) {
        return true;
      }
    }
  };

  const handleClick = (row, index) => {
    const temp = [...board];

    if (player) {
      temp[row][index] = "X";
    } else {
      temp[row][index] = "O";
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
