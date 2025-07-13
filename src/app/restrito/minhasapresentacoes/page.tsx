import Image from "next/image";
import Link from "next/link";
import apresentacoesStyles from "../../apresentacoes/page.module.css"; // Reusing apresentacoes styles for shared list
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import sidebarStyles from "../biblioteca/page.module.css"; // Reusing sidebar styles
import styles from "./page.module.css";

export default function RestritoMinhasApresentacoes() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row limite">
          <div className={`col-sm-3 col-xs-12 ${sidebarStyles.sideBar}`}>
            <div
              className={sidebarStyles.userFoto}
              style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
            ></div>
            <span className={sidebarStyles.apde}>Bem vindo</span>
            <h3 className={sidebarStyles.userName}>Daniel de Oliveira</h3>
            <ul className={sidebarStyles.menuSidebar}>
              <li>
                <Link href="/restrito/perfil">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-perfil.png"
                      alt="Meu perfil"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Meu perfil
                </Link>
              </li>
              <li>
                <Link href="/restrito/minhasapresentacoes">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-present.png"
                      alt="Minhas apresentações"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Minhas apresentações
                </Link>
              </li>
              <li>
                <Link href="/restrito/meustemplates">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-template.png"
                      alt="Meus templates"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Meus templates
                </Link>
              </li>
              <li>
                <Link href="/restrito/compartilhadas">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-shared.png"
                      alt="Compartilhadas comigo"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Compartilhadas comigo
                </Link>
              </li>
              <li>
                <Link href="/restrito/biblioteca">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/icon-lib.png"
                      alt="Bibliotecas"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Bibliotecas
                </Link>
              </li>
              <li>
                <Link href="/restrito/estatisticas">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-estatistica.png"
                      alt="Estatísticas"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Estatísticas
                </Link>
              </li>
              <li>
                <Link href="/restrito/logout">
                  <span className={sidebarStyles.icon}>
                    <Image
                      src="/imagens/estrutura/ico-sair.png"
                      alt="Sair"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Sair
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 col-xs-12 boxCaseGrid">
            <h2>Minhas Apresentações</h2>
            <div className="breadcrumb">
              <Link href="/perfil">Início</Link> &raquo;{" "}
              <span>Minhas apresentações</span>
            </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
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
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className={styles.optionsPress}>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniPress.png"
                      alt="Ver apresentação"
                      title="Ver apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="/restrito/apresentacao">
                    <Image
                      src="/imagens/estrutura/miniEdit.png"
                      alt="Editar apresentação"
                      title="Editar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniShare.png"
                      alt="Compartilhar apresentação"
                      title="Compartilhar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniEstatisticas.png"
                      alt="Estatísticas da apresentação"
                      title="Estatísticas da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniSettings.png"
                      alt="Opções da apresentação"
                      title="Opções da apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imagens/estrutura/miniDelet.png"
                      alt="Apagar apresentação"
                      title="Apagar apresentação"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <ul className="pagination">
                <li>
                  <Link href="#">&laquo;</Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>
                <li>
                  <Link href="#">5</Link>
                </li>
                <li>
                  <Link href="#">&raquo;</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
