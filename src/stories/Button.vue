<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'opea-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      validator: function (value) {
        return ['primary', 'secondary', 'darker'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        [`storybook-button--${props.variant || 'primary'}`]: true,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
