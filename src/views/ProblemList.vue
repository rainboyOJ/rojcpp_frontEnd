<script setup>
import { ref ,reactive} from 'vue'
import myTable from '@/components/Table.vue'

const table = reactive(
    {
        isLoading:true,
        columns: [
            "col1","col2","col3"
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
    ></myTable>
    
  </div>
</template>

