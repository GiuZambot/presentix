"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactStyles from "../contato/page.module.css"; // Reusing contact form styles
import styles from "./page.module.css";

export default function Login() {
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
              <h3 className={contactStyles.boxCaseTitle}>Efetuar login</h3>
              <div className={styles.logOptions}>
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
                  Mensagem de erro no login.
                </div>
                <label className={contactStyles.formLabel}>
                  E-mail:
                  <input
                    type="text"
                    required
                    className={contactStyles.formInputText}
                  />
                </label>
                <label className={contactStyles.formLabel}>
                  Senha:
                  <input
                    type="password"
                    required
                    className={contactStyles.formInputPassword}
                  />
                </label>
                <Link href="/esquecisenha" className={styles.esqueciSenha}>
                  Esqueceu a senha?
                </Link>
                <button type="submit" className="right large button large">
                  Login
                </button>
                <div className="clearfix"></div>
              </div>
              <div className={styles.cadastraLogin}>
                <h3>Não tem uma conta?</h3>
                <Link href="/cadastro" className="button large">
                  Cadastre-se
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
