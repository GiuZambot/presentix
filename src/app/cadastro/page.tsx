"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactStyles from "../contato/page.module.css"; // Reusing contact form styles
import styles from "./page.module.css";

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
      <Header />
      <div className="conteudoInterno">
        <div className="row limite">
          <div className="col-xs-12">
            <form
              className={`${contactStyles.boxCase} ${contactStyles.form}`}
              action="/restrito/minhasapresentacoes"
            >
              <h3 className={contactStyles.boxCaseTitle}>Efetuar cadastro</h3>
              <div className={styles.cadOptions}>
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
              <div className={styles.logForm}>
                <div className="alert alert-danger" role="alert">
                  Mensagem de erro no cadastro.
                </div>
                <h4 className={contactStyles.formSection}>Dados pessoais:</h4>
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Nome:
                      <input
                        type="text"
                        required
                        className={contactStyles.formInputText}
                      />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Sobrenome:
                      <input
                        type="text"
                        required
                        className={contactStyles.formInputText}
                      />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Data de nascimento:
                      <input
                        type="date"
                        required
                        className={contactStyles.formInputDate}
                      />
                    </label>
                  </div>
                </div>
                <h4 className={contactStyles.formSection}>Dados de acesso:</h4>
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      E-mail:
                      <input
                        type="text"
                        required
                        className={contactStyles.formInputText}
                      />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Senha:
                      <input
                        type="password"
                        required
                        className={contactStyles.formInputPassword}
                      />
                    </label>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Confirme a senha:
                      <input
                        type="password"
                        required
                        className={contactStyles.formInputPassword}
                      />
                    </label>
                  </div>
                </div>
                <h4 className={contactStyles.formSection}>Perfil:</h4>
                <div className="row">
                  <div className="col-xs-12">
                    <label className={contactStyles.formLabel}>
                      Descrição:
                      <textarea
                        className={contactStyles.formTextarea}
                      ></textarea>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <button type="submit" className="right large button large">
                      Cadastrar
                    </button>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className={styles.cadastraLogin}>
                <h3>Já tem uma conta?</h3>
                <Link href="/login" className="button large">
                  Faça login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
