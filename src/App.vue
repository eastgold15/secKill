<template>
  <div class="h-screen bg-red-700">
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <RouterView></RouterView>
  </div>
</template>

<script setup>
const ENV = import.meta.env;
console.log("ENV", ENV); //获取环境变量
</script>
