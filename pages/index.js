import Head from "next/head";
import styles from "../styles/Home.module.css";

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useState } from "react";

export default function Home() {
  const [displayContent, setDisplayContent] = useState('<h2>Content will go here</h2>')

  const handleChange = (contents) => {
    setDisplayContent(contents)
  }
  const handleScroll = (contents) => {
    console.log('scrolling...')
  }

  const handleClick = event => {
    console.log(event)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Editor | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>My Editor</h3>
        <div>
          <div dangerouslySetInnerHTML={{ __html: displayContent }}></div>
        </div>

        <SunEditor
          setOptions={{
            height: 200,
            buttonList: buttonList.complex
          }} lang="en" name="my-editor" placeholder="Start typing here ..." autoFocus={true} setContents="My contents"
          // enable={true}
          // disable={true}
          // hide={true}
          // show={true} //default
          // showToolbar={false}
          // enableToolbar={false}

          onChange={e => handleChange(e)}
          onScroll={e => handleScroll(e)}
          onClick={e => handleClick(e)} // On clicking inside the editor not the toolbar or outside

        />
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
