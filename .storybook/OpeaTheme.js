import { create } from '@storybook/theming/create';
import opeaLogo from '../public/design_system_logo.svg';

export default create({
    base: 'dark',

    brandTitle: 'Opea Design System',
    brandUrl: 'https://opeacapital.com',
    brandImage: opeaLogo,
    brandTarget: '_self',

});