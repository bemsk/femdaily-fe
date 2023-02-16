import React from "react";

import EditorsChoiceCard from "../editors-choice-card/EditorsChoiceCard";

import styles from "./editors-choice-list.module.css";

export default function EditorsChoiceList({ choices }) {
  return (
    <div className={styles.container}>
      {choices.map(({ id, editor, product }) => (
        <EditorsChoiceCard key={id} editor={editor} product={product} />
      ))}
    </div>
  );
}
