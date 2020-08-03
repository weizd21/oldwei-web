
<template>
  <div id="main">
    <h1>{{pageName}}</h1>

    <br>

    <h2>{{memory}}</h2>


  </div>
</template>


<script>
  export default {

    data(){
      return {
        pageName: "device-info设备指标监控",
        memory: 0
      }
    },
    mounted() {
      this.initWebSocket();
    },
    methods: {

      //初始化websocket
      initWebSocket(){
        const wsuri = "ws://127.0.0.1:8017/device-info?token=weizd" ;
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketOnMessage;
        this.websock.onopen = this.websocketOnOpen;
        this.websock.onerror = this.websocketOnError;
        this.websock.onclose = this.websocketClose;
      },
      websocketOnOpen(){ //连接建立之后执行send方法发送数据
        this.$message("连接成功");
        this.websocketSend(JSON.stringify({name:'wwwww'}));
      },
      websocketOnError(){//连接建立失败重连
        // this.initWebSocket();
      },
      websocketOnMessage(e){ //数据接收
        console.log(e);
        let res = JSON.parse(e.data);
        this.memory = res.memInfo.available;

      },
      websocketSend(data){//数据发送
        this.websock.send(data);
      },
      websocketClose(e){  //关闭
        console.log('断开连接',e);
      }




    }

  }
</script>
