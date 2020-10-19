import axios from "axios";
import Token from "./token"
export default {
    state: {
        isLoggedIn: !!localStorage.getItem("token"),
    },
    getters: {
        TOKEN: state => {
            return localStorage.getItem('token');
        },
        USER_NAME: state => {
            return localStorage.getItem('user_name');
        },
        IS_LOGGED_IN: state=>{
            return state.isLoggedIn;
        }
    },
    mutations: {
        SET_TOKEN: (state , payload) => {
            localStorage.setItem('token',payload);
        },
        SET_USER_NAME: (state , payload) => {
            localStorage.setItem('user_name',payload);
        },
        SET_IS_LOGGED_IN:(state, payload)=>{
            state.isLoggedIn = payload;
        },
    },
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise((resolve, reject) => {
                let msg;
                axios
                    .post('/auth/login', payload)
                    .then(({data, status}) => {
                        if (status === 200) {
                            const access_token = data.access_token
                            const user_name = data.user_name
                            if (Token.isValid(access_token)) {
                                commit("SET_TOKEN", access_token);
                                commit("SET_USER_NAME", user_name);
                                commit("SET_IS_LOGGED_IN", true);
                                axios.defaults.headers.common = {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer'+ localStorage.getItem('token'),
                                };
                                resolve(true);
                            }
                            return Promise.reject(msg = 'Bad Request!');
                        }
                    })
                    .catch(error => {
                        if(msg){
                            reject(error)
                        }else{
                            reject(error.response.data.err)
                        }
                    });
            });
        },
        LOGOUT: ({commit}) => {
            localStorage.removeItem('user_name')
            localStorage.removeItem('token')
            commit("SET_IS_LOGGED_IN", false);
            return true;
        }
    }
}
