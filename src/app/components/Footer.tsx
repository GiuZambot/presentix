import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`row text-center-xs ${styles.row}`}>
        <span className={styles.copyright}>Copyright 2014</span>
        <Image
          src="/imagens/estrutura/logopresentix.png"
          alt="Presentix"
          width={150}
          height={29}
        />
        <Link href="/sobre">A Presentix</Link>
        <Link href="/suporte">SUPORTE</Link>
        <Link href="/contato">contato</Link>
        <Link href="/planos">planos</Link>
      </div>
    </footer>
  );
}
