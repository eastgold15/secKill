<script setup>
import { reactive, ref, watch } from "vue";
const istrue = ref(true);

import shopstart from "../components/shopStart.vue";
import shopsuccess from "./shopsuccess.vue";

const obj = reactive({
  title: "美酒",
  desc: "这是描述",
  url: "vue秒杀\secKill\src\assets\美酒.png",
  shopNum: "10",
  shopPrice: 12,
  secKillTime: 12,
});

const shopsecKillTime = async () => {
  obj.value = await shopsecKillTime();
  ElMessage.success("注册成功");
};
watch(obj, (newval, oldval) => {
  console.log(newval, oldval);
});

function handleSecKillEvent() {
  if (obj.value.secKillTime == 0) {
    console.log("sss");
    istrue.value = false;
    obj.value.shopNum--;
  }
}
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->

    <div
      class="w-80 h-108 shadow-sm ml-2 pl-6 pr-6 pt-8 pb-8 bg-slate-200 rounded-lg flex flex-col justify-center"
    >
      <div v-if="istrue">
        <shopstart :obj="obj" @on-seckill="handleSecKillEvent"></shopstart>
      </div>
      <div v-else>
        <shopsuccess></shopsuccess>
      </div>
    </div>
  </div>
</template>
