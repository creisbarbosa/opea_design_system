<template>
  <header>
    <div class="wrapper">
      <div>
        <img src="../assets/images/opea_logo.svg" alt="">
      </div>
      <div>
        <span class="welcome" v-if="user"
          >Seja bem vindo, <b>{{ user.name }}</b
          >!</span
        >
        <my-button variant="darker" size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button variant="darker" size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button
          variant="secondary"
          size="small"
          @click="$emit('createAccount')"
          label="Sign up"
          v-if="!user"
        />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
