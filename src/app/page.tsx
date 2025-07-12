import Image from "next/image";
import Link from "next/link";
import Presentation from "./Presentation";

export default function Home() {
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
            <Image
              src="/imagens/estrutura/logopresentix.png"
              alt="Presentix"
              width={250}
              height={48}
            />
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
      <div className="conteudo">
        <Presentation />
        <div>
          <div className="panel1">
            <h2>
              EXTREMAMENTE<strong> DINÂMICO</strong>
              <br />
              Incrívelmente <strong>flexivel</strong>
            </h2>
            <p>
              Apresente ideias e resultados de maneira ainda mais impactante.
            </p>
            <ul className="row text-center">
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem01.png"
                  alt="Editor fácil de usar"
                  width={100}
                  height={100}
                />
                <br />
                Editor fácil de usar
              </li>
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem02.png"
                  alt="Economize tempo com temas prontos"
                  width={100}
                  height={100}
                />
                <br />
                Economize tempo com temas prontos
              </li>
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem03.png"
                  alt="Inúmeras opções gratuítas"
                  width={100}
                  height={100}
                />
                <br />
                Inúmeras opções gratuítas
              </li>
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem04.png"
                  alt="Incorpore ao seu site ou blog"
                  width={100}
                  height={100}
                />
                <br />
                Incorpore ao seu site ou blog
              </li>
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem05.png"
                  alt="Compatível com qualquer dispositívo"
                  width={100}
                  height={100}
                />
                <br />
                Compatível com qualquer dispositívo
              </li>
              <li className="col-md-2 col-xs-6">
                <Image
                  src="/imagens/home/vantagem06.png"
                  alt="Vários temas diferentes"
                  width={100}
                  height={100}
                />
                <br />
                Vários temas diferentes
              </li>
            </ul>
            <div className="clearfix text-center">
              <Link href="/cadastro" className="button large">
                CRIE SUA APRSENTAÇÃO grátis AGORA
              </Link>
            </div>
          </div>
        </div>
        <div className="panel2">
          <h3>
            Temas para apresentações
            <br />
            coorporativas
          </h3>
          <p>
            Escolha um tema e demonstre suas ideias, projetos e resultados de
            maneira dinâmica e impactante.
          </p>
          <div className="listaTema">
            <ul className="text-center">
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema01.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema02.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema03.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema04.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema05.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema06.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema07.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema08.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema09.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
              <li>
                <span className="titleTema">Finanças</span>
                <Image
                  src="/imagens/home/tema010.jpg"
                  alt="Tema Finanças"
                  width={200}
                  height={150}
                />
              </li>
            </ul>
          </div>
          <div className="clearfix text-center">
            <Link href="/temaslista" className="button large">
              + TEMAS CORPORATIVOS
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="panel3 text">
            <div className="topPresents">
              <div className="topNum1">
                <Image
                  src="/imagens/estrutura/play.png"
                  alt="Play"
                  className="play"
                  width={64}
                  height={64}
                />
                <Image
                  src="/imagens/apresentacoes/top1.jpg"
                  alt="Top 1"
                  className="preview"
                  width={400}
                  height={300}
                />
              </div>
              <ul className="top3">
                <li>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className="play"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top2.jpg"
                    alt="Top 2"
                    className="preview"
                    width={200}
                    height={150}
                  />
                </li>
                <li>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className="play"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top3.jpg"
                    alt="Top 3"
                    className="preview"
                    width={200}
                    height={150}
                  />
                </li>
                <li>
                  <Image
                    src="/imagens/estrutura/play.png"
                    alt="Play"
                    className="play"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/imagens/apresentacoes/top4.jpg"
                    alt="Top 4"
                    className="preview"
                    width={200}
                    height={150}
                  />
                </li>
              </ul>
            </div>
            <h3 className="text-center-xs">
              <strong>TOP</strong>
              APRESENTAÇÕES
            </h3>
            <p className="text-center-xs">
              Veja as melhores apresentações já feitas e crie também a sua
            </p>
            <div className="clearfix text-left text-center-xs">
              <Link href="/apresentacoes" className="button large">
                + APRESENTAÇÕES
              </Link>
            </div>
          </div>
        </div>
        <div className="panel4"></div>
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
