<template>
  <nice-title title="Rank of This Week" />
  <result-form type="all" item="" />
</template>

<script>
import NiceTitle from '../sub/NiceTitle.vue'
import ResultForm from '../sub/ResultForm.vue'

export default {
  name: 'RankView',
  components: {
    NiceTitle,
    ResultForm,
  },
  data() {
    return {
      scores: {
        // 从后台获取，此处暂时给出一些示例数据
        '333': [
          {name: '杨荻', time: [14.36, 13.25, 16.39, 14.66, 13.80]},
          {name: 'LiFePt', time: [12.45, 13.66, 11.97, 8.60, 12.66]},
          {name: '孟一凡', time: [122.45, 13.66, 11.97, 8.60, 12.66]},
          {name: '李垚桦', time: [12.45, 14.66, 1.97, 8.60, 12.66]},
          {name: '朱宏宇', time: [12.45, 13.66, 11.97, 8.60, 13.66]},
          {name: '张鹤洋', time: [12.45, 13.66, 11.97, 8.60, 12.66]}
        ],
        '444': [
          {name: '李垚桦', time: [12.45, 14.66, 1.97, 8.60, 12.66]},
          {name: '朱宏宇', time: [12.45, 13.66, 11.97, 8.60, 13.66]},
        ]
      }
    }
  },
  provide(){
    return {
      scores: this.scores
    }
  }
}
</script>
