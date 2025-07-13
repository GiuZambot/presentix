import Image from "next/image";
import Link from "next/link";

export default function RestritoMinhasApresentacoes() {
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
            <h2>Minhas Apresentações</h2>
            <div className="breadcrumb">
              <Link href="/perfil">Início</Link> &raquo;{" "}
              <span>Minhas apresentações</span>
            </div>
            <ul id="listApres" className="apresentacoesLista">
              <li>
                <Link href="/apresentacao">
                  <Image
                    src="/imagens/estrutura/playList.png"
                    alt="Play"
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
                    style={{
                      backgroundImage:
                        "url(/imagens/apresentacoes/8459fa9c7f0bd658a11b44654ddae53c.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
                <div className="optionsPress">
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
