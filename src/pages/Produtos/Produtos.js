import style from './Produtos.module.css';
import Caixa from '../../assets/Caixa.png';

export function Produtos() {
    return (
        <div className={style.container}>
            <h1 className={style.titulo}>Página em Desenvolvimento</h1>

            <div className={style.imagens}>
                <img src={Caixa} alt="Caixa" className={style.imagem} />
            </div>

            <h2 className={style.mensagem}>
                Estamos preparando grandes novidades! <br />
                Em breve, novos produtos estarão disponíveis aqui.
            </h2>
        </div>
    );
}
