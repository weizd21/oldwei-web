<script>
// import { actions } from '../store';

export default {
  vuex: {
    // actions: actions,
    getters: {
      user: ({ user }) => user,
      filterKey: ({ filterKey }) => filterKey
    }
  },
  methods: {
    onKeyup(e) {
      // this.search(e.target.value);
    }
  }
}
</script>

<template>
  <div class="card">
    <header>
      <img class="avatar" width="40" height="40" alt="user.name" src="https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb">
      <p class="name">用户名</p>
    </header>
    <footer>
      <input class="search" type="text" placeholder="search user...">
    </footer>

  </div>
</template>

<style scoped lang="less">
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;

    footer {
        margin-top: 10px;
    }

    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
}
</style>
