<template>
  <div v-if="istrue">
    //图片
    <img src="../assets/美酒.png" alt="" class="rounded-sm" />

    <div class="pt-2 flex justify-between">
      <span>商品数量：{{ obj.number }}</span>
      <span>商品价格：{{ obj.price }}</span>
    </div>
    //描述
    <div class="">
      <h1 class="text-3xl pt-4">{{ obj.name }}</h1>

      <div class="pt-4 text-ellipsis">{{ obj.description }}</div>
    </div>
    //交互
    <button
      @click="handleButtonClick"
      class="w-full text-center pt-2 bg-red-600 hover:bg-red-700"
    >
      点击秒杀
    </button>
    <div class="">倒计时：{{ secKillTimeDisplay }}</div>
  </div>

  <div v-else>
    <div class="text-3xl">恭喜你抢到此物</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, reactive } from "vue";

import { secKillTimeObj } from "@/stores/shopItem"; // 替换为实际的导入路径

const shopItemStore = secKillTimeObj();

// 在组件生命周期钩子、事件处理函数等处调用方法或访问状态
onMounted(() => {
  shopItemStore.shopItem(); // 获取商品数据
});

// 访问计算属性
let obj = reactive({});

obj = { ...obj, ...shopItemStore.obj };
const time = shopItemStore.time;

const istrue = ref(true);

const countdownRef = ref(time);
let intervalId;
const startCountdown = () => {
  intervalId = setInterval(() => {
    countdownRef.value--;
    if (countdownRef.value <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};
// 在组件挂载后开启倒计时
onMounted(startCountdown);
// 在组件卸载前清理定时器
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
// 返回计算属性，用于在模板中展示倒计时
const secKillTimeDisplay = computed(() => countdownRef.value);

function handleButtonClick() {
  console.log("按钮点击了");

  // 可以在这里处理秒杀逻辑，如减少库存等
}
</script>
