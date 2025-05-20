<template>
  <div class="ms-date-range">
    <el-date-picker ref="dateStartRef" class="ms-date-picker start" :style="dateRangePickerStyle" popper-class="ms-date-picker-popper" v-model="dateStart" @change="dateChange" @focus="getPickerStart" :type="type" :format="format" placement="bottom-start" :picker-options="pickerOptionsStart" :placeholder="placeholderStart" :clearable="clearable" :disabled="disabled" :editable="false"></el-date-picker>
    <div class="ms-date-range-line"></div>
    <el-date-picker ref="dateEndRef" class="ms-date-picker end" :style="dateRangePickerStyle" popper-class="ms-date-picker-popper" v-model="dateEnd" @change="dateChange" @focus="getPickerStart" :type="type" :format="format" placement="bottom-start" :picker-options="pickerOptionsEnd" :placeholder="placeholderEnd" :clearable="clearable" :disabled="disabled" :editable="false"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'MsDateRange',
  props: {
    innerWidth: { type: [String, Number], required: false, default: '120' },
    placeholderStart: { type: String, required: false, default: '' },
    placeholderEnd: { type: String, required: false, default: '' },
    clearable: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false, default: false },
    limitDateNow: { type: Boolean, required: false, default: true },
    type: { type: String, required: false, default: 'date' },
    ifSeconds: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      dateStart: undefined,
      dateEnd: undefined,
      ifStart: true
    }
  },
  created() {},
  mounted() {
    this.$refs.dateStartRef.popperOptions.boundariesElement = document.querySelector('#app')
    this.$refs.dateEndRef.popperOptions.boundariesElement = document.querySelector('#app')
  },
  computed: {
    dateRangePickerStyle() {
      return `width: ${this.innerWidth}${this.innerWidth.toString().indexOf('%') === -1 ? 'px' : ''} !important;`
    },
    pickerOptionsStart() {
      const disabledDateObj = this.limitDateNow ? this.$msValidate.noBigDateNoOverToday(this.$data, 'dateEnd') : this.$msValidate.noBigDate(this.$data, 'dateEnd')
      if (this.type === 'date') return disabledDateObj
      return { ...disabledDateObj, ...this.setShortcuts() }
    },
    pickerOptionsEnd() {
      const disabledDateObj = this.limitDateNow ? this.$msValidate.noSmallDateNoOverToday(this.$data, 'dateStart', true) : this.$msValidate.noSmallDate(this.$data, 'dateStart', true)
      if (this.type === 'date') return disabledDateObj
      return { ...disabledDateObj, ...this.setShortcuts() }
    },
    format() {
      return this.type === 'datetime' ? (this.ifSeconds ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd HH:mm') : 'yyyy-MM-dd'
    }
  },
  methods: {
    setShortcuts() {
      const that = this
      return {
        shortcuts: [that.setShortcut('全天'), that.setShortcut('上午'), that.setShortcut('下午'), that.setShortcut('今天')]
      }
    },
    setShortcut(type) {
      const that = this
      return {
        text: type,
        onClick(picker) {
          let dateStart = new Date()
          let dateEnd = new Date()
          if (that.dateStart) dateStart = new Date(that.dateStart)
          if (that.dateEnd) dateEnd = new Date(that.dateEnd)
          if (type === '全天') return that.setAllDay(picker, dateStart, dateEnd)
          if (type === '上午') return that.setMorning(picker, dateStart, dateEnd)
          if (type === '下午') return that.setAfternoon(picker, dateStart, dateEnd)
          if (type === '今天') return that.setTaday(picker, dateStart, dateEnd)
        }
      }
    },
    setTaday(picker, dateStart, dateEnd) {
      const today = new Date()
      if (this.ifStart) {
        picker.$emit('pick', new Date(today.setHours(0, 0, 0)))
        this.dateEnd = new Date(today.setHours(23, 59, 59))
      } else {
        picker.$emit('pick', new Date(today.setHours(23, 59, 59)))
        this.dateStart = new Date(today.setHours(0, 0, 0))
      }
    },
    setAllDay(picker, dateStart, dateEnd) {
      if (this.ifStart) {
        picker.$emit('pick', new Date(dateStart.setHours(0, 0, 0)))
        this.dateEnd = new Date(dateEnd.setHours(23, 59, 59))
      } else {
        picker.$emit('pick', new Date(dateEnd.setHours(23, 59, 59)))
        this.dateStart = new Date(dateStart.setHours(0, 0, 0))
      }
    },
    setMorning(picker, dateStart, dateEnd) {
      if (this.ifStart) {
        picker.$emit('pick', new Date(dateStart.setHours(0, 0, 0)))
        this.dateEnd = new Date(dateEnd.setHours(11, 59, 59))
      } else {
        picker.$emit('pick', new Date(dateEnd.setHours(11, 59, 59)))
        this.dateStart = new Date(dateStart.setHours(0, 0, 0))
      }
    },
    setAfternoon(picker, dateStart, dateEnd) {
      if (this.ifStart) {
        picker.$emit('pick', new Date(dateStart.setHours(12, 0, 0)))
        this.dateEnd = new Date(dateEnd.setHours(23, 59, 59))
      } else {
        picker.$emit('pick', new Date(dateEnd.setHours(23, 59, 59)))
        this.dateStart = new Date(dateStart.setHours(12, 0, 0))
      }
    },
    dateChange() {
      this.$emit('eventDateChange')
    },
    setDate(dateStart, dateEnd) {
      this.dateStart = dateStart
      this.dateEnd = dateEnd
    },
    getDateStart() {
      return this.$msSystem.formatDate(this.dateStart, this.type === 'datetime' ? (this.ifSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm') : 'YYYY-MM-DD')
    },
    getDateEnd() {
      return this.$msSystem.formatDate(this.dateEnd, this.type === 'datetime' ? (this.ifSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm') : 'YYYY-MM-DD')
    },
    getPickerStart(picker) {
      if (picker.$el.className.includes('start')) return (this.ifStart = true)
      this.ifStart = false
    }
  }
}
</script>

<style lang="less" scoped></style>
<style>
.el-picker-panel__footer .el-button--text.el-picker-panel__link-btn {
  display: none;
}
</style>
