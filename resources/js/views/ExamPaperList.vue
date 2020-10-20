<template>
    <v-card color="grey lighten-4">
    <v-btn
        color="success"
        class="my-4 ml-4"
    @click="exampaper">
        Create New ExamPaper
    </v-btn>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        item-key="name"
        class="elevation-1 test"
        color="grey lighten-4"
    ></v-data-table>

    </v-card>
</template>

<script>
export default {
    data () {
        return {
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    value: 'name',
                },
                { text: 'Category', value: 'category' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    category: 'Ice cream',
                },
                {
                    name: 'Ice cream sandwich',
                    category: 'Ice cream',
                },
                {
                    name: 'Eclair',
                    category: 'Cookie',
                },
                {
                    name: 'Cupcake',
                    category: 'Pastry',
                },
                {
                    name: 'Gingerbread',
                    category: 'Cookie',
                },
                {
                    name: 'Jelly bean',
                    category: 'Candy',
                },
                {
                    name: 'Lollipop',
                    category: 'Candy',
                },
                {
                    name: 'Honeycomb',
                    category: 'Toffee',
                },
                {
                    name: 'Donut',
                    category: 'Pastry',
                },
                {
                    name: 'KitKat',
                    category: 'Candy',
                },
            ],
        }
    },
    methods:{
        exampaper(){
            this.$router.push({name:'AssignExamPaper'})
        }
    }
}
</script>

<style scoped>

</style>
