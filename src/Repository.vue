<template>
  <div class="result">
    <div class="result-wrapper">
      <a :href=item.link class="result__title">{{item.title}}</a>
      <p class="result__description">{{item.description}}</p>
      
      <div class="result__keywords">
        
        <div v-for="(keyword, index) of item.keywords" class="result__key" :key=index>{{keyword}}</div>
        
      
      </div>
      <button :class="{btn: true, 'at-list': item.addedToList}" @click="$emit('addRepoToList', item)" >{{item.addedToList ? 'Remove from list' : 'Add to list'}}</button>
    </div>
    <p class="result__stars"><img class="result__star-img"
                                      src=./assets/star.svg alt=""/> <span
      class="result__total-stars">{{item.stars}}</span></p>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {
      
      }
    },
    methods: {
      removeRepo(){
      
      }
    }
  }
</script>

<style lang="scss">
  .result {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid grey;
    
    &__title {
      margin-top: 0;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      font-family: Arial, sans-serif;
      text-decoration: none;
      color: #0366D6;
    }
    
    &__keywords {
      display: flex;
      padding: 10px 0 25px;
      
    }
    
    &__description {
      font-size: 14.5px;
      line-height: 17px;
      font-family: Arial, sans-serif;
    }
    
    &__key {
      margin-right: 10px;
      padding: 10px;
      border-radius: 15px;
      background: #F1F8FE;
      font-family: Arial, sans-serif;
      font-size: 12px;
      line-height: 14px;
    }
    
    &__stars {
      display: flex;
      align-items: flex-start;
      font-size: 18px;
      line-height: 21px;
      font-family: Arial, sans-serif;
      color: #3C4146;
    }
    
    &__star-img {
      margin-right: 10px;
      width: 25px;
      height: 25px;
    }
    
    &__total-stars {
      padding-top: 3px;
    }
  }
  
  .search-results.grid .result {
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding: 20px 30px;
    
    box-sizing: border-box;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    
    .result {
      &__stars {
        order: -1;
        align-self: flex-end;
      }
    }
  }
  .btn {
    width: 160px;
    &.at-list {
      background-color: #EB5757;
    }
  }

</style>
