import React, { useMemo } from "react";

import styles from "./star-rating.module.css";

function Star({ active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "#db284e" : "#d0d0d0"}
      width="18"
      height="18"
      viewBox="0 0 260 245"
    >
      <path d="m56,237 74-228 74,228L10,96h240" />
    </svg>
  );
}

export default function StarRating({ value, sm }) {
  const stars = useMemo(() => {
    const activeCount = (value * 10 - ((value * 10) % 10)) / 10;
    return [false, false, false, false, false].map((v, idx) => {
      if (idx + 1 <= activeCount) return true;
    });
  }, [value]);

  return (
    <div className={styles.container}>
      {!sm && <span className={styles.rating}>{value}</span>}
      <div className={styles.stars}>
        {stars.map((isActive, id) => (
          <Star key={id} active={isActive} />
        ))}
      </div>
      {!sm && <span>(7)</span>}
    </div>
  );
}
