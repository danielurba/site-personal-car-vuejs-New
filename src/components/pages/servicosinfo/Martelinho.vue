<template>
    <div class="martelinho">
      <div class="titulo">
        <img src="@/assets/img/martelinho-de-ouro.png" alt="Martelinho" height="225" width="300">
        <span>
          <h3><Strong>Martelinho de ouro</Strong></h3>
          <p>A técnica “martelinho de ouro” consiste em eliminar amassados na superfície de um veículo sem o uso de pinturas. Serve para reparo de pequenos amassados como arranhões, batidas leves ou chuva de granizo e, em alguns casos, para grandes estragos (contando que os danos não sejam profundos).</p>
        </span>
      </div>
      <h2>Quais são as vantagens do martelinho de ouro?</h2>
      <p>Embora esse serviço de reparo exija paciência e concentração, ele também atrai a atenção de diversos clientes devido à rapidez do reparo e baixo custo, comparado outros serviços prestados em uma oficina. Um exemplo na prática é que serviços de pintura e chapeação levam aproximadamente três dias para deixar o veículo pronto, enquanto o martelinho de ouro entrega o automóvel&nbsp;reparado em 1 hora ou menos (danos maiores levam um pouco mais que 1 hora).</p>
      <p>A atenção dos proprietários de carros também se volta ao fato de que o reparo aos danos presentes no veículo não danifica sua pintura e textura original, nem implica na necessidade de troca da lataria.</p>
      <h2>Onde o martelinho de ouro não se aplica?</h2>
      <p>No geral, ele é mais indicado para pequenos amassados. Estragos maiores também podem ser eliminados com o martelinho de ouro, porém nem sempre essa será a melhor opção. Exemplo carros com sofreram batidas e tiveram sua tintura danificada (nesses casos, também será necessário um serviço de funilaria e pintura). Outro exemplo é quando realmente há a necessidade de troca da lataria.</p>
      <h2>História do Martelinho de Ouro</h2>
      <p>Essa técnica de funilaria artesanal feita com o martelo de ouro surgiu há cerca de 40 anos em fábricas de carros, com o objetivo de retirar os pequenos amassados de automóveis que ainda estavam na linha de montagem. Com o passar dos anos a técnica foi implantada nas montadoras de veículos definitivamente. Atualmente essa técnica que saiu das fábricas foi absorvida por oficinas e mecânicas e entrou para o uso popular, ficando realmente conhecida como martelinho de ouro, o instrumento feito com o material precioso e delicado que dá o nome a técnica.</p>
    </div>
</template>

<script>
export default {
  name: "Marte"
};
</script>

<style>
  .martelinho {
    display: flex;
    flex-direction: column;;
    padding: 20px;
    font-size: 1.2rem;;
  }

  .martelinho * {
    margin-bottom: 10px;
  }

  .titulo {
    display: flex;
  }

  .titulo > span {
    width: 100%;
    padding: 0px 10px;
  }

  @media (max-width: 640px) {
    .titulo {
      flex-direction: column;
    }

    .titulo > span {
      padding: 0;
    }

    .titulo img {
      width: 100%;
    }
  }
</style>