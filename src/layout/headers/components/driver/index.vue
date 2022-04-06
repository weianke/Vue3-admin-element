<template>
  <div id="guide"  @click.prevent.stop="handleGuide">
    <svg-icon icon="guide"></svg-icon>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { steps } from './steps'

let driver
onMounted(() => {
  initDriver()
})

const initDriver = () => {
  driver = new Driver({
    animate: false, // Whether to animate or not
    opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
    padding: 10, // Distance of element from around the edges
    allowClose: true, // Whether the click on overlay should close or not
    overlayClickNext: false, // Whether the click on overlay should move next
    doneBtnText: '完成', // Text on the final button
    closeBtnText: '关闭', // Text on the close button for this step
    stageBackground: '#ffffff', // Background color for the staged behind highlighted element
    nextBtnText: '下一步', // Next button text for this step
    prevBtnText: '上一步'// Previous button text for this step
  })
}

const handleGuide = () => {
  driver.defineSteps(steps())
  driver.start()
}
</script>

<style scoped lang='scss'>

</style>
