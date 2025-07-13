import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Apresentacoes() {
  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="pageTitle text-center">Top Apresentações</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              varius tellus at tortor vulputate convallis ac ac est. In maximus
              vehicula nibh, consequat commodo tortor dignissim nec. In hac
              habitasse platea dictumst. Pellentesque consectetur iaculis
              viverra.
            </p>
            <ul id="listApres" className={styles.apresentacoesLista}>
              <li>
                <Link href="/apresentacao">
                  <Image
                    src="/imagens/estrutura/playList.png"
                    alt="Play"
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
                    className={styles.play}
                    width={64}
                    height={64}
                  />
                  <span
                    className={styles.presentationBlock}
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
      <Footer />
    </>
  );
}
