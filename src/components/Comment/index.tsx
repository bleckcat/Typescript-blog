import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar";

import styles from "./Comment.module.css";

const Comment: React.FC = (): JSX.Element => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/bleckcat.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Juan Vitor</strong>

              <time
                title="03 de fevereiro de 2023"
                dateTime="2023-02-03 17:34:00"
              >
                publicado há 1hr
              </time>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </header>
          <p>Hora de dormir até dps da uma da tarde 💥💢 sabadou!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Dar joínha <span>15</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
