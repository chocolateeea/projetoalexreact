
import style from "./TopBar.module.css"
import { Link } from "react-router-dom"


export function TopBar({ children }) {
    return (
        <div>
            <div className={style.topbar_conteudo}>
               

                <Link to="login" className ={style.fonte}>Entrar</Link>
            

            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}