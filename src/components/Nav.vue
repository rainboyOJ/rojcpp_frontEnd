<script setup>
import { ref, reactive } from 'vue'
import card from '@/components/card.vue'

import { BeakerIcon, ChartBarIcon, HomeIcon, ChatAltIcon, ClipboardListIcon ,MapIcon }from '@heroicons/vue/solid'


const linkIconClass = ref("w-7 h-7")


</script>

<template>
  <div class>
    <card>
      <div class="text-3xl xl:w-xl h-20 mx-auto flex justify-end">
        <router-link to="/" class="font-bold text-4xl flex justify-center items-center px-5">ROJ</router-link>

        <router-link to="/" class="flex justify-center items-center px-5">
          <home-icon :class="linkIconClass" />主页
        </router-link>

        <router-link to="/problems" class="flex justify-center items-center px-5">
          <ClipboardListIcon :class="linkIconClass" />题目
        </router-link>

        <router-link to="/submission" class="flex justify-center items-center px-5">
          <MapIcon :class="linkIconClass" />提交
        </router-link>

        <router-link to="/rank" class="flex justify-center items-center px-5">
          <ChartBarIcon :class="linkIconClass"></ChartBarIcon>排名
        </router-link>

        <router-link to="/about" class="flex justify-center items-center px-5">
          <ChatAltIcon :class="linkIconClass" />关于
        </router-link>
      </div>
    </card>
  </div>
</template>
