<template>
    <v-app>
        <navbar v-if="isLoggedIn" />
        <v-content>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    <app-footer/>
    </v-app>
</template>
<script>
import AppFooter from "./AppFooter";
import Navbar from "./Navbar";
import {mapGetters} from "vuex";
export default {
    components:{AppFooter,Navbar},
    computed: {
        ...mapGetters([
            'IS_LOGGED_IN'
        ]),
        isLoggedIn: function() {
            return this.$store.getters.IS_LOGGED_IN;
        }
    },
}
</script>
<style>

</style>
