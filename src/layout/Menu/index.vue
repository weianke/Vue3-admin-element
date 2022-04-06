<template>
  <el-menu
    active-text-color="#ffd04b"
    :background-color="variables.menuBg"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.siderType"
  >
    <el-sub-menu
      :index="item.path + ''"
      v-for="(item, index) in menuListData"
      :key="item.id"
    >
      <template #title>
        <el-icon><component :is="iconList[index]"></component></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
      >
        <template #title>
          <el-icon><component :is="icon"></component></el-icon>
          <span>{{ it.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'
import variables from '@/styles/variables.scss'

const defaultActive = ref(sessionStorage.getItem('path') || '/users')

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

const menuListData = ref([])
const initMenuList = async () => {
  try {
    menuListData.value = await menuList()
  } catch (e) {
    console.log(e)
  }
}

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
  defaultActive.value = path
}

initMenuList()
</script>

<style scoped lang="scss"></style>
