<template>
  <div @click="toogleMenu" class="footer">
    <div class="footerwidgets">
      <div>
        <h4>Sobre nós</h4>
        <p>
          Personal Car é uma empresa que está a mais de 10 anos trabalhando para fazer seu carro
          brilhar, e mantendo sempre no perfeito estado. Fazemos polimentos, pinturas, martelinho
          de ouro, pequenos retoques, reformas em gerais do seu veículo, etc. Venha conferir nossos
          serviços.
        </p>
      </div>
      <div class="acess">
        <h4>Acesso rápido</h4>
        <a href="#">
          <i class="fa fa-home"></i> INICIO
        </a>
        <router-link to="/contacts">
          <i class="fa fa-phone"></i> CONTATO
        </router-link>
        <router-link to="/services">
          <i class="fa fa-cogs"></i> SERVIÇOS
        </router-link>
        <router-link to="/info">
          <i class="fa fa-info-circle"></i> QUEM SOMOS
        </router-link>
      </div>
      <div>
        <h4>Informações</h4>
        <img class="mb-1" src="@/assets/img/whatsapp.png" alt="whatsapp">
        (45)9-9953-5458
        <br />
        <i class="fa fa-envelope"></i>
        wrc.rodrigues82@hotmail.com
        <br />
        <i class="fa fa-clock-o"></i>
        Seg-Sex: 08:00-12:00 e 13:15-18:00
        <br />
        <i class="fa fa-map-marker"></i>
        Rua Manoel Ribas, 3615 - Cancelli - Cascavel - PR
      </div>
    </div>
    <div class="copyright">
      <h6>Desenvolvido por <a target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5545999789334">
      <strong> Daniel Urbaneki</strong></a></h6>
      <h6>Faça já seu site entre em contato comigo !!</h6>
      <h5>Copyright © 2020 Personal Car. Todos os direitos reservados.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toogleMenu() {
      this.$store.commit("toogleMenu", false);
    }
  }
};
</script>

<style>
.footer {
  grid-area: footer;
}

.footerwidgets {
  display: flex;
  justify-content: space-around;

  background-color: #202B57;
}

.footerwidgets div {
  color: #fff;
  width: 350px;
  height: 200px;
  padding: 10px;
}

.footerwidgets a {
  text-decoration: none;
  color: #fff;
}

.footerwidgets i {
  margin: 5px;
  width: 15px;
}

.footerwidgets h4 {
  color: #aaa;
}

.acess {
  display: flex;
  flex-direction: column;
}

.acess a {
  padding-bottom: 10px;
}

.acess a:hover {
  color: #aaa;
}

.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #202B57;
  color: #bbb;
}

.copyright a {
  text-decoration: none;
  color: #fff;
}

.copyright a:hover {
  color: #555;
}

.copyright h5 {
  margin: 0px 20px;
  margin-top: 40px;
}

.copyright h6 {
  margin-top: 20px;
}

@media (max-width: 640px) {
  .footerwidgets {
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
  }

  .footerwidgets div {
    padding: 0px 20px;
    padding-top: 10px;
  }

  .copyright h5 {
    font-size: 0.9rem;
    margin-bottom: 60px;
    margin-top: 20px;
  }

  .copyright h6 {
    margin-top: 10px;
  }
}
</style>