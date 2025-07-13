import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactStyles from "../contato/page.module.css"; // Reusing contact form styles
import styles from "./page.module.css";

export default function EsqueciSenha() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row limite">
          <div className="col-xs-12">
            <form className={`${contactStyles.boxCase} ${contactStyles.form}`}>
              <h3 className={contactStyles.boxCaseTitle}>Recuperar senha</h3>
              <div className={styles.logForm}>
                <div className="alert alert-danger" role="alert">
                  Mensagem de erro no login.
                </div>
                <label className={contactStyles.formLabel}>
                  E-mail:
                  <input
                    type="text"
                    required
                    className={contactStyles.formInputText}
                  />
                </label>
                <button type="submit" className="right large button large">
                  Recuperar senha
                </button>
                <div className="clearfix"></div>
              </div>
              <div className={styles.cadastraLogin}>
                <h3>Não tem uma conta?</h3>
                <Link href="/cadastro" className="button large">
                  Cadastre-se
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
