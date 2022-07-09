<script setup>
import Card from '@/components/card.vue'
import {ref,reactive} from 'vue'
const reg_button = () =>{
    alert("hell")
}
</script>

<template>
<div class="h-screen w-screen flex justify-center items-center overflow-hidden">
    <Card class="rounded-lg shadow-md xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <template v-slot:header>
            <div class="border bg-gray-50 p-5">
                <h1 class="text-2xl">注册</h1>
            </div>
        </template>

        <template v-slot:default>
        <section class="py-5 m-10">
            <div class="px-6 text-gray-800">
                <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-12"
                     >
                     <div class="">
                         <form>

                             <!-- 用户名 input -->
                             <div class="mb-6 flex items-center">
                                 <label for="" class="w-40 text-xl font-semibold text-right mr-4">用户名:</label>
                                 <input
                                     type="text"
                                     class="myform-input"
                                     id="exampleFormControlInput2"
                                     placeholder="用户名"
                                     />
                             </div>

                             <!-- 昵称 input -->
                             <div class="mb-6 flex items-center">
                                 <label for="" class="w-40 text-xl font-semibold text-right mr-4">昵称:</label>
                                 <input
                                     type="text"
                                     class="myform-input"
                                     id="exampleFormControlInput2"
                                     placeholder="昵称"
                                     />
                             </div>

                             <!-- Password input -->
                             <div class="mb-6 flex items-center ">
                                 <label for="" class="w-40 text-right text-xl font-semibold mr-4">密码:</label>
                                 <input
                                     type="password"
                                     class="myform-input"
                                     id="exampleFormControlInput2"
                                     placeholder="密码"
                                     />
                             </div>

                             <!-- Password input -->
                             <div class="mb-6 flex items-center ">
                                 <label for="" class="w-40 text-right text-xl font-semibold mr-4">重复密码:</label>
                                 <input
                                     type="password"
                                     class="myform-input"
                                     id="exampleFormControlInput2"
                                     placeholder="重复密码"
                                     />
                             </div>


                             <div class="flex justify-center text-center lg:text-left">
                                 <button
                                     type="button"
                                     class="button-blue mr-5"
                                     @click="reg_button"
                                     >
                                     注册
                                 </button>
                                 <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                     已有帐号,
                                     <router-link
                                         to="/login"
                                         class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                         >登录</router-link>
                                 </p>
                             </div>
                         </form>
                     </div>
                </div>
            </div>
        </section>
        </template>
    </Card>
</div>
</template>

<style lang="postcss" scoped>

.myform-input {
    @apply block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}

</style>
