<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <div class="header-wrapper">
          <div class="logo">
            <div class="logo-wrapper">
              <img src="./assets/logo.png" alt="Logo">
            </div>
            <div class="logo-text">
              <div class="logo-text__title">GitHub</div>
              <div class="logo-text__subtitle">search</div>
            </div>
          </div>
          <nav class="nav">
            <router-link class="nav__link" to="/search">Search</router-link>
            <router-link class="nav__link" to="/list">My list</router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="github-app">
      <div class="wrapper">
        <router-view
        :repositories="repositories"
        :settings="settings"
        :list="list"
        v-on:toggleGrid="toggleGrid"
        v-on:searchRepositories="searchRepositories"
        v-on:addRepoToList="addRepoToList"
        ></router-view>
      </div>
      <div class="bottom">
        <span class="bottom__copyright">Copyright &copy; 2019</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        settings: {
          showGrid: false,
          showNotFound: false
        },
        repositories: [],
        list: []
      }
    },
    methods: {
      async searchRepositories(settings) {
        const repositories = await this.axios.get(`https://api.github.com/search/repositories?q=${settings.search}+language:${settings.lang}`,
          {
            headers: {'Accept': 'application/vnd.github.mercy-preview+json'}
          });
        this.repositories = repositories.data.items.map(repository => {
          return {
            id: repository.id,
            title: repository.full_name,
            description: repository.description,
            stars: repository.stargazers_count,
            link: repository.html_url,
            addedToList: false,
            keywords: repository.topics
          }
        });
      },
      addRepoToList(item){
        if(!item.addedToList) {
          this.list.push(item);
          this.repositories.map(repo => {
            if (repo.id === item.id) {
              repo.addedToList = !repo.addedToList;
            }
            return repo;
          });
        } else {
          const list = this.list.slice();
          this.list = list.filter(repo => {
            return repo.id !== item.id;
          });
          this.repositories.map(repo => {
            if (repo.id === item.id) {
              repo.addedToList = !repo.addedToList;
            }
            return repo;
          });
        }
      },
      toggleGrid(state) {
        this.settings.showGrid = state;
      },
    }
  }
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .wrapper {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1000px;
    width: 100%;
  }
  
  .btn {
    width: 130px;
    height: 45px;
    background-color: #0366D6;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    color: #fff;
    
    &_red {
      background-color: #EB5757;
    }
  }
  
  .github-app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 60px);
    
    .wrapper {
      flex: 1 0 auto;
    }
  }
  
  .bottom {
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #3C4146;
    font-family: Arial, sans-serif;
    color: #fff;
  }
  
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #3C4146;
  }
  
  .header-wrapper {
    display: flex;
    justify-content: space-between;
  }
  
  .logo-wrapper {
    margin-right: 15px;
    max-width: 40px;
  }
  
  .logo {
    display: flex;
    width: 100%;
  }
  
  .logo-text {
    font-family: Arial, sans-serif;
    
    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #FFF;
    }
    
    &__subtitle {
      font-size: 14px;
      line-height: 16px;
      color: #B3BCC7;
    }
  }
  
  .nav {
    display: flex;
    align-items: center;
    
    &__link {
      margin-left: 20px;
      font-family: Arial, sans-serif;
      white-space: nowrap;
      text-decoration: none;
      color: #E0E0E0;
    }
    
    &__link.active {
      font-weight: bold;
      color: #fff;
    }
  }


</style>
