
import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js';
import zh from './zh'
import en from './en'
const i18n = createI18n({
    locale: sessionStorage.getItem('lang') || 'zh',
    legacy: false,
    globalInjection: true,
    messages: {
        zh,
        en
    },
})
export default i18n;