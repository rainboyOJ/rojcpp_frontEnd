<script setup>
import Card from '@/components/card.vue'
import { useRouter } from 'vue-router'
import {ref,reactive,toRaw} from 'vue'
import {api} from '@/utils/axios'
import {myalert} from '@/utils/alert'

const router = useRouter()
const reg_data = reactive({
    username:'',
    nickname:'',
    password:'',
    email:''
})
const repeat_password = ref('')

const reg_button = async () =>{
    let data =  toRaw(reg_data)
    console.log( data)

    api.post('/user/register',data)
        .then(res =>{
            if( rep.code == 0) { //功能
                alert('注册成功,点击跳转到登录界面');
                router.push({name:'Login'});
            }
            else
                alert(rep.msg)
        })
        .catch(e =>{
            console.log(e)
            if(e.code == 'ECONNABORTED'){
                alert('请求超时')
            }
        })
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
                                     id="username"
                                     placeholder="用户名"
                                     v-model="reg_data.username"
                                     />
                             </div>

                             <!-- 昵称 input -->
                             <div class="mb-6 flex items-center">
                                 <label for="" class="w-40 text-xl font-semibold text-right mr-4">昵称:</label>
                                 <input
                                     type="text"
                                     class="myform-input"
                                     id="nickname"
                                     placeholder="昵称"
                                     v-model="reg_data.nickname"
                                     />
                             </div>

                             <!-- email input -->
                             <div class="mb-6 flex items-center">
                                 <label for="" class="w-40 text-xl font-semibold text-right mr-4">邮箱:</label>
                                 <input
                                     type="text"
                                     class="myform-input"
                                     id="email"
                                     placeholder="邮箱"
                                     v-model="reg_data.email"
                                     />
                             </div>

                             <!-- Password input -->
                             <div class="mb-6 flex items-center ">
                                 <label for="" class="w-40 text-right text-xl font-semibold mr-4">密码:</label>
                                 <input
                                     type="password"
                                     class="myform-input"
                                     id="password"
                                     placeholder="密码"
                                     v-model="reg_data.password"
                                     />
                             </div>

                             <!-- Password input -->
                             <div class="mb-6 flex items-center ">
                                 <label for="" class="w-40 text-right text-xl font-semibold mr-4">重复密码:</label>
                                 <input
                                     type="password"
                                     class="myform-input"
                                     id="passwordRepeat"
                                     placeholder="重复密码"
                                     v-model="repeat_password"
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
