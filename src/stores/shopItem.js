import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { getShopItem } from "@/api/secKill";

export const secKillTimeObj = defineStore(
  "shopItem",
  () => {
    const obj = reactive({});
    const time = ref(1);

    const shopItem = async () => {
      const res = await getShopItem();
      time = res.time;
      obj.value = res.data;
    };
    return { obj, time, shopItem };
  },
  {
    persist: true, // 持久化
  }
);
