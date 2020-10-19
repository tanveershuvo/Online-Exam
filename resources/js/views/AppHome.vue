<template>
    <v-app>
        <navbar v-if="isLoggedIn" />
        <v-main>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-snackbar
                    v-model="snackbar.showing"
                    :bottom="true"
                    :right="true"
                    :timeout="5000"
                    :color="snackbar.color"
                >
                    {{ snackbar.text }}
                    <template v-slot:action="{ attrs }">
                        <v-btn
                            dark
                            text
                            v-bind="attrs"
                            @click="snackbar.showing = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
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
        ...mapGetters({
            isLoggedIn: 'IS_LOGGED_IN',
            snackbar: 'GET_SNACKBAR'
        }),
    }
}
</script>
<style>

</style>
