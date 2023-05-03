<template>
  <div class="info-card col p-4 border rounded-lg mr-2" :class="type">
    <div class="content">
      <span class="icon">
          <i :class="icon"></i>
        </span>
      <h6>{{ title }}</h6>
    </div>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
  import './infoCard.scss'
  export default {
    name: 'info-card',
    props: {
      type: {
        type: String,
        default: 'indigo',
        validator: function (value) {
        return ['indigo', 'purple', 'orange', 'green'].indexOf(value) !== -1;
        },
      },
      title: {
        type: String,
        required: true,
      },
      value: String,
      icon: String,
    }
  }
</script>