import { useState } from "react";
import { BannerInicial } from "../../componentes/BannerInicial/BannerIcial";
import { CardsProdutos } from "../../componentes/CardsProdutos/CardsProdutos";
import { Footer } from "../../componentes/Footer/Footer";
import { TopBarEntrar } from "../../componentes/TopBarEntrar/TopBarEntrar";


export function Home() {
        const [pesquisaValor, setPesquisaValor] = useState("")

        return (

                <TopBarEntrar setPesquisaValor={setPesquisaValor}  pesquisaValor={pesquisaValor}>
                        <BannerInicial />
                        <CardsProdutos pesquisaValor={pesquisaValor}>
                                
                        </CardsProdutos>
                        <Footer/>
                </TopBarEntrar>


        )
}