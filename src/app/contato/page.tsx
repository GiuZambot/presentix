import Image from "next/image";
import Link from "next/link";

export default function Contato() {
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
            <h2 className="pageTitle">Contato</h2>
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
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-12">&nbsp;</div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <form className="boxCase form">
                  <h3 className="boxCaseTitle">Entre em contato conosco</h3>
                  <label>
                    Seu nome:
                    <input type="text" name="" id="" required />
                  </label>
                  <label>
                    Seu e-mail:
                    <input type="email" name="" id="" required />
                  </label>
                  <label>
                    Assunto:
                    <input type="text" name="" id="" required />
                  </label>
                  <label>
                    Mensagem:
                    <textarea required></textarea>
                  </label>
                  <div className="text-right">
                    <button type="submit">Enviar mensagem</button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12">&nbsp;</div>
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
