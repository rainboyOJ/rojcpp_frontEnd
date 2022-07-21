<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'my-loading',
    props:{
        // 是否讀取中 (is data loading)
        show: {
            type: Boolean,
            require: true,
            default: () => true
        },
    },
    setup() {
        
    },
})
</script>

<template>
  <div>
    <div id="loader-wrapper" v-show="show">
      <div id="loader"></div>
      <div class="load_title">正在加载</div>
    </div>
  </div>
</template>

<style scoped>
#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    background: #000;
    opacity: 0.8;
}

#loader-wrapper .load_title {
    color: #4ea3fb;
    font-size: 18px;
    width: 100%;
    text-align: center;
    z-index: 9999999999999;
    position: absolute;
    top: 50%;
    opacity: 1;
    line-height: 30px;
    padding-top: 10px;
}

#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 40%;
    z-index: 1001;
    width: 90px;
    height: 90px;
    margin: -45px 0 0 -45px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #4ea3fb;
    -webkit-animation: spin 2s linear infinite;
    -ms-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    -o-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #4ea3fb;
    -webkit-animation: spin 3s linear infinite;
    -ms-animation: spin 3s linear infinite;
    -moz-animation: spin 3s linear infinite;
    -o-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}

#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #4ea3fb;
    -webkit-animation: spin 1.5s linear infinite;
    -ms-animation: spin 1.5s linear infinite;
    -moz-animation: spin 1.5s linear infinite;
    -o-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
