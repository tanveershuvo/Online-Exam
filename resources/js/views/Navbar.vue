<template>
    <div>
        <v-app-bar app color="primary" dark elevation="0">
            <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-icon>mdi-account</v-icon>
            <label class="ma-2">{{user_name}}</label>
                <v-btn @click="logout" text>
                    <v-icon>mdi-logout</v-icon> Logout
                </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="sidebarMenu"
            app
            floating
            :permanent="sidebarMenu"
            color="grey lighten-2"
        >
            <v-list dense color="primary" dark>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu">mdi-chevron-left</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3 class="font-weight-bold">Dashboard</h3>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Navbar",
    data:()=>({
        sidebarMenu : true,
        user_name:'',
        items:[
            { title:'All Questions',to:'/home', icon: 'mdi-view-dashboard'},
            { title:'Exam Paper',to:'/exam-papers',icon: 'mdi-file-document'},
            { title:'Add Question',to:'/add-question',icon: 'mdi-file-document'},
        ]
    }),
    methods:{
        logout() {
            this.$store.dispatch("LOGOUT")
                .then(success => {
                    this.$router.push("/")
                })
        }
    },
    mounted() {
        this.user_name = this.$store.getters.USER_NAME
    },

}
</script>

<style scoped>

</style>
