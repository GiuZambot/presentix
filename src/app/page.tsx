import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.css";
import Presentation from "./Presentation";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.conteudo}>
        <Presentation />
        <div className={styles.panel1}>
          <h2 className={styles.panel1H2}>
            EXTREMAMENTE<strong> DINÂMICO</strong>
            <br />
            Incrívelmente <strong>flexivel</strong>
          </h2>
          <p className={styles.panel1P}>
            Apresente ideias e resultados de maneira ainda mais impactante.
          </p>
          <ul className={`row text-center ${styles.panel1Ul}`}>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem01.png"
                alt="Editor fácil de usar"
                width={100}
                height={100}
                priority
              />
              <br />
              Editor fácil de usar
            </li>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem02.png"
                alt="Economize tempo com temas prontos"
                width={100}
                height={100}
              />
              <br />
              Economize tempo com temas prontos
            </li>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem03.png"
                alt="Inúmeras opções gratuítas"
                width={100}
                height={100}
              />
              <br />
              Inúmeras opções gratuítas
            </li>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem04.png"
                alt="Incorpore ao seu site ou blog"
                width={100}
                height={100}
              />
              <br />
              Incorpore ao seu site ou blog
            </li>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem05.png"
                alt="Compatível com qualquer dispositívo"
                width={100}
                height={100}
              />
              <br />
              Compatível com qualquer dispositívo
            </li>
            <li className={`col-md-2 col-xs-6 ${styles.panel1Li}`}>
              <Image
                src="/imagens/home/vantagem06.png"
                alt="Vários temas diferentes"
                width={100}
                height={100}
              />
              <br />
              Vários temas diferentes
            </li>
          </ul>
          <div className={`clearfix text-center ${styles.clearfix}`}>
            <Link
              href="/cadastro"
              className={`button large ${styles.buttonLarge}`}
            >
              CRIE SUA APRSENTAÇÃO grátis AGORA
            </Link>
          </div>
        </div>
        <div className={styles.panel2}>
          <h3 className={styles.panel2H3}>
            Temas para apresentações
            <br />
            coorporativas
          </h3>
          <p className={styles.panel2P}>
            Escolha um tema e demonstre suas ideias, projetos e resultados de
            maneira dinâmica e impactante.
          </p>
          <div className={styles.listaTema}>
            <ul className={`text-center ${styles.listaTemaUl}`}>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema01.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema02.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema03.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema04.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema05.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema06.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema07.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema08.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema09.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li className={styles.listaTemaLi}>
                <span className={styles.titleTema}>Finanças</span>
                <Image
                  src="/imagens/home/tema010.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
            </ul>
          </div>
          <div className={`clearfix text-center ${styles.clearfix}`}>
            <Link
              href="/temaslista"
              className={`button large ${styles.buttonLarge}`}
            >
              + TEMAS CORPORATIVOS
            </Link>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={`panel3 text ${styles.panel3}`}>
            <div className={styles.topPresents}>
              <div className={styles.topNum1}>
                <Image
                  src="/imagens/estrutura/play.png"
                  alt="Play"
                  className={styles.play}
                  width={64}
                  height={64}
                />
                <Image
                  src="/imagens/apresentacoes/top1.jpg"
                  alt="Top 1"
                  className={styles.preview}
                  width={400}
                  height={300}
                />
              </div>
              <ul className={styles.top3}>
                <li className={styles.top3Li}>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className={styles.play}
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top2.jpg"
                    alt="Top 2"
                    className={styles.preview}
                    width={200}
                    height={150}
                  />
                </li>
                <li className={styles.top3Li}>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className={styles.play}
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top3.jpg"
                    alt="Top 3"
                    className={styles.preview}
                    width={200}
                    height={150}
                  />
                </li>
                <li className={styles.top3Li}>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className={styles.play}
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top4.jpg"
                    alt="Top 4"
                    className={styles.preview}
                    width={200}
                    height={150}
                  />
                </li>
              </ul>
            </div>
            <h3 className={`text-center-xs ${styles.panel3H3}`}>
              <strong>TOP</strong>
              APRESENTAÇÕES
            </h3>
            <p className={`text-center-xs ${styles.panel3P}`}>
              Veja as melhores apresentações já feitas e crie também a sua
            </p>
            <div
              className={`clearfix text-left text-center-xs ${styles.clearfix}`}
            >
              <Link
                href="/apresentacoes"
                className={`button large ${styles.buttonLarge}`}
              >
                + APRESENTAÇÕES
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.panel4}></div>
      </div>
      <Footer />
    </>
  );
}
