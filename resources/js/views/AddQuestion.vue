<template>
    <div>
    <h3 class="mb-4">Add Question & Option Form</h3>
    <v-card
        class="px-6 py-4"
        color="grey lighten-5"
    >
        <ValidationObserver ref="observer" v-slot="{ validate, handleSubmit }">
            <v-form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="{ errors }" name="Question" rules="required">
            <v-textarea
                label="Question"
                rows="2"
                row-height="30"
                v-model="data.question"
                :error-messages="errors"
                required
                outlined
                hide-details
                class="mb-2"
            ></v-textarea>
            <span class="red--text small" >{{ errors[0] }}</span>
        </ValidationProvider>
            <v-row
            >
                <v-col
                    cols="12"
                    md="4"
                >
                    <ValidationProvider name="Option A" v-slot="{ errors }" rules="required">
                    <v-text-field
                        v-model="data.options[0]"
                        :error-messages="errors"
                        label="Option A"
                        required
                        outlined
                        hide-details
                    ></v-text-field>
                        <span class="red--text small" >{{ errors[0] }}</span>
                    </ValidationProvider>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <ValidationProvider name="Option B" v-slot="{ errors }" rules="required">
                    <v-text-field
                        v-model="data.options[1]"
                        :error-messages="errors"
                        label="Option B"
                        required
                        outlined
                        hide-details
                    ></v-text-field>
                        <span class="red--text small" >{{ errors[0] }}</span>
                    </ValidationProvider>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <ValidationProvider name="Option C" v-slot="{ errors }" rules="required">
                    <v-text-field
                        v-model="data.options[2]"
                        :error-messages="errors"
                        label="Option C"
                        required
                        outlined
                        hide-details
                    ></v-text-field>
                        <span class="red--text small" >{{ errors[0] }}</span>
                    </ValidationProvider>
                </v-col>
            </v-row>
            <v-row
            >
                <v-col
                    cols="12"
                    md="6"
                >
                    <ValidationProvider v-slot="{ errors }" name="Option D" rules="required">
                    <v-text-field
                        v-model="data.options[3]"
                        :error-messages="errors"
                        label="Option D"
                        required
                        outlined
                        hide-details
                    ></v-text-field>
                        <span class="red--text small" >{{ errors[0] }}</span>
                    </ValidationProvider>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                    <ValidationProvider v-slot="{ errors }" name="Option E" rules="required">
                    <v-text-field
                        v-model="data.options[4]"
                        :error-messages="errors"
                        label="Option E"
                        required
                        outlined
                        hide-details
                    ></v-text-field>
                        <span class="red--text small" >{{ errors[0] }}</span>
                    </ValidationProvider>
                </v-col>
            </v-row>
            <v-row
            >
            <v-col
                cols="12"
                md="6"
            >
                <ValidationProvider v-slot="{ errors }" name="Correct Answer" rules="required">
                <v-select
                    :items="items"
                    item-text="name"
                    item-value="value"
                    :required="!data.correct_ans_id"
                    v-model="data.correct_ans_id"
                    label="Select Correct Option"
                    outlined
                    hide-details
                ></v-select>
                    <span class="red--text small" >{{ errors[0] }}</span>
                </ValidationProvider>
            </v-col>
            </v-row>
            <v-btn
                class="mr-4"
                type="submit"
                color="success"
            >
                submit
            </v-btn>
            </v-form>
        </ValidationObserver>
    </v-card>
    </div>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import {mapActions} from "vuex";

setInteractionMode("eager");

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
});
export default {
    name: "AddQuestion",
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        items: [
            { name: 'Option A', value: 0 },
            { name: 'Option B', value: 1 },
            { name: 'Option C', value: 2 },
            { name: 'Option D', value: 3 },
            { name: 'Option E', value: 4 },
        ],
        data:{
            question:'',
            options:[],
            correct_ans_id : null,
        }
    }),
    methods:{
        ...mapActions(['ADD_QUESTION_OPTION','ALL_QUESTIONS']),
        submit(){
            this.$store.dispatch('ADD_QUESTION_OPTION',this.data).then(success => {
                this.$store.dispatch("SNACKBAR",{
                    text:'New Question With Options Are Added!',
                    color:'success',
                    showing:true
                })
                this.$router.push("/home")
            })

        }
    }
}

</script>

<style scoped>
.small{
    font-size: 0.8em;
}
</style>
