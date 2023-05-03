<template>
  <div class="progress-card col py-3 px-4 border rounded-lg mr-2" :class="type">
      <progress id="file" :value="percent" max="100" class="w-fill" :class="type"> 100% </progress>
    <h6 class="title pt-2 pb-2">{{ title }}</h6>
    <div class="d-flex flex-column justify-content-end">
      <div class="d-flex justify-content-end align-items-center">
        <b class="mr-2">R$</b>
        <h3>{{ value }}</h3>
      </div>
      <a href="">{{ adicional }}</a>
    </div>
  </div>
</template>

<script>
  import './progressCard.scss';
  export default {
    name: 'progress-card',
    props: {
      title: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      percent: {
        type: String,
        required: true,
      },
      
      adicional: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        validator: function (value) {
          return ['primary', 'secondary', 'darker'].indexOf(value) !== -1;
        },
      },
    },
  }
</script>