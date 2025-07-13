import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Busca() {
  const searchTerm = "Presentix";
  const resultCount = 109;
  const term = "'presentix'";

  return (
    <>
      <Header />
      <div className="conteudoInterno">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="pageTitle text-center">{`Busca por: "${searchTerm}"`}</h2>
            <p className="text-center">
              Foram encontradas {resultCount} apresentações com o termo{" "}
              <strong>{`'${term}'`}</strong>.
            </p>
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
      <Footer />
    </>
  );
}
