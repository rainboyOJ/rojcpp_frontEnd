<script setup>
import { ref ,reactive,computed} from 'vue'
import {page} from '@/utils/page'
import myTable from '@/components/Table.vue'

let nowPage = ref(4)

const pagenation = computed( ()=> page(100,nowPage.value,6,"/problems"))

const table = reactive(
    {
        isLoading:false,
        columns: [
            {
                label:"col1",
                field:'id'
            },
            {
                label:"col2",
                field:'name'
            },
            {
                label:"col3",
                field:'email'
            },
        ],
        rows : [
            {
                id:1,
                name:'name1',
                email:'email1'
            },
            {
                id:2,
                name:'name2',
                email:'email2'
            },
            {
                id:3,
                name:'name3',
                email:'email3'
            },
            {
                id:4,
                name:'name4',
                email:'email4'
            }
        ]
    }
)

</script>
<template>
  <div>
    <h1>problemList page</h1>
    <myTable
        :isLoading="table.isLoading"
        :columns="table.columns"
        :rows="table.rows"
        :pagenation="pagenation"
    >
        <template v-slot:id="data">
            <i>{{ data.value.id }}</i>
        </template>
    </myTable>
    
  </div>
</template>

