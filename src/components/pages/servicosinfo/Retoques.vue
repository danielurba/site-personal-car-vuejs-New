<template>
    <div class="retoque">
    <div>
      <img
        src="@/assets/img/retoque.jpg"
        alt="Retoque"
        width="300"
        height="225"
      />
      <span>
        <p>
          O <strong>Retoque Automotivo</strong> envolve uma série de atividades entre a preparação, aplicação e consolidação do serviço. Ela requer o uso de materiais, equipamentos e procedimentos diversos, em uma intrincada combinação, conforme o objetivo que se pretende atingir.
        </p>
        <p>Logo, como pintar carros não é uma atividade tão fácil quanto parece, domina o mercado aquele que melhor sabe combinar os itens listados no parágrafo anterior e, com isso, conseguir o resultado mais próximo possível da perfeição.</p>
      </span>
    </div>
    <ul>
      <li>
        Os
        <strong>Retoques Automotivo</strong> devem ser feitas em ambiente com excelente iluminação, o que facilitará a visualização de riscos e outros defeitos;
      </li>
      <li>Depois de desamassar e lixar a lataria, limpe-a com um desengraxante antes de aplicar a tinta;</li>
      <li>Use fita crepe, papel ou plástico (sem furos) para cobrir as áreas que não serão pintadas, assim você evita incidentes que possam danificar o carro;</li>
      <li>Quando o veículo tiver peças desmontadas, coloque-as sobre uma mesa giratória para facilitar a pintura das mesmas;</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Reto'
}
</script>

<style>
    .retoque {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 1.2rem;
  }

  .retoque > div {
    display: flex;
    margin-bottom: 10px;
  }

  .retoque span {
    padding: 0px 10px;
  }

  @media (max-width: 640px) {
    .retoque > div {
      flex-direction: column;
    }

    .retoque span {
      padding: 0;
    }

    .retoque img {
      width: 100%;
    }
  }
</style>