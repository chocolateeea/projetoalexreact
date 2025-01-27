import { Link } from 'react-router-dom';
import style from './BannerInicial.module.css';
import { TopBarEntrar } from '../TopBarEntrar/TopBarEntrar';
import { ArrowRight, Truck } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import './BannerInicial.module.css';
export function BannerInicial() {
    return (

        <div className={style.cor_fundo}>
            <div className={style.titulos}>

                <h3>Adesivos de Alta durabilidade</h3>
                <span className={style.titles}> Qualidade </span>
                <h2 className={style.subtitulos}>Econcontre os melhores Adesivos </h2>
            </div>

            <div className={style.container}>
                <div className={style.container_itens}>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Truck style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Entrega Rápida</h3>
                            <p className="text-muted">Entregamos com rapidez e segurança</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Truck style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Entrega Rápida</h3>
                            <p className="text-muted">Entregamos com rapidez e segurança</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Truck style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Entrega Rápida</h3>
                            <p className="text-muted">Entregamos com rapidez e segurança</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Truck style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Entrega Rápida</h3>
                            <p className="text-muted">Entregamos com rapidez e segurança</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>  

        

           

    );
}

