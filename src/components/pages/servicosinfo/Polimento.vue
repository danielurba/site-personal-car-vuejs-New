<template>
  <div class="poli">
    <div class="mt-2">
      <img src="@/assets/img/polimento2.jpg" alt="Polimento" width="300" height="225" />
      <span>
        <p>Deixar o carro bonito é o objetivo da maioria dos motoristas, mas proteger a pintura é uma forma de cuidar do patrimônio e garantir um bom preço no momento de troca. Serviços como enceramento, polimento e cristalização são muito comuns no mercado, mas você sabe qual é a diferença entre eles e qual é ideal para o seu carro?</p>
        <p>Os três processos têm o objetivo de retirar manchas, riscos, proteger e dar brilho e a escolha por um deles deve ser feita juntamente com o prestador de serviços.</p>
        <p>Antes de tudo, dois pontos devem ser observados: o estado da pintura e a durabilidade da proteção. É importante que o especialista deixe claro quais os riscos e manchas que não serão removidos - em muitos casos somente a repintura deixará seu carro em ordem. Definir o que será feito é a maneira correta de se evitar descontentamentos e discussões.</p>
      </span>
    </div>
    <p>
      O <strong>Polimento</strong>
       é recomendado para pinturas manchadas, queimadas de sol, riscos de pouca profundidade, manchas provocadas por árvores e pássaros, peças que foram repintadas e perderam o brilho (como ocorre frequentemente no capuz do motor).
    </p>
    <p>Utilizando massas abrasivas e politrizes que giram a 2.000 rotações por minuto, o polimento costuma retirar um pouco do verniz da pintura e junto com ela as manchas e riscos. Em alguns casos, os polidores fazem uso de lixa d’água bem fina para retirar substâncias impregnadas no verniz.</p>
    <p>
      Ao contrário da cera, que pode ser aplicada na sombra da sua garagem, o serviço requer conhecimento e experiência com a politriz. Definitivamente,
      <strong>polimento não é para amadores. Quinas, vincos e frisos laterais são as principais vítimas de um profissional inexperiente</strong> - a abrasão é tão grande que se o profissional alguns segundos parado na mesma peça poderá remover o verniz e a tinta, deixando a mostra o fundo branco da lataria.
    </p>
    <p>Cores escuras, como preto e azul marinho, merecem atenção especial, pois revelam facilmente as imperfeições do trabalho.</p>
  </div>
</template>

<script>
export default {
  name: "Poli"
};
</script>

<style>
.poli {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 1.2rem;
}

.poli > div {
  display: flex;
}

.poli span {
  padding: 0px 10px;
}

@media (max-width: 640px) {
    .poli > div {
      flex-direction: column;
    }

    .poli span {
      padding: 0;
    }

    .poli img {
      width: 100%;
    }
  }
</style>