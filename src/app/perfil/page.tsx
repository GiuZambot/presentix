import Image from "next/image";
import Link from "next/link";
import apresentacoesStyles from "../apresentacoes/page.module.css"; // Import styles from apresentacoes for shared list
import Footer from "../components/Footer";
import Header from "../components/Header";
import Presentation from "../Presentation";
import styles from "./page.module.css";

export default function RestritoPerfil() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row limite">
          <div
            className={`col-sm-3 col-xs-12 text-center ${styles.profileInfo}`}
          >
            <div
              className={styles.userFoto}
              style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
            ></div>
            <span className={styles.apde}>Apresentações de</span>
            <h3 className={styles.userName}>Daniel de Oliveira</h3>
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
        <ul id="listApres" className={apresentacoesStyles.apresentacoesLista}>
          <li>
            <Link href="/apresentacao">
              <Image
                src="/imagens/estrutura/playList.png"
                alt="Play"
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
                className={apresentacoesStyles.play}
                width={64}
                height={64}
              />
              <span
                className={apresentacoesStyles.presentationBlock}
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
      <Footer />
    </>
  );
}
