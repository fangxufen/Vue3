import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import home from './home'
const store =createStore({
    //模块化
    modules:{
        home
    },
    plugin:[createPersistedState()],
});
export default store