import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TemasLista() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
