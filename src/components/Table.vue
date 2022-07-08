<template>
  <div>  <!-- table container -->
    <div v-if="title"> <!-- table title -->
      {{title}}
    </div><!-- table title end -->
    <div> <!-- table body -->
      <div v-if="isLoading"> <!-- loading wrapping -->
        <div>
          <span>Loading...</span>
        </div>

        <table
          class=""
          ref="localTable"
          >

          <thead>
            <th
              v-for="(col,index) in columns"
              :key="index"
              >
              {{col}}
            </th>
          </thead>

        </table>
      </div> <!-- loading wrapping -->
    </div> <!-- table body -->
  </div><!-- table container end -->

</template>
<script>
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
  },
  setup(props,{emit,slots}) {

  },
})
</script>

