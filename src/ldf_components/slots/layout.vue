<template>
  <div>
    <p>
      <slot name="header">
        <p>this is header</p>
      </slot>
    </p>

    <p>
      <slot name="body">
        <p>this is body</p>
      </slot>
    </p>

    <p>
      <slot name="footer" :content="footerContent">
        <p>this is footer</p>
      </slot>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        remark: [
          '好好学习，天天向上 ,yeah!',
          '学习永远不晚',
          '学习知识要善于思考,思考,再思考',
          '学习的敌人是自己的满足,要认真学习一点东西,必须从不自满开始',
          '构成我们学习最大障碍的是已知的东西,而不是未知的东西',
          '在今天和明天之间,有一段很长的时间;趁你还有精神的时候,学习迅速办事',
          '三人行必有我师焉；择其善者而从之，其不善者而改之'
        ]
      }
    },
    computed: {
      footerContent() {
        return this.remark[new Date().getDay() - 1] 
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>