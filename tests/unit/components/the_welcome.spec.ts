import { mount } from '@vue/test-utils';
import TheWelcome from '../../../src/components/TheWelcome.vue';
import { createI18n } from 'vue-i18n';
import en from '../../../src/lang/en.json';
import es from '../../../src/lang/es.json';
import { test, describe, expect } from 'vitest'; // Importar expect desde vitest

describe('TheWelcome Component', () => {
    
    test('renders the component with English translations', () => {

        // CONFIGURE VUEI18N WITH TRANSLATIONS IN ENGLISH //
        const i18n = createI18n({
            locale: 'en',
            messages: {
                en,
                es
            }
        });
    
        // MONTA THE COMPONENT WITH INJECTED VUEI18N //
        const wrapper = mount(TheWelcome, {
            global: {
                plugins: [i18n]
            }
        });
    
        // PERFORM ASSERTIONS ON THE ELEMENTS OF THE COMPONENT //
        expect(wrapper.findComponent({ name: 'WelcomeItem' })).toBeTruthy();
        expect(wrapper.text()).toContain('Documentation');
        expect(wrapper.text()).toContain('Vue’s official documentation provides you with all information you need to get started.');

    });

});