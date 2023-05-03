import ProgressCard from './ProgressCard.vue';

export default {
  title: 'Components/Cards/Progress',
  component: ProgressCard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['danger', 'success'],
    },
  },
};

export const Danger = {
  args: {
    type: 'danger',
    value: '320.640.828,48',
    title: 'Saldo devedor futuro',
    percent: '80',
    adicional: 'Ver valor presente',
  },
};

export const Success = {
  args: {
    type: 'success',
    value: '65.725.729,08',
    title: 'Pago até o momento',
    percent: '20',
    adicional: 'Valor do principal R$70.000.000,00',
  },
};