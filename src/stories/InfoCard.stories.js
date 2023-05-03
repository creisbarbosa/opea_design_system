import InfoCard from './InfoCard.vue';

export default {
  title: 'Components/Cards/Info',
  component: InfoCard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['indigo', 'purple', 'orange', 'green'],
    },
  },
};

export const Indigo = {
  args: {
    type: 'indigo',
    title: 'Parcelas',
    value: '171',
    icon: 'fas fa-file-invoice',
  },
};

export const Purple = {
  args: {
    type: 'purple',
    title: 'A Vencer',
    value: '167',
    icon: 'fas fa-clock',
  },
};

export const Orange = {
  args: {
    type: 'orange',
    title: 'Em Atraso',
    value: '2',
    icon: 'fas fa-warning',
  },
};

export const Green = {
  args: {
    type: 'green',
    title: 'Já Pagas',
    value: '34',
    icon: 'fas fa-check-to-slot',
  },
};