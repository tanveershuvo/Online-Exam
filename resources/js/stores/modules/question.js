import axios from "axios";
import Token from "./token";
export default {
    state: {
        questions:[],
    },
    getters: {
        GET_ALL_QUESTIONS: state => {
            return state.questions;
        },
    },
    mutations: {
        SET_QUESTIONS:(state, payload)=>{
            state.questions = payload;
        },
    },
    actions: {
        ALL_QUESTIONS: ({commit}) => {
            return new Promise((resolve, reject) => {
                axios
                    .get('/all-questions')
                    .then(({data, status}) => {
                        if (status === 200) {
                            commit("SET_QUESTIONS", data);
                            resolve(true)
                        }
                    })
                    .catch(error => {
                            reject(error)
                    });
            });
        },
        ADD_QUES_TO_SUB:({dispatch,commit},data) => {
            return new Promise((resolve, reject) => {
                axios
                    .post('/add-ques-to-sub',{data})
                    .then(({data, status}) => {
                        if (status === 200) {
                            dispatch('ALL_QUESTIONS')
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    });
            });
        },
        ADD_QUESTION_OPTION:({dispatch,commit},data) => {
            return new Promise((resolve, reject) => {
                axios
                    .post('/add-question-options',{data})
                    .then(({data, status}) => {
                        if (status === 200) {
                            dispatch('ALL_QUESTIONS')
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    });
            });
        }
    }
}
