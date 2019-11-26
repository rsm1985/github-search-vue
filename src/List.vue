<template>
<div>
  <h1>My list</h1>
  <Panel @updateParent="toggleGrid"
         :settings="settings"
         :showGrid="settings.showGrid"
         :length="list.length"
         />
  <div :class="{'search-results': true, grid: settings.showGrid}">
    <Repository v-if="list.length" v-for="item of list" :item="item" :key="item.id" @addRepoToList="$emit('addRepoToList', item)"/>
  </div>
</div>
</template>

<script>
  export default {
    props: ['list', 'settings'],
    methods: {
      toggleGrid(gridState){
        this.$emit('toggleGrid', gridState)
      }
    }
  }
</script>

<style scoped>

</style>
