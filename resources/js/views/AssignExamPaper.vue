<template>
        <v-card class="mb-6 stick">
<!--            <v-row>-->
<!--                <v-col-->
<!--                    class="d-flex"-->
<!--                    cols="12"-->
<!--                    sm="6"-->
<!--                >-->
<!--                    <v-text-field-->
<!--                        label="Search Question"-->
<!--                        type="search"-->
<!--                        prepend-icon="mdi-magnify"-->
<!--                        v-model="search"-->
<!--                    >-->
<!--                    </v-text-field>-->
<!--                </v-col>-->
<!--                <v-col-->
<!--                    class="d-flex"-->
<!--                    cols="12"-->
<!--                    sm="4"-->
<!--                >-->
<!--                    <v-select-->
<!--                        :items="subjects"-->
<!--                        label="Select Subject"-->
<!--                        item-text="subject_name"-->
<!--                        item-value="id"-->
<!--                        name="subjects"-->
<!--                        v-model="data.subId"-->
<!--                    ></v-select>-->
<!--                </v-col>-->
<!--                <v-col-->
<!--                    class="d-flex"-->
<!--                    cols="12"-->
<!--                    sm="2"-->
<!--                >-->
<!--                    <v-btn-->
<!--                        depressed-->
<!--                        :disabled="data.queId.length < 1 || data.subId === null"-->
<!--                        color="success"-->
<!--                        class="mt-4"-->
<!--                        @click="addQtoSub"-->
<!--                    >-->
<!--                        Add Q to Sub-->
<!--                    </v-btn>-->
<!--                </v-col>-->
<!--            </v-row>-->
        </v-card>

</template>>

<script>
export default {
name: "AssignExamPaper"
}
</script>

<style scoped>

</style>
