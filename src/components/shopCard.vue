<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  obj: {
    type: Object,
    default() {
      return {
        title: "美酒1",
        desc: "这是描述1",
        url: "../assets/美酒.png",
        shopNum: "101",
        shopPrice: 121,
        secKillTime: 121,
      };
    },
  },
});
const countdownRef = ref(props.obj.secKillTime);
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

const emit = defineEmits(["on-seckill"]);

// const remainingTime = ref(props.time);
function handleClick() {
  emit("on-seckill");
  // 可以在这里处理秒杀逻辑，如减少库存等
}
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->

    <div
      class="w-80 h-100 shadow-sm ml-2 pl-6 pr-6 pt-8 pb-8 bg-slate-200 rounded-lg flex-col"
    >
      <img src="../assets/美酒.png" alt="" class="rounded-sm" />

      <div class="pt-2 flex justify-between">
        <span>商品数量：{{ obj.shopNum }}</span>
        <span>商品价格：{{ obj.shopPrice }}</span>
      </div>
      <div class="">
        <h1 class="text-3xl pt-4">{{ obj.title }}</h1>

        <div class="pt-4 text-ellipsis">{{ obj.desc }}</div>
      </div>
      <button
        @click="handleClick"
        class="w-full text-center pt-2 bg-red-600 hover:bg-red-700"
      >
        点击秒杀
      </button>
      <div class="">倒计时：{{ secKillTimeDisplay }}</div>
    </div>
  </div>
</template>
