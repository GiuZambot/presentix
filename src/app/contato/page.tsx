import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Contato() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="pageTitle">Contato</h2>
            <p className="conteudoInternoP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              varius tellus at tortor vulputate convallis ac ac est. In maximus
              vehicula nibh, consequat commodo tortor dignissim nec. In hac
              habitasse platea dictumst. Pellentesque consectetur iaculis
              viverra. In interdum odio elit, vel fringilla elit viverra in.
              Cras eget mattis nisi, at iaculis mi. Nam efficitur dapibus elit.
              Fusce et fermentum eros, in tempus dui. Donec efficitur nec metus
              vel aliquam. Nullam rutrum nibh at ante porttitor, ac condimentum
              eros aliquet. Fusce vulputate quam a erat imperdiet vehicula.
            </p>
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-12">&nbsp;</div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <form className={`${styles.boxCase} ${styles.form}`}>
                  <h3 className={styles.boxCaseTitle}>
                    Entre em contato conosco
                  </h3>
                  <label className={styles.formLabel}>
                    Seu nome:
                    <input
                      type="text"
                      name=""
                      id=""
                      required
                      className={styles.formInputText}
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Seu e-mail:
                    <input
                      type="email"
                      name=""
                      id=""
                      required
                      className={styles.formInputEmail}
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Assunto:
                    <input
                      type="text"
                      name=""
                      id=""
                      required
                      className={styles.formInputText}
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Mensagem:
                    <textarea
                      required
                      className={styles.formTextarea}
                    ></textarea>
                  </label>
                  <div className="text-right">
                    <button type="submit">Enviar mensagem</button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
