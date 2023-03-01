import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Kirkwood</title>
        <meta name="description" content="Official website of Mark Kirkwood" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scaleable=yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}></div>
    </>
  );
}
