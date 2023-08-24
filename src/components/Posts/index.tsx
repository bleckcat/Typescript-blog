import React from "react";
import Avatar from "../Avatar";

import Comment from "../Comment";

import styles from "./Posts.module.css";

const Posts: React.FC = (): JSX.Element => {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/bleckcat.png" border />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
          massa eu odio interdum, sed finibus nibh efficitur. Duis nec nisl eget
          dolor feugiat facilisis. Aenean elit risus, malesuada sit amet
          ultrices vitae, semper rhoncus lorem. Etiam nec varius ligula, id
          maximus nibh. Vivamus scelerisque tempus tempus. Nullam vitae
          fermentum nibh, vel pellentesque dolor. Nulla sit amet nisi et mi
          ultrices mattis. Nullam lobortis rutrum iaculis. In volutpat lectus
          quis ultricies condimentum. Maecenas ut laoreet nulla, at gravida
          felis. Suspendisse et justo sagittis, semper felis sit amet, ultrices
          tellus. Nullam sodales mauris risus, vitae porta mi dignissim sed.
          Fusce dictum augue feugiat sapien aliquam euismod. Aliquam erat
          volutpat.
        </p>
        <p>
          <a href="https://github.com/bleckcat" target="_blank">
            Acessa meu github
          </a>
        </p>
        <p className={styles.hashtags}>
          <a href="https://github.com/bleckcat" target="_blank">
            #LoremIpsum
          </a>
          <a href="https://github.com/bleckcat" target="_blank">
            #Feugiat
          </a>
          <a href="https://github.com/bleckcat" target="_blank">
            #Sapien
          </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
};

export default Posts;
