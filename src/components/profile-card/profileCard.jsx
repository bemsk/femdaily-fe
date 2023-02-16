import React from "react";

import defaultPicture from "./default-picture.png";

import styles from "./profile-card.module.css";

export default function ProfileCard({ picture, name, status, centered }) {
  return (
    <div className={centered ? styles.containerCentered : styles.container}>
      <img src={defaultPicture} className={styles.picture} />
      <div className={centered ? styles.personCentered : styles.person}>
        <h4>{name}</h4>
        <span>{status}</span>
      </div>
    </div>
  );
}
