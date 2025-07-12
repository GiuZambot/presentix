import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
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
        <div className="row paddRow">
          <div className="col-md-6 col-sm-7 col-xs-12 text-center-sm text-center-xs">
            <Image
              src="/imagens/estrutura/phones.png"
              alt="Phones"
              className="flexImage"
              width={500}
              height={500}
            />
          </div>
          <div className="col-md-6 col-sm-5 col-xs-12">
            <h2
              className="titleSec text-center-sm text-center-xs"
              style={{ marginTop: "85px" }}
            >
              APRESENTAÇÕES
              <br />
              <strong>DINÂMICAS</strong>
              <br />
              Incrívelmente
              <br />
              <strong>flexiveIS</strong>
            </h2>
            <p className=" text-center-sm text-center-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
          </div>
        </div>
        <div className="row paddRow" style={{ paddingTop: 0 }}>
          <div className="col-md-8 col-sm-6 col-xs-12  text-center-sm text-center-xs">
            <h3 className="text-right titleSec  text-center-sm text-center-xs">
              CRIE UMA APRESENTAÇÃO
              <br />
              <strong>GRATUITAMENTE</strong>
            </h3>
            <p className="text-right  text-center-sm text-center-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Image
              src="/imagens/estrutura/icon.png"
              alt="Icon"
              style={{ margin: "35px auto 0", display: "block" }}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="sobreFinal paddRow">
          <div className="row">
            <h3 className="text-center-sm text-center-xs">
              APRESENTE
              <br />
              EM QUALQUER DISPOSITIVO
            </h3>
            <p className=" text-center-sm text-center-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis magna id lectus sagittis luctus. Vivamus tincidunt enim
              sit amet est facilisis, vitae congue ipsum tristique. Cras eu
              mollis purus. In ex ligula, fermentum a bibendum id, mattis quis
              quam. Aliquam dictum interdum turpis, et maximus ipsum luctus in.
              Integer blandit pulvinar felis non commodo. Morbi at tortor
              pharetra, elementum odio et, luctus dolor. Curabitur euismod porta
              suscipit. Pellentesque hendrerit in nibh sed porttitor. Duis
              interdum elementum lacus sed lobortis. Aliquam porttitor mi quis
              orci luctus mattis.
            </p>
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
