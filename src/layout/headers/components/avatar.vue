<template>
  <el-dropdown>
    <span class="el-dropdown-link"></span>
    <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const avatar = ref(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F23%2F20200323235308_cmuow.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651809138&t=332a13d0b736d05f65cdab8fbcc11c09'
)

const handleLogout = () => {
  store.dispatch('app/logout')
}
</script>

<style scoped lang="scss">
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
