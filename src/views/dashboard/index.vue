<template>
  <div>
    <table class="table text-center table-hover">
      <thead>
        <tr>
          <th>序号</th>
          <th>APP名称</th>
          <th>版本号</th>
          <th>状态</th>
          <th>时间</th>
          <th>配置（包）</th>
          <th>App包</th>
        </tr>
        <tr v-if="!isLoading&&!data.length">
          <td colspan="6" class="no-data">无数据</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="item.uuid">
          <td>{{index + 1}}</td>
          <td>{{item.username}}</td>
          <td>{{item.version}}</td>
          <td>{{item.status}}</td>
          <td>{{item.created}}</td>
          <td>{{item.organization}}</td>
          <td>{{item.remark}}</td>
        </tr>
      </tbody>
    </table>

    <el-pagination
      style="float:right"
      @current-change="onChangePage"
      :current-page.sync="page"
      :page-size="size"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>

  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      isLoading: false,
      page: 1,
      size: 15,
      total: 0
    }
  },
  methods: {
    fetch () {
      this.isLoading = true
      this.$http.get(`v1/build-configs`, {
        params: {
          page: this.page,
          size: this.size
        }
      }).then(({ data }) => {
        if (data.code === 200) {
          this.data = data.data.content
          this.total = data.data.totalElements
        } else {
          this.$notify.error({
            title: '错误',
            message: data.msg || '数据列表请求错误'
          })
          this.data = []
          this.total = 0
        }
        this.isLoading = false
      }, () => {
        this.$notify.error({
          title: '错误',
          message: '数据列表请求错误'
        })
        this.data = []
        this.total = 0
        this.isLoading = false
      })
    },
    onChangePage (page) {
      this.page = page
      this.fetch()
    }
  },
  created () {
    this.fetch()
  }
}
</script>