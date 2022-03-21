<template>
<div class="main-wrapper">
  <section class="about-generic-area">
    <div class="container border-top-generic">
      <div class="row">
        <div class="col-md-12">
          <!-- case1: type == 'all' -->
          <div v-if="type=='all'">
            <div class="mt-30" v-for="(item, name, index_outer) in scores" :key="index_outer">
              <div v-if="item.length > 0">
                <h3 class="mb-30">{{ name }}</h3>
                <div class="progress-table-wrap" style="overflow: hidden;">
                  <div class="progress-table">
                    <div class="table-head">
                      <div class="serial">#</div>
                      <div class="username">姓名</div>
                      <div class="time">成绩 1</div>
                      <div class="time">成绩 2</div>
                      <div class="time">成绩 3</div>
                      <div class="time">成绩 4</div>
                      <div class="time">成绩 5</div>
                      <div class="time">单次</div>
                      <div class="time">平均</div>
                      <div class="speed">还原速度可视化</div>
                    </div>
                    <div class="table-row" v-for="(user, index_inner) in item.slice(0,slice_num(name))" :key="index_inner">
                      <div class="serial">{{ index_inner + 1 }}</div>
                      <div class="username">{{ user.name }}</div>
                      <div class="time">{{ user.time[0] }}</div>
                      <div class="time">{{ user.time[1] }}</div>
                      <div class="time">{{ user.time[2] }}</div>
                      <div class="time">{{ user.time[3] }}</div>
                      <div class="time">{{ user.time[4] }}</div>
                      <div class="time best">{{ best(user.time) }}</div>
                      <div class="time avg">{{ average(user.time) }}</div>
                      <div class="speed">
                        <div class="progress">
                          <div class="progress-bar color-1" role="progressbar" :style="{width: get_best_avg_of(name)/average(user.time)*100 + '%' }"></div>
                        </div>
                      </div>
                    </div>
                    <div class="take-part mt-30">
                      <!-- 此处超链接到各个项目的提交页面 -->
                      <router-link :to="'/rank/' + name" class="genric-btn success circle" @click="reload()">立即参加此项目</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- case2: type == 'single' -->
          <div v-else>
            <div v-if="spec_item_scores.length > 0">
              <h3 class="mb-30">{{ item }}</h3>
              <div class="progress-table-wrap" style="overflow: hidden;">
                <div class="progress-table">
                  <div class="table-head">
                    <div class="serial">#</div>
                    <div class="username">姓名</div>
                    <div class="time">成绩 1</div>
                    <div class="time">成绩 2</div>
                    <div class="time">成绩 3</div>
                    <div class="time">成绩 4</div>
                    <div class="time">成绩 5</div>
                    <div class="time">单次</div>
                    <div class="time">平均</div>
                    <div class="speed">还原速度可视化</div>
                  </div>
                  <div class="table-row" v-for="(user, index_inner) in spec_item_scores" :key="index_inner">
                    <div class="serial">{{ index_inner + 1 }}</div>
                    <div class="username">{{ user.name }}</div>
                    <div class="time">{{ user.time[0] }}</div>
                    <div class="time">{{ user.time[1] }}</div>
                    <div class="time">{{ user.time[2] }}</div>
                    <div class="time">{{ user.time[3] }}</div>
                    <div class="time">{{ user.time[4] }}</div>
                    <div class="time best">{{ best(user.time) }}</div>
                    <div class="time avg">{{ average(user.time) }}</div>
                    <div class="speed">
                      <div class="progress">
                        <div class="progress-bar color-1" role="progressbar" :style="{width: get_best_avg_of(item)/average(user.time)*100 + '%' }"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

<script>
export default {
  name: 'ResultForm',
  props: ['type', 'item'],      // type: all/single; item: e.g. 333, 444...
  inject: ['scores', 'reload'],           // 父组件请provide 'scores'
  computed: {
    // 如果是single模式，给出该项目的成绩表
    spec_item_scores(){
      return this.item?this.scores[this.item]:{}
    }
  },
  methods: {
    // 返回all模式下，给定项目希望截取的长度
    slice_num(item){
      return this.scores[item].length>=5?5:this.scores.length
    },
    // 返回一个列表最好的成绩
    best(list){
      return list.reduce((a, b) => Math.min(a, b))
    },
    // 返回一个列表最差成绩
    worst(list){
      return list.reduce((a, b) => Math.max(a, b))
    },
    // 返回一个列表的平均成绩，注意没有考虑三把的项目，今后确定三把的储存形式再改
    average(list){
      var best = this.best(list)
      var best_count = 0            // fix bug: 有成绩相同，可能被重复记作最好/最差，导致平均计算错误，故加入计数器
      var worst = this.worst(list)
      var worst_count = 0
      var avg = 0
      for (let t of list){
        if (t == best && best_count == 0){
          best_count = best_count + 1
          continue
        }
        else if (t == worst && worst_count == 0){
          worst_count = worst_count + 1
          continue
        }
        avg = avg + t
      }
      avg = avg/3
      return avg.toFixed(3)
    },
    // 返回一个项目最好的平均成绩，用于显示可视化速度
    get_best_avg_of(item){
      var all_users_for_this_item = this.scores[item]
      var list = []
      for (let user of all_users_for_this_item){
          list.push(this.average(user.time))
      }
      return list.reduce((a, b) => Math.min(a, b))
    },
},
}
</script>