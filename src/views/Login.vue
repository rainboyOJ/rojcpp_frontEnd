<script setup>
import Card from '@/components/card.vue'
import {api} from '@/utils/axios'
import {ref,reactive,toRaw} from 'vue'
import { useRouter } from 'vue-router' 

const router = useRouter() //跳转主页用
const login_data = reactive({
    username:'',
    password:''
})

const login_button = () => {
    let data = toRaw(login_data)
    console.log(data)
    api.post('/user/login',data)
        .then( res=> {
            //登录成功,跳转主页
            //console.log(res)
            router.push({name:'Home'});
        })
        .catch(e=>{
            console.log(e)
        })
}

</script>
<template>
    <div class="h-screen w-screen flex justify-center items-center overflow-hidden">
        <Card class="rounded-lg shadow-md xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <template v-slot:header>
            <div class="border bg-gray-50 p-5">
                <h1 class="text-2xl"> 登录 </h1>
            </div>
        </template>

        <template v-slot:default>
        <section class="py-5 m-10">
            <div class="px-6 text-gray-800">
                <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-12"
                     >
                     <div class="">
                         <form>

                             <!-- username input -->
                             <div class="mb-6 flex items-center">
                                 <label for="" class="w-20 text-2xl font-semibold text-center">用户:</label>
                                 <input
                                     type="text"
                                     class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                     id="username"
                                     placeholder="Email address"
                                     v-model="login_data.username"
                                     />
                             </div>

                             <!-- Password input -->
                             <div class="mb-6 flex items-center text-xl">
                                 <label for="" class="w-20 text-center font-semibold">密码:</label>
                                 <input
                                     type="password"
                                     class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                     id="password"
                                     placeholder="Password"
                                     v-model="login_data.password"
                                     />
                             </div>

                             <!--<div class="flex justify-end items-center mb-6">-->
                                 <!--<a href="#!" class="text-gray-800 ">Forgot password?</a>-->
                             <!--</div>-->

                             <div class="flex justify-center text-center lg:text-left">
                                 <button
                                     type="button"
                                     class="button-blue mr-5"
                                     @click="login_button"
                                     >
                                     登录
                                 </button>
                                 <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                     <router-link
                                         to="/register"
                                         class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                         >注册</router-link>
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
