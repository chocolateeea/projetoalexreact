import { useEffect, useState } from 'react';
import { TopBarUsuario } from '../../componentes/TopBarUsuario/TopbarUsuario';
import style from './Logado.module.css';
import UsuarioApi from '../../services/UsuarioApi';
import { useNavigate } from 'react-router-dom';


export function Logado() {
    const [usuario, setUsuario] = useState({ });

   


    const Id = localStorage.getItem("usuarioId") ;

    const buscarNomeUsuario = async () => {
        try {
            const resposta = await UsuarioApi.obterAsync(Id)
            setUsuario(resposta);
            
        } catch (error) {
            console.error("Erro ao buscar o nome do usuário:", error);
            
        }
    }

    useEffect(() => {
        buscarNomeUsuario()
    }, [Id])
    return (

        <TopBarUsuario nomeUsuario={usuario.nome} onClick={null}>
            
                    

        </TopBarUsuario>
    )
}