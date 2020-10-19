<template>
    <div>
        <v-card class="mb-6 stick">
            <v-row>
                            <v-col
                                class="d-flex"
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                    label="Search Question"
                                    type="search"
                                    prepend-icon="mdi-magnify"
                                    v-model="search"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col
                                class="d-flex"
                                cols="12"
                                sm="4"
                            >
                                <v-select
                                    :items="subjects"
                                    label="Select Subject"
                                    item-text="subject_name"
                                    item-value="id"
                                    name="subjects"
                                    v-model="data.subId"
                                ></v-select>
                            </v-col>
                            <v-col
                                class="d-flex"
                                cols="12"
                                sm="2"
                            >
                                <v-btn
                                    depressed
                                    :disabled="data.queId.length < 1 || data.subId === null"
                                    color="success"
                                    class="mt-4"
                                    @click="addQtoSub"
                                >
                                    Add Q to Sub
                                </v-btn>
                            </v-col>
                        </v-row>
        </v-card>
        <v-card>
            <v-flex v-for="question in filteredList"
                  :key="question.id" class="pa-4">
                <v-card class="question" color="grey lighten-2"  tile>
                    <v-layout row xs8>
                        <v-flex xs1
                                ml-8 mb-4>

                            <v-checkbox
                                color="indigo"
                                :value="question.id"
                                v-model="data.queId"
                                hide-details
                            ></v-checkbox>
                        </v-flex>
                        <v-flex xs10>
                            <h5 class="pa-4">
                                {{question.title}}
                            </h5>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-card>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: "Home",
    data:()=>({
        search:'',
        data:{
            subId:null,
            queId:[],
        }
    }),
    methods:{
        ...mapActions(['ALL_SUBJECTS','ALL_QUESTIONS']),
        addQtoSub(){
            this.$store.dispatch("ADD_QUES_TO_SUB",this.data).then(success => {
                this.$store.dispatch("SNACKBAR",{
                    text:'Question added to subject successfully',
                    color:'success',
                    showing:true
                })
                this.ALL_QUESTIONS()
        })
        }
    },
    computed: {
        ...mapGetters({
            subjects: 'GET_ALL_SUBJECT',
            questions:'GET_ALL_QUESTIONS'
        }),
        filteredList:function (){
            const searchQ = this.search.toLowerCase().trim();
            if (!searchQ) return this.questions;
            return this.questions.filter(question => question.title.toLowerCase().indexOf(searchQ) > -1);
        }
    },
    mounted() {
         this.ALL_SUBJECTS()
         this.ALL_QUESTIONS()
    }
}
</script>

<style scoped>
.stick {
position: -webkit-sticky;
position: sticky;
        top: 4rem;
       z-index: 2;
    }
.question {
    cursor: grabbing;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
