<template>
    <div class="content">
        <router-view></router-view>
        <div class="whatstoggle">
             <a class="btn btn-success botao" target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5545999535458">
             <img class="mb-1" src="@/assets/img/whatsapp.png" alt="whatsapp"> Atendimento Via WhatsApp !!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    methods: {
    toogleMenu() {
        this.$store.commit('toogleMenu', false)
      }
  }
}
</script>

<style>
    .content {
        grid-area: content;
        width: 100%;
    }

    .whatstoggle {
        position: fixed;
        right: 0;
        bottom: 0;
        padding: 20px;
    }

    .botao {
        font-size: 1.2rem;
        border-radius: 50px;
    }

    @media (max-width: 640px) {
        .botao {
            font-size: 1rem;
        }

        .whatstoggle {
            right: 10vw;
        }
    }
</style>