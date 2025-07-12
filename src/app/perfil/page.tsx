import Image from "next/image";
import Link from "next/link";
import Presentation from "../Presentation";

export default function Perfil() {
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
            <div className="row topProfileBox">
              <div className="col-sm-3 col-xs-12 text-center profileInfo">
                <div
                  className="userFoto"
                  style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
                ></div>
                <span className="apde">Apresentações de</span>
                <h3 className="userName">Daniel de Oliveira</h3>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  blandit lorem nisi, eget egestas risus volutpat in. Morbi et
                  sapien est. In sed leo pellentesque, rhoncus eros tristique,
                  cursus risus. Duis sit amet sem sit amet quam sodales pretium
                  tincidunt et urna.{" "}
                </p>
              </div>
              <div className="col-sm-9 col-xs-12">
                <Presentation />
              </div>
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
                        "url(/imagens/apresentacoes/44febb07d7fdd43d484596bdd1bebd8d.jpg)",
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
                        "url(/imagens/apresentacoes/ca79df8b7815198c0e7dd132e69c46d9.jpg)",
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
                        "url(/imagens/apresentacoes/fa9b639ee4a106c0b1fb56babc348e50.gif)",
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
                        "url(/imagens/apresentacoes/44febb07d7fdd43d484596bdd1bebd8d.jpg)",
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
                        "url(/imagens/apresentacoes/ca79df8b7815198c0e7dd132e69c46d9.jpg)",
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
                        "url(/imagens/apresentacoes/fa9b639ee4a106c0b1fb56babc348e50.gif)",
                    }}
                  ></span>
                  <h3>4° Simpósio de selos da Bahia</h3>
                </Link>
              </li>
            </ul>
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
