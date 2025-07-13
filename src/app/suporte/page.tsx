import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Suporte() {
  return (
    <>
      <Header />
      <div className={`conteudoInterno ${styles.conteudoInterno}`}>
        <div className={`row ${styles.paddRow}`}>
          <div className="col-xs-12">Suporte</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
