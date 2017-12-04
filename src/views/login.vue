<template>
  <v-box>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="记录我" prop="remember">
        <el-switch v-model="ruleForm.remember"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm')" :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </v-box>
</template>

<script>
import VBox from '@/components/AuthBox.vue'
export default {
  components: {
    VBox: VBox
  },
  data () {
    return {
      isLoading: false,
      ruleForm: {
        username: 'SYSADMIN',
        password: 'pdmi@123',
        remember: false
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 4, message: '密码长度不能小于4位', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.request()
        }
      })
    },
    // 登录请求发送
    request () {
      this.isLoading = true
      this.$http.post('/auth/token', {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      }).then(res => {
        var account = res.data
        this.$store.commit('auth/login', account.token)
        this.$store.commit('account/save', account)
        this.$store.commit('auth/remember', account)
        this.$notify.success('登录成功!')
        this.isLoading = false
        setTimeout(() => this.$router.push('/dashboard'), 500)
      }, err => {
        this.isLoading = false
        if (err && err.data) this.$notify.error(err.data.message)
        else this.$notify.error('请求错误！')
      })
    }
  }
}
</script>

<style>

</style>
