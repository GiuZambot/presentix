import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import pageStyles from "../../page.module.css"; // Reusing page styles for listaTema
import sidebarStyles from "../biblioteca/page.module.css"; // Reusing sidebar styles

export default function RestritoMeusTemplates() {
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
            <h2>Meus templates</h2>
            <div className="breadcrumb">
              <Link href="/perfil">Início</Link> &raquo;{" "}
              <span>Meus templates</span>
            </div>
            <div className={pageStyles.listaTema}>
              <ul className={`text-center ${pageStyles.listaTemaUl}`}>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema01.jpg"
                      alt="Tema 1"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema02.jpg"
                      alt="Tema 2"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema03.jpg"
                      alt="Tema 3"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema04.jpg"
                      alt="Tema 4"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema05.jpg"
                      alt="Tema 5"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema06.jpg"
                      alt="Tema 6"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema07.jpg"
                      alt="Tema 7"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema08.jpg"
                      alt="Tema 8"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema09.jpg"
                      alt="Tema 9"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li className={pageStyles.listaTemaLi}>
                  <Link href="/login">
                    <span className={pageStyles.titleTema}>Finanças</span>
                    <Image
                      src="/imagens/home/tema010.jpg"
                      alt="Tema 10"
                      width={200}
                      height={150}
                    />
                  </Link>
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
