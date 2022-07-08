<template>
<div class="flex justify-center p-2 my-5"> <!-- pagenation container -->
    <div
        class="divide-x border rounded-lg flex box-content divide-gray-300 border-slate-300 shadow-md overflow-hidden text-gray-500"
        > <!-- pagenation wrapper-->

        <router-link
            class="pagenation-item"
            to="/"
            >
            <ChevronLeftIcon class="text-xs" ></ChevronLeftIcon>
        </router-link>

        <template
            v-for="(link ,index) in links"
            :key="index"
            >
            <router-link
                v-if="!link.disabled"
                :to="link.link"
                class="pagenation-item"
                >
                {{link.name}}
            </router-link>
            <span v-else class="pagenation-item-disabled" >
                <!--<DotsHorizontalIcon class="text-sm -my-1 font-thin"></DotsHorizontalIcon>-->
                ...
            </span>
        </template>

        <router-link
            class="pagenation-item"
            to="/"
            >
            <ChevronRightIcon
                class="text-xs"
            ></ChevronRightIcon>

        </router-link>
    </div> <!-- pagenation wrapper end -->
</div>  <!-- pagenation container end-->
</template>

<script>
import {ChevronLeftIcon,ChevronRightIcon,DotsHorizontalIcon} from '@heroicons/vue/solid'

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
    name:'my-pagenation',
    components : {ChevronLeftIcon,ChevronRightIcon,DotsHorizontalIcon},
    props: {
        links:{
            type:Array,
            default: () => {
                return [];
            },
        }
    },
    setup() {
    }
})
</script>

<style lang="postcss" scoped>

.pagenation-item {
    @apply p-2 inline-block w-10 h-10 text-center hover:bg-gray-200 hover:text-gray-900 hover:font-bold
}

.pagenation-item-disabled {
    @apply p-2 w-10 h-10 inline-flex justify-center items-end
}

</style>
