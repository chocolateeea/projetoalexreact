import style from './DuvidasIA.module.css';
import DeepSeeK from '../../assets/DeepSeek.png';
import Chat from '../../assets/Chat.png';

export function DuvidasIA() {
    return (
        <div className={style.container}>
            <h1 className={style.titulo}>Página em Desenvolvimento</h1>

            <div className={style.imagens}>
                <img src={DeepSeeK} alt="DeepSeek" className={style.imagem} />
                <img src={Chat} alt="ChatGPT" className={style.imagem} />
            </div>

            <h2 className={style.mensagem}>
                Estamos trabalhando para trazer novidades! <br />
                Volte em breve para explorar o conteúdo atualizado.
            </h2>
        </div>
    );
}
