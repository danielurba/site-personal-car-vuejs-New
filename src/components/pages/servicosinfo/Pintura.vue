<template>
  <div class="pintu">
    <div>
      <img
        src="@/assets/img/pintura.png"
        alt="Pintura"
        width="300"
        height="225"
      />
      <span>
        <p>
          A <strong>pintura de autos</strong> envolve uma série de atividades entre a 
          preparação, aplicação e consolidação do serviço. Ela requer o uso de materiais, 
          equipamentos e procedimentos diversos, em uma intrincada combinação, conforme o 
          objetivo que se pretende atingir.
        </p>
        <p>Logo, como pintar carros não é uma atividade tão fácil quanto parece, domina o 
          mercado aquele que melhor sabe combinar os itens listados no parágrafo anterior e, 
          com isso, conseguir o resultado mais próximo possível da perfeição.</p>
      </span>
    </div>
    <ul>
      <li>
        As
        <strong>pinturas automotivas</strong> são feitas em ambiente com excelente iluminação, o que facilitará a visualização de riscos e outros defeitos;
      </li>
      <li>Depois de desamassar e lixar a lataria, limpamos com um desengraxante antes de aplicar a tinta;</li>
      <li>Usamos fita crepe, papel ou plástico (sem furos) para cobrir as áreas que não serão pintadas, assim evitamos incidentes que possam danificar o carro;</li>
      <li>Quando desmontamos peças do veículo, colocamos as sobre uma mesa para facilitar a pintura das mesmas;</li>
      <li>Passamos duas demãos de tinta para melhor cobrimento da área preparada</li>
      <li>E por fim passamos verniz para dar brilho a pintura</li>
      <li>E esperado em torno de 4 horas para a secagem da parte pintada, para o manuseio</li>
      <li>Se necessario e feito polimento para melhor acabamento da área pintada</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Pintu'
}
</script>

<style>
  .pintu {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 1.2rem;
  }

  .pintu > div {
    display: flex;
    margin-bottom: 10px;
  }

  .pintu span {
    padding: 0px 10px;
  }

  @media (max-width: 640px) {
    .pintu > div {
      flex-direction: column;
    }

    .pintu span {
      padding: 0;
    }

    .pintu img {
      width: 100%;
    }
  }
</style>