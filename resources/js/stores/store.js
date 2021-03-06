
import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Questions from "./modules/question";
import Subjects from "./modules/subject";
import Snackbar from "./modules/snackbar";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        User,
        Questions,
        Subjects,
        Snackbar,
    }
});

export default store
