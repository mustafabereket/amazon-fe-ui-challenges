"use client";

import React, { useState } from "react";
import styles from "./FileTree.module.css";

const tree = {
  name: "root",
  type: "directory",
  children: [
    {
      name: "documents",
      type: "directory",
      children: [
        {
          name: "report.txt",
          type: "file",
          content: "This is a sample report.",
        },
        {
          name: "presentation.pptx",
          type: "file",
          content: "PowerPoint presentation data.",
        },
        {
          name: "projects",
          type: "directory",
          children: [
            {
              name: "project1.js",
              type: "file",
              content: "console.log('Project 1 code');",
            },
            {
              name: "project2.html",
              type: "file",
              content: "<html><body>Project 2</body></html>",
            },
          ],
        },
      ],
    },
    {
      name: "images",
      type: "directory",
      children: [
        {
          name: "photo1.jpg",
          type: "file",
          content: "Binary image data.",
        },
        {
          name: "icons",
          type: "directory",
          children: [
            {
              name: "app_icon.png",
              type: "file",
              content: "Binary icon data.",
            },
          ],
        },
      ],
    },
    {
      name: "config.json",
      type: "file",
      content: '{"settings": {"theme": "dark", "notifications": true}}',
    },
    {
      name: "scripts",
      type: "directory",
      children: [
        {
          name: "utils.py",
          type: "file",
          content: "def utility_function():\n    return 'Utility'",
        },
        {
          name: "run.sh",
          type: "file",
          content: "#!/bin/bash\necho 'Running script'",
        },
      ],
    },
  ],
};

const Branch = ({ nodes }) => {
  const [showChild, setShowChild] = useState(false);
  const renderLeaves = (leaves) => {
    return (
      <div>
        {leaves.map((item) => {
          if (item.type === "directory") {
            return <Branch nodes={item} />;
          }
          if (item.type === "file") {
            return <div className={styles.subDirectory}>{item.name}</div>;
          }
        })}
      </div>
    );
  };

  return (
    <div className={styles.leaf}>
      <div
        onClick={() => {
          setShowChild(!showChild);
        }}
        style={{ cursor: nodes.type === "directory" ? "pointer" : "default" }}
      >
        {nodes.children && showChild ? <span> - </span> : <span> + </span>}
        {nodes.name}{" "}
      </div>
      <div>
        {showChild && nodes.children ? renderLeaves(nodes.children) : null}
      </div>
    </div>
  );
};

const FileTree = () => {
  return (
    <div className={styles.mainContainer}>
      <Branch nodes={tree} />
    </div>
  );
};

export default FileTree;
