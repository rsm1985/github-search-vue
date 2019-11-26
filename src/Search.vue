<template>

  <div>
    <div class="search-form">
      <div class="select">
        <select>
          <option value="Repositories" selected>Repositories</option>
        </select>
        <span class="select__line"></span>
      </div>
      <div class="select">
        <select v-model="lang">
          <option value="Javascript" selected>Javascript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="PHP">PHP</option>
          <option value="Ruby">Ruby</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="C#">C#</option>
          <option value="Java">Java</option>
          <option value="Go">Go</option>
          <option value="Haskel">Haskel</option>
        </select>
        <span class="select__line"></span>
      </div>
      <div class="form-element">
        <input type="text" class="form-element__input" v-model="search">
        <span :class="{'form-element__title': true, top: search.length}">Type here for search</span>
        <div class="form-element__line"></div>
      </div>

      <button :class="{'search-btn': true, active: !!search.length}" v-on:click="searchRepos">Search</button>
    </div>
    <div class="search" v-if="repositories.length">
      <Panel @updateParent="toggleGrid"
             :length="repositories.length"
             :showGrid="settings.showGrid"/>
      <div :class="{'search-results': true, grid: this.settings.showGrid}">
        <Repository v-if="repositories.length" v-for="item of repositories" :item="item" :key="item.id" @addRepoToList="$emit('addRepoToList', item)"/>
      </div>
    </div>
    <NotFound v-if="this.settings.showNotFound" />
  </div>
</template>
<script>
  export default {
    props: ['repositories', 'settings'],
    data() {
      return {
        lang: 'Javascript',
        search: '',
        showGrid: this.settings.showGrid,
      }
    },
    methods: {
      toggleGrid(state) {
        
        this.$emit('toggleGrid', state);
      },
      searchRepos() {
        this.$emit('searchRepositories', {lang: this.lang, search: this.search});
      }
      
    }
  }

</script>
<style lang="scss">
  .search-form {
    display: flex;
    margin-top: 35px;
  }

  .form-element {
    position: relative;
    max-width: 410px;
    width: 100%;

    &__title {
      position: absolute;
      top: 10px;
      left: 0;
      pointer-events: none;
      font-size: 15px;
      font-family: Arial, sans-serif;
      transition: .5s ease;
    }

    &__input {
      width: 335px;
      height: 37px;
      font-size: 15px;
      outline: none;
      border: none;
    }

    &__line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 340px;
      height: 2px;
      background-color: #0366D6;
      transition: .5s ease;
    }

    &__input:focus ~ &__title,
    &__input:active ~ &__title,
    &__title.top {
      top: -10px;
      font-size: 12px;
      color: #0366D6;
    }

  }

  .search-results.grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 850px;

    .result {
      width: 410px;
    }

  }

  .grid {
    padding-bottom: 30px;
  }

  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    min-height: 80vh;
    max-width: 450px;

    &__logo {
      width: 190px;
      height: 190px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      font-family: Arial, sans-serif;
    }

    &__title {
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      font-weight: bold;
      color: #0366D6;
    }

    &__subtitle {
      font-size: 24px;
      line-height: 24px;
      text-align: center;
    }

  }
  .btn,
  .search-btn {
    width: 160px;
    height: 45px;
    background-color: #0366D6;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    color: #fff;

    &.true {
      background-color: #EB5757;
    }
  }
  .search-btn {
    pointer-events: none;
    background-color: grey;
  }
  .search-btn.active {
    pointer-events: all;
    background-color: #0366D6;
  }

  select {
    flex: 1;
    padding: 0 .5em;
    color: #000;
    cursor: pointer;
    font-size: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    background-color: #fff;
    border: 0 !important;
    background-image: none;
  }

  /* Remove IE arrow */
  select::-ms-expand {
    display: none;
  }

  /* Custom Select */
  .select {
    position: relative;
    display: flex;
    margin-right: 25px;
    width: 205px;
    height: 45px;
    line-height: 3;
    overflow: hidden;

    &__line {
      position: absolute;
      bottom: 0;
      left: 7px;
      width: 90%;
      height: 2px;
      background-color: #0366D6;

    }

  }

  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }

  .select:hover::after {
    color: #f39c12;
  }
  
</style>
