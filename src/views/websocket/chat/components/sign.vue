<!-- 登录或者注册用户信息-->
<template>
  <el-form ref="user" :model="user" label-width="80px">
    <el-form-item label="用户账号">
      <el-input v-model="user.userCode"></el-input>
    </el-form-item>
    <el-form-item label="用户名称">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="info" @click="register">注册</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

  import { registerUser} from "../../../../api/user";

  export default {
    data() {
      return {
        user: {
          userCode: '',
          username: ''
        }
      }
    },
    methods: {
      login() {
        this.$emit("toLogin",this.user);
      },
      register(){
        let user = this.user;
        if(user.userCode === '' || user.username === ''){
          this.$notify({
            type: 'warning',
            message: '请输入用户账号和用户名称'
          });
          return;
        }
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
      }
    }
  }
</script>



