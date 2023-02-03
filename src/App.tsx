import Header from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Posts />
      </div>
    </>
  );
}

export default App;
