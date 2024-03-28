import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const secKillTimeObj = defineStore(
  "secTime",
  () => {
    const obj = reactive({});
    const pnumber = computed(() => obj.value.pnumber);

    return { obj, pnumber };
  },
  {
    persist: true, // 持久化
  }
);
