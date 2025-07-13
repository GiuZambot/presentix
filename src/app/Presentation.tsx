import Image from "next/image";
import styles from "./Presentation.module.css";

export default function Presentation() {
  return (
    <div className={styles.presnetixdemo}>
      <div className={styles.commands}>
        <a className="glyphicon glyphicon-backward" title="Voltar"></a>
        <a className="glyphicon glyphicon-play" title="Iniciar"></a>
        <input type="text" value="1" readOnly />
        <a className="glyphicon glyphicon-forward" title="Avançar"></a>
        <a className="glyphicon glyphicon-resize-full" title="Full Screen"></a>
        <a title="Presentix">
          <Image
            src="/imagens/estrutura/brand.svg"
            alt="Presentix Brand"
            width={100}
            height={20}
          />
        </a>
      </div>
    </div>
  );
}
