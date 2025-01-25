import { Link } from 'react-router-dom';
import style from './BannerInicial.module.css';
import { TopBarEntrar } from '../TopBarEntrar/TopBarEntrar';
import { ArrowRight, Truck } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import './BannerInicial.module.css';
export function BannerInicial() {
    return (
        <TopBarEntrar>
            <div className={style.cor_fundo}>

            <h3>testeee</h3>
                <div className={style.container}>
                    <div className={style.container_itens}>
                        <div className={style.corpo_itens}>
                            <div className={style.descricao}>
                                <Truck className="feature-icon" />
                                <h3 className="h5">Entrega Rápida</h3>
                                <p className="text-muted">Entregamos com rapidez e segurança</p>
                            </div>
                        </div>
                        <div className={style.corpo_itens}>
                            <div className={style.descricao}>
                                <Truck className="feature-icon" />
                                <h3 className="h5">Entrega Rápida</h3>
                                <p className="text-muted">Entregamos com rapidez e segurança</p>
                            </div>
                        </div>
                        <div className={style.corpo_itens}>
                            <div className={style.descricao}>
                                <Truck className="feature-icon" />
                                <h3 className="h5">Entrega Rápida</h3>
                                <p className="text-muted">Entregamos com rapidez e segurança</p>
                            </div>
                        </div>
                        <div className={style.corpo_itens}>
                            <div className={style.descricao}>
                                <Truck className="feature-icon" />
                                <h3 className="h5">Entrega Rápida</h3>
                                <p className="text-muted">Entregamos com rapidez e segurança</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </TopBarEntrar>
    );
}

