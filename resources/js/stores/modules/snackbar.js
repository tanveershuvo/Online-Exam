export default {
    state: {
        snackbar: {showing:false,text:'',color:''},
    },
    mutations:{
        SET_SNACKBAR:(state, payload)=>{
            state.snackbar = payload;
        },
    },
    getters:{
        GET_SNACKBAR: state => {
            return state.snackbar;
        },
    },
    actions:{
        SNACKBAR:({commit},payload)=>{
            console.log(payload)
            commit('SET_SNACKBAR',payload)
        }
    }
}
