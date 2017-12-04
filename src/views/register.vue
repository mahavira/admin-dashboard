<template>
  <v-box>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordConfirm">
        <el-input v-model="ruleForm.password"></el-input>
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
        passwordConfirm: ''
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
    }
  }
}
</script>

<style>

</style>
