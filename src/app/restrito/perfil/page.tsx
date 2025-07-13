import Image from "next/image";
import Link from "next/link";

export default function RestritoPerfil() {
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
            <div className="facaLogin">
              <Link className="button" href="/cadastro">
                Cadastre-se <strong>Grátis</strong>
              </Link>
              <Link href="/login">Login</Link>
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
            <h2>Meu perfil</h2>
            <div className="breadcrumb">
              <Link href="/perfil">Início</Link> &raquo; <span>Meu perfil</span>
            </div>
            <form className="form" action="/perfil">
              <h4 className="formSection">Dados pessoais:</h4>
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <label>
                    Nome:
                    <input type="text" required defaultValue="Daniel" />
                  </label>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <label>
                    Sobrenome:
                    <input type="text" required defaultValue="de Oliveira" />
                  </label>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <label>
                    Data de nascimento:
                    <input type="date" required defaultValue="1988-09-21" />
                  </label>
                </div>
              </div>
              <h4 className="formSection">Dados de acesso:</h4>
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <label>
                    E-mail:
                    <input
                      type="text"
                      required
                      defaultValue="presentix@presentix.com.br"
                    />
                  </label>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <label>
                    Senha:
                    <input type="password" />
                  </label>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <label>
                    Confirme a senha:
                    <input type="password" />
                  </label>
                </div>
              </div>
              <h4 className="formSection">Perfil:</h4>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div
                    className="userFoto"
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></div>
                  <label>
                    <br />
                    Foto:
                    <input type="file" />
                  </label>
                </div>
              </div>
              <h4 className="formSection">Redes sociais:</h4>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <label>
                    Facebook:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <label>
                    Linkedin:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <label>
                    Google plus:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <label>
                    Twitter:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <label>
                    Pintrest:
                    <input type="text" />
                  </label>
                </div>
              </div>
              <h4 className="formSection">Perfil:</h4>
              <div className="row">
                <div className="col-xs-12">
                  <label>
                    Descrição:
                    <textarea defaultValue="Descrição do perfil"></textarea>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <button type="submit" className="right large">
                    Salvar e visualizar perfil
                  </button>
                </div>
              </div>
              <br />
              <br />
            </form>
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
