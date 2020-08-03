<template>
  <div id="header" class="header">
    <router-link class="persona" to="/">
      <img src="@/assets/img/perso.png" alt="Logo" />
    </router-link>
    <a class="bar nav-link" role="button" @click="toogleMenu" v-if="!hideToggle">
        <i class="fa fa-bars fa-2x"></i>
    </a>
    <aside class="lateral" v-show="isMenuVisible">
      <router-link to="/">
        <i class="fa fa-home"></i>
        <a @click="toogleMenu(), backTop()">HOME</a>
      </router-link>
      <router-link to="/contacts">
        <i class="fa fa-phone"></i>
        <a @click="toogleMenu(), backTop()">CONTATO</a>
      </router-link>
      <router-link to="/services">
        <i class="fa fa-cogs"></i>
        <a @click="toogleMenu(), backTop()">SERVIÇOS</a>
      </router-link>
      <router-link to="/info">
        <i class="fa fa-info-circle"></i>
        <a @click="toogleMenu(), backTop()">QUEM SOMOS</a>
      </router-link>
    </aside>
    <div class="menu">
      <router-link to="/">
        <i class="fa fa-home"></i> HOME
      </router-link>
      <router-link to="/services">
        <i class="fa fa-cogs"></i> SERVIÇOS
      </router-link>
      <router-link to="/contacts">
        <i class="fa fa-phone"></i> CONTATO
      </router-link>
      <router-link to="/info">
        <i class="fa fa-info-circle"></i> QUEM SOMOS
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import $ from 'jquery'

export default {
  name: "Header",
  props: {
    hideToggle: Boolean,
  },
  computed: mapState(["isMenuVisible"]),
  methods: {
    toogleMenu() {
      this.$store.commit("toogleMenu");
      if(this.$store.state.isMenuVisible) {
        $('.bar > i').toggleClass('fa-bars')
        $('.bar > i').toggleClass('fa-times')
      } else {
        $('.bar > i').toggleClass('fa-bars')
        $('.bar > i').toggleClass('fa-times')
      }
    },
    backTop() {
      $('html, body').animate({scrollTop: 0}, 300);
    }
  },
};
</script>

<style>
.header {
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  transition: all 1s ease;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-top: 50px;
  z-index: 10;
  width: 100%;
  height: 80px;
}

.headerscroll {
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  transition: all 0.6s ease;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-top: 0px;
  z-index: 10;
  width: 100%;
  height: 130px;
}

.headerscrollact {
  transition: all 1s ease;
  height: 80px;
}

.header a {
  text-decoration: none;
  color: #fff;
}

.header a:hover {
  color: #fff;
}

.menu a {
  text-decoration: none;
  color: #fff;
  margin-right: 50px;
}

.menu a:hover {
  color: #aaa;
}

.lateral {
  display: none;
}

.bar {
  display: none;
}

.persona:hover {
  opacity: 0.7;
}

.persona {
  padding: 0px 10px;
}

.persona img {
  width: 240px;
  height: 70px;
}

@media (max-width: 640px) {
  .menu {
    display: none;
  }

  .header {
    margin-top: 0;
    width: 100%;
    height: 100px;
  }

  .headersmart {
    height: 80px;
  }

  .bar {
    display: block;
    color: #fff;
    margin-right: 20px;
  }

  .bar:hover {
    color: #fff;
  }

  .persona {
    padding-right: 80px;
  }

  .persona img {
    width: 150px;
    height: 50px;
  }

  .lateral {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s ease;
    justify-content: flex-start;
    width: 60%;
    position: fixed;
    z-index: 10;
    opacity: 0.7;
    left: 0;
    margin-top: 275px;
    background-color: #000;
  }

  .lateralup {
    transition: all 1s ease;
    margin-top: 255px;
  }

  .lateral a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
  }
}
</style>