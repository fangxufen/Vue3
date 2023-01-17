import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import home from './home'
const store =createStore({
    //模块化
    modules:{
        home
    },
    // state:{
    //     couter:0,
    //     couter2:5,
    //     token:''
    // },
    // getters:{
    //     sum(state){
    //         return state.couter+state.couter2
    //     }
    // },
    // mutations:{
    //     setstate(state,couter){
    //         state.couter=couter
    //     },
    //     addcouter(state){
    //         state.couter+=1
    //     },
    //     setToken(state,token){
    //         state.token=token
    //     }
    // },
    // actions:{
    //     btnactions(){
    //         alert('staore=>btnactions')
    //     }
    // }
    plugin:[createPersistedState()],
});
export default store