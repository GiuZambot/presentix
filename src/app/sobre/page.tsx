import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className={`row ${styles.paddRow}`}>
          <div className="col-md-6 col-sm-7 col-xs-12 text-center-sm text-center-xs">
            <Image
              src="/imagens/estrutura/phones.png"
              alt="Phones"
              className={styles.flexImage}
              width={500}
              height={500}
            />
          </div>
          <div className="col-md-6 col-sm-5 col-xs-12">
            <h2
              className={`titleSec text-center-sm text-center-xs ${styles.titleSec}`}
              style={{ marginTop: "85px" }}
            >
              APRESENTAÇÕES
              <br />
              <strong className={styles.titleSecStrong}>DINÂMICAS</strong>
              <br />
              Incrívelmente
              <br />
              <strong className={styles.titleSecStrong}>flexiveIS</strong>
            </h2>
            <p
              className={`text-center-sm text-center-xs ${styles.conteudoInternoP}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
          </div>
        </div>
        <div className={`row ${styles.paddRow}`} style={{ paddingTop: 0 }}>
          <div className="col-md-8 col-sm-6 col-xs-12  text-center-sm text-center-xs">
            <h3
              className={`text-right titleSec  text-center-sm text-center-xs ${styles.titleSec}`}
            >
              CRIE UMA APRESENTAÇÃO
              <br />
              <strong className={styles.titleSecStrong}>GRATUITAMENTE</strong>
            </h3>
            <p
              className={`text-right  text-center-sm text-center-xs ${styles.conteudoInternoP} ${styles.conteudoInternoPTextRight}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Image
              src="/imagens/estrutura/icon.png"
              alt="Icon"
              style={{ margin: "35px auto 0", display: "block" }}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className={styles.sobreFinal}>
          <div className="row">
            <h3
              className={`text-center-sm text-center-xs ${styles.sobreFinalH3}`}
            >
              APRESENTE
              <br />
              EM QUALQUER DISPOSITIVO
            </h3>
            <p
              className={`text-center-sm text-center-xs ${styles.sobreFinalP}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
