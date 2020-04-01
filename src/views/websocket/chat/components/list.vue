<script>
// import { actions } from '../store'

export default {
  vuex: {
    // actions: actions,
    getters: {
      // // 过滤后的会话列表
      // sessions: ({ sessions, filterKey }) => {
      //   const result = sessions.filter(session => session.user.name.includes(filterKey))
      //   return result
      // },
      // // 当前会话index
      // currentId: ({ currentSessionId }) => currentSessionId
    }
  },
  props:['sessionInfo','currentId'],
  methods: {
    selectSession(id,type){
      let res = {
        "id": id,
        "type": type
      }
      this.$emit('currentIdChange',res);
    }
  }
}
</script>

<template>
  <div class="list">
    <ul style="list-style:none;padding-inline-start:0px">
      <li v-for="item in sessionInfo" :key="item" :class="{ active: item.id === currentId }" @click="selectSession(item.id,item.type)">
        <img class="avatar" width="30" height="30" :alt="item.name" :src="item.img">
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
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
    }
}
</style>
