import styles from './Footer.module.css'


export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/svg/pestle-mortar.svg" alt="Pestle Logo" className={styles.logo} />
      </footer>
    </>
  )
}
