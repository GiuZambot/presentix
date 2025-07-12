import Image from "next/image";
import Link from "next/link";

export default function TemasLista() {
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
            <h2 className="pageTitle">Temas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              varius tellus at tortor vulputate convallis ac ac est. In maximus
              vehicula nibh, consequat commodo tortor dignissim nec. In hac
              habitasse platea dictumst. Pellentesque consectetur iaculis
              viverra. In interdum odio elit, vel fringilla elit viverra in.
              Cras eget mattis nisi, at iaculis mi. Nam efficitur dapibus elit.
              Fusce et fermentum eros, in tempus dui. Donec efficitur nec metus
              vel aliquam. Nullam rutrum nibh at ante porttitor, ac condimentum
              eros aliquet. Fusce vulputate quam a erat imperdiet vehicula.
            </p>
            <h3 className="pageSubTitle">
              Escolha um tema e crie sua apresentação
            </h3>
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
