<template>
  <div class="code-preview my-8 bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 overflow-hidden " >  <!-- table container -->
    <div v-if="title"> <!-- table title -->
      {{title}}
    </div><!-- table title end -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg"> <!-- table body -->
      <div v-if="isLoading"> <!-- loading wrapping -->
        <div>
          <span>Loading...</span>
        </div>
      </div> <!-- loading wrapping -->

      <pagenation
          :links= "pagenation"
      ></pagenation>

      <table
          class="w-full text-xl text-left text-gray-500 dark:text-gray-400"
          ref="localTable"
          >

          <thead class="text-3xl font-bold text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b" >
            <tr>
                <th
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                v-for="(col,index) in columns"
                :key="index"
                >
                {{col.label}}
                </th>
            </tr>
          </thead>
          <tbody v-if="rows.length > 0">
              <tr 
                  v-for= "(row,index) in rows"
                  :key="index"
                  class="text-2xl bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700"

                  @click="$emit('row-clicked',row)"
                  >
                  <td 
                      v-for="(col,j) in columns"
                      :key = "j"
                      class="px-6 py-4 font-medium"
                      >
                      <div v-if="slots[col.field]">
                          <slot :name="col.field" :value="row"></slot>
                      </div>
                      <span v-else> {{ row[col.field]}}</span>
                  </td>
              </tr>
          </tbody>

        </table>


      <pagenation
          :links= "pagenation"
      ></pagenation>

    </div> <!-- table body -->
  </div><!-- table container end -->

</template>
<script>
import pagenation from './Pagenation.vue'
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  nextTick,
  onMounted,
} from "vue";

export default defineComponent({
  name:'my-table',
    components:{pagenation},
  emits: [
    'do-search',
    'is-finished',
    'row-cliked'
  ],
  props:{
    // 是否讀取中 (is data loading)
    isLoading: {
      type: Boolean,
      require: true,
    },
    // 是否執行了重新查詢 (Whether to perform a re-query)
    isReSearch: {
      type: Boolean,
      require: true,
    },
    // 標題 (title)
    title: {
      type: String,
      default: "",
    },
    // 是否鎖定第一欄位位置 (Fixed first column's position)
    isFixedFirstColumn: {
      type: Boolean,
      default: false,
    },
    // 欄位 (Field)
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 資料 (data)
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 資料列類別 (data row classes)
    rowClasses: {
      type: [Array, Function],
      default: () => {
        return [];
      },
    },
    // 一頁顯示筆數 (Display the number of items on one page)
    pageSize: {
      type: Number,
      default: 10,
    },
    // 總筆數 (Total number of transactions)
    total: {
      type: Number,
      default: 100,
    },
    // 現在頁數 (Current page number)
    page: {
      type: Number,
      default: 1,
    },
    // 是否隱藏換頁資訊 (Hide paging)
    isHidePaging: {
      type: Boolean,
      default: false,
    },
    pagenation : {
        type: Array,
        default : () => []
    }
  },
  setup(props,{emit,slots}) {
      const links = reactive([
          { link:"/1" ,name:"1"},
          { link:"/2" ,name:"2"},
          { link:"/3" ,name:"3"},
          { link:"/4" ,name:"4"},
          { link:"/4" ,name:"4",disabled:true},
      ])
      return {
          links,
          slots
      }
  },
})
</script>

