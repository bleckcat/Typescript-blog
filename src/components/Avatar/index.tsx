import React from "react";

import styles from "./Avatar.module.css";

interface Props {
  src: string;
  border?: boolean;
}

const Avatar: React.FC<Props> = ({ src, border }): JSX.Element => {
  return (
    <>
      <img
        src={src}
        alt="Profile-picture"
        className={`${styles.avatar} ${border && styles.border}`}
      />
    </>
  );
};

export default Avatar;
