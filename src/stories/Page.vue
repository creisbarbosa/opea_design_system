<template>
  <article>
    <my-header :user="user" @login="onLogin" @logout="onLogout" @createAccount="onCreateAccount" />

    <section>
      
      <div class="d-flex flex-column gap-2">
        <div class="d-flex flex-row align-items-end justify-content-start gap-2">
          <h2>Adriana Gonçalves Bambino Borges</h2>
          <strong>#53691</strong>
        </div>
        <div class="d-flex align-items-center justify-content-start">
          <strong class="mr-5 mb-0">CPF: 044.620.207-07 | Cashme II - Contrato: 1865</strong>
        </div>
      </div>
      <div class="btn-group mt-3" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-dark btn-sm">Enviar e-mail</button>
        <button type="button" class="btn btn-outline-dark btn-sm">Documentos</button>
        <button type="button" class="btn btn-outline-dark btn-sm">Gerar Protocolo</button>
      </div>


      <div class="container px-3 py-4">
        <div class="row">
          <progress-card type="danger" title="Saldo devedor futuro" value="320.640.828,48" percent="80" adicional="Ver valor presente" class="mr-2"/>
          <progress-card type="success" title="Pago até o momento" value="65.725.729,08" percent="20" adicional="Valor do principal R$70.000.000,00" class="mx-2"/>
          <div class="col p-0 mx-2 mh-100">
            <info-card title="Parcelas" type="purple" value="171" icon="fas fa-file-invoice" class="mb-3"/>
            <info-card title="A Vencer" type="indigo" value="167" icon="fas fa-clock"/>
          </div>
          <div class="col p-0 mx-2 mh-100">
            <info-card title="Em Atraso" type="orange" value="2" icon="fas fa-warning" class="mb-3"/>
            <info-card title="Já pagas" type="green" value="34" icon="fas fa-check-to-slot"/>
          </div>
        </div>
      </div>

    </section>

  </article>
</template>

<script>
import './page.scss';
import MyHeader from './Header.vue';
import ProgressCard from './ProgressCard.vue';
import InfoCard from './InfoCard.vue';

export default {
  name: 'my-page',

  components: { MyHeader, ProgressCard, InfoCard },

  data() {
    return {
      user: null,
    };
  },

  methods: {
    onLogin() {
      this.user = { name: 'João Doe' };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = { name: 'Jane Doe' };
    },
  },
};
</script>
