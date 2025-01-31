import { Link } from 'react-router-dom';
import style from './BannerInicial.module.css';
import { TopBarEntrar } from '../TopBarEntrar/TopBarEntrar';
import { Star, Shield, Package } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import './BannerInicial.module.css';

export function BannerInicial() {
    return (
        <div className={style.cor_fundo}>
            
            <div className={style.titulos}>
                <h3>Adesivos de Alta Durabilidade</h3>
                <span className={style.titles}> Qualidade </span>
                    <div>
                        <Button  variant='dark'>Sua melhor esolha é aqui</Button>
                    </div>
                <h2 className={style.subtitulos}>Encontre os melhores Adesivos</h2>
            </div>

            <div className={style.container}>
                <div className={style.container_itens}>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Shield style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Segurança</h3>
                            <p className="text-muted">Produtos duráveis.</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Star style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Qualidade</h3>
                            <p className="text-muted">Alta performance.</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Package style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Entrega</h3>
                            <p className="text-muted">Rápida e segura.</p>
                        </div>
                    </div>
                    <div className={style.corpo_itens}>
                        <div className={style.descricao}>
                            <Star style={{ color: '#007bff', fontSize: '2rem' }} />
                            <h3 className="h5">Recomendações</h3>
                            <p className="text-muted">Clientes satisfeitos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}
