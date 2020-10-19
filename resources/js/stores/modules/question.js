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
        REMOVE_ASSIGNED_QUESTION:(state, id)=>{
            let index = state.questions.findIndex(question => question.id === id)
            state.questions.splice(index, 1)
        }
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
        ADD_QUES_TO_SUB:({commit},data) => {
            return new Promise((resolve, reject) => {
                axios
                    .post('/add-ques-to-sub',{data})
                    .then(({data, status}) => {
                        if (status === 200) {
                            commit("REMOVE_ASSIGNED_QUESTION", data);
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
