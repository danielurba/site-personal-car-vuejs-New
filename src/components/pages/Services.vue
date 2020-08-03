<template>
    <div class="services">
        <div>
            <h2><strong>Polimentos e Espelhamentos</strong></h2>
            <h3>Polimento(simples)</h3>
            <p>
                Fazemos polimento inteiro do seu carro ou apenas algumas partes se preferir.
                O polimento é simplesmente passar a massa de polir com a boina branca
                e ir retirando riscos pequenos e pequenas inpurezas da lata. Após o polimento 
                completo passamos uma cera especial. E por fim lavamos seu carro e o limpamos por dentro.
            </p>
            <h3>Espelhamento</h3>
            <p>
                No Espelhamento fazemos o polimento normal com a boina branca, se a algum riscos
                profundo na lata que é possivel remover, lixamos com um uma lixa fina para retirar
                uma pequena parte do verniz para podermos retirar completamente o risco.
                Depos de todo processo de lixamento, diferente do polimento(simples), passamos outra boina.
                Uma boina de espuma para o acabamento final, com produto de lustração e depois desse processo
                fazemos o enceramento do veículo. Lavamos todo o veiculo para retirar toda sujeira deixada
                no polimento, e limpamos por dentro o veículo. Recomendo Espelhamento !!!
            </p>
        </div>
        <div>
            <h2><strong>Pinturas e Retoques</strong></h2>
            <h3>Pinturas</h3>
            <p>
                Nas pinturas, fazemos a recuperação da peça do veículos se necessario, passamos o produto PU
                para o acabamento, em seguida começa o processo de lixamento da peça.
                Em seguida e isolado as partes do veículo que não vão ser pintadas para não ocorrer
                o pulverização das partes, após o isolamento e feito as demãos de tintas sobre a peça
                e depois aplicamos o verniz no final.
            </p>
            <h3>Retoques</h3>
            <p>Os retoques são pequeno reparos no seu veículo que podem ser feita de menira simples,
                com o mesmo processo da pintura, so que não necessitando a pintura da peça por inteira.
                Após todas as pinturas e retoques feitos fazemos o lixamento e polimento no final para melhor
                acabamento da pintura.
            </p>
        </div>
        <div>
            <h2><strong>Outros serviços que você encontra na Personal Car</strong></h2>
            <h3>Recuperação de parachoques</h3>
            <p>
                Se seu parachoque rasgou, quebrou, traga para nós podemos resolver a situação
                sem talvez que você tenha que comprar outro parachoque novo
            </p>
            <h3>Enceramentos e lavagem de veículos</h3>
            <p>
                Fazemos também lavagem e enceramento do seu carro, e limpeza interna inclusa.
            </p>
            <h3>Limpeza de bancos de couro</h3>
            <p>
                Temos produtos para limpeza dos bancos de couros do seu carro. Traga para nós
                o seu veículo !
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>

<style>
    .services {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .services div {
        margin: 20px;
        background-color: #eee;
    }

    .rota  {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        background: linear-gradient(90deg, rgba(157,157,157,1) 0%, rgba(232,226,226,1) 50%, rgba(157,157,157,1) 100%);
    }

    .rota a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        padding: 0px 15px;
    }

    @media (max-width: 640px) {
        .services {
            align-items: center;
        }

        .services > h2 {
            font-size: 1.4rem;
            text-align: center;
        }

        .rota {
            display: flex;
            flex-direction: column;
            font-size: 0.8rem;
        }

        .rota a {
            font-size: 0.8rem;
            padding: 0px 4px;
        }

        .rota h2 {
            font-size: 1rem;
            margin: 0;
            padding-bottom: 20px;
        }
    }
</style>