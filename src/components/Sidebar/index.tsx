import { PencilLine } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1529089202281-2180f7a2289c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Side-bar-background"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/bleckcat.png" border />
        <strong>Juan Vitor</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
