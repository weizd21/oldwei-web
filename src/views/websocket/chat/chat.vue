<script>
// import { actions } from './store';

import Card from './components/card'
import List from './components/list';
import Msg from './components/msg';
import Message from './components/message';
import Sign from './components/sign'

// 接收数据的类型 resType
const MSG_ALL = "msg_all";

const MSG_SINGLE = "msg_single";

const MSG_GROUP = "msg_group";

const INFO_USER = "info_user";

const INFO_GROUP = "info_group";



// 发送数据的类型
const JOIN_GROUP = "enter_group";

const LEAVE_GROUP = "leave_group";

const GROUP_MESSAGE = "group_message";

const SINGLE_MESSAGE = "single_message";

let sessionMsg = new Map();

import { getUserByUserCode, registerUser } from "@/api/user";

export default {
  components: { Card, List, Msg, Message, Sign},
  vuex: {
    // actions: actions
  },
  data(){
    return {
        user:{
          id: "1",
          username: "魏正迪",
          userCode: "weizd1",
          img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb"
        },
        loginStatus:false,
        img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb" ,
        sessionInfo: [
          {
            id: '1',
            name: '用户1',
            type: '用户操作',
            img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb"
          },
          {
            id: '2',
            name: '用户2',
            type: '用户操作',
            img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb"
          },
          {
            id: '3',
            name: '用户3',
            type: '用户操作',
            img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb"
          },
          {
            id: '4',
            name: '用户4',
            type: '用户操作',
            img: "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=902229019,2472101033&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=93f1bd18375537950a8fe0b67d0206cb"
          }

        ],
        chatData:{
          fromName:'',
          fromId:'',
          toId:'',
          operate:'',
          msg:''
        },
        message: {
          id: '122',
          fromId: '1243068283708526593',
          fromName: '魏正迪',
          fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
          toId: '2',
          msg: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
          date: new Date()
        },
        messages: [
          {
            id: '1',
            fromId: '1243068283708526593',
            fromName: '魏正迪',
            fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
            toId: '2',
            msg: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
            date: new Date()
          }
        ],
        sessionMsg: {
          "1243068283708526593": [
            {
              id: '1',
              fromId: '1243068283708526593',
              fromName: '魏正迪',
              fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
              toId: '2',
              msg: 'Hello',
              date: '2020-04-03 14:30:30'
            },
            {
              id: '2',
              fromId: '12430682837085265930',
              fromName: '魏正迪2',
              fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
              toId: '2',
              msg: 'Hello a',
              date: '2020-04-03 14:30:30'
            }

          ]
        },
        msgMap: new Map()

    }
  },
  methods: {
    changeCurrentId(message){
      this.chatData.toId = message.id;
      this.chatData.operate = message.type;

      console.log(this.sessionMsg['1243068283708526593']);

      console.log(this.messages);
      this.messages = this.sessionMsg['1243068283708526593'];
      console.log(this.messages);
      // this.sessionMsg['1243068283708526593'].add(this.messages);


      this.msgMap.set('1243068283708526593',[
        {
          id: '1',
          fromId: '1243068283708526593',
          fromName: '魏正迪',
          fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
          toId: '2',
          msg: 'Hello',
          date: '2020-04-03 14:30:30'
        },
        {
          id: '2',
          fromId: '12430682837085265930',
          fromName: '魏正迪2',
          fromImg: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
          toId: '2',
          msg: 'Hello a',
          date: '2020-04-03 14:30:30'
        }

      ]);

      console.log(this.msgMap)
      let msgSet = new Set();
      let old = this.msgMap.get('1243068283708526593');
      old.add(this.message);
      console.log(this.msgMap.get('1243068283708526593'));


    },
    register(){
      let user = this.user;
      registerUser(user)
        .then((data) => {
          console.log(data);
          if(data.code == 200){
            this.user = data.data;
            this.$notify({
              type: 'success',
              message: "【"+this.user.username+"】注册成功"
            });
          }else{
            this.$notify({
              type: 'warning',
              message: data.msg
            });
          }
        });
    },
    toLogin(user){
      this.user.userCode = user.userCode;
      this.user.username = user.username;
      this.login();
    },
    login(){
      let userCode = this.user.userCode;
      getUserByUserCode(userCode).then(data => {
        console.log(data);
        if(data.code == 200){
          if(data.data != null){
            this.user = data.data;
            this.user.img = this.img;

            this.chatData.fromId = data.data.id;
            this.chatData.fromName = data.data.username;

            this.initWebSocket();
            this.loginStatus = true;
            return;
          }
        }
        this.$notify({
          message: "账号["+userCode+"]不存在",
          type: 'warning'
        })
      })
    },
    logout(){
      this.websock.close();
      this.loginStatus = false;
      this.userGroupInfo = [];
      this.msgContainer = '';

    },
    sendMessage(message){
      this.chatData.msg = message;
      this.websocketSend(JSON.stringify(this.chatData));
    },
    //初始化websocket
    initWebSocket(){
      let userId  = this.user.id;
      if(userId == '' || userId == null){
        return;
      }
      const wsuri = "ws://127.0.0.1:8008/chat?token="+this.user.id ;
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketOnMessage;
      this.websock.onopen = this.websocketOnOpen;
      this.websock.onerror = this.websocketOnError;
      this.websock.onclose = this.websocketClose;
      this.$message ("初始化成功");
    },
    websocketOnOpen(){ //连接建立之后执行send方法发送数据

    },
    websocketOnError(){//连接建立失败重连
      this.initWebSocket();
    },
    websocketOnMessage(e){ //数据接收
      console.log(e);
      let resJson = JSON.parse(e.data);
      if(resJson.resType == MSG_ALL ){
        this.$message(resJson.data);
      }else if(resJson.resType == INFO_USER){
        this.userGroupInfo = resJson.data;
      }else if(resJson.resType == INFO_GROUP){

      }else if(resJson.resType == MSG_GROUP){

      }else if(resJson.resType == MSG_SINGLE){
        let old = this.msgContainer;
        this.msgContainer = "私聊 ===>"+ resJson.data +"\n" + old;
      }else{
        this.notify("数据格式错误")
      }

    },
    websocketSend(data){//数据发送
      this.websock.send(data);
    },
    websocketClose(e){  //关闭
      console.log('断开连接',e);
    }
  },
  mounted() {
    // this.login();
  }

}
</script>

<template>
  <div id="app">
    <div class="sidebar" v-if="loginStatus">
      <card :user="user"/>
      <list :sessionInfo="sessionInfo" :currentId="chatData.toId" @currentIdChange="changeCurrentId"/>
    </div>
    <div class="main" v-if="loginStatus">
        <message :messages="messages" :user="user"></message>
        <msg @messageSend="sendMessage"></msg>
    </div>

    <div class="sign" v-if="loginStatus === false">
        <sign @toLogin="toLogin"></sign>
    </div>

  </div>
</template>





<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
