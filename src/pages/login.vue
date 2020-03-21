<template>
  <div class="login">
    <el-form
      class="login_form"
      ref="AccountForm"
      :model="account"
      :rules="loginRules"
      label-position="left"
    >
      <h3>用户登陆</h3>
      <el-form-item prop="username">
        <el-input v-model="account.username" type="text" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
      <el-form-item>
        <el-form-item>
          <el-button @click.native.prevent="handleLogin" :loading="logining" type="primary">登陆</el-button>
          <el-button type="primary" class="resetBtn" @click.native.prevent="reset">重置</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Login } from "../http";
export default {
  name: 'login',
  data () {
    return {
      // 表单信息
      account: {
        username: '',
        password: ''
      },
      // 表单校验
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      checked: true,
      logining: false
    }
  },
  created () { },
  mounted () { },
  methods: {
    // 登陆
    handleLogin () {
      this.$refs.AccountForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            username: this.account.username,
            password: this.account.password
          }
          Login(loginParams).then(res => {
            console.log(res);
            this.logining = false;
            let { code, msg, user } = res.data;
            if (code === 200) {
              this.$message({
                type: 'success',
                message: msg
              });
              this.$store.dispatch('Login', JSON.stringify(user))
              this.$router.push({ path: '/home' })
            } else {
              this.$message({
                type: 'error',
                message: msg,
              });
            }
          }).catch(err => {
            console.log(err);
          });
        } else {
          console.log('error submit!');
          return false;
        }
      })
    },
    // 重置
    reset () {
      this.$refs.AccountForm.resetFields()
    },
  },
}
</script>
<style lang="scss" scoped>
.login_form {
  width: 350px;
  margin-left: 35%;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 5px;
  h3 {
    text-align: center;
    margin-bottom: 14px;
  }
  .el-button {
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
  }
}
</style>
