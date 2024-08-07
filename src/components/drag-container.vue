<template>
  <div class="container-wrap" @mousemove="onDragMove" @mouseup="onDragEnd">
    <div class="left-part" :style="`width: ${calcWidth};margin-right: ${props.dividerWidth}`">
      <slot name="left" ></slot>  
    </div>
    <div class="middle-drag"
      :style="`left: ${calcWidth};background-color: ${props.dividerColor};width: ${props.dividerWidth}px;`"
      @mousedown="onDragStart" 
      ></div>
    <div class="right-part">
      <slot name="right" ></slot>  
    </div> 
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  initSize: {
    type: [Number, String],
    default: 300
  },
  dividerColor: {
    type: String,
    default: '#ddd'
  },
  dividerWidth: {
    type: Number,
    default: 2
  }
})
let isDraging = false
let initX = 0
let oldSize = 0

const leftSize = ref(props.initSize)

const calcWidth = computed(() => {
  if(typeof leftSize.value === 'string') {
    return leftSize.value
  }
  return leftSize.value + 'px'
})

const onDragStart = (e) => {
  isDraging = true
  oldSize = leftSize.value
  initX = e.clientX
}

const onDragEnd = () => {
  isDraging = false
}

const onDragMove = (e) => {
  if(isDraging) {
    const clientX = e.x
    leftSize.value = oldSize + clientX - initX
  }
 }


</script>

<style lang="less" scoped>
.container-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  .left-part{
    overflow: hidden;
    margin-right: 2px;
  }
  .middle-drag{
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #ddd;
    cursor: e-resize;
  }
  .right-part{
    flex: 1;
    overflow: hidden;
  }
} 
</style>