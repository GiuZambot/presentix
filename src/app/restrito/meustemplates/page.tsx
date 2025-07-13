import Image from "next/image";
import Link from "next/link";

export default function RestritoMeusTemplates() {
  return (
    <>
      <header>
        <div className="headerLine1">
          <div className="row">
            <div className="col-md-5 col-sm-5  col-xs-12 text-center-xs page-links">
              <Link href="/sobre">sobre</Link> |{" "}
              <Link href="/suporte">suporte</Link> |{" "}
              <Link href="/contato">contato</Link> |{" "}
              <Link href="/planos">planos</Link>
            </div>
            <div className="col-md-7  col-sm-7   col-xs-12 text-right socialLinks text-center-xs">
              <Link href="#">
                <Image
                  src="/imagens/estrutura/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/imagens/estrutura/twitter.png"
                  alt="Twitter"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/imagens/estrutura/plus.png"
                  alt="Google Plus"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/imagens/estrutura/pintres.png"
                  alt="Pinterest"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/imagens/estrutura/in.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="row header2">
          <div className="col-md-4 col-sm-4  text-center-xs">
            <Link href="/">
              <Image
                src="/imagens/estrutura/logopresentix.png"
                alt="Presentix"
                width={250}
                height={48}
              />
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 padBuscaXS">
            <form action="/busca" className="formBusca">
              <input type="text" name="txtBusca" placeholder="Busca por" />
              <input type="submit" className="searchIcon" />
            </form>
          </div>
          <div className="col-md-4 col-sm-4 text-right text-center-xs">
            <div className="facaLogin loged">
              Bem vindo <strong>Daniel Oliveira</strong> |{" "}
              <Link href="/restrito/logout">Logout</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="conteudoInterno">
        <div className="row limite">
          <div className="col-sm-3 col-xs-12 sideBar">
            <div
              className="userFoto"
              style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
            ></div>
            <span className="apde">Bem vindo</span>
            <h3 className="userName">Daniel de Oliveira</h3>
            <ul className="menuSidebar">
              <li>
                <Link href="/restrito/perfil">
                  <span className="icon">
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
                  <span className="icon">
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
                  <span className="icon">
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
                  <span className="icon">
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
                  <span className="icon">
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
                  <span className="icon">
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
                  <span className="icon">
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
            <div className="listaTema">
              <ul className="text-center">
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema01.jpg"
                      alt="Tema 1"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema02.jpg"
                      alt="Tema 2"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema03.jpg"
                      alt="Tema 3"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema04.jpg"
                      alt="Tema 4"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema05.jpg"
                      alt="Tema 5"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema06.jpg"
                      alt="Tema 6"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema07.jpg"
                      alt="Tema 7"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema08.jpg"
                      alt="Tema 8"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
                    <Image
                      src="/imagens/home/tema09.jpg"
                      alt="Tema 9"
                      width={200}
                      height={150}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <span className="titleTema">Finanças</span>
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
      <footer>
        <div className="row text-center-xs">
          <span className="copyright">Copyright 2014</span>
          <Image
            src="/imagens/estrutura/logopresentix.png"
            alt="Presentix"
            width={150}
            height={29}
          />
          <Link href="/sobre">A Presentix</Link>
          <Link href="/suporte">SUPORTE</Link>
          <Link href="/contato">contato</Link>
          <Link href="/planos">planos</Link>
        </div>
      </footer>
    </>
  );
}
