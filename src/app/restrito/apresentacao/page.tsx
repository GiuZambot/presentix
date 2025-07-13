"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Modals
const ConfigModal = () => (
  <div id="config" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Configurações</h4>
        </div>
        <div className="modal-body">
          <p>Opções da apresentação</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ExcluirModal = () => (
  <div id="excluir" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Excluir apresentação</h4>
        </div>
        <div className="modal-body">
          <p>Tem certeza que deseja excluir esta apresentação?</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ExcluirObjModal = () => (
  <div id="excluirObj" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Excluir objeto</h4>
        </div>
        <div className="modal-body">
          <p>Tem certeza que deseja excluir este objeto?</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SaveModal = () => (
  <div id="save" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Salvar apresentação</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-success" role="alert">
              Sucesso
            </div>
            <div className="alert alert-warning" role="alert">
              Aviso
            </div>
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <label>
              Digite o nome para esta apresentação:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ShareModal = () => (
  <div id="share" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Compartilhar apresentação</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-success" role="alert">
              Sucesso
            </div>
            <div className="alert alert-warning" role="alert">
              Aviso
            </div>
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <label>
              Digite um e-mail para compartilhar esta apresentação:
              <input type="email" />
            </label>
          </form>
          <h3>Usuários nesta apresentação</h3>
          <ul className="listUserShare">
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
            <li>
              <div
                className="userFoto"
                style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
              ></div>{" "}
              Daniel Oliveira{" "}
              <span className="removeUsuario glyphicon glyphicon-remove-sign"></span>
            </li>
          </ul>
          <div className="alert alert-info" role="alert">
            Esta apresentação não esta compartilhada com ninguém.
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EnviarImagemModal = () => (
  <div id="enviarImagem" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Adicionar Imagem</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <label>
              Selecione uma imagem:
              <input type="file" />
            </label>
            Preview:
            <div className="previwSenImage">
              <Image
                src="/imagens/home/fundo.jpg"
                alt="Preview"
                width={200}
                height={150}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AddTextoModal = () => (
  <div id="addTexto" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Adicionar texto</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <div
              className="btn-toolbar"
              data-role="editor-toolbar"
              data-target="#editor"
            >
              <div className="btn-group">
                <a
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                  title="Font"
                >
                  <i className="icon-font"></i>
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu"></ul>
              </div>
              <div className="btn-group">
                <a
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                  title="Font Size"
                >
                  <i className="icon-text-height"></i>&nbsp;
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a data-edit="fontSize 5">
                      <span style={{ fontSize: "2.5em" }}>Huge</span>
                    </a>
                  </li>
                  <li>
                    <a data-edit="fontSize 3">
                      <span style={{ fontSize: "1.5em" }}>Normal</span>
                    </a>
                  </li>
                  <li>
                    <a data-edit="fontSize 1">
                      <span style={{ fontSize: "0.8em" }}>Small</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-group">
                <a className="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)">
                  <i className="icon-bold"></i>
                </a>
                <a
                  className="btn"
                  data-edit="italic"
                  title="Italic (Ctrl/Cmd+I)"
                >
                  <i className="icon-italic"></i>
                </a>
                <a
                  className="btn"
                  data-edit="strikethrough"
                  title="Strikethrough"
                >
                  <i className="icon-strikethrough"></i>
                </a>
                <a
                  className="btn"
                  data-edit="underline"
                  title="Underline (Ctrl/Cmd+U)"
                >
                  <i className="icon-underline"></i>
                </a>
              </div>
              <div className="btn-group">
                <a
                  className="btn"
                  data-edit="insertunorderedlist"
                  title="Bullet list"
                >
                  <i className="icon-list-ul"></i>
                </a>
                <a
                  className="btn"
                  data-edit="insertorderedlist"
                  title="Number list"
                >
                  <i className="icon-list-ol"></i>
                </a>
                <a
                  className="btn"
                  data-edit="outdent"
                  title="Reduce indent (Shift+Tab)"
                >
                  <i className="icon-indent-left"></i>
                </a>
                <a className="btn" data-edit="indent" title="Indent (Tab)">
                  <i className="icon-indent-right"></i>
                </a>
              </div>
              <div className="btn-group">
                <a
                  className="btn"
                  data-edit="justifyleft"
                  title="Align Left (Ctrl/Cmd+L)"
                >
                  <i className="icon-align-left"></i>
                </a>
                <a
                  className="btn"
                  data-edit="justifycenter"
                  title="Center (Ctrl/Cmd+E)"
                >
                  <i className="icon-align-center"></i>
                </a>
                <a
                  className="btn"
                  data-edit="justifyright"
                  title="Align Right (Ctrl/Cmd+R)"
                >
                  <i className="icon-align-right"></i>
                </a>
                <a
                  className="btn"
                  data-edit="justifyfull"
                  title="Justify (Ctrl/Cmd+J)"
                >
                  <i className="icon-align-justify"></i>
                </a>
              </div>
              <div className="btn-group">
                <a
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                  title="Hyperlink"
                >
                  <i className="icon-link"></i>
                </a>
                <div className="inputLink dropdown-menu input-append">
                  <input
                    className="span2"
                    placeholder="URL"
                    type="text"
                    data-edit="createLink"
                  />
                  <button className="btn" type="button">
                    Add
                  </button>
                </div>
                <a className="btn" data-edit="unlink" title="Remove Hyperlink">
                  <i className="icon-cut"></i>
                </a>
              </div>
              <div className="btn-group">
                <a className="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)">
                  <i className="icon-undo"></i>
                </a>
                <a className="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)">
                  <i className="icon-repeat"></i>
                </a>
              </div>
              <input
                type="text"
                data-edit="inserttext"
                id="voiceBtn"
                x-webkit-speech=""
              />
            </div>
            <div id="editor">Go ahead&hellip;</div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AddGrapModal = () => (
  <div id="addGrap" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Adicionar gráfico</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <label>Lista de gráficos disponíveis</label>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ObjOptModal = () => (
  <div id="objOpt" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Opções do objeto</h4>
        </div>
        <div className="modal-body">
          <form className="form">
            <div className="alert alert-danger" role="alert">
              Erro
            </div>
            <label>Opções do objeto adicionado</label>
            <div className="roateRbox">
              <div id="experiment">
                <div id="cube">
                  <div className="face one">1</div>
                  <div className="face two">2</div>
                  <div className="face three">3</div>
                  <div className="face four">4</div>
                  <div className="face five">5</div>
                  <div className="face six">6</div>
                </div>
              </div>
            </div>
            <div className="optionsRotation">
              Rotacione o elemento entre 0 e 360 graus.
              <br />
              <div className="controles">
                Rotacionar no eixo X:
                <div id="yslider" className="sliderH"></div>
                <br />
                <br />
                Rotacionar no eixo y:
                <div id="xslider" className="sliderH"></div>
                <br />
                <br />
                Rotacionar no eixo central:
                <div id="rslider" className="sliderH"></div>
              </div>
              <input type="hidden" className="xControl" />
              <input type="hidden" className="yControl" />
              <input type="hidden" className="rControl" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default left"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function RestritoApresentacao() {
  useEffect(() => {
    // Load external scripts
    const scriptPaths = [
      "/js/jquery-1.11.1.min.js",
      "/components/bootstrap-3.2.0-dist/js/bootstrap.min.js",
      "/components/jquery-ui-1.11.2.custom/jquery-ui.min.js",
      "/components/jquery.hotkeys-master/jquery.hotkeys.js",
      "/components/bootstrap-wysiwyg-master/external/google-code-prettify/prettify.js",
      "/components/bootstrap-wysiwyg-master/bootstrap-wysiwyg.js",
      "/js/site.js",
      "/js/editor.js",
    ];

    scriptPaths.forEach((path) => {
      const script = document.createElement("script");
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scriptPaths.forEach((path) => {
        const script = document.querySelector(`script[src="${path}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Modals */}
      <ConfigModal />
      <ExcluirModal />
      <ExcluirObjModal />
      <SaveModal />
      <ShareModal />
      <EnviarImagemModal />
      <AddTextoModal />
      <AddGrapModal />
      <ObjOptModal />

      <div className="headerbar">
        <div className="userIdent">
          <div
            className="userFoto"
            style={{ backgroundImage: "url(/imagens/usuarios/demo.jpg)" }}
          ></div>
          <span>Olá Daniel.</span>
        </div>
        <div className="commandos">
          <a
            className="hideSide glyphicon glyphicon-chevron-left"
            title="Configurações"
          ></a>
          <a
            className="showSide on glyphicon glyphicon-chevron-right"
            title="Configurações"
          ></a>
          <a
            className="glyphicon glyphicon-user"
            title="Compartilhar"
            data-toggle="modal"
            data-target="#share"
          ></a>
          <a
            className="glyphicon glyphicon-floppy-disk"
            title="Salvar"
            data-toggle="modal"
            data-target="#save"
          ></a>
          <a
            className="glyphicon glyphicon-trash"
            title="Excluir"
            data-toggle="modal"
            data-target="#excluir"
          ></a>
          <a
            className="glyphicon glyphicon-cog"
            title="Configurações"
            data-toggle="modal"
            data-target="#config"
          ></a>
          <Link
            href="/restrito/minhasapresentacoes"
            className="glyphicon glyphicon-off"
            title="Sair"
          ></Link>
        </div>
        <Image
          src="/imagens/estrutura/presentix-logo-cor.png"
          alt="Presentix"
          className="logoEditor"
          width={150}
          height={29}
        />
        <Image
          src="/imagens/estrutura/presentix-logo-cor-2.png"
          alt="Presentix"
          className="logoEditor2"
          width={150}
          height={29}
        />
      </div>
      <div className="sidebar">
        <div className="positioner">
          <div className="zoomViewer"></div>
          <div className="zoomBar">
            <div className="zoomAdd">
              <div className="glyphicon glyphicon-plus"></div>
            </div>
            <div id="slider-vertical" className="zoomScroll"></div>
            <div className="zoomLess">
              <div className="glyphicon glyphicon-minus"></div>
            </div>
          </div>
        </div>
        <div className="frameable">
          <ul className="framesList">
            <li className="on"></li>
          </ul>
        </div>
        <a className="addSlide glyphicon glyphicon-plus-sign"></a>
      </div>
      <div className="toolbox">
        <Link href="/presentation.html" title="Iniciar Apresentação">
          <Image
            src="/imagens/editor/present.svg"
            alt="Present"
            width={32}
            height={32}
          />
        </Link>
        <a className="" title="Ligar quadros">
          <Image
            src="/imagens/editor/points.svg"
            alt="Points"
            width={32}
            height={32}
          />
        </a>
        <a title="Adicionar Texto" data-toggle="modal" data-target="#addTexto">
          <span className="glyphicon glyphicon-font"></span>
        </a>
        <a
          title="Adicionar Imagem"
          data-toggle="modal"
          data-target="#enviarImagem"
        >
          <span className="glyphicon glyphicon-picture"></span>
        </a>
        <a
          className=""
          title="Adicionar Gráfico"
          data-toggle="modal"
          data-target="#addGrap"
        >
          <span className="glyphicon glyphicon-signal"></span>
        </a>
        <a
          title="Configurações do Objeto"
          data-toggle="modal"
          data-target="#objOpt"
        >
          <span className="glyphicon glyphicon-cog"></span>
        </a>
        <a title="Excluir item" data-toggle="modal" data-target="#excluirObj">
          <span className="glyphicon glyphicon-trash"></span>
        </a>
      </div>
      <div className="apresContent">
        <div className="apresBoard"></div>
      </div>
    </>
  );
}
