<template>
  <div :class="['page-dropdown']">
    <h3>anchor-input</h3>
    <div :class="['web-intro']">用于表单中用户自定义输入，可以配置输入范围限制</div>

    <h5>基本用法</h5>
    <anchor-row class="web-wrapper">
      <anchor-col span="24">
        <h6>总栅格数: 24</h6>
        <anchor-row>
          <anchor-col span="24" class="page-col">span = 24 (100%)</anchor-col>
        </anchor-row>
        <h6 style="margin-top: 15px">总栅格数: 8/16</h6>
        <anchor-row>
          <anchor-col span="8" class="page-col">span = 8</anchor-col>
          <anchor-col span="16" class="page-col col-2">span = 16</anchor-col>
        </anchor-row>
        <h6 style="margin-top: 15px">总栅格数: 6/12/6</h6>
        <anchor-row>
          <anchor-col span="6" class="page-col">span = 6</anchor-col>
          <anchor-col span="12" class="page-col col-2">span = 12</anchor-col>
          <anchor-col span="6" class="page-col">span = 6</anchor-col>
        </anchor-row>
      </anchor-col>
    </anchor-row>

    <h5>设置偏移量</h5>
    <anchor-row class="web-wrapper">
      <anchor-col span="24">
        <anchor-row>
          <anchor-col span="6" offset="3" class="page-col">span = 6, offset = 3</anchor-col>
          <anchor-col span="6" offset="6" class="page-col col-2">span = 6, offset = 6</anchor-col>
        </anchor-row>
      </anchor-col>
    </anchor-row>

    <h5>开启 flex 模式</h5>
    <anchor-row class="web-wrapper">
      <anchor-col span="24">
        <h6>justify-content: space-between</h6>
        <anchor-row mode="flex" justifyContent="space-between">
          <anchor-col span="6" class="page-col">span = 6</anchor-col>
          <anchor-col span="4" class="page-col col-2">span = 4</anchor-col>
          <anchor-col span="6" class="page-col">span = 6</anchor-col>
          <anchor-col span="3" class="page-col col-2">span = 3</anchor-col>
        </anchor-row>
      </anchor-col>
    </anchor-row>

    <h5>Document</h5>
    <anchor-row>
      <anchor-col span="24">
        <anchor-table :hasCheckbox="false" :theadData="TheadData" :listData="listData">
          <tbody>
          <tr v-for="(item, key) in listData">
            <td v-for="{id} in TheadData">{{item[id]}}</td>
          </tr>
          </tbody>
        </anchor-table>
      </anchor-col>
    </anchor-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        listData: [
          {param: 'mode', type: 'string', desc: '布局模式', default: 'float', range: 'float/flex', necessary: '否', remark: '默认为兼容性高的 float 布局，可开启 flex 模式'},
          {param: 'justifyContent', type: 'string', desc: 'flex 模式下的属性', default: '无', range: '与CSS3属性 justify-content 一致', necessary: '否', remark: 'flex 模式下有效'},
          {param: 'alignItems', type: 'string', desc: 'flex 模式下的属性', default: '无', range: '与CSS3属性 align-items 一致', necessary: '否', remark: 'flex 模式下有效'},
        ]
      }
    },

    computed: {
      ...mapGetters('table',['TheadData']),
    },
  }
</script>

<style lang="scss">
  @import "~scss/variables";

  .page-col {
    text-align: center;
    color: #ffffff;
    background-color: $color-tips;
    &.col-2 {
      background-color: $color-base;
    }
  }
</style>