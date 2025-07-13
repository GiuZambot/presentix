import Image from "next/image";
import Link from "next/link";
import Presentation from "../Presentation";
import apresentacoesStyles from "../apresentacoes/page.module.css"; // Import styles from apresentacoes for shared list
import Footer from "../components/Footer";
import Header from "../components/Header";
import LegacyScriptLoader from "../components/LegacyScriptLoader"; // Import the new script loader component
import styles from "./page.module.css";

export default function Apresentacao() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row">
          <div className="col-xs-12">
            <Presentation />
            <h1 className={styles.presentationTitle}>
              Apresentação Presentix: como obter resultados e impactar em uma
              apresentação
            </h1>
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div
                  className={styles.userFoto}
                  style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
                ></div>
                <span className={styles.pubIn}>Publicado por</span>
                <h3 className={styles.userName}>
                  <Link href="/perfil">Daniel de Oliveira</Link>
                </h3>
              </div>
              <div
                className={`col-sm-8 col-xs-12 text-right text-center-xs ${styles.socialLinks}`}
              >
                <span className={styles.share}>Compartilhe:</span>
                <Link href="#">
                  <Image
                    src="/imagens/estrutura/faceL.png"
                    alt="facebook"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imagens/estrutura/inL.png"
                    alt="Linkedin"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imagens/estrutura/plusL.png"
                    alt="Google Plus"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imagens/estrutura/twitterL.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imagens/estrutura/pintrest.png"
                    alt="Pintrest"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
            <h3 className="pageSubTitle">Veja também:</h3>
            <ul
              id="listApres"
              className={apresentacoesStyles.apresentacoesLista}
            >
              <li>
                <Link href="/apresentacao">
                  <Image
                    src="/imagens/estrutura/playList.png"
                    alt="Play"
                    className={apresentacoesStyles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={apresentacoesStyles.presentationBlock}
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/5b312e7b515ea0a5441e392c025a0fac.png)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
              </li>
              <li>
                <Link href="/apresentacao">
                  <Image
                    src="/imagens/estrutura/playList.png"
                    alt="Play"
                    className={apresentacoesStyles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={apresentacoesStyles.presentationBlock}
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/880fc7b9445722d8f28bbe4915e9157d.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
              </li>
              <li>
                <Link href="/apresentacao">
                  <Image
                    src="/imagens/estrutura/playList.png"
                    alt="Play"
                    className={apresentacoesStyles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={apresentacoesStyles.presentationBlock}
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/ea862beeaf21620ffc67aef1f9efc615.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
              </li>
            </ul>
            <h3 className="pageSubTitle">Comentários:</h3>
            <h3 className="msgAlert">
              Faça login para deixar um comentário.
              <br />
              <br />
              <Link className="button large" href="/cadastro">
                Login
              </Link>
            </h3>
            <div className={styles.boxComent}>
              <form className={styles.commentForm}>
                <div className={styles.comentArea}>
                  <div
                    className={styles.userFoto}
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></div>
                  <p className={styles.comentAreaP}>
                    Olá{" "}
                    <strong className={styles.comentAreaPStrong}>
                      Daniel de Oliveira
                    </strong>{" "}
                    deixe seu comentário:
                  </p>
                  <textarea
                    required
                    className={styles.comentAreaTextarea}
                  ></textarea>
                </div>
                <div className={styles.captchaLine}>
                  <Image
                    src="/imagens/estrutura/captcha.jpg"
                    alt="Captcha"
                    width={100}
                    height={40}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Digite o código de segurança"
                    className={styles.captchaLineInputText}
                  />
                </div>
                <button
                  type="button"
                  className={`large right ${styles.buttonLarge} ${styles.buttonRight}`}
                  style={{ marginTop: "25px" }}
                >
                  Postar Comentário
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
            <div className="alert alert-info" role="alert">
              Esta apresentação ainda não possuí nenhum comentário.
            </div>
            <ul className={styles.listaComentarios}>
              <li>
                <h5 className={styles.listaComentariosH5}>
                  <strong className={styles.listaComentariosH5Strong}>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p className={styles.listaComentariosP}>
                  <span
                    className={styles.userFoto}
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  non feugiat justo. Nullam blandit bibendum aliquam. Nulla
                  elementum dolor nec lectus ultrices dignissim. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Sed porta pharetra sem ac consectetur.
                  Donec cursus tortor magna, at porttitor nulla euismod id.
                  Aliquam interdum ut diam eget luctus. Praesent semper tellus
                  risus, a efficitur lacus sodales in. Phasellus nisl mauris,
                  facilisis id pellentesque non, sollicitudin id ex.
                </p>
              </li>
              <li>
                <h5 className={styles.listaComentariosH5}>
                  <strong className={styles.listaComentariosH5Strong}>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p className={styles.listaComentariosP}>
                  <span
                    className={styles.userFoto}
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  non feugiat justo. Nullam blandit bibendum aliquam. Nulla
                  elementum dolor nec lectus ultrices dignissim. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Sed porta pharetra sem ac consectetur.
                  Donec cursus tortor magna, at porttitor nulla euismod id.
                  Aliquam interdum ut diam eget luctus. Praesent semper tellus
                  risus, a efficitur lacus sodales in. Phasellus nisl mauris,
                  facilisis id pellentesque non, sollicitudin id ex.
                </p>
              </li>
              <li>
                <h5 className={styles.listaComentariosH5}>
                  <strong className={styles.listaComentariosH5Strong}>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p className={styles.listaComentariosP}>
                  <span
                    className={styles.userFoto}
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  non feugiat justo. Nullam blandit bibendum aliquam. Nulla
                  elementum dolor nec lectus ultrices dignissim. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Sed porta pharetra sem ac consectetur.
                  Donec cursus tortor magna, at porttitor nulla euismod id.
                  Aliquam interdum ut diam eget luctus. Praesent semper tellus
                  risus, a efficitur lacus sodales in. Phasellus nisl mauris,
                  facilisis id pellentesque non, sollicitudin id ex.
                </p>
              </li>
              <li>
                <h5 className={styles.listaComentariosH5}>
                  <strong className={styles.listaComentariosH5Strong}>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p className={styles.listaComentariosP}>
                  <span
                    className={styles.userFoto}
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  non feugiat justo. Nullam blandit bibendum aliquam. Nulla
                  elementum dolor nec lectus ultrices dignissim. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Sed porta pharetra sem ac consectetur.
                  Donec cursus tortor magna, at porttitor nulla euismod id.
                  Aliquam interdum ut diam eget luctus. Praesent semper tellus
                  risus, a efficitur lacus sodales in. Phasellus nisl mauris,
                  facilisis id pellentesque non, sollicitudin id ex.
                </p>
              </li>
            </ul>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
      {/* Load legacy scripts using the custom loader component */}
      <LegacyScriptLoader />
    </>
  );
}
