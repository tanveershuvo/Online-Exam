import axios from "axios";
export default {
    state: {
        subjects:[],
    },
    getters: {
        GET_ALL_SUBJECT: state => {
            return state.subjects;
        },
    },
    mutations: {
        SET_SUBJECT:(state, payload)=>{
            state.subjects = payload;
        },
    },
    actions: {
        ALL_SUBJECTS: ({commit}) => {
            return new Promise((resolve, reject) => {
                axios
                    .get('/all-subjects')
                    .then(({data, status}) => {
                        if (status === 200) {
                            commit("SET_SUBJECT", data);
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    });
            });
        },
    }
}
