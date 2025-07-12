"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Cadastro() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/site.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <div className="col-xs-12">
            <form
              className="boxCase form"
              action="/restrito/minhasapresentacoes"
            >
              <h3 className="boxCaseTitle">Efetuar cadastro</h3>
              <div className="cadOptions">
                <Link href="/restrito/minhasapresentacoes">
                  <Image
                    src="/imagens/estrutura/signinface.png"
                    alt="Logar com facebook"
                    width={200}
                    height={40}
                  />
                </Link>
                <Link href="/restrito/minhasapresentacoes">
                  <Image
                    src="/imagens/estrutura/googlelogin.png"
                    alt="Logar com google"
                    width={200}
                    height={40}
                  />
                </Link>
                <Link href="/restrito/minhasapresentacoes">
                  <Image
                    src="/imagens/estrutura/logtwitter.png"
                    alt="Logar com twitter"
                    width={200}
                    height={40}
                  />
                </Link>
                <a
                  onClick={() =>
                    (
                      window as Window &
                        typeof globalThis & { showForm: () => void }
                    ).showForm()
                  }
                >
                  <Image
                    src="/imagens/estrutura/presentix.png"
                    alt="Logar com E-mail"
                    width={200}
                    height={40}
                  />
                </a>
              </div>
              <div className="logForm">
                <div className="alert alert-danger" role="alert">
                  Mensagem de erro no cadastro.
                </div>
                <h4 className="formSection">Dados pessoais:</h4>
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      Nome:
                      <input type="text" required />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      Sobrenome:
                      <input type="text" required />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      Data de nascimento:
                      <input type="date" required />
                    </label>
                  </div>
                </div>
                <h4 className="formSection">Dados de acesso:</h4>
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      E-mail:
                      <input type="text" required />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      Senha:
                      <input type="password" required />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label>
                      Confirme a senha:
                      <input type="password" required />
                    </label>
                  </div>
                </div>
                <h4 className="formSection">Perfil:</h4>
                <div className="row">
                  <div className="col-xs-12">
                    <label>
                      Descrição:
                      <textarea></textarea>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <button type="submit" className="right large">
                      Cadastrar
                    </button>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="cadastraLogin cadOptions">
                <h3>Já tem uma conta?</h3>
                <Link href="/login" className="button large">
                  Faça login
                </Link>
              </div>
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
