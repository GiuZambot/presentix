import Image from "next/image";
import Link from "next/link";
import Presentation from "../Presentation";

export default function Apresentacao() {
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
        <div className="row">
          <div className="col-xs-12">
            <Presentation />
            <h1 className="presentationTitle">
              Apresentação Presentix: como obter resultados e impactar em uma
              apresentação
            </h1>
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div
                  className="userFoto"
                  style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
                ></div>
                <span className="pubIn">Publicado por</span>
                <h3 className="userName">
                  <Link href="/perfil">Daniel de Oliveira</Link>
                </h3>
              </div>
              <div className="col-sm-8 col-xs-12 text-right text-center-xs socialLinks">
                <span className="share">Compartilhe:</span>
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
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
                    className="play"
                    width={64}
                    height={64}
                  />
                  <span
                    className="presentationBlock"
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
            <div className="boxComent">
              <form className="commentForm">
                <div className="comentArea">
                  <div
                    className="userFoto"
                    style={{
                      backgroundImage: "url(/imagens/usuarios/demo.jpg)",
                    }}
                  ></div>
                  <p>
                    Olá <strong>Daniel de Oliveira</strong> deixe seu
                    comentário:
                  </p>
                  <textarea required></textarea>
                </div>
                <div className="captchaLine">
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
                  />
                </div>
                <button
                  type="button"
                  className="large right"
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
            <ul className="listaComentarios">
              <li>
                <h5>
                  <strong>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p>
                  <span
                    className="userFoto"
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
                <h5>
                  <strong>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p>
                  <span
                    className="userFoto"
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
                <h5>
                  <strong>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p>
                  <span
                    className="userFoto"
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
                <h5>
                  <strong>
                    <Link href="/perfil">Daniel de Oliveira</Link>
                  </strong>{" "}
                  escreveu em 05/09/1993:
                </h5>
                <p>
                  <span
                    className="userFoto"
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
