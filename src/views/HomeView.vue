<script setup>
import { ref } from "vue";

import ShopCard from "../components/shopCard.vue";

const obj = {
  title: "美酒",
  desc: "这是描述",
  url: "vue秒杀\secKill\src\assets\美酒.png",
  shopNum: "10",
  shopPrice: 12,
  secKillTime: 12,
};
</script>

<template>
  <main>
    nihao
    <ShopCard :obj="obj"> </ShopCard>
  </main>
</template>
