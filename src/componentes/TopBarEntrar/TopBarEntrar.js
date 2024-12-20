import style from './TopBarEntrar.module.css';

export function TopBarEntrar({children}) {
    return (
        <div>
            <div className={style.topbar_conteudo}>

            </div>

            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}