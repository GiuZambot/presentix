import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLine1}>
        <div className="row">
          <div
            className={`col-md-5 col-sm-5 col-xs-12 text-center-xs ${styles.pageLinks}`}
          >
            <Link href="/sobre">sobre</Link> |{" "}
            <Link href="/suporte">suporte</Link> |{" "}
            <Link href="/contato">contato</Link> |{" "}
            <Link href="/planos">planos</Link>
          </div>
          <div
            className={`col-md-7 col-sm-7 col-xs-12 text-right socialLinks text-center-xs ${styles.socialLinks}`}
          >
            <Link href="#">
              <Image
                src="/imagens/estrutura/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#">
              <Image
                src="/imagens/estrutura/twitter.png"
                alt="Twitter"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#">
              <Image
                src="/imagens/estrutura/plus.png"
                alt="Google Plus"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#">
              <Image
                src="/imagens/estrutura/pintres.png"
                alt="Pinterest"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#">
              <Image
                src="/imagens/estrutura/in.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={`row ${styles.header2}`}>
        <div className="col-md-4 col-sm-4 text-center-xs">
          <Image
            src="/imagens/estrutura/logopresentix.png"
            alt="Presentix"
            width={250}
            height={48}
            priority
          />
        </div>
        <div className={`col-md-4 col-sm-4 padBuscaXS ${styles.padBuscaXS}`}>
          <form action="/busca" className={styles.formBusca}>
            <input
              type="text"
              name="txtBusca"
              placeholder="Busca por"
              className={styles.formBuscaInputText}
            />
            <input type="submit" className={styles.formBuscaInputSubmit} />
          </form>
        </div>
        <div className="col-md-4 col-sm-4 text-right text-center-xs">
          <div className={styles.facaLogin}>
            <Link className={styles.button} href="/cadastro">
              Cadastre-se <strong>Grátis</strong>
            </Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
