import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./page.module.css";

export default function RestritoLogout() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row limite">
          <div className="col-xs-12">
            <br />
            <h3 className={styles.msgAlert}>Sessão encerrada</h3>
            <br />
            <br />
            <Image
              src="/imagens/estrutura/logout.jpg"
              alt="Comunicado logout"
              width={800}
              height={400}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
