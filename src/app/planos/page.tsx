import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Planos() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="pageTitle">Planos</h2>
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
            <div className={`row ${styles.tabelaPlanos}`}>
              <div className="col-sm-3 col-xs-12">
                <div className={styles.colunaPlano}>
                  <div className={styles.nomePlano}>Free</div>
                  <div className={styles.precoPlano}>
                    <span className={styles.cifra}>R$</span>
                    <span className={styles.precoCheio}>0,</span>
                    <span className={styles.cents}>00</span>
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.getNow}>
                    <Link className="button" href="/cadastro">
                      Cadastre-se <strong>Grátis</strong>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className={`${styles.colunaPlano} ${styles.recomendado}`}>
                  <div className={styles.nomePlano}>Basic</div>
                  <div className={styles.precoPlano}>
                    <span className={styles.cifra}>R$</span>
                    <span className={styles.precoCheio}>0,</span>
                    <span className={styles.cents}>00</span>
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.getNow}>
                    <Link className="button" href="/cadastro">
                      Cadastre-se <strong>basic</strong>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className={styles.colunaPlano}>
                  <div className={styles.nomePlano}>Pro</div>
                  <div className={styles.precoPlano}>
                    <span className={styles.cifra}>R$</span>
                    <span className={styles.precoCheio}>0,</span>
                    <span className={styles.cents}>00</span>
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.getNow}>
                    <Link className="button" href="/cadastro">
                      Cadastre-se <strong>Pro</strong>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className={styles.colunaPlano}>
                  <div className={styles.nomePlano}>Gold</div>
                  <div className={styles.precoPlano}>
                    <span className={styles.cifra}>R$</span>
                    <span className={styles.precoCheio}>0,</span>
                    <span className={styles.cents}>00</span>
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.itemDescription}>
                    <strong>10</strong> apresentações
                  </div>
                  <div className={styles.getNow}>
                    <Link className="button" href="/cadastro">
                      Cadastre-se <strong>Gold</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
