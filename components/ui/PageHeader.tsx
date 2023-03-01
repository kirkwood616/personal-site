import styles from "styles/ui/PageHeader.module.css";

interface PageHeaderProps {
  headerText: string;
}

export default function PageHeader({ headerText }: PageHeaderProps) {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_text}>
        <h1>{headerText}</h1>
      </div>
      <div className={styles.header_bar}></div>
      <div className={styles.header_bar}></div>
      <div className={styles.header_bar}></div>
      <div className={styles.header_bar}></div>
      <div className={styles.header_bar}></div>
      <div className={styles.header_bar}></div>
    </div>
  );
}
