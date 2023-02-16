import React from "react";

import ProfileCard from "../profile-card/profileCard";
import ProductCard from "../product-card/productCard";

import styles from "./editors-choice-card.module.css";

export default function EditorsChoiceCard({ editor, product }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileCardWrapper}>
        <ProfileCard name={editor.name} status={editor.role} />
      </div>

      <ProductCard
        name={product.name}
        rating={product.rating}
        description={product.description}
        image={product.image}
      />
    </div>
  );
}
