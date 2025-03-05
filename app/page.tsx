"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import FileTree from "./components/FileTree/FileTree";

export default function Home() {
  const [perc, setPerc] = useState(50);

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Amazon FE Challenges</h1>
        <hr />
      </div>

      <div className={styles.pBarMainContainer}>
        <h2>Percentage bar</h2>
        <div className={styles.pOuterBar}>
          <div className={styles.pInnerBar} style={{ width: `${perc}%` }}></div>
        </div>
        <input
          type="number"
          value={perc}
          onChange={(e) => {
            setPerc(e.target.value);
          }}
        />
        <span>Percentage ({perc})</span>
      </div>
      <h2>File Tree UI</h2>
      <FileTree />
    </div>
  );
}
