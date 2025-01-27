import { BannerInicial } from "../../componentes/BannerInicial/BannerIcial";
import { CardsProdutos } from "../../componentes/CardsProdutos/CardsProdutos";
import { Footer } from "../../componentes/Footer/Footer";
import { TopBar } from "../../componentes/TopBar";
import { TopBarEntrar } from "../../componentes/TopBarEntrar/TopBarEntrar";


export function Home() {

        return (

                <TopBarEntrar>
                        <BannerInicial />
                        <CardsProdutos>
                        </CardsProdutos>
                        <Footer/>
                </TopBarEntrar>


        )
}