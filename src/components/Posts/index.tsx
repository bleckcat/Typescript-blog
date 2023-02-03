import React from "react";

import styles from "./Posts.module.css";

const Posts: React.FC = (): JSX.Element => {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/bleckcat.png" alt="Profile-picture" />
          <div className={styles.authorInfo}>
            <strong>Juan Vitor</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="03 de fevereiro de 2023" dateTime="2023-02-03 17:34:00">
          publicado há 1hr
        </time>
      </header>
      <div className={styles.content}>
        <p>
          que dia lindo que é para se viver hoje, tudo dando certo, fiz
          academia, voltei a estudar, tomei um pouco de Sol, comecei a fazer
          skin care de novo e vou me casar, olha que lindo
        </p>
        <p>
          <a href="">Acessa meu github</a>
        </p>
        <p>
          <a href="">#mohSono</a>
        </p>
      </div>
    </article>
  );
};

export default Posts;