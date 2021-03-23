import Head from "next/head";
import styles from "../styles/Home.module.css";

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Editor | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>My Editor</h3>

        <SunEditor setOptions={{
          height: 200,
          buttonList: buttonList.complex
        }} lang="en" name="my-editor" placeholder="Start typing here ..." autoFocus={true} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
