import React, { useState } from 'react';
import styles from './PageAdmin.module.css';
import produtos from '../../assets/produtos.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardsProdutos } from '../../componentes/CardsProdutos/CardsProdutos';

const Admin = () => { 
  



  return (
    <>


      <div className={styles.adminContainer}>
        <header className={styles.header}>
          <h1>Gerenciamento de Produtos</h1>
          <button className={styles.newButton} onClick={null}>
            + Novo Produto
          </button>
        </header>

    

        <CardsProdutos pesquisaValor={''}></CardsProdutos>

      </div>

    </>


  );
};

export default Admin;