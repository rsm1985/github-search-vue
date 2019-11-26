<template>
  <div>
    <div :class="{panel: true, show: !!length, list: !gridShow, grid: gridShow}">
    <div :class="{panel__grid: true, }" @click="toggleGrid">
      <div class="panel__grid-element"></div>
      <div class="panel__grid-element"></div>
      <div class="panel__grid-element"></div>
      <div class="panel__grid-element"></div>
    </div>
    <div class="panel__list" @click="toggleList">
      <div class="panel__list-element"></div>
      <div class="panel__list-element"></div>
      <div class="panel__list-element"></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['length', 'showGrid', 'settings'],
    
    data(){
      return {
        gridShow: this.showGrid
      }
    },
    methods: {
      toggleGrid() {
        this.$emit('updateParent', true);
        this.gridShow = !this.gridShow;
      },
      toggleList() {
        this.$emit('updateParent', false);
        this.gridShow = !this.gridShow;
      }
    }
  }
</script>

<style lang="scss">
  .panel {
    display: none;
    justify-content: flex-end;
    padding: 30px 0;
    
    &__grid {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 32px;
      
      cursor: pointer;
      
    }
    &__grid-element {
      margin-bottom: 2px;
      width: 15px;
      height: 15px;
      background-color: #E0E0E0;
      pointer-events: none;
    }
    &__list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 12px;
      height: 32px;
      cursor: pointer;
    }
    &__list-element {
      width: 32px;
      height: 3px;
      background-color: #E0E0E0;
      pointer-events: none;
    }
    
    &.show {
      display: flex;
    }
    
    &.list &__list {
      pointer-events: none;
    }
    &.list &__list-element {
      background-color: #000;
    }
    &.grid &__grid {
      pointer-events: none;
    }
    &.grid &__grid-element {
      background-color: #000;
    }
    
  }

</style>
