
import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Questions from "./modules/question";
import Subjects from "./modules/subject";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
        Questions,
        Subjects,
    }
});
